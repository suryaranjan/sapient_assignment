import CategoryType from "../constants/categories";
import ProductList from "../constants/products/product";
import REDUCER from "../constants/reducer";

const PrimaryReducer = (state={
    categoryList: CategoryType,
    categorySelected: '',
    productList: ProductList,
    productDisplayList: [],
    cartItemList: [],
    cartItemCount: 0,
    totalPrice: 0,
    resolution: {
        tabletView: false,
        mobileView: false
    }
}, action ) => {
    switch (action.type) {
        case REDUCER.CATEGORY_SELECTION:
            return {
                ...state,
                categorySelected: action.categorySelected,
                productDisplayList: action.productDisplayList
            }
        case REDUCER.UPDATE_CART: 
            return {
                ...state,
                cartItemList: action.cartItemList,
                cartItemCount: action.cartItemCount,
                totalPrice: action.totalPrice,
                notification: action.notification
            }
        case REDUCER.UPDATE_NOTIFICATION: 
            
            return {
                ...state,
                notification: action.notification
            }
        case REDUCER.UPDATE_RESOLUTION:
            return {
                ...state,
                resolution: action.resolution
            }
        
        default:
            return state;
    }
}

export default PrimaryReducer;