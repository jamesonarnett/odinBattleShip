import styles from "../../scss/GameArea.module.scss";

const GameArea = () => {
  return (
    <div className={styles.gameArea}>
      <div className={styles.titleBox}>
        <h2>FRIENDLY WATERS</h2>
        <div className={styles.gameBoardOne}></div>
      </div>

      <div className={styles.titleBox}>
        <h2>ENEMY WATERS</h2>
        <div className={styles.gameBoardTwo}></div>
      </div>
    </div>
  );
};

export default GameArea;
