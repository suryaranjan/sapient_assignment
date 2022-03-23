import { Fragment } from "react";
import CategoryCardList from "../components/categoryCard/CategoryCardList";
import Slider from "../components/corousel/Sliders"

const Home = ({categoryList, getCategoryProductList}) => {

    return (
        <Fragment>
            <Slider></Slider>
            <CategoryCardList categoryList={categoryList} getCategoryProductList={getCategoryProductList}/>
        </Fragment>

    )
}

export default Home;