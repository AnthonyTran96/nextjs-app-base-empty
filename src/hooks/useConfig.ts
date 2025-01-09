import { ConfigContext } from 'config/app/ConfigContext';
import { useContext } from 'react';

// ==============================|| HOOKS - CONFIG  ||============================== //

const useConfig = () => useContext(ConfigContext);

export default useConfig;
