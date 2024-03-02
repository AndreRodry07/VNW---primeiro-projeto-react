import DescriProduct from "../../DescriptionProduct/DescriProduct.jsx";
import ButtonCard from "../../buttonCard/ButtonCard.jsx";
import ImageCard4 from "../../../assets/images/ImageCard4.png";
import ImageCard5 from "../../../assets/images/ImageCard5.png";
import ImageCard6 from "../../../assets/images/ImageCard6.png";
import "../../Cards/CardsCss/cards.css";
import "../../Cards/CardsCss/cards-mediaqueries.css";

export default function CardsMainSec3() {
    return (
        <>
            <article className="card-product">
                <div className="image-description">
                    <img src={ImageCard4} alt="café rey negro" />
                    <DescriProduct />
                </div>
                <div className="product-summary">
                    <h3 className="title-card">Rey Negro Arábica</h3>
                    <p>100% Arábica</p>
                </div>
                <ButtonCard />
            </article>

            <article className="card-product">
                <div className="image-description">
                    <img src={ImageCard5} alt="café rey negro" />
                    <DescriProduct />
                </div>
                <div className="product-summary">
                    <h3 className="title-card">Rey Negro Arábica</h3>
                    <p>100% Arábica</p>
                </div>
                <ButtonCard />
            </article>

            <article className="card-product">
                <div className="image-description">
                    <img src={ImageCard6} alt="café rey negro" />
                    <DescriProduct />
                </div>
                <div className="product-summary">
                    <h3 className="title-card">Rey Negro Arábica</h3>
                    <p>100% Arábica</p>
                </div>
                <ButtonCard />
            </article>
        </>
    );
}
