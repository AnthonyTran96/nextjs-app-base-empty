import { ReactNode } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AuthLayout;
