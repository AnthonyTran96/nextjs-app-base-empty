/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { SegmentedProps } from 'antd';
import { Segmented } from 'antd';
import type { SegmentedLabeledOption, SegmentedValue } from 'antd/es/segmented';
import { useMemo, useState } from 'react';

export interface AppSegmentProps extends Omit<SegmentedProps, 'ref' | 'onChange'> {
  options: AppSegmentedOption[];
  classNames?: string;
  wrapClassNames?: string;
  classNamesWithContent?: string;
  externalOnChange?: (value: SegmentedValue) => void;
  customContent?: React.ReactNode;
  reverseFlexWithCustomContent?: boolean;
  renderAllPanel?: boolean;
}

export type AppSegmentedOption = SegmentedLabeledOption & {
  panel: React.ReactNode; // for panel element render if option inactive
};

export default function AppSegment({
  options,
  size = 'large',
  block = true,
  classNames = '',
  wrapClassNames,
  classNamesWithContent,
  defaultValue,
  value,
  externalOnChange,
  customContent,
  reverseFlexWithCustomContent,
  renderAllPanel = false,
  ...resProps
}: AppSegmentProps) {
  const [activeOptionValue, setActiveOptionValue] = useState<SegmentedValue | undefined>(
    defaultValue
  );

  const activeOption =
    options.find((option) => option.value === value) ||
    options.find((option) => option.value === activeOptionValue) ||
    options[0];

  const handleExternalChange: SegmentedProps['onChange'] = (val) => {
    setActiveOptionValue(val);
    if (externalOnChange) externalOnChange(val);
  };

  const segmentStyle = useMemo(() => {
    const classes = [
      'h-fit',
      'bg-color-200',
      '[&.ant-segmented-lg_.ant-segmented-item-label]:text-14',
      '[&.ant-segmented-lg_.ant-segmented-item-label]:leading-32',
      '[&.ant-segmented-lg_.ant-segmented-item-label]:min-h-[32px]',
      '[&_.ant-segmented-item-label]:text-color-800',
      '[&_.ant-segmented-item-selected]:font-semibold',
      '[&_.ant-segmented-item-selected]:shadow-down-m',
      '[&_.ant-segmented-item-selected_.ant-segmented-item-label]:text-color-900',
      '[&_.ant-segmented-item-selected]:shadow-[rgb(var(--color-black)/0.05)]',
      '[&_.ant-segmented-item]:!rounded-radius-m',
      '[&_.ant-segmented-thumb]:!rounded-radius-m',
      '[&_.ant-segmented-thumb]:!shadow-down-m',
      '[&_.ant-segmented-thumb]:!shadow-[rgb(var(--color-black)/0.05)]'
    ];
    classes.push(classNames);
    return classes.join(' ');
  }, [classNames]);

  return (
    <div className={`flex flex-col ${!block && 'items-start'} ${wrapClassNames}`}>
      {customContent ? (
        <div
          className={`flex w-full ${
            reverseFlexWithCustomContent && 'flex-row-reverse'
          } ${classNamesWithContent}`}
        >
          <Segmented
            options={options}
            value={value || activeOptionValue}
            block={block}
            onChange={externalOnChange ? handleExternalChange : setActiveOptionValue}
            size={size}
            {...resProps}
            className={segmentStyle}
          />
          {customContent}
        </div>
      ) : (
        <Segmented
          options={options}
          value={value || activeOptionValue}
          block={block}
          onChange={externalOnChange ? handleExternalChange : setActiveOptionValue}
          size={size}
          {...resProps}
          className={segmentStyle}
        />
      )}
      {renderAllPanel
        ? options.map((option) => (
            <div
              key={option.value}
              className={activeOption?.value === option.value ? 'block w-full' : 'hidden'}
            >
              {option.panel}
            </div>
          ))
        : activeOption && activeOption.panel}
    </div>
  );
}

export interface AppSegmentVerticalProps {
  options: AppSegmentedOption[];
  wrapClassNames?: string;
  externalOnChange?: (value: SegmentedValue) => void;
  customContent?: React.ReactNode;
  renderAllPanel?: boolean;
  defaultValue?: SegmentedValue;
  value?: SegmentedValue;
}

export function AppSegmentVertical({
  options,
  wrapClassNames,
  externalOnChange,
  customContent,
  renderAllPanel = false,
  defaultValue,
  value
}: AppSegmentVerticalProps) {
  const [activeOptionValue, setActiveOptionValue] = useState<SegmentedValue | undefined>(
    defaultValue
  );

  const activeOption =
    options.find((option) => option.value === value) ||
    options.find((option) => option.value === activeOptionValue) ||
    options[0];

  const handleExternalChange: SegmentedProps['onChange'] = (val) => {
    setActiveOptionValue(val);
    if (externalOnChange) externalOnChange(val);
  };

  return (
    <div className={`flex flex-col ${wrapClassNames}`}>
      <div className="flex flex-col gap-12">
        {options.map((option) => (
          <div
            key={option.value}
            className="rounded-radius-l bg-color-200 p-4"
            onClick={
              externalOnChange
                ? () => handleExternalChange(option.value)
                : () => setActiveOptionValue(option.value)
            }
          >
            <div
              key={option.value}
              className={`rounded-radius-m p-4 ${
                activeOption?.value === option.value ? 'bg-color-50' : 'bg-color-200'
              }`}
            >
              {option.label}
            </div>
          </div>
        ))}
      </div>
      {customContent}
      {renderAllPanel
        ? options.map((option) => (
            <div
              key={option.value}
              className={activeOption?.value === option.value ? 'block w-full' : 'hidden'}
            >
              {option.panel}
            </div>
          ))
        : activeOption && activeOption.panel}
    </div>
  );
}
