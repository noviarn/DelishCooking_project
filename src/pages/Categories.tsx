import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonGrid, IonSegment, IonSegmentButton, IonCol, IonRow, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle } from '@ionic/react';

import React, {useState, useEffect} from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { chevronForwardOutline } from 'ionicons/icons';
import './Categories.css';
const Categories: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
      <IonToolbar color="warning">
          <IonTitle color="light">DelishCooking</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonCard color="beverage">
            <IonCardHeader>
              <IonCardTitle>Beverages<IonIcon slot="end" icon={chevronForwardOutline}></IonIcon></IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard color="dessert">
            <IonCardHeader>
              <IonCardTitle>Dessert</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard color="noodles">
            <IonCardHeader>
              <IonCardTitle>Noodles</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Rice</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard>
            <IonCardHeader color="snacks">
              <IonCardTitle>Snacks</IonCardTitle>
            </IonCardHeader>
          </IonCard>
      </IonContent>

    </IonPage>
  );
};

export default Categories;
