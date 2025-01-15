/* eslint-disable tailwindcss/no-custom-classname */
export interface LinearProgressProps {
  height?: number | string;
  width?: number | string;
  className?: string;
  backgroundColor?: string;
  color?: string;
}

const LinearProgress = (props: LinearProgressProps) => {
  const {
    width = '100%',
    height = 4,
    backgroundColor = 'rgb(var(--primary-50)',
    color = 'rgb(var(--primary-500)',
    className
  } = props;
  return (
    <div className={`progress-bar ${className}}`} style={{ width, height, backgroundColor }}>
      <span className="progress-bar-animation1" style={{ backgroundColor: color }}></span>
      <span className="progress-bar-animation2" style={{ backgroundColor: color }}></span>
    </div>
  );
};

export default LinearProgress;
