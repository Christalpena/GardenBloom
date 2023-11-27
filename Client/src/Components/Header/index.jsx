import "./Header.css"
import { BsBagHeart } from "react-icons/bs";
import { LuSearch } from "react-icons/lu"
import {VscAccount} from 'react-icons/vsc'
import Nav from "./Nav";
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";

const Header = (props) => {
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
                <Badge badgeContent={props.items} color="success" >
                    <Link to={'/Catalog/shopcard'}>
                        <BsBagHeart 
                            className="header__icon"
                            size="1.9rem"
                            color="black" />
                    </Link>
                </Badge>

                <VscAccount 
                className="header__icon" 
                color="black" 
                size="1.8rem"/>
           </div>

           <div className="nav">
            <Nav />
           </div>

        </header>
    );
};

export default Header;