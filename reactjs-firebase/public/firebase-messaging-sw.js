// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBWkk0K-WwzX5Fmg_dZvxiblpSLuGkC_Co",
  authDomain: "qbit-push-notification-demo.firebaseapp.com",
  databaseURL: "https://qbit-push-notification-demo.firebaseio.com",
  projectId: "qbit-push-notification-demo",
  storageBucket: "qbit-push-notification-demo.appspot.com",
  messagingSenderId: "43483357585",
  appId: "1:43483357585:web:faf917f3615a7bf4c43a30",
  measurementId: "G-XP44D5VDW3", //more
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});
