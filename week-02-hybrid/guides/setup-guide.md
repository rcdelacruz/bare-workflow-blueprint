# Week 2 Hybrid Setup Guide

## Quick Start

```bash
# Create Expo project without SDK dependencies
npx create-expo-app TodoAppPro --template bare-minimum
cd TodoAppPro

# Install community modules
npm install zustand @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler
npm install @react-native-async-storage/async-storage
npm install @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore @react-native-firebase/messaging
npm install react-native-vector-icons react-native-paper

# iOS setup
cd ios && pod install && cd ..

# Run the app
npx expo start
npx expo run:ios
npx expo run:android
```

## Firebase Configuration

1. Create Firebase project
2. Download config files
3. Place GoogleService-Info.plist in ios/TodoAppPro/
4. Place google-services.json in android/app/
5. Update build.gradle files

## Vector Icons Setup

### iOS
Add to Info.plist:
```xml
<key>UIAppFonts</key>
<array>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
</array>
```

### Android
Add to android/app/build.gradle:
```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```