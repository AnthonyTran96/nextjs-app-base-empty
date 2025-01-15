'use client';
import type { RadioGroupProps, SpaceProps } from 'antd';
import { Radio, Space } from 'antd';
import AppHelperText from 'components/helper-text';
import type { Control, FieldError, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';

export interface AppRadioProps extends RadioGroupProps {
  options: AppRadioOption[];
  label?: string;
  labelSuffix?: React.ReactNode;
  caption?: string;
  captionPrefix?: React.ReactNode;
  wrapperClassName?: string;
  labelClassName?: string;
  direction?: SpaceProps['direction'];
  error?: FieldError;
}
export interface AppRadioControlProps<T extends FieldValues> extends AppRadioProps {
  name: Path<T>;
  control: Control<T>;
  externalOnChange?: () => void;
  hideError?: boolean;
}

export interface AppRadioOption {
  value: string;
  label: string;
  subTitle?: string;
}

export default function AppRadio(props: AppRadioProps) {
  const {
    name,
    options,
    label,
    labelSuffix,
    caption,
    captionPrefix,
    wrapperClassName,
    labelClassName,
    direction = 'horizontal',
    error,
    ...restProps
  } = props;

  return (
    <div className={`w-full ${wrapperClassName}`}>
      {label && (
        <label
          htmlFor={name}
          className="mb-4 inline-flex flex-row items-center text-14 font-semibold leading-24 text-color-900"
        >
          {label}
          {labelSuffix && <span className="ml-4 text-color-900">{labelSuffix}</span>}
        </label>
      )}
      <div>
        <Radio.Group name={name} {...restProps}>
          <Space direction={direction}>
            {options.map((option) => (
              <Radio key={option.value} value={option.value} className={labelClassName}>
                {option.label}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </div>
      <AppHelperText caption={caption} captionPrefix={captionPrefix} error={error} />
    </div>
  );
}

export function AppRadioControl<T extends FieldValues>({
  name,
  control,
  externalOnChange,
  hideError,
  ...restProps
}: AppRadioControlProps<T>) {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    field: { ref, onChange, ...resField },
    fieldState: { error }
  } = useController({ name, control });
  return (
    <AppRadio
      {...resField}
      {...restProps}
      onChange={(e) => {
        onChange(e.target.value);
        if (externalOnChange) externalOnChange();
      }}
      error={hideError ? undefined : error}
    />
  );
}
