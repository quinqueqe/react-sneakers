import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // localStorage

import sneakers from './sneakers/slice'
import cart from './cart/slice'
import bookmarks from './bookmarks/slice'
import fullSneaker from './fullSneaker/slice'

const persistConfig = {
	key: 'key',
	storage, // Хранилище (localStorage по умолчанию)
	whitelist: ['cart', 'bookmarks', 'fullSneaker'], // Сохранять только корзину и закладки
}

const rootReducer = combineReducers({
	sneakers,
	cart,
	bookmarks,
	fullSneaker,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
})

export const persistor = persistStore(store)
