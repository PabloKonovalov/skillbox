import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import styles from "./Header.css";

class HeaderComponent extends Component {
  state = {
    textIsShow: false,
  };
  render() {
    const { textIsShow } = this.state;
    return (
      <header>
        <h2 className={styles['text-salmon-color']}>
          Skillbox lessons started!
        </h2>
        <button
          className={styles.button}
          onClick={() =>
            this.setState((prev) => ({ textIsShow: !prev.textIsShow }))
          }
        >
          {textIsShow ? "hide" : "show"}
        </button>
        {textIsShow && <h3> Here i'm</h3>}
        <p className={styles['text-mint-color']}>
          It replace code without page reloading
        </p>
      </header>
    );
  }
}

// export default HeaderComponent;
export default hot(HeaderComponent);