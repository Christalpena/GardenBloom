import "./Header.css"
import { BsBagHeart } from "react-icons/bs";
import { LuSearch } from "react-icons/lu"
import Badge from '@mui/material/Badge';
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ListFlowers } from "../../Api/FlowersInf";
import { useNavigate } from "react-router-dom";

const pillTabs = [
    "Home",
    "Catalog",
    "Services",
    "Contacts",
];
const Header = (props) => {

    const [flower,setFlower] = useState();
    const flowers = ListFlowers();
    const navigate = useNavigate()

    const capitalizeFirstLetter = (string) => {
        return string
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      };
      
    const searchFlowers = (e)=> {
        e.preventDefault();
        const newFlower = capitalizeFirstLetter(flower)
        const data = flowers.filter(flower => flower.name.includes(newFlower))
        navigate("/Catalog",{ state: { data: data } })
    };
    

    return(
        <header>
           <div className="header">
                <img className="header__logo" src="/img/logo.png" alt="" />

                <form className="header-form__content" onSubmit={searchFlowers}>
                    <input className="header-form__content__input" onChange={(e) => setFlower(e.target.value)}
                    placeholder="Search Flowers by Name"
                    />
                    <button className="header-form__content__btn">
                        <LuSearch size={'1.5rem'} />
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