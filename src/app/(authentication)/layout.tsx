// PROJECT IMPORTS
import AppLayout from 'layout/AppLayout';

// ==============================|| DASHBOARD LAYOUT ||============================== //

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <AuthGuard>
    <AppLayout>{children}</AppLayout>
    // </AuthGuard>
  );
}
