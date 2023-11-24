import "./Header.css"
import { BsBagHeart } from "react-icons/bs";
import { LuSearch } from "react-icons/lu"
import {VscAccount} from 'react-icons/vsc'
import Nav from "./Nav";

const Header = () => {

    return(
        <header>
           <div className="header">
                <img className="header__logo" src="/img/logo.png" alt="" />

                <form action="" className="header-form__content">
                    <input type="search" className="header-form__content__input" />
                    <button type="submi" className="header-form__content__btn"><LuSearch size={'1.5rem'} />
                    </button>
                </form>
                <div className="header__nav">
                    <Nav />
                </div>
                <BsBagHeart className="header__icon"
                    size="1.9rem"
                    color="black" />
                <VscAccount className="header__icon" color="black" 
                size="1.8rem"/>
           </div>
           <div className="nav">
            <Nav />
           </div>

        </header>
    );
};

export default Header;