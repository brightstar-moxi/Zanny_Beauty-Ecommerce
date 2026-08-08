const ProductCard = ({ product }) => {

  const whatsappNumber = "2349114310322";

  const whatsappMessage = encodeURIComponent(
    `Hello Zanny Beauty Palace,

I am interested in this product:

Product: ${product.name}
Category: ${product.category}
Price: ₦${Number(product.price).toLocaleString()}

Is this product still available?

Thank you.`
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">

      <article className="product-card">

        {/* Product Image */}

        <div className="product-image-wrapper">

          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />

          <button
            type="button"
            className="product-wishlist"
            aria-label={`Add ${product.name} to wishlist`}
          >
            <i className="fa-regular fa-heart"></i>
          </button>

        </div>


        {/* Product Information */}

        <div className="product-body">

          <span className="product-category">
            {product.category}
          </span>

          <h5 className="product-name">
            {product.name}
          </h5>

          <div className="product-rating">

            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>

          </div>


          <div className="product-bottom">

            {/* <strong className="product-price">
              ₦{Number(product.price).toLocaleString()}
            </strong> */}

          </div>


          {/* WhatsApp */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-order-btn"
          >

            <i className="fa-brands fa-whatsapp"></i>

            Chat About Product

          </a>


          {/* Cart */}

          <button
            type="button"
            className="add-cart-btn-full"
          >

            <i className="fa-solid fa-cart-shopping"></i>

            Add to Cart

          </button>

        </div>

      </article>

    </div>
  );
};

export default ProductCard;