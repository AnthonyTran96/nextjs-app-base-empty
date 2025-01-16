import { showDialog } from 'components/dialog';
import { DialogProps, TYPE_ACTION, TYPE_MESSAGE } from 'components/dialog/type';
import { TextBase } from 'components/text';
import { t } from 'i18next';
import { ReactNode } from 'react';
import { envAllow } from './checkService';

interface WrapComponentPilotProp {
  customRender?: ReactNode;
  children: ReactNode;
}

export const handleInDevelopFunction = () => {
  const dialogProps: DialogProps = {
    title: <TextBase t18n="text:notification" />,
    content: t('text:indevelop_function'),
    type: TYPE_MESSAGE.ALERT,
    actions: [
      {
        title: <TextBase t18n="text:close" />,
        type: TYPE_ACTION.PRIMARY
      }
    ],
    disableTouchOutSide: true
  };
  showDialog(dialogProps);
};

export default function WrapComponentPilot(props: WrapComponentPilotProp) {
  const { customRender = null, children } = props;

  if (!envAllow) return customRender;

  return children;
}
