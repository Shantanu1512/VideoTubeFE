import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import videoReducer from "./slices/videoSlice";
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types (add your custom action types here if needed)
        ignoredActions: ["your/action/type"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.file", "payload.image"],
        // Ignore these paths in the state
        ignoredPaths: ["coverImage", "avatar", "items.dates"],
      },
    }),
  reducer: {
    auth: authReducer,
    video: videoReducer,
  },
});

export default store;
