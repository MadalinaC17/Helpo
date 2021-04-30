import React, { useCallback } from "react";
import { square } from "ionicons/icons";
import {
  IonCard,
  IonLabel,
  IonText,
  IonSkeletonText,
  IonChip,
  IonRouterLink,
  IonImg,
  IonButtons,
  IonCardContent,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCol,
  IonRow,
  IonGrid,
} from "@ionic/react";
import styles from "./ProgramsCard.module.css";

interface ProgramsCardProps {
  guid: string;
  title?: string;
  subtitle?: string;
  theme?: string;
  imageSrc?: string;
  hideStartButton?: boolean;
}

export const ProgramsCard: React.FC<ProgramsCardProps> = ({
  guid,
  title,
  subtitle,
  theme,
  imageSrc,
}) => {
  return (
    <IonCard className={styles.card}>
      {imageSrc && (
        <div className={styles.imageContainer}>
          <IonImg
            className={styles.featureImage}
            src={imageSrc}
            alt="program feature image"
          />
        </div>
      )}
      <IonCardContent className={styles.cardContent}>
        <IonGrid class="ion-no-padding">
          <IonRow>
            <IonCol className="ion-justify-content-start" size="11">
              <IonTitle
                className={`ion-no-padding ${styles.title}`}
                color="dark"
                size="small"
              >
                {title}
              </IonTitle>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonText color="dark">
          <p className={styles.subtitle}>{subtitle}</p>
        </IonText>
      </IonCardContent>
      <IonToolbar className={styles.cardButtons}>
        <IonButtons slot="end">Start Program</IonButtons>
      </IonToolbar>
    </IonCard>
  );
};
