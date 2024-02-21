import styles from '../../styles/Header.module.scss';
const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Todo List</h1>
      <p>Items will persist in the browser local storage</p>
    </header>
  );
};

export default Header;
