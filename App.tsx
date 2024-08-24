import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect, useRef, useState } from "react";
import "./src/configs/notification";

export default function App() {
  const notificationListener = useRef<Notifications.Subscription>();
  const [notification, setNotification] =
    useState<Notifications.Notification>();

  useEffect(() => {
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Expo notifications 101!</Text>
      <Text>Titulo: {notification?.request.content.title}</Text>
      <Text>Conteúdo: {notification?.request.content.body}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
