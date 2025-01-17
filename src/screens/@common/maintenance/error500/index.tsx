import Button from 'components/button';
import { TextBase } from 'components/text';
import { ROUTES } from 'config/routes';
import Image from 'next/image';
import Link from 'next/link';

const error404 = '/assets/images/maintenance/img-error-500.svg';

const Error500Page = () => {
  return (
    <div className="flex size-full items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div className="mb-16 w-[300px]">
          {/* <Error500 style={{ height: 'auto', width: 'auto' }} /> */}
          <Image
            src={error404}
            width={396}
            height={370}
            alt="error500"
            style={{
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </div>
        <TextBase
          text="Internal Server Error"
          preset="h2"
          classNames="mt-12 px-4 text-center !text-color-800"
        />
        <TextBase
          text="The page you are looking was moved, removed, renamed, or might never exist!"
          preset="caption1"
          classNames="px-4 text-center !text-color-700"
        />
        <Link href={ROUTES.HOME_PAGE} className="mt-12">
          <Button t18n="Back To Home" type="primary" />
        </Link>
      </div>
    </div>
  );
};

export default Error500Page;
