# Deployment Guide for Fortex Education

## Prerequisites

- [x] Firebase project set up
- [x] Cloudinary account configured
- [x] All environment variables ready
- [x] GitHub repository created

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Prepare Your Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Fortex Education website"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/fortex-education.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure project:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** .next

### Step 3: Add Environment Variables

In Vercel project settings → Environment Variables, add:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### Step 4: Deploy

Click "Deploy" and wait for build to complete.

### Step 5: Configure Custom Domain (Optional)

1. In Vercel project settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate to be issued

## Option 2: Deploy to Netlify

### Step 1: Build Settings

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy

1. Go to [Netlify](https://netlify.com)
2. Click "Add new site" → "Import existing project"
3. Connect to GitHub
4. Select repository
5. Add environment variables
6. Deploy

## Option 3: Self-Hosted (VPS/Cloud Server)

### Requirements

- Node.js 18+
- PM2 (process manager)
- Nginx (reverse proxy)
- SSL certificate

### Step 1: Server Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx

# Install Certbot for SSL
sudo apt install -y certbot python3-certbot-nginx
```

### Step 2: Deploy Application

```bash
# Clone repository
git clone https://github.com/yourusername/fortex-education.git
cd fortex-education

# Install dependencies
npm install

# Create .env.local file
nano .env.local
# Paste your environment variables

# Build application
npm run build

# Start with PM2
pm2 start npm --name "fortex" -- start
pm2 save
pm2 startup
```

### Step 3: Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/fortex
```

Add configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:

```bash
sudo ln -s /etc/nginx/sites-available/fortex /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 4: SSL Certificate

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Post-Deployment Checklist

### Firebase Configuration

- [ ] Add production domain to Firebase authorized domains
- [ ] Update Firestore security rules for production
- [ ] Enable Firebase App Check
- [ ] Set up Firestore indexes if needed

### Cloudinary Configuration

- [ ] Add production domain to allowed origins
- [ ] Review upload presets
- [ ] Check transformation settings

### Website Testing

- [ ] Test all forms (booking, contact, testimonials)
- [ ] Verify admin dashboard access
- [ ] Test image uploads
- [ ] Check mobile responsiveness
- [ ] Verify SEO meta tags
- [ ] Test social sharing (OG images)

### Performance Optimization

- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Optimize images
- [ ] Enable caching
- [ ] Set up CDN (Cloudflare/Vercel Edge)

### Security

- [ ] Change default admin password
- [ ] Enable HTTPS
- [ ] Set up security headers
- [ ] Configure CORS properly
- [ ] Review Firebase security rules

### Monitoring & Analytics

- [ ] Set up Google Analytics
- [ ] Configure error tracking (Sentry)
- [ ] Set up uptime monitoring
- [ ] Enable Firebase Analytics

### SEO

- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Verify structured data
- [ ] Check robots.txt
- [ ] Test meta descriptions

## Continuous Deployment

### GitHub Actions (Vercel)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID}}
          vercel-project-id: ${{ secrets.PROJECT_ID}}
```

## Rollback Strategy

### Vercel

- Go to project → Deployments
- Find previous working deployment
- Click "..." → "Promote to Production"

### Self-Hosted

```bash
# Stop current version
pm2 stop fortex

# Checkout previous version
git checkout <previous-commit-hash>

# Rebuild and restart
npm run build
pm2 restart fortex
```

## Troubleshooting

### Build Fails

- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Check environment variables
- Review build logs

### 500 Internal Server Error

- Check server logs: `pm2 logs fortex`
- Verify database connections
- Check API credentials
- Review Nginx error logs: `sudo tail -f /var/log/nginx/error.log`

### Images Not Loading

- Verify Cloudinary credentials
- Check CORS settings
- Test image URLs directly

### Forms Not Submitting

- Check Firebase configuration
- Verify Firestore security rules
- Check browser console for errors

## Support

For deployment issues:
- Check deployment platform docs
- Review error logs
- Contact hosting support
- Consult Firebase/Cloudinary docs

## Maintenance

### Regular Tasks

- Monitor server resources
- Check error logs weekly
- Update dependencies monthly
- Backup database regularly
- Review analytics and optimize

### Updates

```bash
# Pull latest changes
git pull origin main

# Install updates
npm install

# Rebuild
npm run build

# Restart
pm2 restart fortex
```

---

**Production URL:** https://your-domain.com  
**Admin Dashboard:** https://your-domain.com/admin  
**API Health:** https://your-domain.com/api/health

Good luck with your deployment! 🚀
