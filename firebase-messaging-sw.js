importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js");

const config = {
  apiKey: "AIzaSyAxyUEBL97MqK-xwBE1XVNnqrlIjJmDHsM",
  authDomain: "nutristar-web.firebaseapp.com",
  databaseURL: "https://nutristar-web.firebaseio.com",
  projectId: "nutristar-web",
  storageBucket: "nutristar-web.appspot.com",
  messagingSenderId: "477905223936",
  appId: "1:477905223936:web:25ca21cbe6f1d0344f73e5"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("my notification title");
    });
  return promiseChain;
});

self.addEventListener('notificationclick', function(event) {
  // do what you want
  // ...
});
