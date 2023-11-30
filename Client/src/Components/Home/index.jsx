import "./Home.css"
import { ListFlowers } from "../../Api/FlowersInf"
import FlowerCard from "../Catalog/FlowerCard"
import { IoLocationSharp } from "react-icons/io5";

const locations = ['Distrito Nacional','Santiago','Santo Domigo','Puerto Plata','La vega','La Romana', 'Duarte','San Cristobal','Barahona','Azua']
export function  Home(props) {

    const flowers = ListFlowers()
    console.log(flowers)
    const filterdFlowers = flowers.filter(flower => flower.discount > 0);
    const firstTen = filterdFlowers.slice(0,10)
    console.log(firstTen)
    return(
        <section className="home">
            <div className="home__welcome">
                <img className="home__img" src="img/background.png" alt="" />

                <h1 className="home__pageName">GARDEN BLOOM</h1>
            </div>
            <section className="home__container">
                <div className="home__description">
                    <img className="home__img2" src="https://img.freepik.com/premium-photo/bouquet-pink-carnations-design-concept-holiday-greeting-with-carnation-bouquet-pink-table-b_90258-3785.jpg" alt="" />
                    <div className="home__paragraphs">
                        <p>
                        Welcome to our enchanting flower emporium, where the beauty of nature intertwines with affordability. At our flower shop, we take pride in curating a splendid collection of blooms that not only captivate the senses but also come with the promise of the best prices and delightful discounts.
                        </p>
                        <p>
                        Immerse yourself in a kaleidoscope of colors and fragrances as you explore our carefully selected assortment of flowers. Whether you're celebrating a special occasion, expressing love and gratitude, or simply brightening someone's day, our diverse range of blooms is designed to suit every moment and budget.
                        </p>
                    </div>
                </div>
                <h1 className="home__title">Locations</h1>
                <section className="home__locations">
                    <ul>
                        {
                            locations.map(location => 
                                <li><IoLocationSharp size={'2rem'} />{location}
                                </li>
                            )
                        }
                    </ul>
                </section>
                <h1 className="home__title">Catch this discount now!!</h1>
                <section className="home__discount">
                    {
                    firstTen.map((flower) => 
                    <FlowerCard 
                        key={flower.id}
                        id={flower.id}
                        name={flower.name}
                        img={flower.image}
                        setItems={props.setItems}
                        items={props.items}
                        discount={flower.discount}
                        price={flower.price}

                    />
                    )
                    }
                </section>
            </section>
        </section>
    )
};
