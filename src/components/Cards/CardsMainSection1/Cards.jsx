import DescriProduct from "../../DescriptionProduct/DescriProduct.jsx";
import ButtonCard from "../../buttonCard/ButtonCard.jsx";
import ImageCard1 from "../../../assets/images/ImageCard1.png";
import ImageCard2 from "../../../assets/images/ImageCard2.png";
import ImageCard3 from "../../../assets/images/ImageCard3.png";

export default function Cards() {
    return (
        <>
            <article className="card-product">
                <div className="image-description">
                    <img src={ImageCard1} alt="café rey negro" />
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
                    <img src={ImageCard2} alt="café rey negro" />
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
                    <img src={ImageCard3} alt="café rey negro" />
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
