import { Progress } from 'antd';

const Loader = () => {
  return (
    <div className="fixed left-0 top-0 z-[2100] w-full">
      <Progress
        percent={100}
        status="active"
        showInfo={false}
        size={['100%', 4]}
        strokeColor={'rgb(var(--primary-100))'}
      />
    </div>
  );
};

export default Loader;
