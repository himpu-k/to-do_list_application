import Header from 'components/todo/Hearder';
import { useAuthContext } from '../../context/AuthContext';
import styles from '../../styles/Profile.module.scss';

const Profile = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <Header>
        <h1>Profile.</h1>
      </Header>
      <div className={styles.profile}>
        <h2>Hello, {user}</h2>
      </div>
    </div>
  );
};
export default Profile;
