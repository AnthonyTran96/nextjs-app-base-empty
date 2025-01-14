import { Modal } from 'antd';
import type { ReactNode } from 'react';
import {
  createRef,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState
} from 'react';

import { DialogAction } from './dialog-action';
import { DialogProps, stateDefault, TYPE_MESSAGE } from './type';

type Alert = {
  show: (data: {
    title?: ReactNode | string;
    content: ReactNode | string;
    type?: TYPE_MESSAGE;
    haveCloseBtn?: boolean;
    customHeader?: ReactNode;
    footer?: ReactNode;
  }) => void;
  hide: () => void;
};
export const DialogRef = createRef<Alert>();

export const showDialog = (props: DialogProps) => {
  DialogRef.current?.show(props);
};
export const hideDialog = () => {
  DialogRef.current?.hide();
};

// eslint-disable-next-line react/display-name
const ComponentDialog = forwardRef((_: any, ref) => {
  const [state, setState] = useState(stateDefault);

  useImperativeHandle(
    ref,
    () => ({
      show: (props: DialogProps) => {
        if (state?.isShow) return;
        setState({
          isShow: true,
          ...props
        });
      },
      hide: () => {
        setState(stateDefault);
      }
    }),
    [state?.isShow]
  );

  const isDisableTouchOutSide = useMemo(() => {
    return (state.disableTouchOutSide && state?.type !== 'confirm') || false;
  }, [state?.type, state.disableTouchOutSide]);

  const onPress = useCallback(
    (index: number) => {
      // @ts-ignore
      const item = state?.actions[index];
      if (!item?.stopHide) hideDialog();
      if (item?.onPress) item.onPress();
    },
    [state?.actions]
  );

  useEffect(() => {
    const mask = document.querySelector('.highest-dialog, .dialog');
    if (mask && isDisableTouchOutSide) {
      if (mask.querySelector('#divMask')) return;
      const iDiv = document.createElement('div');
      iDiv.id = 'block';
      iDiv.className = 'block w-full h-full z-0 absolute top-0';
      iDiv.addEventListener('click', () => {
        if (state?.onHideOutside) state?.onHideOutside();
        hideDialog();
      });
      mask?.appendChild(iDiv);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.isShow, state?.disableTouchOutSide, state?.onHideOutside]);
  return (
    <Modal
      open={state?.isShow}
      centered
      closeIcon={false}
      footer={null}
      wrapClassName="highest-dialog dialog"
    >
      <div className="duration-500">
        <div className="text-18 font-bold text-text-primary tablet:text-center">{state.title}</div>
        <div className="mt-4 text-14 font-normal text-text-primary tablet:text-center">
          {state.content || 'Content dialog: ....'}
        </div>
        {state.sub && (
          <div className="mt-8 text-10 text-error-500 tablet:text-center">{state.sub}</div>
        )}

        <div
          className={`mt-24 flex flex-row-reverse gap-[10px]
          tablet:flex-col ${state.classNameFooter}`}
        >
          <div className="flex flex-row-reverse gap-[10px]">
            {state.actions?.map((item, index) => {
              const key = index + 1;
              return item.type !== 'link' ? (
                <DialogAction key={key} {...item} index={index} onPress={() => onPress(index)} />
              ) : null;
            })}
          </div>
          {state.actions?.map((item, index) => {
            const key = index + 1;
            return item.type === 'link' ? (
              <DialogAction key={key} {...item} index={index} onPress={() => onPress(index)} />
            ) : null;
          })}
        </div>
      </div>
    </Modal>
  );
});

export const DialogView = () => <ComponentDialog ref={DialogRef} />;
