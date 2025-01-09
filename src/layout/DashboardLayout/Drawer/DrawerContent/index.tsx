// PROJECT IMPORTS
import SimpleBar from 'components/@third-party/simple-bar';
import Navigation from './Navigation';

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => {
  return (
    <SimpleBar sx={{ '& .simplebar-content': { display: 'flex', flexDirection: 'column' } }}>
      <>
        <Navigation />
      </>
    </SimpleBar>
  );
};

export default DrawerContent;
