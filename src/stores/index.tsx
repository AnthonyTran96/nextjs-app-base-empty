import { RXStore } from '@redux-common';
import store from '@store';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

type PersistGateProps = {
  children: ReactElement;
};

const ReduxProvider = ({ children }: PersistGateProps) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={store.__persistor}>
        {children}
        <RXStore />
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
