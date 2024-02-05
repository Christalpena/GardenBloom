import "./Home.css"
import { ListFlowers } from "../../Api/FlowersInf"
import FlowerCard from "../Catalog/FlowerCard"
import SimpleSnackbar from "../Catalog/Alert"

export function  Home(props) {

    const flowers = ListFlowers()
    const filterdFlowers = flowers.filter(flower => flower.discount > 0);
    const discount = filterdFlowers.slice(0,6)
    const flowersImg = flowers.slice(0,6)
    return(
        <section className="home">
            <div className="home__welcome">
                <div className="home__introduction">
                    <h1 className="home__pageName">GARDEN BLOOM</h1>
                    <h3 className="home__h3">Welcome to our enchanting flower emporium, where the beauty of nature intertwines with affordability.</h3>
                    <h4 className="home__slogan">"Blooms of Joy, Nature's Elegance Unleashed!"</h4>
                </div>
            </div>
            <section className="home__container">
                <div className="home__description">
                        <p>
                        Welcome to our enchanting flower emporium, where the beauty of nature intertwines with affordability. At our flower shop, we take pride in curating a splendid collection of blooms that not only captivate the senses but also come with the promise of the best prices and delightful discounts.
                        </p>
                        <p>
                        Immerse yourself in a kaleidoscope of colors and fragrances as you explore our carefully selected assortment of flowers. Whether you're celebrating a special occasion, expressing love and gratitude, or simply brightening someone's day, our diverse range of blooms is designed to suit every moment and budget.
                        </p>
                </div>

                <section className="home__discount">
                    <h1 className="home__title home__title-margin">Just the best for you</h1>
                    <div className="home__discountCards">
                        {
                            discount.map((flower) => 
                            <FlowerCard 
                                key={flower.id}
                                id={flower.id}
                                name={flower.name}
                                img={flower.image}
                                addItem={props.addItem}
                                items={props.items}
                                discount={flower.discount}
                                price={flower.price}
                                setOpen={props.setOpen}
                                open={props.open}

                            />
                            )
                        }
                    </div>
                </section>

                <section className="home__phrase">
                    <div className="home__p">
                        <h3>Embrace the beauty of nature with our exquisite blooms</h3>
                        <h1>where every petal tells a story of elegance</h1>
                        <h3>and the timeless charm of flowers.</h3>
                    </div>
                </section>
                
                <section className="home__gallery">
                    <h1 className="home__title">Our Gallery</h1>
                    <div className="home__galleryDiv">
                        {
                            flowersImg.map((flower) => 
                                <img key={flower.name} className="home__galleryImg" src={flower.image} alt="" />
                            )
                        }
                    </div>
                </section>
            </section>
            {
                props.open ? <SimpleSnackbar setOpen={props.setOpen} /> : <></>
            }
        </section>
    )
};
