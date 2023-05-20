import SearchBar from '../Search/SearchBar';
import Random from '../Ramdon/Random';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav(props) {
    const { onSearch, logout } = props;
    return (
        <div className={style.nav}>
            <div className={style.containerSearch}>
            <SearchBar onSearch={onSearch} />
            </div>
            <div className={style.containerBtn}>
                <Random onSearch={onSearch}/>
                <Link to='/about'>
                    <button className={style.btn}>About</button>
                </Link>
                <Link to='/home'>
                    <button className={style.btn}>Home</button>
                </Link>
                <Link to='/favorites'>
                    <button className={style.btn}>Favorites</button>
                </Link>
                <button className={style.btn} onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Nav;