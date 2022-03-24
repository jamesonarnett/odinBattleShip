import { BsGithub } from "react-icons/bs";
import styles from "../scss/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <a
          className={styles.iconPadding}
          href="https://github.com/jamesonarnett"
        >
          <BsGithub />
        </a>
        Created by Jameson Arnett for{" "}
        <a
          className={styles.anchorDecoration}
          href="https://www.theodinproject.com/"
        >
          The Odin Project
        </a>
        <a
          className={styles.iconPadding}
          href="https://github.com/jamesonarnett"
        >
          <BsGithub />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
