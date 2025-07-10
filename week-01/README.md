# Week 1: React Native & Native Environment Fundamentals

🎯 **Learning Objective**: Master the React Native bare workflow setup and build your first app on native simulators

## 📚 Overview

Week 1 focuses on establishing a solid foundation with React Native's bare workflow and the native development environment. Unlike managed Expo, you'll work directly with Xcode and Android Studio from day one.

### What You'll Learn
- Setting up React Native development environment
- Understanding the bare workflow vs managed workflow
- Running apps on iOS Simulator and Android Emulator
- Basic React Native components and styling
- Native project structure and configuration

### What You'll Build
📱 **Personal Profile App** - A single-screen app showcasing your profile with photo, bio, and contact info

## 🛠️ Prerequisites Checklist

Before starting, ensure you have:

### Required Software
- [ ] **Node.js** (v18 or later) - [Download here](https://nodejs.org/)
- [ ] **Git** - [Installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [ ] **VS Code** - [Download here](https://code.visualstudio.com/)
- [ ] **Xcode** (macOS only) - Install from Mac App Store
- [ ] **Android Studio** - [Download here](https://developer.android.com/studio)
- [ ] **Watchman** (macOS/Linux) - `brew install watchman`

### VS Code Extensions
```bash
# Install these extensions for better development experience
- React Native Tools
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- Auto Rename Tag
- Bracket Pair Colorizer
```

## 📝 Day-by-Day Breakdown

### Day 1: Environment Setup & First App

#### Morning: Native Development Setup
1. **Install Android Studio**
   - Download and install Android Studio
   - Install Android SDK (API level 33+)
   - Set up Android Virtual Device (AVD)
   - Configure environment variables:
     ```bash
     export ANDROID_HOME=$HOME/Library/Android/sdk
     export PATH=$PATH:$ANDROID_HOME/emulator
     export PATH=$PATH:$ANDROID_HOME/tools
     export PATH=$PATH:$ANDROID_HOME/platform-tools
     ```

2. **Setup Xcode (macOS only)**
   - Install Xcode from App Store
   - Install Xcode Command Line Tools:
     ```bash
     sudo xcode-select --install
     ```
   - Accept license agreements:
     ```bash
     sudo xcodebuild -license
     ```

#### Afternoon: Your First Bare Workflow App
1. **Initialize React Native Project**
   ```bash
   npx react-native init PersonalProfileApp
   cd PersonalProfileApp
   ```

2. **Run on iOS Simulator**
   ```bash
   npx react-native run-ios
   ```

3. **Run on Android Emulator**
   ```bash
   # Start emulator first
   npx react-native run-android
   ```

🎯 **Milestone**: App runs successfully on both platforms

### Day 2: Understanding the Project Structure

#### Deep Dive: Native Project Files
```
PersonalProfileApp/
├── android/          # Android native project
│   ├── app/
│   │   ├── src/main/
│   │   │   ├── AndroidManifest.xml  # App permissions & config
│   │   │   └── java/                # Native Android code
│   │   └── build.gradle         # Android build config
│   └── build.gradle             # Project-level config
├── ios/              # iOS native project
│   ├── PersonalProfileApp/
│   │   ├── Info.plist              # iOS app configuration
│   │   └── AppDelegate.h/.m        # iOS app lifecycle
│   └── PersonalProfileApp.xcodeproj/
├── src/              # Your React Native code
└── package.json      # Dependencies
```

#### Hands-on Activity: Explore Native Projects
1. **Open iOS project in Xcode**
   ```bash
   open ios/PersonalProfileApp.xcworkspace
   ```
   - Explore project settings
   - Understand bundle identifier
   - See how React Native integrates

2. **Open Android project in Android Studio**
   ```bash
   cd android && ./gradlew assembleDebug
   ```
   - Open `android/` folder in Android Studio
   - Explore app module structure
   - Check MainActivity.java

### Day 3: Core Components & Styling

#### React Native Fundamentals
Start building your Personal Profile App:

1. **Basic Components**
   ```javascript
   import React from 'react';
   import {
     View,
     Text,
     Image,
     ScrollView,
     StyleSheet,
     SafeAreaView,
   } from 'react-native';
   ```

2. **Create Your Profile Screen**
   See: [ProfileScreen.js](./src/components/ProfileScreen.js)

3. **Styling with Flexbox**
   See: [styles.js](./src/styles/styles.js)

🎯 **Milestone**: Profile screen with image, name, bio, and contact info

### Day 4: Assets & Images

#### Adding Static Assets
1. **Image Assets**
   ```
   src/
   └── assets/
       └── images/
           ├── profile-photo.jpg
           └── background.png
   ```

2. **Using Images**
   ```javascript
   // Local images
   <Image source={require('../assets/images/profile-photo.jpg')} />
   
   // Remote images
   <Image source={{uri: 'https://example.com/image.jpg'}} />
   ```

#### Platform-Specific Code
```javascript
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 44 : 0, // Status bar height
  },
});
```

### Day 5: Polish & Debug

#### Debugging Tools
1. **React Native Debugger**
   ```bash
   # Enable debugging
   npx react-native start --reset-cache
   ```
   - Shake device/emulator → "Debug"
   - Chrome DevTools integration
   - Flipper for advanced debugging

2. **Common Issues & Solutions**
   - Metro bundler cache issues
   - Android emulator performance
   - iOS simulator device selection
   - Build failures and clean solutions

#### Performance & Polish
1. **Optimize Images**
   - Proper image sizing
   - Using resizeMode
   - Platform-specific images

2. **Add Loading States**
   - ActivityIndicator component
   - Skeleton screens
   - Error boundaries

🎯 **Final Milestone**: Polished Personal Profile App ready for demo

## 📦 Project Structure

```
PersonalProfileApp/
├── src/
│   ├── components/
│   │   ├── ProfileScreen.js
│   │   ├── ContactInfo.js
│   │   └── SocialLinks.js
│   ├── styles/
│   │   └── styles.js
│   ├── assets/
│   │   └── images/
│   └── utils/
│       └── constants.js
├── App.js
└── package.json
```

## 🎯 Learning Checkpoints

By the end of Week 1, you should be able to:

- [ ] Create a new React Native project using `react-native init`
- [ ] Run apps on both iOS Simulator and Android Emulator
- [ ] Navigate and understand native project structure
- [ ] Use core React Native components (View, Text, Image, ScrollView)
- [ ] Apply styles using StyleSheet and Flexbox
- [ ] Handle local and remote images
- [ ] Debug common issues in the development environment
- [ ] Build a complete single-screen application

## 🔗 Resources

### Essential Reading
- [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)
- [React Native Components](https://reactnative.dev/docs/components-and-apis)
- [Layout with Flexbox](https://reactnative.dev/docs/flexbox)

### Troubleshooting Guides
- [Common Setup Issues](./guides/troubleshooting.md)
- [Platform-Specific Debugging](./guides/debugging.md)
- [Performance Tips](./guides/performance.md)

### Next Week Preview
**Week 2: Full-Stack & Native Modules** will introduce:
- Backend-as-a-Service integration
- Installing and linking native libraries
- Building a To-Do app with real data persistence
- Understanding the native linking process

---

**Ready to dive deeper?** Continue to [Week 2: Full-Stack & Native Modules](../week-02/README.md) 🚀