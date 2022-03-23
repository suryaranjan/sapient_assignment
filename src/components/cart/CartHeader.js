
const CartHeader = ({cartItemCount, onClose, resolution}) => {

    return (
        <div className="cartHeader">
            <h3>My Cart ({cartItemCount}) Item</h3>
            {!resolution.tabletView ? <span onClick={onClose}>&#215;</span> : ''}
        </div>
    )
}

export default CartHeader;