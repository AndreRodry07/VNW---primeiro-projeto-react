import Cards from "../../components/Cards/CardsMainSection1/Cards.jsx";
import CardsMainSec3 from "../../components/Cards/CardsMainSection3/CardsMainSec3.jsx";
import CardsMainSec5 from "../../components/Cards/CardsMainSection5/CardsMainSec5.jsx";
import ImageDisplay from "../imageDisplay/ImageDisplay.jsx";
import ReyN from "../../assets/video/ReyN.mp4";
import "../Main/main.css";
import "../Main/main-mediaqueries.css";

export default function Main() {
    return (
        <>
            <main>
                <ImageDisplay />
                <section id="section1" className="cards-section">
                    <Cards />
                </section>

                <section id="section2" className="quality-product">
                    <div className="quality-info">
                        <h2>GARANTIA DA QUALIDADE!</h2>
                        <p>
                            Em nossa produção, empregamos tecnologias de torrefação de grãos de última geração, assegurando um controle meticuloso sobre aroma, textura e sabor. Investimos em pesquisas constantes para aprimorar nossos
                            métodos, garantindo um processo de torrefação de ponta a ponta. Nosso compromisso com a qualidade se reflete em cada etapa, desde a seleção dos grãos até o momento em que chegam à sua xícara. Assim, entregamos
                            produtos finais de excelência, com um grau de torra uniforme e uma experiência sensorial inigualável.
                        </p>
                    </div>
                </section>

                <section className="cards-section">
                    <CardsMainSec3 />
                </section>

                <section className="individuality-section">
                    <div className="individ-info">
                        <h2>ABORDAGEM INDIVIDUAL</h2>
                        <p>
                            A individualidade está no centro da nossa filosofia. Convidamos você para o mundo da parceria flexível e individual. Nossa empresa oferece prontamente termos de cooperação exclusivos para pequenas e médias
                            empresas, bem como para o setor HoReCa. Consideramos cuidadosamente as necessidades únicas de cada cliente garantindo acesso a produtos da mais alta qualidade.
                        </p>
                    </div>
                </section>

                <section className="cards-section">
                    <CardsMainSec5 />
                </section>

                <section className="profit-price">
                    <div className="profit-info">
                        <h2>PREÇO RENTÁVEL</h2>
                        <p>
                            A nossa produção própria e o fornecimento direto de matérias-primas de fabricantes confiáveis criam a base para os nossos preços preferenciais tanto no varejo como no atacado. Nossa capacidade de controlar todas
                            as etapas da produção e garantir volumes significativos nos permite oferecer preços competitivos, combinando qualidade excepcional com preço acessível.
                        </p>
                    </div>
                </section>

                <section className="video-reynegro">
                    <div className="video-content">
                        <video width="300" height="300" controls>
                            <source src={ReyN} type="video/mp4" />
                        </video>
                    </div>
                </section>
            </main>
        </>
    );
}
