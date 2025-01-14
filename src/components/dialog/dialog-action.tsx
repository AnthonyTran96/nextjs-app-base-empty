import ButtonBase from 'components/button';
import { memo, useCallback, useMemo } from 'react';
import { ActionProps } from './type';

const Component = (prop: ActionProps) => {
  const { title, onPress, type, typeMessage, index, iconLeftName, iconRightName, className } = prop;

  const handleClick = useCallback(() => {
    if (onPress && typeof onPress === 'function') {
      onPress(index || 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onPress]);

  const _getType = useMemo(() => {
    switch (type) {
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'ghost';
      case 'link':
        return 'whiteGhost';
      default:
        return 'primary';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, typeMessage]);

  const _getClassNames = useMemo(() => {
    let defaultClass = 'tablet:flex-1 justify-center font-normal';
    if (type === 'link') defaultClass += ' text-link-500 text-14 font-normal';
    return defaultClass;
  }, [type]);

  return (
    <ButtonBase
      type={_getType}
      customContent={title}
      classNames={`${_getClassNames}} ${className || ''}`}
      leftIcon={iconLeftName}
      rightIcon={iconRightName}
      onClick={handleClick}
    />
  );
};

export const DialogAction = memo(Component);
