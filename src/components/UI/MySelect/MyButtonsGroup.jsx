import React from "react";
import cl from "./MySelect.module.css";

const MyButtonGroup = ({ activeButton, handleChange }) => {
  return (
    <div className={cl.buttons_group}>
      <button
        className={`first ${cl.btn} ${activeButton[0] ? cl.selected : ""}`}
        value="1"
        onClick={handleChange}
      >
        Сегодня
      </button>
      <button
        className={`second ${cl.btn} ${activeButton[1] ? cl.selected : ""}`}
        value="3"
        onClick={handleChange}
      >
        3 дня
      </button>
      <button
        className={`third ${cl.btn} ${activeButton[2] ? cl.selected : ""}`}
        value="7"
        onClick={handleChange}
      >
        7 дней
      </button>
    </div>
  );
};

export default MyButtonGroup;
