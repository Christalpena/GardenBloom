import "./Header.css"
import {LiaShoppingBagSolid} from 'react-icons/lia'
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
                <LiaShoppingBagSolid className="header__icon"
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