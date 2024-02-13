import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonToolbar,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  addOutline,
  albumsOutline,
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  cubeOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  swapHorizontal,
  trashOutline,
  trashSharp,
  tvOutline,
  warningOutline,
  warningSharp,
} from "ionicons/icons";
import { ConnectButton } from "./ConnectButton";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  // {
  //   iosIcon: albumsOutline,
  //   mdIcon: albumsOutline,
  //   title: "Bridge",
  //   url: "/bridge",
  // },
  // { iosIcon: tvOutline, mdIcon: tvOutline, title: "Bonds", url: "/bonds" },
  { iosIcon: swapHorizontal, mdIcon: swapHorizontal, title: "Swap", url: "/swap" },
  // { iosIcon: addOutline, mdIcon: addOutline, title: "Mint", url: "/mint" },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonHeader>
      <IonToolbar color="dark">
        <IonButtons slot="start">
        <img style={{height:'100px'}} src={'/splash.png'}/>
          {/* {appPages.map((appPage, index) => {
            return (
              <IonButton
                key={index}
                routerLink={appPage.url}
                color='tertiary'
                fill={location.pathname === appPage.url ? "solid" : "clear"}
              >
                <IonIcon
                  aria-hidden="true"
                  slot="start"
                  ios={appPage.iosIcon}
                  md={appPage.mdIcon}
                />
                <IonLabel>{appPage.title}</IonLabel>
              </IonButton>
            );
          })} */}
        </IonButtons>
        {/* <IonButtons slot="end">
          <ConnectButton />
        </IonButtons> */}
      </IonToolbar>
    </IonHeader>
  );
};

export default Menu;
