import styles from "../scss/Header.module.scss";
import smallShipLogo from "../assets/smallShipLogo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={smallShipLogo} alt="battleShip game logo" />
    </header>
  );
};

export default Header;
