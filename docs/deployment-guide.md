# Deployment Guide: From Development to Production

## 🚀 Deployment Overview

This guide covers deploying apps built with the Expo hybrid approach to production app stores.

## 📱 Platform Deployment

### iOS App Store

#### Prerequisites
- Apple Developer Account ($99/year)
- Xcode installed (for final submission)
- iOS device for testing

#### Build Process
```bash
# Using EAS Build (recommended)
eas build --platform ios --profile production

# Or using local Xcode
npx expo run:ios --configuration Release
```

#### App Store Connect
1. Create app listing
2. Upload build via Xcode or EAS
3. Fill app metadata
4. Submit for review

### Google Play Store

#### Prerequisites
- Google Play Developer Account ($25 one-time)
- Android Studio installed
- Android device for testing

#### Build Process
```bash
# Using EAS Build (recommended)
eas build --platform android --profile production

# Or using local Android Studio
npx expo run:android --variant release
```

#### Play Console
1. Create app listing
2. Upload APK/AAB
3. Fill store listing
4. Release to production

## 🛠️ Build Configuration

### EAS Build Setup
```json
// eas.json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    },
    "production": {
      "ios": {
        "autoIncrement": true
      },
      "android": {
        "autoIncrement": "versionCode"
      }
    }
  }
}
```

### App Configuration
```json
// app.json
{
  "expo": {
    "name": "Your App Name",
    "slug": "your-app-slug",
    "version": "1.0.0",
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourapp",
      "buildNumber": "1"
    },
    "android": {
      "package": "com.yourcompany.yourapp",
      "versionCode": 1
    }
  }
}
```

## 🔒 Security & Performance

### Production Checklist
- [ ] Remove console.log statements
- [ ] Enable ProGuard (Android)
- [ ] Configure code obfuscation
- [ ] Set up crash reporting
- [ ] Add analytics
- [ ] Test on real devices
- [ ] Performance optimization

### Environment Variables
```bash
# Use different configs for production
EXPO_PUBLIC_API_URL=https://api.yourapp.com
EXPO_PUBLIC_FIREBASE_CONFIG=production
```

## 📊 Monitoring & Analytics

### Crash Reporting
```bash
# Add Sentry for crash reporting
npm install @sentry/react-native
```

### Analytics
```bash
# Firebase Analytics (recommended)
npm install @react-native-firebase/analytics
```

### Performance Monitoring
```bash
# Firebase Performance
npm install @react-native-firebase/perf
```

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
      - run: eas build --platform all --non-interactive
```

## 📲 Over-the-Air Updates

### EAS Update Setup
```bash
# Configure EAS Update
eas update:configure

# Publish update
eas update --branch production --message "Bug fixes"
```

### Update Strategy
- **Critical fixes** - Immediate OTA updates
- **Features** - App store releases
- **Native changes** - Require app store update

## 📝 Store Listing Optimization

### App Store Optimization (ASO)
- **App Title** - Clear, searchable
- **Keywords** - Relevant search terms
- **Screenshots** - Show key features
- **App Preview** - Video demonstration
- **Description** - Benefits-focused

### Store Assets
- App icon (1024x1024 for iOS)
- Screenshots (multiple device sizes)
- App preview videos
- Feature graphics (Android)

## 🔍 Testing Strategy

### Pre-Release Testing
1. **Internal testing** - Team testing
2. **Alpha testing** - Internal stakeholders
3. **Beta testing** - External users
4. **Device testing** - Multiple devices/OS versions

### Testing Tools
```bash
# Device testing services
# - Firebase Test Lab
# - AWS Device Farm
# - BrowserStack App Live
```

## 📈 Release Management

### Version Strategy
- **Semantic versioning** (1.0.0, 1.0.1, 1.1.0)
- **Build numbers** - Auto-increment
- **Release notes** - Clear changelog
- **Staged rollouts** - Gradual deployment

### Release Process
1. **Code freeze** - Stop new features
2. **Testing phase** - Comprehensive testing
3. **Build creation** - Production builds
4. **Store submission** - Upload to stores
5. **Release** - Make available to users
6. **Monitor** - Watch for issues

## 🚀 Post-Launch

### Monitoring
- **Crash rates** - Keep below 1%
- **Performance** - App launch time, memory usage
- **User feedback** - Store reviews, support tickets
- **Analytics** - User behavior, retention

### Maintenance
- **Regular updates** - Bug fixes, improvements
- **Security patches** - Keep dependencies updated
- **Platform updates** - Support new OS versions
- **Feature updates** - Based on user feedback