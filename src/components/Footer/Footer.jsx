import FormFooter from "../formFooter/FormFooter.jsx";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/images/logo.png";
import ImageFooter1 from "../../assets/images/ImageFooter1.png";
import ImageFooter2 from "../../assets/images/ImageFooter2.png";
import "../Footer/footer.css";
import "../Footer/footer-mediaqueries.css";

export default function Footer() {
    return (
        <>
            <footer id="footer-price">
                <h2>OBTENHA O PREÇO AGORA MESMO!</h2>

                <div>
                    <img src={ImageFooter1} alt="image logo" className="image-footer-one" />
                    <img src={ImageFooter2} alt="image logo" className="image-footer-two" />
                </div>

                <section className="clients-comporate">
                    <div className="form-clients-corporate">
                        <h3>OFERECEMOS A CLIENTES CORPORATIVOS</h3>
                        <p>Condições individuais! Para empresas, escritórios, restaurantes, cafeterias e hotéis.</p>
                    </div>

                    <FormFooter />
                </section>

                <section className="social-footer">
                    <figure className="logo-footer">
                        <img src={Logo} alt="logo footer" />
                    </figure>

                    <nav className="nav-footer">
                        <a href="https://www.instagram.com/accounts/login/" target="_blank">
                            <FaInstagramSquare className="insta-icon" />
                        </a>
                        <a href="https://www.facebook.com/?locale=pt_BR" target="_blank">
                            <FaFacebook className="face-icon" />
                        </a>
                        <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D" target="_blank">
                            <FaXTwitter className="x-icon" />
                        </a>
                    </nav>
                </section>
            </footer>
        </>
    );
}
