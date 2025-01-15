// PROJECT IMPORTS

import AuthLayout from 'layout/AuthLayout';

// ==============================|| AUTH LAYOUT ||============================== //

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
