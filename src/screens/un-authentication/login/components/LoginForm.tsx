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
        label={t('text:username')}
        placeholder={t('text:enter_username')}
        maxLength={64}
        control={control}
        customError={errors.username?.type === 'too_small' ? null : undefined}
      />

      <AppTextFieldControl
        id="passwordLoginInput"
        wrapperClassName="mb-16"
        name="password"
        label={t('text:password')}
        placeholder={t('text:enter_password')}
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
            t18n="text:user_manual"
            preset="caption1"
            className="!font-normal !text-color-900"
          />
        </Link>
        <Link href={'https://www.facebook.com/'} target="_blank">
          <TextBase t18n="text:forgot_password" preset="body1" className="!text-link-500" />
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
              <div>{t('text:login')}</div>
              <div className="ml-8">
                <Spin />
              </div>
            </div>
          ) : (
            t('text:login')
          )
        }
        className="mb-16 flex w-full justify-center"
      />
    </form>
  );
};

export default LoginForm;
