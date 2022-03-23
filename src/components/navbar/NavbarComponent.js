import './navbar.scss';
import { Link, useLocation } from 'react-router-dom'
import NavBarCartComponent from './NavBarCartComponent';
import ROUTES from '../../constants/routes';
import { useEffect, useState } from "react";
import MobileDropdown from '../mobileDropdown/MobileDropdown';

const NavbarComponent = ({cartItemCount, openModal, updateResolution, resolution, getCategoryProductList}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const location = useLocation();

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    useEffect(() => {
        updateResolution(width);
    }, [width])

    return (
        <div className='headerContainer'>
            <div className='header container'>
                <div className='headerLogo'>
                    <Link to={ROUTES.HOME}>
                        <img src="./static/images/logo_2x.png" alt="logo image"/>
                    </Link>
                </div>
                {!resolution.mobileView ? 
                <div className='headerMenuItems'>
                    <Link className='menuItems' to={ROUTES.HOME}>Home</Link>
                    <Link className='menuItems' to={ROUTES.PRODUCT}>Products</Link>
                </div> : ''}
                <NavBarCartComponent cartItemCount={cartItemCount} openModal={openModal} resolution={resolution}/>
            </div>
            {location.pathname != ROUTES.CART ? resolution.mobileView ? <MobileDropdown getCategoryProductList={getCategoryProductList}/> : '' : ''}
        </div>
    )
}

export default NavbarComponent;