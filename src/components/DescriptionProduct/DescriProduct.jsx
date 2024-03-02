import "../../components/DescriptionProduct/description-product.css";

export default function DescriProduct() {
    return (
        <>
            <ul className="card-list">
                <li>
                    <span className="product-info">Ingredientes:</span> Grãos de café torrados naturais.
                </li>
                <li>
                    <span className="product-info">Armazenamento:</span> Armazenar em local fresco e seco.
                </li>
                <li>
                    <span className="product-info">Prazo de validade:</span> 18 meses.
                </li>
                <li>
                    <span className="product-info">Peso líquido:</span> 1000 GOST 32775-2014.
                </li>
            </ul>
        </>
    );
}
