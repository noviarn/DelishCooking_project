import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, {useState, useEffect} from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { home, bookmark, appsOutline, person } from 'ionicons/icons';
const Bookmarks: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar color="warning">
          <IonTitle color="light" className="ion-text-center">Bookmarks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent  className="ion-padding">
        <div className="ion-text-center">
          <h2>This menu is in progress.</h2>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Bookmarks;
