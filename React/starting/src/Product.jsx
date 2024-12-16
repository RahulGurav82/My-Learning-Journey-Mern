function Product({title, price = 12}) {
    return (
        <div className="Product">
            <h4>this is Product</h4>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    );
}

export default Product;