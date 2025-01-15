'use client';

import { selectToken } from '@redux-selector/auth';
import Loader from 'components/loader';
import { ROUTES } from 'config/routes';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// ==============================|| GUEST GUARD ||============================== //

const GuestGuard = () => {
  const router = useRouter();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) {
      router.push(ROUTES.LOGIN);
      return;
    }
    router.push(ROUTES.SAMPLE_PAGE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Loader />;
};

export default GuestGuard;
