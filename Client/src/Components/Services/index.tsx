import ServiceCard from "./ServiceCard";
import React from "react";
import "./Services.css"

const Services = () => {
    return(
        <section className="services">
            <ServiceCard
                img="img/Services/flowerBouquetService.jpg"
                title="Flower Bouquet"
                description="
                An artistic arrangement of carefully selected flowers creatively organized. Flower bouquets can cater to various occasions and preferences, making them the perfect gift to express emotions and celebrate special moments.
                "
            />
            <ServiceCard
                img="img/Services/WeddingBoutquetService.jpeg"
                title="Wedding Bouquet"
                description="
                An exquisite bouquet of flowers designed specifically to enhance the bride's beauty on her special day. Each arrangement is carefully crafted to complement the style and theme of the wedding, creating a unique and memorable floral accessory.
                "
                direction='serviceCard-direction'
            />
            <ServiceCard
                img="img/Services/partyBouquetService.jpg"
                title="Party Flower Bouquet"
                description="
                Vibrant and festive floral arrangements designed to beautify and enhance the atmosphere of any celebration. These cheerful and colorful bouquets are the perfect choice for decorating social events, parties, and special occasions, adding a unique and charming floral touch.
                "
            />
            <ServiceCard
                img="img/Services/flowerCareService.jpeg"
                title="Flower Care"
                description="
                A comprehensive service that ensures the well-being and longevity of your flowers. From the supply of fresh flowers to advice on care and maintenance, Flower Care is committed to providing the necessary attention to ensure your floral arrangements look radiant for a longer time, extending their beauty and freshness.
                "
                direction='serviceCard-direction'

            />
            <ServiceCard
                img="img/Services/flowerBouquetService.jpg"
                title="Flower Bouquet"
                description="
                An artistic arrangement of carefully selected flowers creatively organized. Flower bouquets can cater to various occasions and preferences, making them the perfect gift to express emotions and celebrate special moments
                "
            />
            


        </section>
    )
};

export default Services;