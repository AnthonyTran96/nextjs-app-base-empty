import { TextBase } from 'components/text';
import Link from 'next/link';
import { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

const LoginWrapper = ({ children }: Props) => {
  return (
    <div className="flex size-full justify-center bg-secondary-50">
      <div className="mt-[120px] h-fit w-full max-w-[437px] rounded-radius-xl border-weight-l border-color-50 bg-color-50 p-36">
        <div className="mb-20 flex items-center justify-between">
          <TextBase preset="h4" text="Login" />
          <Link href={'https://www.facebook.com/'} target="_blank">
            <TextBase preset="body1" classNames="!text-link-500" text="Don't have an account?" />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default LoginWrapper;
