
const SliderContent = ({ activeIndex, sliderImage }) => {
    return (
        <section>
            {sliderImage.map((slide, index) => (
                <div 
                key={slide.id}
                className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img className="slideImage" src={slide.bannerImageUrl} alt={slide.bannerImageAlt}/>
                </div>
            ))}
        </section>
    )
}

export default SliderContent;