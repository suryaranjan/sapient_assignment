
const CartItemCard = ({cartItem = {}, addProductToCart, removeProductFromCart}) => {

    return (
        <div className="cartItemCard">
            <div className="cartItemCardImage">
                <img src={cartItem.imageURL} alt="cart Image"/>
            </div>
            <div className="cartItemDescription">
                <p>{cartItem.name}</p>
                <div>
                    <button onClick={() => removeProductFromCart(cartItem)} className="cartItemSymbol minus">&#x268A;</button>
                    <span>{cartItem.cartItemCount}</span>
                    <button onClick={() => addProductToCart(cartItem)} className="cartItemSymbol plus">&#43;</button>
                    <span className="cartItemMultiplyIcon">X</span>
                    <span className="cartItemPrice">Rs.{cartItem.price}</span>
                    <span className="cartItemTotalPrice">Rs.{cartItem.totalPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard;