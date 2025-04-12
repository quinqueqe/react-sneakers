import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

import sneakers from './sneakers/slice'
import cart from './cart/slice'
import bookmarks from './bookmarks/slice'

const persistConfig = {
	key: 'key', 
  storage, // Хранилище (localStorage по умолчанию)
  whitelist: ['cart', 'bookmarks'], // Сохранять только корзину и закладки
  }

  const rootReducer = combineReducers({
	sneakers,
		cart,
		bookmarks
  })
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
})

export const persistor = persistStore(store);
