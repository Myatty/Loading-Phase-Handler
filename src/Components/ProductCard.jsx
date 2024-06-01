/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const ProductCard = ({ product }) => {
  const { title, price, category, description, image } = product;

  return <div className="product-card">
    <img src={image}  ></img>

    <h3>{title}</h3>
    <p className="description">{description}</p>
    <p className="price">{price}</p>
  </div>;
};

export default ProductCard;
