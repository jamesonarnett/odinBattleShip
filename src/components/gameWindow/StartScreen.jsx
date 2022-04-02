import styles from "../../scss/StartScreen.module.scss";

const StartScreen = () => {
  return (
    <div className={styles.container}>
      <label htmlFor="name">Enter Player Name</label>
      <input id="name" type={"text"} placeholder="Combatant" />
      <button
        data-back="NOW"
        data-front="PLAY"
        className={styles.btnFlip}
        type=""
      ></button>
    </div>
  );
};

export default StartScreen;
