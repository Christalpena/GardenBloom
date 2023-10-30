import "./Header.css"

const Header = () => {
    return(
        <header className="header">
            <img className="header__logo" src="img/GardenBloom-logo.png" alt="" />

            <form action="" className="header-form__content">
                <input type="search" className="header-form__content__input" />
                <button type="submi" className="header-form__content__btn">Buscar
                </button>
            </form>
            <nav className="header-nav__content">
                <p>Home</p>
                <p>Catalog</p>
                <p>Contacts</p>
                <p>About Us</p>
                <p>Car</p>
                <p>My Account</p>
            </nav>
        </header>
    );
};

export default Header;