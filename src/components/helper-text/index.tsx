import type { FieldError } from 'react-hook-form';

export interface IAppHelperTextProps {
  caption?: string | React.ReactNode;
  captionPrefix?: React.ReactNode;
  error?: FieldError | string;
}

export default function AppHelperText({ caption, captionPrefix, error }: IAppHelperTextProps) {
  return (
    (caption || error) && (
      <div className="mt-8 flex flex-row items-center">
        {captionPrefix && (
          <div className={`mr-4 ${error ? 'text-error-500' : 'text-color-600'}`}>
            {captionPrefix}
          </div>
        )}
        <p className={`text-12 leading-16 ${error ? 'text-error-500' : 'text-color-600'}`}>
          {typeof error === 'string' ? error : error?.message || caption}
        </p>
      </div>
    )
  );
}
