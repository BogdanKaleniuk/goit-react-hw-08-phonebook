// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'reduxjs-toolkit-persist';
// import storage from 'reduxjs-toolkit-persist/lib/storage'; // defaults to localStorage for web
// import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';
// import rootReducer from './rootReducer';

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   stateReconciler: autoMergeLevel1,
// };

// const _persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: _persistedReducer,
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       /* ignore persistance actions */
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });
