import "./Header.css"
import {PiShoppingCartSimpleBold} from 'react-icons/pi'
import { LuSearch } from "react-icons/lu"
import {VscAccount} from 'react-icons/vsc'
import Nav from "./Nav";

const Header = () => {

    return(
        <header>
           <div className="header">
                <img className="header__logo" src="img/GardenBloom-logo.png" alt="" />

                <form action="" className="header-form__content">
                    <input type="search" className="header-form__content__input" />
                    <button type="submi" className="header-form__content__btn"><LuSearch />
                    </button>
                </form>
                <div className="header__nav">
                    <Nav />
                </div>
                <PiShoppingCartSimpleBold className="header__icon"
                    size="1.5rem"
                    color="pink" />
                <VscAccount className="header__icon" color="pink" 
                size="1.5rem"/>
           </div>
           <div className="nav">
            <Nav />
           </div>

        </header>
    );
};

export default Header;