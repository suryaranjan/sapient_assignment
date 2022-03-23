import { Outlet } from "react-router-dom"
import { Fragment } from "react"
import { useState } from 'react';
import Footer from "../footer/Footer";
import NavBarContainer from "../../containers/NavBarContainer";
import NotificationContainer from "../../containers/NotificationContainer";
import CartContainer from "../../containers/CartContainer";
import Popup from 'reactjs-popup';


const Navigation = ({resolution}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };

    return(
        <Fragment>
            <NotificationContainer/>
            <NavBarContainer openModal={() => setModalOpen(!modalOpen)}/>
            {!resolution.tabletView ? 
            <Popup open={modalOpen} closeOnDocumentClick onClose={closeModal}>
                <CartContainer closeModal={closeModal}/>
            </Popup> : ''}
            <Outlet/>
            <Footer/>
        </Fragment>
    )
}

export default Navigation;