'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAdmin } from './AdminContext';
import { FaLock, FaUser } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const { login } = useAdmin();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await login(password);
    if (success) {
      toast.success('Login successful!');
      router.push('/admin/dashboard');
    } else {
      toast.error('Invalid password');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 to-secondary-600 py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <FaLock className="text-3xl text-primary-600" />
          </div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">
            Admin Login
          </h1>
          <p className="text-primary-100">
            Enter your password to access the admin dashboard
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaUser className="inline mr-2 text-primary-600" />
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Enter admin password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary"
            >
              Login to Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
