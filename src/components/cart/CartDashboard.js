import CartButton from "./CartButton";
import CartHeader from "./CartHeader";
import CartItemCardList from "./CartItemCardList";


const CartDashboard = ({cartItemCount, cartItemList, addProductToCart,
     removeProductFromCart, totalPrice, onClose, resolution}) => {

    return (
        <div className="cart container">
            <CartHeader cartItemCount={cartItemCount} onClose={onClose} resolution={resolution}/>
            <CartItemCardList cartItemList={cartItemList} 
                addProductToCart={addProductToCart}
                removeProductFromCart={removeProductFromCart}
                cartItemCount={cartItemCount} />
            <CartButton cartItemList={cartItemList} 
                cartItemCount={cartItemCount} 
                totalPrice={totalPrice}
                onClose={onClose}/>
        </div>
    )
}

export default CartDashboard;

