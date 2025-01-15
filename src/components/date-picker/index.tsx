'use client';
/* eslint-disable react/display-name */
import type { DatePickerProps } from 'antd/lib/date-picker';
import DatePicker from 'antd/lib/date-picker';
import type { Dayjs } from 'dayjs';
import React, { useImperativeHandle, useRef } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';

import { IconSvgTypes } from 'assets/svg';
import { useDatePickerLanguage } from 'components/date-picker/hooks/useDatePickerLanguage';
import { IconSvgLocal } from '../icon-vec-local';

export interface AppDatePickerProps extends Omit<DatePickerProps, 'suffixIcon' | 'className'> {
  name?: string;
  label?: string;
  labelSuffix?: React.ReactNode;
  suffixIcon?: IconSvgTypes | React.ReactNode;
  wrapperClassName?: string;
  datePickerClassName?: string;
  popupClassName?: string;
}

export interface AppDatePickerControlProps<T extends FieldValues>
  extends Omit<AppDatePickerProps, 'name'> {
  name: Path<T>;
  control: Control<T>;
}

interface InputRef {
  blur: () => void;
  focus: () => void;
}

const AppDatePicker = React.forwardRef<InputRef, AppDatePickerProps>((props, ref) => {
  const {
    name,
    label,
    labelSuffix,
    suffixIcon = 'ICON_CALENDAR',
    wrapperClassName,
    datePickerClassName,
    popupClassName,
    ...restProps
  } = props;

  const { locale, placeholder, format } = useDatePickerLanguage();

  const inputRef = useRef<any>(null);

  const focus = () => {
    inputRef.current.focus();
  };

  const blur = () => {
    inputRef.current.blur();
  };

  useImperativeHandle(ref, () => ({
    blur: () => {
      blur();
    },
    focus: () => {
      focus();
    }
  }));

  // disable
  // const disabledDate: RangePickerProps['disabledDate'] = (current) => {
  //   const isPastDate = current && current < dayjs().startOf('day');
  //   const isEndOfMonth = current && [29, 30, 31].includes(current.date());
  //   return isPastDate || isEndOfMonth;
  // };

  return (
    <div className={` flex w-fit flex-col gap-4 text-color-900 ${wrapperClassName} `}>
      {label && (
        <label htmlFor={name} className="text-14 font-semibold leading-24">
          {label}
          {labelSuffix && <span className="ml-4 ">{labelSuffix}</span>}
        </label>
      )}
      <DatePicker
        // disabledDate={disabledDate}
        className={` 
        rounded-radius-m border-color-300 p-12 hover:border-primary-500 
        [&_.ant-picker-input>input]:placeholder:text-color-600 ${datePickerClassName}`}
        popupClassName={popupClassName}
        id={name}
        allowClear={false}
        locale={locale}
        placeholder={placeholder}
        format={format}
        ref={inputRef}
        suffixIcon={
          typeof suffixIcon === 'string' ? (
            <IconSvgLocal name={suffixIcon as IconSvgTypes} height={20} width={20} />
          ) : (
            <div>{suffixIcon}</div>
          )
        }
        {...restProps}
      />
    </div>
  );
});

const AppDatePickerControl = <T extends FieldValues>({
  name,
  control,
  onChange,
  ...restProps
}: AppDatePickerControlProps<T>) => {
  const { field } = useController({ name, control });
  return (
    <AppDatePicker
      {...field}
      {...restProps}
      onChange={(value: Dayjs, dateString: any) => {
        if (onChange) onChange(value, dateString);
        field.onChange(value);
      }}
    />
  );
};
const MemoizedAppDatePicker = React.memo(AppDatePicker);
const MemoizedAppDatePickerControl = React.memo(AppDatePickerControl) as <T extends FieldValues>(
  props: AppDatePickerControlProps<T>
) => JSX.Element;

export {
  MemoizedAppDatePicker as AppDatePicker,
  MemoizedAppDatePickerControl as AppDatePickerControl
};
