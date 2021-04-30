import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../ExploreContainer';
import './Programs.css';


const ProgramsPage: React.FC = () => {
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar >
          
          <IonImg className ="logo" src="./assets/logo.png"/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default ProgramsPage;
