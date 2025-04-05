import s from './SearchBox.module.css'
const SearchBox = ({ value, onChange }) => {
    return (
        <div className={s.box}>
            <h2 className={s.text}> Find contacts by name</h2>
            <input className={s.input}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}

            />
        </div>
    );
};

export default SearchBox;