import { BsGithub, BsPlayFill } from "react-icons/bs";
import styles from "../scss/Buttons.module.scss";

export const GitBtn = () => {
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

export const PlayBtn = () => {
  return <BsPlayFill />;
};
