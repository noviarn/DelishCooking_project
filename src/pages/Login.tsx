import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonRow, IonCol, IonGrid } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUserState }  from '../redux/actions';
import { Link } from 'react-router-dom';
import './Login.css';
import { loginUser } from '../firebaseConfig';
import { toast } from '../components/toast';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const res: any = await loginUser(email, password);
    if(!res) {
      toast('Error signing in with your credentials');
    } else {
      console.log(res);
      dispatch(setUserState(res.user.email));
      history.replace('/dashboard');
      toast('You have successfully signed in');
    }
  }

  return (
    <IonPage>
      <IonContent className="ion-padding">
      <IonGrid>
        <IonRow>
          <IonCol>
            <div className="ion-text-center">
              <strong>Sign in here</strong>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput
              name="email"
              clearInput
              type="email"
              placeholder="Email"
              class="input"
              padding-horizontal
              clear-input="true"
              onIonChange={(e: any) => setEmail(e.target.value)}>
            </IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput
              clearInput
              name="password"
              type="password"
              placeholder="Password"
              class="input"
              padding-horizontal
              clear-input="true"
              onIonChange={(e: any) => setPassword(e.target.value)}>
            </IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton onClick={handleLogin}
              type="submit"
              expand="block"
              class="btn-transition">
              <strong className="white">Sign In</strong>
            </IonButton>
          </IonCol>
        </IonRow>
        <div className="ion-text-center">
          <p>Don't have an account? <Link to="/register">Sign up</Link></p>
        </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
