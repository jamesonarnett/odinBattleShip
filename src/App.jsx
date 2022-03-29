import React from "react";
import Header from "./components/Header";
import TextBox from "./components/TextBox";
import Footer from "./components/Footer";
// eslint-disable-next-line
import styles from "./scss/App.module.scss";
import GameArea from "./components/GameArea";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <TextBox />
      <GameArea />
      <Footer />
    </React.Fragment>
  );
};

export default App;
