import { connect } from 'react-redux';
import { getCategoryProductList } from '../actions';
import Home from '../pages/Home';

const mapStateToProps = state => {
    return {
        categoryList: state.categoryList
    }
}

const mapDispatchToProps = dispatch => ({
    getCategoryProductList: (categoryId) => dispatch(getCategoryProductList(categoryId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);