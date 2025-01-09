import React from "react";
import PropTypes from "prop-types";
import "./TeslaWheels.css";

const LabelLists = ({ value, changeHandler }) => {
  const sizes = [19, 21];
  const LabelItems = sizes.map((size) => (
    <label
      key={size}
      className={`tesla-wheels__item tesla-wheels__item--${size} ${
        value === size ? "tesla-wheels__item--active" : ""
      }`}
    >
      <input
        type="radio"
        name="wheelsize"
        value={size}
        checked={value === size}
        onChange={() => {
          changeHandler(size);
        }}
      />
      <p>{size}"</p>
    </label>
  ));
  return <div>{LabelItems}</div>;
};

const TeslaWheels = ({ value, changeHandler }) => (
  <div className="tesla-wheels__component">
    <p className="tesla-wheels__title">Wheels</p>
    <div className="tesla-wheels__container cf">
      <LabelLists value={value} changeHandler={changeHandler} />
    </div>
  </div>
);

TeslaWheels.propTypes = {
  value: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

LabelLists.propTypes = {
  value: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default TeslaWheels;