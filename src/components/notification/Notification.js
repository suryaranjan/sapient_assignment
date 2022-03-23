import { useEffect } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { NotificationType } from '../../constants/notification';
import './notification.scss';

const Notification = ({notification = {}}) => {

    useEffect(() => {
        switch (notification.type) {
            case NotificationType.Info:
              NotificationManager.info(notification.message,5000);
              break;
            case NotificationType.Success:
              NotificationManager.success(notification.message, '',5000);
              break;
            case NotificationType.Warning:
              NotificationManager.warning(notification.message, '', 5000);
              break;
            case NotificationType.Error:
              NotificationManager.error(notification.message, '', 5000);
              break;
          }
    }, [notification])

    return(
        <div className="customNotification">
            <NotificationContainer/>
        </div>
    )

}

export default Notification;