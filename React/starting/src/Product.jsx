import "./Product.css";
import Price from "./Price";

function Product( { title, idx } ) {
    // let list = features.map( (feature) => <li>{feature}</li> );
    // let isDiscount = price > 20000;
    // let style = { backgroundColor : isDiscount ? "yellow" : "" }

    let oldPrice = ["12,333", "11,900", "1,233", "599"];
    let newPrice = ["8,999", "14,900", "233", "3599"];
    let description = ["best of", "non breakable", "hardenst", "wire"]
        return (
            <div className="Product">
                <h4>{title}</h4>
                <p>{description[idx]}</p>
                <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
            </div>
        );
}
export default Product;