/* eslint-disable tailwindcss/no-custom-classname */
export enum TYPE_STATUS {
  DEFAULT = 'default',
  SUCCESS = 'success',
  PENDING = 'pending',
  ERROR = 'error',
  BRANDING = 'branding',
  CONFIRM = 'confirm',
  DISABLED = 'disabled'
}

export enum KIND_STATUS {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  GHOST = 'ghost'
}

interface StatusProps {
  type?: TYPE_STATUS;
  kind?: KIND_STATUS;
  content: any;
  wrapStyle?: string;
  contentStyle?: string;
}
const Status = (props: StatusProps) => {
  const {
    type = TYPE_STATUS.DEFAULT,
    kind = KIND_STATUS.PRIMARY,
    content,
    wrapStyle,
    contentStyle
  } = props;
  return (
    <div className={`status-${kind} box-border w-fit text-10 font-medium ${wrapStyle}`}>
      <div
        className={`status-${type} rounded-[4px] border border-solid px-8 py-[2px] ${contentStyle}`}
      >
        {content}
      </div>
    </div>
  );
};

export default Status;
