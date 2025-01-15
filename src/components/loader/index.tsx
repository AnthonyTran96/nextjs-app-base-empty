import LinearProgress from './linear-progress';

const Loader = () => {
  return (
    <div className="fixed left-0 top-0 z-[2001] w-full">
      <LinearProgress />
    </div>
  );
};

export default Loader;
