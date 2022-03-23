import { connect } from 'react-redux';
import { addProductToCart, removeProductFromCart, getCategoryProductList } from '../actions';
import Cart from '../pages/Cart';

const mapStateToProps = state => {
    return {
        categoryList: state.categoryList,
        categorySelected: state.categorySelected,
        productDisplayList: state.productDisplayList,
        productList: state.productList,
        cartItemList: state.cartItemList,
        cartItemCount: state.cartItemCount,
        totalPrice: state.totalPrice,
        resolution: state.resolution
    }
}

const mapDispatchToProps = dispatch => ({
    getCategoryProductList: (categoryId) => dispatch(getCategoryProductList(categoryId)),
    addProductToCart: (cartItem) => dispatch(addProductToCart(cartItem)),
    removeProductFromCart: (cartItem) => dispatch(removeProductFromCart(cartItem))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Cart);