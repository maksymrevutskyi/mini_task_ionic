import {
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonNote,
} from "@ionic/react";
// import { Message } from '../data/messages';
import { User } from "../data/user";
import "./MessageListItem.css";
import { trash } from "ionicons/icons";
interface UserListItemProps {
  user: User;
  deleteUser: Function;
}

const UserListItem: React.FC<UserListItemProps> = ({ user, deleteUser }) => {
  return (
    // <IonItem routerLink={`/message/${message.id}`} detail={false}>

    <></>
  );
};

export default UserListItem;
