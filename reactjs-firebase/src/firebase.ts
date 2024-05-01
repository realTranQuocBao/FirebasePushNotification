import { initializeApp } from "@firebase/app";
import { getMessaging, getToken, onMessage } from "@firebase/messaging";
import { Dispatch, SetStateAction } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBWkk0K-WwzX5Fmg_dZvxiblpSLuGkC_Co",
  authDomain: "qbit-push-notification-demo.firebaseapp.com",
  databaseURL: "https://qbit-push-notification-demo.firebaseio.com",
  projectId: "qbit-push-notification-demo",
  storageBucket: "qbit-push-notification-demo.appspot.com",
  messagingSenderId: "43483357585",
  appId: "1:43483357585:web:faf917f3615a7bf4c43a30",
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (
  setTokenFound: Dispatch<SetStateAction<boolean>>
) => {
  return getToken(messaging, {
    vapidKey: "",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
