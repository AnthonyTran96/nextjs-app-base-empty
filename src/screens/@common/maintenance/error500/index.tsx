import { TextBase } from 'components/text';
import Button from 'components/button';
import Error500 from 'assets/images/maintenance/img-error-500.svg';
import { ROUTES } from 'config/routes';
import { useRouter } from 'next/navigation';

const Error500Page = () => {
  const route = useRouter();

  return (
    <div className='h-full w-full flex items-center justify-center'>
      <div className='flex flex-col items-center gap-8'>
        <div className='w-[396px] tablet:w-3/4'>
          <Error500 style={{ height: 'auto', width: 'auto' }} />
        </div>
        <TextBase text='Internal Server Error' preset='h2' classNames='mt-12 px-4 text-center' />
        <TextBase
          text='The page you are looking was moved, removed, renamed, or might never exist!'
          preset='caption1'
          classNames='px-4 text-center !text-color-700'
        />
        <Button t18n='Back To Home' type='primary' classNames='mt-12' onClick={() => route.replace(ROUTES.HOME_PAGE)} />
      </div>
    </div>
  );
};

export default Error500Page;
