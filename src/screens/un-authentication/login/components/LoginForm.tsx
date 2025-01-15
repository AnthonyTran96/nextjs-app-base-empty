'use client';
import { Spin } from 'antd';
import ButtonBase from 'components/button';
import { IconSvgLocal } from 'components/icon-vec-local';
import { TextBase } from 'components/text';
import { AppTextFieldControl } from 'components/text-field';
import Link from 'next/link';
import useLogin from '../hooks/useLogin';

const LoginForm = () => {
  const { t, handleLoginSubmit, loginForm, loading } = useLogin();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors }
  } = loginForm;

  return (
    <form onSubmit={handleSubmit(handleLoginSubmit)}>
      <AppTextFieldControl
        wrapperClassName="mb-16"
        name="username"
        label={t('login_screen:username')}
        placeholder={t('login_screen:enter_username')}
        maxLength={64}
        control={control}
        customError={errors.username?.type === 'too_small' ? null : undefined}
      />

      <AppTextFieldControl
        id="passwordLoginInput"
        wrapperClassName="mb-16"
        name="password"
        label={t('login_screen:password')}
        placeholder={t('login_screen:enter_password')}
        maxLength={64}
        control={control}
        type="password"
        customError={errors.password?.type === 'too_small' ? null : undefined}
      />
      <div className="mb-16 flex flex-row items-center justify-between">
        <Link
          href={'https://www.facebook.com/'}
          target="_blank"
          className="flex cursor-pointer flex-row items-center gap-4"
        >
          <IconSvgLocal name="ICON_QUESTION" height={16} fill="rgb(var(--color-900)" />
          <TextBase
            t18n="login_screen:user_manual"
            classNames="caption1 !text-color-900 !font-normal"
          />
        </Link>
        <Link href={'https://www.facebook.com/'} target="_blank">
          <TextBase t18n="login_screen:forgot_password" classNames="body1 !text-link-500" />
        </Link>
      </div>
      <div className="mb-16 h-[1px] w-full bg-color-200" />
      <ButtonBase
        htmlType="submit"
        disabled={!isValid || loading}
        type="primary"
        customContent={
          loading ? (
            <div className="flex flex-row items-center justify-center">
              <div>{t('login_screen:login')}</div>
              <div className="ml-8">
                <Spin />
              </div>
            </div>
          ) : (
            t('login_screen:login')
          )
        }
        classNames="w-full flex justify-center mb-16"
      />
    </form>
  );
};

export default LoginForm;
