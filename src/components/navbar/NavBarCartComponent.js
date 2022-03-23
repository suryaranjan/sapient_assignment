import { Link, useNavigate } from "react-router-dom"
import ROUTES from "../../constants/routes";

const NavBarCartComponent = ({cartItemCount, openModal, resolution}) => {
    const navigate = useNavigate();
    const handleCartClick = () => {
        return resolution.tabletView ? navigate(ROUTES.CART) : openModal();
    }

    return (
        <div className='headerEnd'>
            {!resolution.mobileView ?
            <div className='headerEndMenuItems'>
                <Link className='endMenuItems' to={ROUTES.SIGNIN}>SignIn</Link>
                <Link className='endMenuItems' to={ROUTES.REGISTER}>Register</Link>
            </div> : ''}
            <div className='headerCart' onClick={handleCartClick}>
                <img src='/static/images/cart.svg' alt="cart image"/>
                <span>{cartItemCount} items</span>
            </div>
        </div>
    )
}

export default NavBarCartComponent;