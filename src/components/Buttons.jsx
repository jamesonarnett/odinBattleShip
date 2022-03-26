import { BsGithub } from "react-icons/bs";
import styles from "../scss/Buttons.module.scss";

export const GitButton = () => {
  return (
    <a
      target={"_blank"}
      className={styles.iconPadding}
      href="https://github.com/jamesonarnett"
      rel="noreferrer"
    >
      <BsGithub />
    </a>
  );
};
