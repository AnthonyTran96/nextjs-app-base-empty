import { zodResolver } from '@hookform/resolvers/zod';
import { LOGIN } from '@redux-action-type/auth';
import { dispatch } from '@redux-common';
import { showToast } from 'components/toast';
import { TYPE_TOAST } from 'components/toast/type';
import { ROUTES } from 'config/routes';
import { LoginParams, LoginResult } from 'model/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { DebugUtils } from 'utils/debug-utils';
import { z } from 'zod';

export default function useLogin() {
  const [t] = useTranslation();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const loginSchema = z.object({
    username: z
      .string()
      .trim()
      .min(1, { message: t('validate:required', { name: t('login_screen:username') }) }),
    password: z
      .string()
      .trim()
      .min(6, {
        message: t('validate:at_least_characters', {
          name: t('login_screen:password'),
          number: '6'
        })
      })
  });

  type LoginForm = z.infer<typeof loginSchema>;

  const loginForm = useForm<LoginForm>({
    mode: 'onTouched',
    defaultValues: { username: '', password: '' },
    resolver: zodResolver(loginSchema)
  });

  const onLoginSuccess = (res: LoginResult) => {
    DebugUtils.logS(res);
    router.push(ROUTES.SAMPLE_PAGE);
  };

  const onLoginFailed = () => {
    showToast({
      type: TYPE_TOAST.ERROR,
      content: t('Đăng nhập thất bại')
    });
    setLoading(false);
  };

  const handleLoginSubmit = (data: LoginForm) => {
    const body: LoginParams = {
      credential: data.username,
      password: data.password
    };
    setLoading(true);
    dispatch({
      type: LOGIN,
      payload: { body, onSuccess: onLoginSuccess, onFailed: onLoginFailed }
    });
  };

  return {
    t,
    handleLoginSubmit,
    loginForm,
    loading
  };
}
