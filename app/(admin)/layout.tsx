'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdmin, AdminProvider } from '@/components/admin/AdminContext';
import AdminLogin from '@/components/admin/AdminLogin';

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAdmin();
  const router = useRouter();

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return <>{children}</>;
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AdminProvider>
  );
}
