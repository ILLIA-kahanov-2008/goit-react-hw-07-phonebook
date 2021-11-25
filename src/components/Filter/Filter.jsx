import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filteringValue } from '../../redux/phoneBook/phoneBook-actions';
import { getFilter } from '../../redux/phoneBook/selectors';

import styles from './Filter.module.css';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterInputOnChange = e =>
    dispatch(filteringValue(e.currentTarget.value));
  return (
    <label className={styles.filter}>
      <p className="label">Find contacts by name</p>
      <input
        className="input"
        type="text"
        name="filter"
        value={filter}
        onChange={filterInputOnChange}
        placeholder="Enter contact name"
      />
    </label>
  );
}

export default Filter;
