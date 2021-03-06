<h1 align="center">Skuy Chat</h1>
<p align="center">
  <img src="./android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png" width="200">
</p>
<p align="center">
  Built with React Native.
</p>


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Usage](#usage-for-development)
- [Screenshots](#screenshots)

## Introduction
<b>SkuyChat</b> is a simple chat application, everyone can use it easily. in this SkuyChat the user can also see the position of the other person in the chat. There is a Firend List feature that we can use to see how many friends we have.


## Features

* Realtime chat using firebase
* Show location of your friends
* Show list friend
* Show Profile

## Requirements
* [`yarn`](https://yarnpkg.com/getting-started/install) or [`npm`](https://www.npmjs.com/)
* [`react-native`](https://facebook.github.io/react-native/docs/getting-started)
* `Google maps API Key` you can get it [here](https://developers.google.com/maps/documentation/javascript/get-api-key)
* `Config realtime database firebase for WEB` you can get it [here](https://firebase.google.com/)
#### Example config
```
const firebaseConfig = {
  apiKey: "YOUR_apiKey",
  authDomain: "YOUR_authDomain",
  databaseURL: "YOUR_databaseURL",
  projectId: "YOUR_projectId",
  storageBucket: "YOUR_storageBucket",
  messagingSenderId: "YOUR_messagingSenderId",
  appId: "YOUR_appId",
  measurementId: "YOUR_measurementId"
};
```
## Usage for development
1. Open your terminal or command prompt
2. Type `git clone https://github.com/RinaLia/SkuyChat.git`
3. Open the folder and type `yarn install or npm install` for install dependencies
4. Add your realtime database config to `./src/config/firebase/index.js`
5. Add your goole maps API Key on `AndroidManifest.xml`
##### Example
  ```
  <meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="YOUR_API_KEY"/>
  ```
6.  Type `react-native run-android` for run this app. ***Make sure your device is connected with debugging mode***.
7. done

## Screenshot 


<kbd>
<img src="./screenshot/chat.jpeg" width="200">
</kbd>

<kbd>
<img src="./screenshot/list.jpeg" width="200">
</kbd>

<kbd>
<img src="./screenshot/login.jpeg" width="200">
</kbd>

<kbd>
<img src="./screenshot/profile.jpeg" width="200">
</kbd>




