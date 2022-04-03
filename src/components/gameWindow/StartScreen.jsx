import styles from "../../scss/StartScreen.module.scss";
import React from 'react';

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.container}>
        <label htmlFor="name">Enter Player Name</label>
        <input onChange={this.handleChange} value={this.state.value} id="name" type={"text"} placeholder="Combatant" />
        <button
          data-back="NOW"
          data-front="PLAY"
          className={styles.btnFlip}
        ></button>
      </form>
    );
  }
}

export default StartScreen;
