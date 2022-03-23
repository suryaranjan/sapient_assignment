import { NotificationMessage, NotificationType } from "../constants/notification";
import REDUCER from "../constants/reducer";
import {store} from '../store/index';

const getCategoryProductList = (categoryId) => {
    const {productList, categoryList} = store.getState();
    const selectedCategory = categoryList.filter(category => category.id == categoryId)[0];
    const filteredProduct = productList.filter(product => product.category == categoryId);
    return (dispatch) => dispatch({
        type: REDUCER.CATEGORY_SELECTION, 
        categorySelected: selectedCategory,
        productDisplayList: filteredProduct
    })
}

const addProductToCart = (cartItem) => {
    const { cartItemList } = store.getState();
    let productNotExistInCart = true;
    let outOfStock = false;
    let newCartItem = cartItemList.map(cart => {
        if(cart.id == cartItem.id){
            productNotExistInCart = false;
            if(cart.cartItemCount < cart.stock){
                return {
                    ...cart,
                    cartItemCount: parseInt(cart.cartItemCount)+1,
                    totalPrice: parseInt(cart.cartItemCount)*parseInt(cart.price)
                }
            }else{
                outOfStock = true;
                return cart;
            }
        }
        return cart;
    })

    if(outOfStock){
       
        return dispatch => dispatch({
            type: REDUCER.UPDATE_NOTIFICATION,
            notification: {
                type: NotificationType.Warning,
                message: NotificationMessage.OutOfStock
            }
        })
    }
    if(productNotExistInCart){
        newCartItem.push({
            ...cartItem,
            cartItemCount: 1,
            totalPrice: cartItem.price
        })
    }

    const totalPrice = newCartItem.reduce((total , cart) => {
        return total + cart.totalPrice
    }, 0)

    return (dispatch) => dispatch({
        type: REDUCER.UPDATE_CART,
        cartItemList: [...newCartItem],
        cartItemCount: newCartItem.length,
        totalPrice: totalPrice, 
        notification: productNotExistInCart ?  {type: NotificationType.Success, message: NotificationMessage.AddedToCart} : {}
    })
}

const removeProductFromCart = (cartItem) => {
    const { cartItemList } = store.getState();
    let newCartItem = cartItemList.map(cart => {
        if(cart.id == cartItem.id){
           return {
               ...cart,
               cartItemCount: cart.cartItemCount - 1,
               totalPrice: parseInt(cart.cartItemCount)*parseInt(cart.price)
           }  
        }
        return cart;
    })
    let newCartList = newCartItem.filter(cart => cart.cartItemCount != 0);

    const totalPrice = newCartList.length > 0 ? newCartItem.reduce((total , cart) => {
        return total + cart.totalPrice
    }, 0) : 0;

    return (dispatch) => dispatch({
        type: REDUCER.UPDATE_CART,
        cartItemList: [...newCartList],
        cartItemCount: newCartList.length,
        totalPrice: totalPrice
    })
}

const updateNotification = (notification) => {
    return (dispatch) => dispatch({
        type: REDUCER.UPDATE_NOTIFICATION,
        notification: notification
    })
}

const updateResolution = (resolution) => {
    return (dispatch) => dispatch({
        type: REDUCER.UPDATE_RESOLUTION,
        resolution: {
            tabletView: resolution < 1050,
            mobileView: resolution < 500
        }
    })
}

export {
    getCategoryProductList,
    removeProductFromCart,
    addProductToCart,
    updateNotification,
    updateResolution
}