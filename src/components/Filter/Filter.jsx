import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import filteringValue from "../../redux/phoneBook/phoneBook-actions";

import styles from "./Filter.module.css";

Filter.propTypes = {
  filterInputValue: PropTypes.string,
  filterInputOnChange: PropTypes.func.isRequired,
};

function Filter({ filterInputValue, filterInputOnChange }) {
  return (
    <label className={styles.filter}>
      <p className="label">Find contacts by name</p>
      <input
        className="input"
        type="text"
        name="filter"
        value={filterInputValue}
        onChange={filterInputOnChange}
        placeholder="Enter query name"
      />
    </label>
  );
}

const mapStateToProps = ({contacts:{filter}}) => ({
  filterInputValue: filter,
});

const mapDispatchToProps = dispatch => ({
  filterInputOnChange: (e) => dispatch(filteringValue(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
