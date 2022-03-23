import { connect } from 'react-redux';
import { updateNotification } from '../actions';
import Notification from '../components/notification/Notification';

const mapStateToProps = state => {
    return {
        notification: state.notification,
    }
}

const mapDispatchToProps = dispatch => ({
    updateNotification: (notification) => dispatch(updateNotification(notification))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification);