import { Routes, Route } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import CartContainer from '../../containers/CartContainer';
import HomeContainer from '../../containers/HomeContainer';
import NavigationContainer from '../../containers/NavigationContainer';
import ProductContainer from '../../containers/ProductContainer';
import Register from '../../pages/Register';
import SignIn from '../../pages/Signin';

const Router = () => {

    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<NavigationContainer/>}>
                <Route index element={<HomeContainer/>}/>
                <Route path={ROUTES.PRODUCT} element={<ProductContainer/>}/>
                <Route path={ROUTES.CART} element={<CartContainer/>}/>
                <Route path={ROUTES.SIGNIN} element={<SignIn/>}/>
                <Route path={ROUTES.REGISTER} element={<Register/>}/>
            </Route>
        </Routes>
    )
}

export default Router;