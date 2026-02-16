import { K_SIZE_24 } from '@constant';
import { Flex } from 'antd';
import { IconSvgLocal, IconSvgTypes } from 'components/icon-vec-local';
import { TextBase } from 'components/text';

export interface InfoBoxProps {
  title: string;
  caption: string;
  icon: IconSvgTypes;
  fillIcon?: string;
  className?: string;
  iconClassname?: string;
  onClick?: (e: any) => void;
}

const InfoBox = (props: InfoBoxProps) => {
  const {
    title = 'Title',
    caption = 'Caption',
    icon = 'ICON_CALL',
    fillIcon = '',
    className = '',
    iconClassname = '',
    onClick
  } = props;

  /* eslint-disable tailwindcss/no-custom-classname */
  return (
    <Flex
      className={`tablet:w-[302px], w-[302}px] group gap-16 rounded-radius-l border border-color-300 bg-color-50
      p-16 duration-1000 hover:cursor-pointer hover:border-primary-500 mobile:w-full ${className}`}
      onClick={onClick}
    >
      <Flex
        justify="center"
        align="center"
        className={`size-48 rounded-[50%] bg-color-100 duration-[1500ms] ease-out group-hover:bg-primary-300 ${iconClassname}`}
      >
        <IconSvgLocal fill={fillIcon} name={icon} width={K_SIZE_24} height={K_SIZE_24} />
      </Flex>
      <Flex vertical flex={1} className="gap-4 overflow-hidden">
        <TextBase t18n={title} className="sub-title4 !text-14 !font-bold" />
        <TextBase
          t18n={caption}
          className="line-clamp-2 text-12 font-normal leading-16 text-color-700"
        />
      </Flex>
    </Flex>
  );
};

export default InfoBox;
