import type { InputProps } from 'antd';
import { Dropdown, Input } from 'antd';
import AppHelperText from 'components/helper-text';
import { IconSvgLocal } from 'components/icon-vec-local';
import { TextBase } from 'components/text';
import React, { useCallback, useMemo } from 'react';
import type { FieldError } from 'react-hook-form';

export interface SelectDateProps extends InputProps {
  value?: string;
  onChange: (e: any) => void;
  name: string;
  label?: string;
  labelClassName?: string;
  labelSuffix?: React.ReactNode;
  caption?: string | React.ReactNode;
  captionPrefix?: React.ReactNode;
  inputClass?: string;
  dropdownClass?: string;
  wrapClass?: string;
  fromDate: number;
  toDate: number;
  error?: FieldError | string;
  dropdownRender?: (menuInstance: React.ReactNode) => React.JSX.Element;
  defaultDropdownLabel?: string;
  dropdownLabelClass?: string;
  placement?:
    | 'bottomLeft'
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'bottomCenter'
    | 'bottomRight'
    | 'top'
    | 'bottom';
}

export function SelectDate(props: SelectDateProps) {
  const {
    name,
    label,
    labelSuffix,
    labelClassName,
    value,
    onChange,
    inputClass,
    dropdownClass,
    suffix,
    disabled,
    fromDate,
    toDate,
    wrapClass,
    caption,
    captionPrefix,
    error,
    dropdownRender,
    defaultDropdownLabel,
    dropdownLabelClass,
    placement,
    ...restProps
  } = props;

  const items = useMemo(() => {
    const dates = [];
    for (let i = fromDate; i <= toDate; i += 1) {
      dates.push(i);
    }
    return dates.map((i) => {
      const _label = i.toString();
      const _key = i < 10 ? `0${i.toString()}` : i.toString();
      return {
        label: _label,
        key: _key
      };
    });
  }, [fromDate, toDate]);

  const dropDownClass = useMemo(() => {
    const classNames = [
      'w-full rounded-radius-m border border-color-300',
      'hover:!border-primary-500 focus:!border-primary-500',
      '[&.ant-dropdown-open]:!border-primary-500',
      '[&:has(input:hover)]:!border-primary-500',
      inputClass
    ];
    return classNames.join(' ');
  }, [inputClass]);

  const popoverClass = useMemo(() => {
    const classNames = [
      '[&_.ant-dropdown-menu]:w-full',
      '[&_.ant-dropdown-menu]:shadow-none',
      '[&_.ant-dropdown-menu]:grid',
      '[&_.ant-dropdown-menu]:grid-cols-7',
      '[&_.ant-dropdown-menu]:!p-0',
      '[&_.ant-dropdown-menu-item]:!p-0',
      '[&_.ant-dropdown-menu-item]:!h-[48px]',
      '[&_.ant-dropdown-menu-item]:!text-color-800',
      '[&_.ant-dropdown-menu-item]:!rounded-radius-m',
      '[&_.ant-dropdown-menu-item-selected]:!bg-primary-500',
      '[&_.ant-dropdown-menu-item-selected]:!font-semibold',
      '[&_.ant-dropdown-menu-title-content]:!text-center'
    ];
    return classNames.join(' ');
  }, []);

  // const renderValue = useCallback((_value?: string) => {
  //   if (Number.isNaN(_value)) return '';
  //   return Number(_value) < 10 ? `0${_value}` : _value;
  // }, []);

  const defaultdropdownRender = useCallback(
    (menuInstance: React.ReactNode) => (
      <div
        // eslint-disable-next-line tailwindcss/no-contradicting-classname
        className={`
          flex flex-col gap-12 rounded-radius-m border border-color-200 
          bg-color-50 p-16 shadow-down-m shadow-[rgb(var(--color-black)/0.05)] 
          ${dropdownClass}`}
      >
        {defaultDropdownLabel && (
          <TextBase
            text={defaultDropdownLabel}
            classNames={`sub-title2 !text-color-900 ${dropdownLabelClass}`}
          />
        )}
        <div className={popoverClass}>{React.cloneElement(menuInstance as React.ReactElement)}</div>
      </div>
    ),
    [popoverClass, defaultDropdownLabel, dropdownLabelClass, dropdownClass]
  );

  return (
    <div className={`w-full ${wrapClass}`}>
      {label && (
        <label
          htmlFor={name}
          className={`mb-4 inline-flex flex-row items-center text-14 font-semibold leading-24 text-color-900 ${labelClassName}`}
        >
          {label}
          {labelSuffix && <span className="ml-4 text-color-900">{labelSuffix}</span>}
        </label>
      )}
      <Dropdown
        menu={{
          items,
          onClick: onChange,
          selectedKeys: [value as string]
        }}
        trigger={['click']}
        autoAdjustOverflow={false}
        dropdownRender={dropdownRender || defaultdropdownRender}
        placement={placement}
      >
        <div className={dropDownClass}>
          <Input
            name={name}
            size="large"
            value={value}
            variant="borderless"
            suffix={
              suffix || (
                <IconSvgLocal
                  height={20}
                  name="ICON_DROP_DOWN"
                  fill={disabled ? 'rgb(var(--color-400))' : 'rgb(var(--color-900))'}
                />
              )
            }
            disabled
            className={`
                  !bg-color-200
                  !text-14
                  text-color-800
                  placeholder:text-color-600
                  disabled:!pointer-events-none
                  disabled:cursor-pointer
                  disabled:!bg-color-50
                  disabled:!text-color-800
                  [&:has(input:disabled)]:!pointer-events-none
                  [&:has(input:disabled)]:!cursor-pointer
                  [&:has(input:disabled)]:!bg-color-50
                  [&>input:disabled]:!cursor-pointer
                  [&>input:disabled]:!text-color-800
               `}
            {...restProps}
          />
        </div>
      </Dropdown>
      <AppHelperText caption={caption} captionPrefix={captionPrefix} error={error} />
    </div>
  );
}
