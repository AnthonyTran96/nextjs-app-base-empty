/* eslint-disable tailwindcss/no-custom-classname */
import { TextBase } from 'components/text';
import { IconSvgLocal } from '../icon-vec-local';

export enum TypeProgressBar {
  LINE = 'line',
  STEP = 'step'
}

interface ProgressBarProps {
  styles?: React.CSSProperties;
  classNames?: string;
  stepTitles?: string[];
  currentStep?: number;
  type?: TypeProgressBar;
}

const ProgressBar = (props: ProgressBarProps) => {
  const {
    styles = {},
    classNames = '',
    stepTitles = ['step 1', 'step 2', 'step 3', 'step 4'],
    currentStep = 3,
    type = TypeProgressBar.STEP
  } = props;

  return type !== TypeProgressBar.LINE ? (
    <div className={`flex flex-row justify-between gap-8 ${classNames}`} style={{ ...styles }}>
      {stepTitles.map((title, index) => {
        const step = index + 1;
        return (
          <div
            key={title + step}
            className={`progressItem relative flex flex-row gap-8 text-14 font-normal 
              ${index !== 0 && 'flex-1'}
              ${step < currentStep ? 'progressFinished' : 'progressInactive'}
              ${step === currentStep && 'progressActive'}
            `}
          >
            {index !== 0 && (
              <div className="my-auto h-[2px] flex-1 rounded-[1px] border border-solid border-color-600" />
            )}

            <div className="flex flex-row gap-8 mobile:flex-col">
              <div className="progressIcon mobile:mx-auto">
                {step < currentStep ? (
                  <IconSvgLocal
                    name="ICON_CHECK"
                    height={24}
                    width={24}
                    fill="rgb(var(--secondary-500))"
                    classNames="absolute top-1 left-1 overflow-hidden "
                  />
                ) : (
                  step
                )}
              </div>
              <TextBase t18n={title} />
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div
      className="flex h-8 flex-row overflow-hidden rounded-[16px] border border-solid border-color-50"
      style={{ ...styles }}
    >
      {stepTitles.map((_, index) => {
        const step = index + 1;
        return (
          <div
            key={step}
            className={`flex-1 
            ${step < currentStep ? 'bg-secondary-500' : 'bg-color-300'}
            ${step === currentStep && 'bg-secondary-300'}
            `}
          />
        );
      })}
    </div>
  );
};

export default ProgressBar;
