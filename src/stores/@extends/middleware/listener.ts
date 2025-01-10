import { createListenerMiddleware } from '@reduxjs/toolkit';

export const listenerMiddleware = createListenerMiddleware();
const startAppListening = listenerMiddleware.startListening;
type StartAppListening = typeof startAppListening;

export const takeLatestListeners = ((startListeningOption: any) => {
  return startAppListening({
    ...startListeningOption,
    effect: async (action, listenerApi) => {
      listenerApi.cancelActiveListeners();
      await listenerApi.delay(15);
      await startListeningOption.effect(action, listenerApi);
    }
  });
}) as StartAppListening;

export const takeLeadingListeners = ((startListeningOption: any) => {
  return startAppListening({
    ...startListeningOption,
    effect: async (action, listenerApi) => {
      listenerApi.unsubscribe();
      await startListeningOption.effect(action, listenerApi);
      listenerApi.subscribe();
    }
  });
}) as StartAppListening;

export const debounceListeners = (msDuration: number) =>
  ((startListeningOption: any) => {
    return startAppListening({
      ...startListeningOption,
      effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners();
        await listenerApi.delay(msDuration);
        await startListeningOption.effect(action, listenerApi);
      }
    });
  }) as StartAppListening;

export const throttleListeners = (msDuration: number) =>
  ((startListeningOption: any) => {
    return startAppListening({
      ...startListeningOption,
      effect: async (action, listenerApi) => {
        listenerApi.unsubscribe();
        await startListeningOption.effect(action, listenerApi);
        await listenerApi.delay(msDuration);
        listenerApi.subscribe();
      }
    });
  }) as StartAppListening;
