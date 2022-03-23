import { connect } from 'react-redux';
import { getCategoryProductList, updateResolution } from '../actions';
import NavbarComponent from '../components/navbar/NavbarComponent';

const mapStateToProps = state => {
    return {
        cartItemCount: state.cartItemCount,
        resolution: state.resolution
    }
}

const mapDispatchToProps = dispatch => ({
    getCategoryProductList: (categoryId) => dispatch(getCategoryProductList(categoryId)),
    updateResolution: (resolution) => dispatch(updateResolution(resolution))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);