import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// eslint-disable-next-line
import styles from "./scss/App.module.scss";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
  );
};

export default App;
