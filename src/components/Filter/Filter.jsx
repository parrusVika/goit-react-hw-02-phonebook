import css from './Filter.module.css';

export function Filter({ value, onChange }) {
  return (
    <div className={css.filterForm}>
      <label className={css.filterEl}>
        <span className={css.filterTitle}>Finde contacts by name</span>
        <input type="text" value={value} onChange={onChange}></input>
      </label>
    </div>
  );
}
