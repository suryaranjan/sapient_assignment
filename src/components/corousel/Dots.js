
const Dots = ({ activeIndex, onClick, sliderImage }) => {
    return (
        <div className="allDots">
            {sliderImage.map((slider, index) => (
                <span
                    key={index}
                    className={`${activeIndex === index ? "dot activeDot" : "dot"}`}
                    onClick={() => onClick(index)}
                ></span>
            ))}
        </div>
    )
}

export default Dots;