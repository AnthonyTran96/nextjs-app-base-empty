// PROJECT IMPORTS
import DashboardLayout from 'layout/DashboardLayout';

// ==============================|| DASHBOARD LAYOUT ||============================== //

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <AuthGuard>
    <DashboardLayout>{children}</DashboardLayout>
    // </AuthGuard>
  );
}
