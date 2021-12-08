import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSpinner, IonTabs, IonTabButton, IonIcon, IonTabBar, IonButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setUserState }  from './redux/actions';
import { getCurrentUser } from './firebaseConfig';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Bookmarks from './pages/Bookmarks';
import Categories from './pages/Categories';
import Profile from './pages/Profile';
import AddRecipe from './pages/AddRecipe';
import { home, bookmark, appsOutline, person, addOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const RoutingSystem: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/dashboard/add-recipe">
          <AddRecipe />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  )
}

const App: React.FC = () => {
    const [busy, setBusy] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        getCurrentUser().then((user: any) => {
          if(user) {
            //logged in
            dispatch(setUserState(user.email));
            window.history.replaceState({}, '', '/dashboard')
          } else {
            window.history.replaceState({}, '', '/')
          }
          setBusy(false);
        })
    }, [])

    return <IonApp>
      {busy ? <IonSpinner /> : <RoutingSystem />}
    </IonApp>
};

export default App;
