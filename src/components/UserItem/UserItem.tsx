import { User } from "../../models/User";
import styles from "./UserItem.module.css";
const UserItem = (user: User) => {
  return (
    <div className={styles.user_item}>
      <img src={user.avatar} className={styles.photo} />
      <div className={styles.info}>{user.first_name} {user.last_name}</div>
    </div>
  );
};

export default UserItem;
