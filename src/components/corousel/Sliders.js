import { useEffect, useState } from "react";
import BannerData from "../../constants/banners";
import Arrows from "./Arrow";
import Dots from "./Dots";
import SliderContent from "./SliderContent";
import './slider.scss';

const len = BannerData.length - 1;

const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="sliderContainer">
            <SliderContent activeIndex={activeIndex} sliderImage={BannerData}/>
            <Arrows
                prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />
            <Dots
                activeIndex={activeIndex}
                sliderImage={BannerData}
                onClick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    )
}

export default Slider;