# Community Modules vs Expo SDK: Week 1 Examples

## Storage: AsyncStorage vs Expo SecureStore

### ✅ Community Choice: @react-native-async-storage/async-storage
```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Simple, industry-standard API
const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
};
```

### ❌ Expo Alternative: expo-secure-store
```javascript
import * as SecureStore from 'expo-secure-store';

// Expo-specific API, vendor lock-in
const storeData = async (key, value) => {
  await SecureStore.setItemAsync(key, JSON.stringify(value));
};

const getData = async (key) => {
  const result = await SecureStore.getItemAsync(key);
  return result ? JSON.parse(result) : null;
};
```

**Why Community is Better:**
- Used by 90% of React Native apps
- Works in any React Native setup
- More Stack Overflow answers
- Better TypeScript support
- No vendor lock-in

## Icons: react-native-vector-icons vs @expo/vector-icons

### ✅ Community Choice: react-native-vector-icons
```javascript
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

// More icon sets, better performance
<Icon name="person" size={24} color="#3498DB" />
<MaterialIcon name="settings" size={24} color="#3498DB" />
```

### ❌ Expo Alternative: @expo/vector-icons
```javascript
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

// Expo-specific wrapper
<Ionicons name="person" size={24} color="#3498DB" />
<MaterialIcons name="settings" size={24} color="#3498DB" />
```

**Why Community is Better:**
- More icon sets available
- Better tree-shaking
- Works in pure React Native
- Faster rendering
- More customization options

## Navigation: React Navigation vs Expo Router

### ✅ Community Choice: @react-navigation/native
```javascript
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Industry standard, used by most apps
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### ❌ Expo Alternative: expo-router
```javascript
// File-based routing, Expo-specific
// app/(tabs)/profile.js
// app/(tabs)/edit.js
```

**Why Community is Better:**
- More flexible routing patterns
- Better TypeScript support
- Works in any React Native app
- More documentation and examples
- Industry standard

## Safe Area: react-native-safe-area-context vs expo-status-bar

### ✅ Community Choice: react-native-safe-area-context
```javascript
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Comprehensive safe area handling
<SafeAreaProvider>
  <SafeAreaView style={{ flex: 1 }}>
    {/* Your content */}
  </SafeAreaView>
</SafeAreaProvider>
```

### ❌ Expo Alternative: expo-status-bar
```javascript
import { StatusBar } from 'expo-status-bar';

// Limited functionality
<StatusBar style="auto" />
```

**Why Community is Better:**
- Better safe area handling
- Works with React Navigation
- More customization options
- Industry standard

## Constants: expo-constants (Acceptable)

### ✅ Minimal Expo Usage: expo-constants
```javascript
import Constants from 'expo-constants';

// Acceptable for simple utilities
const appVersion = Constants.expoConfig?.version || '1.0.0';
const statusBarHeight = Constants.statusBarHeight;
```

**Why This is OK:**
- Simple utility, easy to replace
- No complex functionality
- Can be replaced with react-native-device-info later

## Development Experience Comparison

### Expo Hybrid Workflow
```bash
# Amazing DX with community modules
npx expo start                    # Fast development server
npx expo run:ios                 # Native builds when needed
# Hot reload, great debugging, all community modules work
```

### Standard Expo Workflow
```bash
npx expo start                    # Same great DX
# But limited to Expo SDK modules, vendor lock-in
```

### Pure React Native Workflow
```bash
npx react-native start           # Basic development server
npx react-native run-ios         # Native builds
# Same community modules, but less DX polish
```

## Migration Examples

### From Hybrid to Pure React Native
```javascript
// 1. Change package.json scripts:
"start": "react-native start",        // was: "expo start"
"ios": "react-native run-ios",       // was: "expo run:ios"

// 2. Remove expo dependencies:
npm uninstall expo expo-constants

// 3. Replace expo-constants:
import DeviceInfo from 'react-native-device-info';
const appVersion = DeviceInfo.getVersion();

// 4. Everything else stays the same!
// All community modules work identically
```

### From Hybrid to More Expo Features
```javascript
// Add expo-dev-client for development builds
npx expo install expo-dev-client

// Selectively add Expo modules you need:
npx expo install expo-notifications  // If you need push notifications
npx expo install expo-camera         // If you need camera

// But prefer community alternatives when possible
```

## Key Takeaways

1. **Community modules = Real React Native skills**
2. **Expo hybrid = Best developer experience without lock-in**
3. **Easy migration paths in any direction**
4. **Professional teams prefer this approach**
5. **Skills transfer to any React Native setup**