import styles from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <div className={styles.container}>
            <div>
                <input type="text" placeholder="enter min price"/>
                <input type="text" placeholder="enter max price"/>

            </div>

            <button>Search</button>
        </div>
    );
};

export default SearchBar;