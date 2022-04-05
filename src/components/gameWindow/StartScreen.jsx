import React, { useState } from "react";
import styles from "../../scss/StartScreen.module.scss";

const StartScreen = () => {
  const [name, setName] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setName(name.trim());

    if (!name.trim()) {
      throw new Error("Name required");
    }

    if (name.trim().length > 15) {
      throw new Error("Name too long");
    }
    //more to come here || setError state?
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label htmlFor="name">Enter Player Name</label>
      <input
        onChange={handleName}
        id="name"
        name="name"
        type="text"
        placeholder="Combatant"
      />
      <button
        data-back="NOW"
        data-front="PLAY"
        className={styles.btnFlip}
        type=""
      ></button>
    </form>
  );
};

export default StartScreen;
