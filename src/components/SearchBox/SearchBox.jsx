import { useId } from 'react';
import style from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors'; 

const SearchBox = () => {
  const elementId = useId();
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={style.container}>
      <label className={style.label} htmlFor={elementId}>
        Find contacts by name  
      </label>
      <input
        value={value}
        onChange={handleChange}
        className={style.input}
        type="text"
        id={elementId}
        placeholder="Name"
      />
    </div>
  );
};

export default SearchBox;