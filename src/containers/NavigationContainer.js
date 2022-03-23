import { connect } from 'react-redux';
import { updateNotification } from '../actions';
import Navigation from '../components/routes/Navigation';


const mapStateToProps = state => {
    return {
        resolution: state.resolution
    }
}

const mapDispatchToProps = dispatch => ({
    updateNotification: (notification) => dispatch(updateNotification(notification))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);