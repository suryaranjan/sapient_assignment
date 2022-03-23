import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes";

const CartButton = ({totalPrice, cartItemCount, onClose}) => {

    return (
        <div className="cartButtonContainer">
            {cartItemCount > 0 ? 
            <>
                <p>Promo code can be applied on payment page</p>
                <div className="cartButton">
                    <span>Proceed to Checkout</span>
                    <span className="cartButtonPriceTag">Rs.{totalPrice} 
                        <span className="cartGreaterSymbol">&gt;</span>
                    </span>
                </div> 
            </>:
            <div className="cartButton emptyCart">
                <Link to={ROUTES.PRODUCT} onClick={onClose}>
                    <span>Start Shopping</span>
                </Link>
            </div> }
        </div>
    )
}

export default CartButton;