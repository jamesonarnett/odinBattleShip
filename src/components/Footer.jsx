import styles from "../scss/Footer.module.scss";
import { GitBtn } from "./Buttons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <GitBtn />
        Created by Jameson Arnett for{" "}
        <a
          target={"_blank"}
          className={styles.anchorDecoration}
          href="https://www.theodinproject.com/"
          rel="noreferrer"
        >
          The Odin Project
        </a>
        <GitBtn />
      </p>
    </footer>
  );
};

export default Footer;
