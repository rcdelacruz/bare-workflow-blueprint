# Week 1: Expo Hybrid Setup & React Native Fundamentals

🎯 **Learning Objective**: Master Expo's hybrid approach - amazing DX without vendor lock-in

## 🌟 The Hybrid Philosophy

This week, you'll learn to leverage **Expo's incredible developer experience** while using **community modules** instead of Expo's built-in ones. This gives you the best of both worlds:

- ✅ **Expo's amazing tooling** - Fast refresh, easy debugging, cloud builds
- ✅ **Community module freedom** - No vendor lock-in, industry-standard libraries
- ✅ **Real-world skills** - What professional teams actually use

## 🛠️ Two Setup Approaches

### Option A: Bare Minimum Template (Recommended for Beginners)
```bash
# Creates Expo project with no Expo SDK dependencies
npx create-expo-app PersonalProfileApp --template bare-minimum
cd PersonalProfileApp
```

**What you get:**
- Expo CLI and development server
- Standard React Native project structure
- No Expo SDK dependencies from the start
- Full freedom to use community modules

### Option B: Development Builds (Recommended for Teams)
```bash
# Start with managed Expo, then add native capabilities
npx create-expo-app PersonalProfileApp
cd PersonalProfileApp

# Enable development builds for native modules
npx expo install expo-dev-client
```

**What you get:**
- All Expo developer tools
- Ability to add any native module
- EAS Build integration
- Easy migration path

## 📅 Day-by-Day Breakdown

### Day 1: Hybrid Setup & First Run

#### Morning: Choose Your Path
**We'll use Option A (bare-minimum) for this training:**

```bash
# Create the project
npx create-expo-app PersonalProfileApp --template bare-minimum
cd PersonalProfileApp

# Check the project structure
ls -la
```

#### Understanding the Structure
```
PersonalProfileApp/
├── app.json          # Expo configuration
├── App.js            # Main app component
├── package.json      # Dependencies (notice: no Expo SDK!)
├── metro.config.js   # Metro bundler config
├── android/          # Native Android project
├── ios/              # Native iOS project
└── babel.config.js   # Babel configuration
```

#### Afternoon: Run Your App
```bash
# Start the development server
npx expo start

# Run on iOS simulator
npx expo run:ios

# Run on Android emulator  
npx expo run:android
```

🎯 **Milestone**: App running on both platforms with Expo DX

### Day 2: Community Modules Over Expo Modules

#### The Community-First Approach
Instead of using Expo modules, we'll use industry-standard community libraries:

```bash
# Install community modules instead of Expo equivalents
npm install @react-native-async-storage/async-storage
npm install react-native-vector-icons
npm install react-native-safe-area-context
```

#### Why Community Modules?
| Feature | Expo Module | Community Choice | Why Better |
|---------|-------------|------------------|------------|
| **Storage** | `expo-secure-store` | `@react-native-async-storage/async-storage` | Industry standard, more flexible |
| **Icons** | `@expo/vector-icons` | `react-native-vector-icons` | More icon sets, better performance |
| **Safe Area** | `expo-status-bar` | `react-native-safe-area-context` | More control, used by navigation |

#### Native Module Linking
```bash
# iOS: Install CocoaPods dependencies
cd ios && pod install && cd ..

# Android: Auto-linking handles most cases
# Some modules may need manual configuration
```

#### Configure Vector Icons
**iOS Setup** (`ios/PersonalProfileApp/Info.plist`):
```xml
<key>UIAppFonts</key>
<array>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
</array>
```

**Android Setup** (`android/app/build.gradle`):
```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

🎯 **Milestone**: Community modules working with Expo tooling

### Day 3: Building with Community Libraries

#### Smart Component Choices
```javascript
// ✅ Use React Native core components
import { View, Text, Image, ScrollView } from 'react-native';

// ✅ Use community libraries for enhanced functionality
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// ✅ Use minimal Expo utilities (easy to replace)
import Constants from 'expo-constants';
```

#### Profile Screen with Community Modules
See: [ProfileScreen.js](./src/components/ProfileScreen.js)

#### Modern Navigation Setup
```bash
# Use React Navigation (industry standard)
npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-screens react-native-gesture-handler

# Link native dependencies
cd ios && pod install && cd ..
```

🎯 **Milestone**: Full profile app using community modules

### Day 4: Expo DX Benefits

#### Amazing Development Experience
1. **Fast Refresh** - Code changes appear instantly
2. **Device Testing** - Scan QR code with Expo Go (for JS-only changes)
3. **Debugging** - Great DevTools integration
4. **Metro Bundler** - Fast bundling and hot reload

#### Expo Go vs Development Builds
```bash
# For JS-only changes: Use Expo Go
npx expo start
# Scan QR code with Expo Go app

# For native module changes: Use development build
npx expo run:ios
npx expo run:android
```

#### EAS Build Setup (Optional)
```bash
# Install EAS CLI
npm install -g eas-cli

# Configure builds
eas build:configure

# Build for iOS/Android in the cloud
eas build --platform ios
eas build --platform android
```

🎯 **Milestone**: Full development workflow established

### Day 5: Professional Workflow

#### Project Structure Best Practices
```
src/
├── components/
│   ├── ProfileScreen.js
│   └── ContactInfo.js
├── navigation/
│   └── AppNavigator.js
├── services/
│   └── storageService.js
├── utils/
│   ├── constants.js
│   └── helpers.js
└── assets/
    └── images/
```

#### Storage Service with Community Module
```javascript
// src/services/storageService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageService = {
  async storeData(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error('Storage error:', e);
    }
  },

  async getData(key) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Retrieval error:', e);
      return null;
    }
  }
};
```

#### Debugging with Flipper
1. **Install Flipper** - Facebook's debugging platform
2. **React Native Integration** - Built-in with React Native 0.62+
3. **Network Inspector** - See all API calls
4. **Layout Inspector** - Debug UI layouts

🎯 **Final Milestone**: Professional-grade app with hybrid approach

## 🔄 Migration Strategies

### If You Need to Drop Expo Later
1. **Remove Expo CLI dependencies** - Already minimal!
2. **Replace `expo start`** with `npx react-native start`
3. **Replace `expo run:ios`** with `npx react-native run-ios`
4. **Update build process** - Use Xcode/Gradle directly

### If You Want More Expo Features
1. **Add Expo modules selectively** - Only what you need
2. **Use development builds** - Keep native module freedom
3. **Leverage EAS Build** - Cloud builds for both platforms

## 🎯 Learning Checkpoints

By the end of Week 1, you should be able to:

- [ ] Create Expo projects with community modules instead of Expo SDK
- [ ] Use Expo's developer tools with any React Native library
- [ ] Install and configure native modules in an Expo project
- [ ] Understand the difference between Expo Go and development builds
- [ ] Set up a professional project structure
- [ ] Debug effectively using Expo's tooling
- [ ] Build a complete app using the hybrid approach

## 🔗 Resources

### Essential Reading
- [Expo Development Builds](https://docs.expo.dev/development/introduction/)
- [Expo Bare Workflow](https://docs.expo.dev/bare/overview/)
- [Community Module Directory](https://reactnative.directory/)

### Next Week Preview
**Week 2: Full-Stack with Community Modules** will introduce:
- Firebase integration (community modules)
- State management with Zustand
- Advanced navigation patterns
- Professional debugging techniques

---

**Ready to go full-stack?** Continue to [Week 2: Community-First Full-Stack](../week-02-hybrid/README.md) 🚀