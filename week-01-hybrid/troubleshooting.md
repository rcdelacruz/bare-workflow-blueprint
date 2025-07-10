# Week 1 Troubleshooting Guide

## Common Setup Issues

### Issue: Vector Icons Not Displaying

**Symptoms:**
- Icons show as ? or empty boxes
- App crashes when rendering icons

**Solutions:**

**iOS:**
```xml
<!-- Check ios/PersonalProfileApp/Info.plist -->
<key>UIAppFonts</key>
<array>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>FontAwesome.ttf</string>
</array>
```

```bash
# Re-run pod install
cd ios && pod install && cd ..
npx expo run:ios  # Must rebuild after font changes
```

**Android:**
```gradle
// Check android/app/build.gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

```bash
# Clean and rebuild
cd android && ./gradlew clean && cd ..
npx expo run:android
```

### Issue: Metro Bundle Error

**Symptoms:**
- "Unable to resolve module"
- Import errors for community modules

**Solutions:**
```bash
# Clear Metro cache
npx expo start --clear

# Or manually clear:
rm -rf node_modules/.cache
npm start -- --reset-cache

# Ensure all packages installed:
npm install
```

### Issue: iOS Build Fails

**Symptoms:**
- CocoaPods errors
- Xcode build failures

**Solutions:**
```bash
# Update CocoaPods
sudo gem install cocoapods

# Clean iOS build
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..

# Clean Xcode derived data
rm -rf ~/Library/Developer/Xcode/DerivedData/*

# Rebuild
npx expo run:ios
```

### Issue: Android Build Fails

**Symptoms:**
- Gradle sync failures
- Android Studio errors

**Solutions:**
```bash
# Clean Android build
cd android
./gradlew clean
cd ..

# Clear Gradle cache
rm -rf ~/.gradle/caches

# Rebuild
npx expo run:android
```

## Navigation Issues

### Issue: Navigation Not Working

**Symptoms:**
- "navigate is not a function"
- Screen transitions fail

**Solutions:**
```javascript
// Ensure proper navigation setup in App.js
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
```

```bash
# Ensure all navigation packages installed
npm install @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-gesture-handler

# iOS: Install pods
cd ios && pod install && cd ..
```

### Issue: Gesture Handler Errors

**Solutions:**
```javascript
// Wrap app in GestureHandlerRootView
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Your app content */}
    </GestureHandlerRootView>
  );
}
```

## Storage Issues

### Issue: AsyncStorage Not Persisting

**Symptoms:**
- Data disappears after app restart
- Storage operations fail silently

**Solutions:**
```javascript
// Add proper error handling
const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('Stored successfully:', key);
  } catch (e) {
    console.error('Storage failed:', e);
    throw e;
  }
};

// Check data actually stored
const getAllKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    console.log('All stored keys:', keys);
    return keys;
  } catch (error) {
    console.error('Error getting keys:', error);
  }
};
```

## Development Workflow Issues

### Issue: Hot Reload Not Working

**Solutions:**
```bash
# Restart Metro bundler
npx expo start --clear

# Check if Fast Refresh is enabled in dev menu
# Shake device or press Cmd+D (iOS) / Cmd+M (Android)
```

### Issue: Expo Go vs Development Builds Confusion

**When to use Expo Go:**
- JavaScript-only changes
- No native modules added
- Quick testing

**When to use Development Builds:**
- Added community native modules
- Changed native configuration
- Testing native functionality

```bash
# JavaScript changes:
npx expo start
# Scan QR with Expo Go

# Native changes:
npx expo run:ios
npx expo run:android
```

## Performance Issues

### Issue: App Running Slowly

**Solutions:**
```javascript
// Check for development mode warnings
const isDev = __DEV__;
console.log('Development mode:', isDev);

// Optimize icon imports
// Instead of importing entire icon sets:
import Icon from 'react-native-vector-icons/Ionicons';
// Use specific icons:
import { Ionicons } from 'react-native-vector-icons';
```

## Migration Path Issues

### Issue: Want to Remove Expo Completely

**Steps:**
```bash
# 1. Create new React Native project
npx react-native init PersonalProfilePure

# 2. Copy source code
cp -r PersonalProfileApp/src PersonalProfilePure/

# 3. Install same community modules
cd PersonalProfilePure
npm install @react-native-async-storage/async-storage
npm install react-native-vector-icons
# ... install all the same modules

# 4. Update package.json scripts
{
  "scripts": {
    "start": "react-native start",
    "ios": "react-native run-ios",
    "android": "react-native run-android"
  }
}

# 5. Replace expo-constants
npm install react-native-device-info
// Replace Constants.expoConfig with DeviceInfo.getVersion()
```

## Debug Mode Tips

### Enable Debug Tools
```bash
# React Native Debugger (recommended)
brew install --cask react-native-debugger

# Or use built-in debugger
# Shake device → "Debug" → Opens Chrome debugger
```

### Useful Debug Commands
```javascript
// In your code, add debug info:
console.log('Navigation state:', navigation.getState());
console.log('AsyncStorage keys:', await AsyncStorage.getAllKeys());
console.log('Props received:', props);

// Check Metro logs:
// Terminal running `npx expo start` shows all logs
```

## Getting Help

1. **Check Expo docs** for development build issues
2. **Check React Navigation docs** for navigation issues
3. **Check community module GitHub** for specific module issues
4. **Stack Overflow** - search for React Native + specific module
5. **Discord/Reddit React Native communities**

## Prevention Tips

1. **Always commit before adding new modules**
2. **Test on both platforms regularly**
3. **Use development builds when adding native modules**
4. **Keep dependencies updated gradually**
5. **Document your setup steps for team members**