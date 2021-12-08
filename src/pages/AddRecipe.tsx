import { IonContent, IonHeader, IonToolbar, IonTitle, IonPage, IonButton, IonButtons, IonBackButton, IonList, IonItemDivider, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonTextarea } from '@ionic/react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../firebaseConfig";
import { useHistory } from 'react-router';
import { toast } from '../components/toast';

const AddRecipe: React.FC = () => {
  const [ title, setTitle ] = useState('');
  const [ category, setCategory ] = useState('');
  const [ content, setContent ] = useState('');
  const history = useHistory();

  const handleAddRecipe = async () => {
    const collectionRef = collection(db, "recipes");
    const payload = { title, category, content, timestamp: serverTimestamp() };
    await addDoc(collectionRef, payload);
    history.replace('/dashboard');
    toast('Posting recipe successful');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="warning">
          <IonButtons slot="start">
            <IonBackButton color="light" defaultHref="/dashboard" />
          </IonButtons>
          <IonTitle color="light">Add Recipe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItemDivider>Title</IonItemDivider>
          <IonItem>
            <IonInput placeholder="Enter recipe title" onIonChange={(e: any) => setTitle(e.target.value)} ></IonInput>
          </IonItem>

          <IonItemDivider>Category</IonItemDivider>
          <IonItem>
            <IonLabel>Select recipe category</IonLabel>
            <IonSelect onIonChange={(e: any) => setCategory(e.target.value)}>
              <IonSelectOption value="Beverages">Beverages</IonSelectOption>
              <IonSelectOption value="Dessert">Dessert</IonSelectOption>
              <IonSelectOption value="Noodles">Noodles</IonSelectOption>
              <IonSelectOption value="Rice">Rice</IonSelectOption>
              <IonSelectOption value="Snacks">Snacks</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItemDivider>Recipe detail</IonItemDivider>
          <IonItem>
            <IonTextarea placeholder="Enter recipe detail" rows={10} cols={20} onIonChange={(e: any) => setContent(e.target.value)}></IonTextarea>
          </IonItem>
        </IonList>
      <IonButton onClick={handleAddRecipe} color="warning" expand="block" strong>Add Recipe</IonButton>
    </IonContent>
    </IonPage>
  );
};

export default AddRecipe;
