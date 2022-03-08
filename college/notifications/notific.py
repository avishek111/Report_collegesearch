from notifications.models import UserObj, Notification


class SendNotification:
    def __init__(self, user, message) -> None:
        self.user = user
        self.message = message
        user_obj = UserObj.objects.get(user=self.user)
        print(user_obj)
        notification = Notification.objects.create(message=self.message, is_read=False)
        notification.userobj.add(user_obj)
        notification.save()

class SendNotifications:
    def __init__(self, user, message) -> None:
        self.message = message
        user_obj= user
        notification = Notification.objects.create(message=self.message, is_read=False)
        # notification.userobj.add(user_obj)
        notification.save()