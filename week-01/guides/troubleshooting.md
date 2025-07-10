# Week 1 Troubleshooting Guide

## Common Setup Issues

### Android Development Issues

#### 1. SDK Not Found
**Error**: `SDK location not found`

**Solution**:
```bash
# Create local.properties file in android folder
echo "sdk.dir=/Users/$(whoami)/Library/Android/sdk" > android/local.properties

# On Windows:
echo sdk.dir=C:\\Users\\%USERNAME%\\AppData\\Local\\Android\\Sdk > android\\local.properties
```

#### 2. Emulator Won't Start
**Symptoms**: Emulator stuck on loading screen

**Solutions**:
1. Enable hardware acceleration:
   ```bash
   # Check if HAXM is installed
   /usr/local/bin/haxm_check
   ```

2. Increase emulator RAM:
   - Open AVD Manager
   - Edit your virtual device
   - Advanced Settings → RAM: 2048MB or higher

3. Cold boot the emulator:
   - AVD Manager → Cold Boot Now

#### 3. Build Failures
**Error**: `Could not connect to development server`

**Solution**:
```bash
# Reset Metro cache
npx react-native start --reset-cache

# Clean and rebuild
cd android
./gradlew clean
cd ..
npx react-native run-android
```

### iOS Development Issues

#### 1. Xcode Command Line Tools
**Error**: `xcrun: error: invalid active developer path`

**Solution**:
```bash
sudo xcode-select --install
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

#### 2. CocoaPods Issues
**Error**: `CocoaPods could not find compatible versions`

**Solution**:
```bash
cd ios
rm -rf Pods Podfile.lock
pod install --repo-update
```

#### 3. Simulator Issues
**Problem**: Simulator runs but app doesn't appear

**Solutions**:
1. Reset simulator:
   - Device → Erase All Content and Settings

2. Rebuild and run:
   ```bash
   npx react-native run-ios --simulator="iPhone 14"
   ```

### Metro Bundler Issues

#### 1. Port Already in Use
**Error**: `Error: listen EADDRINUSE :::8081`

**Solution**:
```bash
# Kill process on port 8081
lsof -ti:8081 | xargs kill -9

# Or start on different port
npx react-native start --port 8082
```

#### 2. Cache Issues
**Symptoms**: Changes not reflecting, old code running

**Solution**:
```bash
# Complete cache reset
npx react-native start --reset-cache
rm -rf node_modules
npm install

# iOS additional steps
cd ios && rm -rf build && cd ..

# Android additional steps
cd android && ./gradlew clean && cd ..
```

### Node.js & NPM Issues

#### 1. Node Version Conflicts
**Use Node Version Manager**:
```bash
# Install nvm (macOS/Linux)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use LTS Node
nvm install --lts
nvm use --lts
```

#### 2. Permission Issues
**Error**: `EACCES: permission denied`

**Solution**:
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

## Debugging Strategies

### 1. Check React Native Doctor
```bash
npx @react-native-community/cli doctor
```
This will diagnose common setup issues.

### 2. Enable Verbose Logging
```bash
# iOS
npx react-native run-ios --verbose

# Android
npx react-native run-android --verbose
```

### 3. Check Logs
```bash
# React Native logs
npx react-native log-ios
npx react-native log-android

# Android device logs
adb logcat
```

## Performance Issues

### 1. Slow Build Times
**Solutions**:
1. Enable Gradle daemon:
   ```bash
   echo "org.gradle.daemon=true" >> ~/.gradle/gradle.properties
   ```

2. Increase build memory:
   ```bash
   echo "org.gradle.jvmargs=-Xmx4g -XX:MaxPermSize=512m" >> ~/.gradle/gradle.properties
   ```

### 2. Slow Metro Bundler
**Solutions**:
1. Add to `metro.config.js`:
   ```javascript
   module.exports = {
     transformer: {
       minifierConfig: {
         keep_fnames: true,
         mangle: {
           keep_fnames: true,
         },
       },
     },
   };
   ```

## Getting Help

### 1. Official Resources
- [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting)
- [Environment Setup Guide](https://reactnative.dev/docs/environment-setup)

### 2. Community Resources
- [Stack Overflow - React Native](https://stackoverflow.com/questions/tagged/react-native)
- [React Native GitHub Issues](https://github.com/facebook/react-native/issues)
- [Discord Community](https://discord.gg/react-native)

### 3. Log Collection
When asking for help, always include:
- React Native version: `npx react-native --version`
- Node version: `node --version`
- Platform (iOS/Android)
- Complete error message
- Steps to reproduce

---

**Need more help?** Check the [debugging guide](./debugging.md) or ask in our GitHub discussions!