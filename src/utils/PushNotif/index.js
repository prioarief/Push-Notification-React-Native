import PushNotification from 'react-native-push-notification';

const showNotify = (title, message, secon = null) => {
  secon === null
    ? PushNotification.localNotification({
        title,
        message,
      })
    : PushNotification.localNotificationSchedule({
        title,
        message,
        date: new Date(Date.now() + secon * 1000),
      });
};

const removeNotify = () => {
  PushNotification.cancelAllLocalNotifications();
};

export {showNotify, removeNotify};
