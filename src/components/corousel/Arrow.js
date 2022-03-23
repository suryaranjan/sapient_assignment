
const Arrows = ({ prevSlide, nextSlide }) => {
    return (
        <div className="arrows">
            <span className="prev" onClick={prevSlide}>PREV</span>
            <span className="next" onClick={nextSlide}>NEXT</span>
        </div>
    )
}

export default Arrows;