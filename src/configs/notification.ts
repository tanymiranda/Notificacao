import * as Notifications from "expo-notifications";

async function main(){
    const {status} = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
        alert("Sem permissão para receber notificações Push! :(");
        return;
    }
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: true,
        }),
    });
    const {data} = await Notifications.getExpoPushTokenAsync();
    console.log("Expo Push Notification:", data);
}
main();