import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  provideAppCheck,
} from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'mtgtm-4afdc',
        appId: '1:689838439267:web:a6c8a222cd5722a2fc3156',
        storageBucket: 'mtgtm-4afdc.appspot.com',
        apiKey: 'AIzaSyAEqrGdTNWaEkg6d7HbMNTmN7r4bnblHlM',
        authDomain: 'mtgtm-4afdc.firebaseapp.com',
        messagingSenderId: '689838439267',
        measurementId: 'G-9NRBS8BP18',
      })
    ),
    provideAuth(() => getAuth()),
    provideAppCheck(() => {
      // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
      const provider = new ReCaptchaEnterpriseProvider('mtgtm-4afdc');
      return initializeAppCheck(undefined, {
        provider,
        isTokenAutoRefreshEnabled: true,
      });
    }),
    provideFirestore(() => getFirestore()),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
