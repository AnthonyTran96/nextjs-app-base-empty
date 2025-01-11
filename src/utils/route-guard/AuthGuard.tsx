'use client';

import { selectToken } from '@redux-selector/auth';
import { Loader } from 'components';
import { ROUTES } from 'config/routes';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';

// ==============================|| AUTH GUARD ||============================== //

interface GuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: GuardProps) => {
  const router = useRouter();
  const token = useSelector(selectToken);

  // const { data: session, status } = useSession();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res: any = await fetch('/api/auth/protected');
  //     const json = await res?.json();
  //     if (!json?.protected) {
  //       router.push('/login');
  //     }
  //   };
  //   fetchData();

  //   // eslint-disable-next-line
  // }, [session]);

  // if (status == 'loading' || !session?.user) return <Loader />;

  if (!token) {
    router.push(ROUTES.LOGIN);
    return <Loader />;
  }

  return <>{children}</>;
};

export default AuthGuard;
