
const ProductCartItem = ({ product }) => {

    const { id, title, description, image, price, category, discount_price, discount } = product;
  
    return (
      <div className="product-item">
        <div>
          <img src={image} alt={title} />
        </div>
        <div>{title}</div>
        <div>{price}</div>
      </div>
    );
  };
  
  export default ProductCartItem;