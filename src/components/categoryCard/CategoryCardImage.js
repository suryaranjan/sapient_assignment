
const CategoryCardImage = ({category}) => {
    return (
        <div className="categoryCardImageContainer">
            <img className="categoryCardImage" src={category.imageUrl} alt={category.key}/>
        </div> 
    )
}

export default CategoryCardImage;