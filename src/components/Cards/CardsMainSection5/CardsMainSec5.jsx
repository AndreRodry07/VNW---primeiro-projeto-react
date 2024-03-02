import DescriProduct from "../../DescriptionProduct/DescriProduct.jsx";
import ButtonCard from "../../buttonCard/ButtonCard.jsx";
import ImageCard7 from "../../../assets/images/ImageCard7.png";
import ImageCard8 from "../../../assets/images/ImageCard8.png";
import ImageCard9 from "../../../assets/images/ImageCard9.png";

export default function CardsMainSec5() {
    return (
        <>
            <article className="card-product">
                <div className="image-description">
                    <img src={ImageCard7} alt="café rey negro" />
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
                    <img src={ImageCard8} alt="café rey negro" />
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
                    <img src={ImageCard9} alt="café rey negro" />
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
