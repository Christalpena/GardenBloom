import "./Header.css"
import { BsBagHeart } from "react-icons/bs";
import { LuSearch } from "react-icons/lu"
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
const pillTabs = [
    "Home",
    "Catalog",
    "Services",
    "Contacts",
];
const Header = (props) => {
    return(
        <header>
           <div className="header">
                <img className="header__logo" src="/img/logo.png" alt="" />

                <form action="" className="header-form__content">
                    <input className="header-form__content__input" />
                    <button type="submi" className="header-form__content__btn"><LuSearch size={'1.5rem'} />
                    </button>
                </form>
                <div className="header__links">
                    {
                        pillTabs.map((link) => 
                            <Link key={link} to={link}>{link}</Link>
                        )
                    }
                </div>
                <Badge badgeContent={props.items.length} color="success">
                        <Link to={'/Catalog/shopcart'}
                        >
                            <BsBagHeart 
                                className="header__icon"
                                color="black" 
                                
                            />
                        </Link>
                </Badge>


           </div>
        </header>
    );
};

export default Header;