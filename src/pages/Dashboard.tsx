import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonTabs, IonRouterOutlet, IonTabButton, IonTabBar, IonIcon, IonLabel, IonFab, IonFabButton, IonList, IonItem, IonItemDivider, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';

import React, {useState, useEffect} from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import db from "../firebaseConfig";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { home, bookmark, appsOutline, person, addOutline } from 'ionicons/icons';

import Bookmarks from './Bookmarks';
import Categories from './Categories';
import Profile from './Profile';

const Dashboard: React.FC = () => {
  const [recipes, setRecipes] = useState([{ title: "Loading...", content: "Loading...", category: "Loading...", userEmail: "Loading...", id: "initial" }]);

  console.log(recipes);
  useEffect(() => {
    const collectionRef = collection(db, "recipes");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) =>
      setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, title: doc.data().title, content: doc.data().content, category: doc.data().category, userEmail: doc.data().userEmail })))
    );

    return unsub;
  }, []);

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar color="warning">
          <IonTitle color="light" className="ion-text-center">DelishCooking</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonReactRouter>
          <IonTabs>
              <IonRouterOutlet>
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/bookmarks" component={Bookmarks} />
                  <Route exact path="/categories" component={Categories} />
                  <Route exact path="/profile" component={Profile} />
                  <Redirect exact from="/dashboard" to="/dashboard"/>
              </IonRouterOutlet>
              <IonTabBar color="warning" slot="bottom">
                <IonTabButton tab="home">
                    <IonButton color="light" fill="clear"  routerLink="/dashboard" >
                        <IonIcon icon={home} />
                    </IonButton>
                  </IonTabButton>
                <IonTabButton tab="bookmarks">
                  <IonButton color="light" fill="clear" routerLink="/bookmarks" >
                    <IonIcon icon={bookmark} />
                  </IonButton>
                </IonTabButton>
                <IonTabButton tab="categories">
                   <IonButton color="light" fill="clear" routerLink="/categories" >
                   <IonIcon icon={appsOutline} />
                   </IonButton>
               </IonTabButton>
               <IonTabButton tab="person">
                   <IonButton color="light" fill="clear" routerLink="/profile" >
                   <IonIcon icon={person} />
                   </IonButton>
               </IonTabButton>
              </IonTabBar>
          </IonTabs>
      </IonReactRouter>
        <IonFab vertical="center" horizontal="end" slot="fixed">
          <IonFabButton color="warning" routerLink="/dashboard/add-recipe">
            <IonIcon icon={addOutline} color="light" />
          </IonFabButton>
        </IonFab>
        {recipes.map((recipe) => (
          <IonList key={recipe.id}>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>{recipe.category} | by {recipe.userEmail}</IonCardSubtitle>
                <IonCardTitle>{recipe.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {recipe.content}
              </IonCardContent>
            </IonCard>
          </IonList>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
