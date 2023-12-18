import "./ShopCard.css"
import img from "/img/flowerShopCart.png"
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";

const ShopCard = (props) => {

    //This function is to calculate the discount of an item
    const discountCalculator =(discount, subTotal) => {
        return ((discount * subTotal)/100).toFixed(2);
    };

    //This function gives me the total of all the items in the cart
    const total =() => {
        let total = 0;
        props.items.map((item) => {
            if(item.discount){
                total = Number(((item.discount * item.subTotal) / 100) + total);
            } else {
                total += Number(item.subTotal);
            }
        })
        return total;

    }

    const rest = (id) => {
        props.setItems(prevItems => 
            prevItems.map(item => 
                item.id === id ?
                {
                    ...item,quantity: item.quantity - 1,
                    subTotal: item.subTotal - item.price
                } : item).filter(item => item.quantity !== 0)
                );
    };

    return(
        <section className="shopCart">
                { props.items.length !== 0 ?
                    <section className="shopCart__container">
                        <div>
                            <div className="shopCart__titleContainer">
                                <h2 className="shopCart__title">Description</h2>
                                <h2 className="shopCart__title">Quantity</h2>
                                <h2 className="shopCart__title">Total</h2>

                            </div>
                        {
                        props.items.map((item) => 
                            <div className="shopCart__items">
                                <div className="grid-item shopCart__item-display">
                                    <img src={item.image} alt="" className="shopCart__img" />
                                    <div className="shopCart__description">
                                        <p>{item.name}</p>
                                        <p>Price:{item.price}</p>
                                        { item.discount ? <p>Discount:  -{item.discount}%</p> : <></>}
                                    </div>
                                </div>
                                <div class="grid-item shopCart__btn-display">
                                <FaPlus 
                                onClick={()=>{
                                    props.addItem({
                                        id:item.id
                                    })
                                }
                                }
                                size={'1.5rem'} 
                                className="card__icon" 
                                />

                                <h4>{item.quantity}</h4>

                                <TiMinus  
                                onClick={() => rest(item.id)} size={'1.5rem'} className="card__icon" />
                                </div>

                                <div class="grid-item">
                                    { 
                                    item.discount ? 
                                        <p>
                                            {discountCalculator(item.discount,item.subTotal)}
                                        </p>
                                    : <p>{item.subTotal}</p>
                                    }
                                </div> 
                            </div>
                            )
                        }

                        <div className="shopCart__total-container">
                            <button className="shopCart__orderbtn">buy</button>
                            <p className="shopCart__total">Total: {total()}</p>
                        </div>
                        </div>
                    </section>
                    :
                    <div className="shopCart__empty">
                        <h1 className="shopCart__title">The shop cart is empty</h1>
                        <img className="shopCart__emptyimg" src={img} alt="" />
                        <br />

                    </div>
                }
                
        </section>
    )
};

export default ShopCard;