import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Register.css';
import { registerUser } from '../firebaseConfig';
import { toast } from '../components/toast';

const Register: React.FC = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ cpassword, setCPassword ] = useState('');

  async function handleRegister() {
    if(password !== cpassword) {
      return toast('Passwords do not match');
    }
    if(email.trim() === '' || password.trim() === '') {
      return toast('Email and password are required');
    }

    const res = await registerUser(email, password);
    if(res) {
      toast('You have successfully signed up');
    }
  }

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonRow>
          <IonCol>
            <div className="ion-text-center">
              <strong>Sign up here</strong>
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
            <IonInput
              clearInput
              name="cpassword"
              type="password"
              placeholder="Confirm Password"
              class="input"
              padding-horizontal
              clear-input="true"
              onIonChange={(e: any) => setCPassword(e.target.value)}>
            </IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton onClick={handleRegister}
              type="submit"
              expand="block"
              class="btn-transition">
              <strong className="white">Sign Up</strong></IonButton>
          </IonCol>
        </IonRow>
        <div className="ion-text-center">
          <p>Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
