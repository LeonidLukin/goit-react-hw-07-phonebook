import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';
import css from './Filter.module.css';

export default function Filter() {
    const valueFilter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const filterChange = e => dispatch(changeFilter(e.currentTarget.value));

    return (
        <label className={css.label}>
            <p className={css.text}>Find contacts by name</p>
            <input
                className={css.input}
                type="text"
                value={valueFilter}
                onChange={filterChange}
            />
        </label>
    );
}