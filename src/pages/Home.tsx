import UserListItem from "../components/UserListItem";
import { useState } from "react";

import { User, getUsers } from "../data/user";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonIcon,
  IonRefresher,
  IonItem,
  IonNote,
  IonItemOption,
  IonLabel,
  IonItemOptions,
  IonItemSliding,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import "./Home.css";
import { trash } from "ionicons/icons";
const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  useIonViewWillEnter(() => {
    loadUsers();
  });

  const refresh = (e: CustomEvent) => {
    console.log("refresh");
    loadUsers();
  };
  const loadUsers = () => {
    getUsers().then((users) => {
      setUsers(users);
    });
  };
  const deleteUser = (user: User) => {
    console.log("deleteUser", user.email);
    var newUsers: User[] = [];
    users.forEach((item) => {
      if (item.email !== user.email) {
        newUsers.push(item);
      }
    });
    setUsers(newUsers);
  };
  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Users</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {users.map((m) => (
            <IonItemSliding key={m.email}>
              <IonItemOptions>
                <IonItemOption color="danger" onClick={() => deleteUser(m)}>
                  <IonIcon slot="icon-only" icon={trash}></IonIcon>
                </IonItemOption>
              </IonItemOptions>

              <IonItem detail={false}>
                <div slot="start" className="dot dot-unread"></div>
                <IonLabel className="ion-text-wrap">
                  <h2>
                    {m.name.first + " " + m.name.last}
                    <span className="date">
                      <IonNote>{m.dob.date}</IonNote>
                    </span>
                  </h2>
                  {/* <h3>{message.subject}</h3> */}
                </IonLabel>
              </IonItem>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
