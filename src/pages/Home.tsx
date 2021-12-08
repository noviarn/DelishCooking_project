import React, { Component }  from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonAvatar, IonThumbnail, IonImg } from '@ionic/react';

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>

      <IonContent className="ion-padding">
        <IonAvatar>

        </IonAvatar>
        <IonButton color="warning" expand="block" routerLink="/login">Sign in</IonButton>
        <IonButton color="warning" expand="block" routerLink="/register">Sign up</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
