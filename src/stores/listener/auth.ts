import { takeLatestListeners } from '@listener';
import { authActions } from '@redux-slice';
import authServices from 'services/auth-services';

takeLatestListeners({
  actionCreator: authActions.login,
  effect: async (action, listenerApi) => {
    const { body, onSuccess, onFailed } = action.payload;
    listenerApi.dispatch(authActions.startLogin());
    const response = await authServices.login(body);
    listenerApi.dispatch(authActions.endLogin());

    if (!response || !response.data) {
      onFailed();
      return;
    }

    const { accessToken, fullName, userId } = response.data;
    listenerApi.dispatch(authActions.setUser({ fullName, userId }));
    listenerApi.dispatch(authActions.setToken(accessToken));
    onSuccess(response);
  }
});

takeLatestListeners({
  actionCreator: authActions.logout,
  effect: async (_, listenerApi) => {
    authServices.logout();
    listenerApi.dispatch(authActions.clearStore());
  }
});

takeLatestListeners({
  actionCreator: authActions.clearStore,
  effect: async (_, listenerApi) => {
    listenerApi.dispatch(authActions.reset());
  }
});
