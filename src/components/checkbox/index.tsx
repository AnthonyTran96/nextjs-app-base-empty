import { Checkbox } from 'antd';
import type { CheckboxGroupProps, CheckboxOptionType } from 'antd/es/checkbox/Group';
import AppHelperText from 'components/helper-text';
import { useMemo } from 'react';
import type { Control, FieldError, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';

type CheckboxGroupDirection = 'column' | 'row';

export interface AppCheckboxProps extends Omit<CheckboxGroupProps, 'options'> {
  options: Array<CheckboxOptionType>;
  block?: boolean;
  direction?: CheckboxGroupDirection;
  label?: string;
  labelSuffix?: React.ReactNode;
  caption?: string;
  captionPrefix?: React.ReactNode;
  wrapperClassName?: string;
  error?: FieldError;
}

export interface AppCheckboxControlProps<T extends FieldValues> extends AppCheckboxProps {
  name: Path<T>;
  control: Control<T>;
}

export default function AppCheckbox(props: AppCheckboxProps) {
  const {
    name,
    label,
    labelSuffix,
    caption,
    captionPrefix,
    wrapperClassName,
    error,
    options,
    direction = 'row',
    block = false,
    ...restProps
  } = props;

  const checkBoxStyle = useMemo(() => {
    const classNames = [
      '[&_.ant-checkbox-disabled.ant-checkbox-checked]:bg-secondary-100',
      '[&_.ant-checkbox-disabled.ant-checkbox-checked_.ant-checkbox-inner:after]:border-color-50',
      '[&_.ant-checkbox-disabled.ant-checkbox-checked_.ant-checkbox-inner]:border-secondary-100',
      '[&_.ant-checkbox-disabled.ant-checkbox-checked_.ant-checkbox-inner]:bg-secondary-100'
    ];
    if (direction === 'column') {
      classNames.push('flex-col');
      if (block) {
        classNames.push(...['!w-full', '[&_.ant-checkbox-wrapper_span:nth-child(2)]:!grow']);
      }
    }
    return classNames.join(' ');
  }, [direction, block]);

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
        <Checkbox.Group name={name} options={options} {...restProps} className={checkBoxStyle} />
      </div>
      <AppHelperText caption={caption} captionPrefix={captionPrefix} error={error} />
    </div>
  );
}

export function AppCheckboxControl<T extends FieldValues>(props: AppCheckboxControlProps<T>) {
  const { name, control, ...restProps } = props;

  const {
    field,
    fieldState: { error }
  } = useController({ name, control });

  return <AppCheckbox {...field} {...restProps} error={error} />;
}
