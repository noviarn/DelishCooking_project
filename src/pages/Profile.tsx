import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonTabs, IonRouterOutlet, IonTabButton, IonTabBar, IonIcon, IonLabel, IonThumbnail, IonAvatar, IonItem, IonItemDivider, IonLoading, IonFab, IonFabButton } from '@ionic/react';

import React, {useState, useEffect} from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { logoutUser } from '../firebaseConfig';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { home, bookmark, appsOutline, person, addOutline } from 'ionicons/icons';

import './Profile.css';

const Profile: React.FC = () => {
  const [busy, setBusy] = useState(false);
  const history = useHistory();

  async function handleLogout() {
    setBusy(true);
    await logoutUser();
    setBusy(false);
    history.replace('/home');
  }

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar color="warning">
          <IonTitle color="light" size="large" className="ion-text-center">My Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent>
            <IonAvatar>
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <div className="ion-text-center">
            <IonButton color="warning" strong>Update Photo</IonButton>
            </div>
            <IonLabel>Display Name</IonLabel>
            <IonItem>
                    <IonInput type="text" >user</IonInput>
            </IonItem>
            <IonLabel>Email</IonLabel>
            <IonItem>
                    <IonInput type="text" >Email</IonInput>
            </IonItem>
            <IonButton color="warning" expand="block" strong>UPDATE PROFILE</IonButton>
            <IonButton color="warning" expand="block" strong>MY RECIPES</IonButton>
            <IonLoading message="Signing out..." duration={0} isOpen={busy} />
            <IonButton onClick={handleLogout} color="danger" expand="block" strong>Sign Out</IonButton>
        </IonContent>
    </IonPage>
  );
};

export default Profile;
