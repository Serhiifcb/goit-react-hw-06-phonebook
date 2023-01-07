import css from "../Filter/Filter.module.css";
import { useDispatch } from 'react-redux';
import { update } from 'components/redux/store';

export const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(update(event.currentTarget.value));
  }

  return (
    <div className={css.filterBlock}>
      <label>
        Find contacts by name <br />
        <input type="text" className={css.inputFilter} onChange={changeFilter} />
      </label>
    </div>
  )
}