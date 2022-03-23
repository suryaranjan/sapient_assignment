import CartItemCard from "./CartItemCard";
import './cart.scss';
import CartBannerCard from "./CartBannerCard";

const CartItemCardList = ({cartItemList = [], addProductToCart, removeProductFromCart, cartItemCount}) => {

    return (
        <div className="cartItemList">
            {cartItemCount > 0 ?
            <>
                {cartItemList.map(cartItem => {
                    return <CartItemCard key={cartItem.id} 
                            cartItem={cartItem}
                            addProductToCart={addProductToCart}
                            removeProductFromCart={removeProductFromCart}
                            />
                }) }
                <CartBannerCard/>
            </> : 
            <div className="emptyCartCard">
                <p>No items in your cart</p>
                <span>Your favourite items are just click away</span>
            </div>}
        </div>
    )
}

export default CartItemCardList;