'use client';
import { Input } from 'antd';
import type { TextAreaProps } from 'antd/es/input';
import type { TextAreaRef } from 'antd/es/input/TextArea';
import AppHelperText from 'components/helper-text';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import type { Control, FieldError, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';

export interface AppTakeNoteProps extends TextAreaProps {
  label?: string;
  labelSuffix?: React.ReactNode;
  caption?: string;
  captionPrefix?: React.ReactNode;
  wrapperClassName?: string;
  error?: FieldError;
}

export interface AppTakeNoteControlProps<T extends FieldValues>
  extends Omit<AppTakeNoteProps, 'error'> {
  name: Path<T>;
  control: Control<T>;
}

interface InputRef {
  focus: () => void;
}

const AppTakeNote = forwardRef<InputRef, AppTakeNoteProps>((props, ref) => {
  const {
    name,
    label,
    labelSuffix,
    caption,
    captionPrefix,
    wrapperClassName,
    size = 'large',
    allowClear = false,
    autoSize = { minRows: 3, maxRows: 3 },
    error,
    ...restProps
  } = props;

  const inputRef = useRef<TextAreaRef | null>(null);

  const focus = () => {
    inputRef.current?.focus();
  };

  useImperativeHandle(ref, () => ({
    focus: () => {
      focus();
    }
  }));

  const [_allowClear, _setAllowClear] = useState(allowClear);
  useEffect(() => {
    if (_allowClear) {
      // @ts-ignore
      inputRef?.current!.focus({
        cursor: 'end'
      });
    }
  }, [_allowClear]);
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
      <Input.TextArea
        ref={inputRef}
        onFocus={() => _setAllowClear(true)}
        onBlur={() => _setAllowClear(false)}
        id={name}
        name={name}
        size={size}
        autoSize={autoSize}
        allowClear={_allowClear}
        {...restProps}
        className={`
            border-color-300
            text-14
            text-color-800
            placeholder:text-color-600
            focus:shadow-none
            disabled:!border-color-200
            disabled:!bg-color-200
            disabled:!text-color-800
            [&:has(.ant-input-data-count)]:mb-20
            [&:has(textarea:disabled)]:!border-color-200
            [&:has(textarea:disabled)]:!bg-color-200
            [&:has(textarea:focus)]:shadow-none
            [&>textarea]:text-color-800
            [&>textarea]:placeholder:text-color-600
            ${
              error
                ? '!border-error-500'
                : 'focus-within:!border-primary-500 hover:!border-primary-500 focus:!border-primary-500'
            }`}
      />
      <AppHelperText caption={caption} captionPrefix={captionPrefix} error={error} />
    </div>
  );
});

AppTakeNote.displayName = 'AppTakeNote';

export { AppTakeNote };

export function AppTakeNoteControl<T extends FieldValues>({
  name,
  control,
  ...restProps
}: AppTakeNoteControlProps<T>) {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    field: { ref, ...resField },
    fieldState: { error }
  } = useController({ name, control });
  return <AppTakeNote {...resField} {...restProps} error={error} />;
}
