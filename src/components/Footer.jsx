import styles from "../scss/Footer.module.scss";
import { GitButton } from "./Buttons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <GitButton />
        Created by Jameson Arnett for{" "}
        <a
          target={"_blank"}
          className={styles.anchorDecoration}
          href="https://www.theodinproject.com/"
          rel="noreferrer"
        >
          The Odin Project
        </a>
        <GitButton />
      </p>
    </footer>
  );
};

export default Footer;
