import React, {useState} from "react";
import Header from "./components/Header";
import TextBox from "./components/TextBox";
import GameArea from "./components/gameWindow/GameArea";
import StartScreen from "./components/gameWindow/StartScreen";
import Footer from "./components/Footer";
// eslint-disable-next-line
import styles from "./scss/App.module.scss";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      {/* <TextBox />
      <GameArea /> */}
      <StartScreen />
      <Footer />
    </React.Fragment>
  );
};

export default App;
