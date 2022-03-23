import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CartDashboard from '../components/cart/CartDashboard';
import ROUTES from '../constants/routes';

const Cart = ({cartItemCount, 
    cartItemList, addProductToCart, 
    removeProductFromCart, totalPrice, closeModal, resolution}) => {
    const navigation = useNavigate();
    const location = useLocation();
    useEffect(() => {
        
        if(location.pathname == ROUTES.CART && !resolution.mobileView && !resolution.tabletView){
            navigation(ROUTES.HOME);
        }
    },[])
    return (
       <CartDashboard 
        cartItemCount={cartItemCount}
        cartItemList={cartItemList}
        addProductToCart={addProductToCart}
        removeProductFromCart={removeProductFromCart}
        totalPrice={totalPrice}
        onClose={closeModal}
        resolution={resolution}/>
    )
}

export default Cart;