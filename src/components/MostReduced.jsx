import { Price } from "./Pricee";
import { Link } from "react-router-dom";

export function MostReduced({ mostReduced, cartItems, setCartItems }) {
  return (
    <>
      <p className="all-products">BEST OFFER:-</p>
      <div className="underline"></div>
      <ul className="list-items">
        {mostReduced.map((item) => (
          <Link
            key={item.id}
            to={`/item/${item.id}`}
            state={{ data: item }}
            className="list-items"
          >
            <li className="list-item most-reduced">
              <img src={item.image} />
              <p className="item-name">{item.name}</p>
              <Price item={item} />
              <Link to="/cart">
                <button
                  onClick={() => setCartItems([...cartItems, item])}
                  className="buy-now-btn"
                >
                  BUY NOW
                </button>
              </Link>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
