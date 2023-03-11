import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { formatPrice } from "./../../helpers/number";
import Input from "../molecules/form/Input";
const CartItem = ({ prod }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <article className="w-full border-b border-gray-200 text-gray-800 py-4 px-8 mb-4">
      <div className="flex justify-between gap-x-8">
        <div className="flex items-start gap-x-8">
          <div className="">
            <img
              className="w-32 h-32 object-cover"
              src={prod?.images}
              alt={prod?.product_name}
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold">{prod?.product_name}</h2>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex flex-col">
            <p className="font-semibold">{formatPrice(prod?.price)}</p>
          </div>

          <button
            className="btn-ghost"
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod,
              });
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
