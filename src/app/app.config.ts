import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({
    "projectId":"danotes-ebf2a",
    "appId":"1:1060033439426:web:bb2a7b62333f9f7b637d5b",
    "storageBucket":"danotes-ebf2a.firebasestorage.app",
    "apiKey":"AIzaSyBxS4MzmrnVkw_HfUIKXULrAMAHbuMUjE8",
    "authDomain":"danotes-ebf2a.firebaseapp.com",
    "messagingSenderId":"1060033439426"})), provideFirestore(() => getFirestore())]
};
