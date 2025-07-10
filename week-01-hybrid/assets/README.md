# Week 1 Assets

## Project Assets

This directory contains assets used in the Week 1 Personal Profile App example.

### Icons
- App uses `react-native-vector-icons` instead of Expo icons
- No static icon files needed - icons are loaded from font files
- Configured in iOS/Android native projects

### Images
- Profile placeholder uses vector icons instead of image assets
- Splash screen and app icon would go here in a real app
- Example assets structure:

```
assets/
├── images/
│   ├── splash.png
│   ├── icon.png
│   └── adaptive-icon.png
├── fonts/
│   └── (fonts loaded via react-native-vector-icons)
└── README.md
```

### Community Module Assets

**Vector Icons:**
- Fonts automatically bundled by react-native-vector-icons
- No manual asset management needed
- Available icon sets:
  - Ionicons (used in examples)
  - MaterialIcons
  - FontAwesome
  - And many more

**Async Storage:**
- No assets needed
- Data stored in device storage automatically

### Expo Hybrid Benefits

1. **Fewer asset management headaches**
2. **Community modules handle assets efficiently**
3. **Standard React Native asset patterns**
4. **Easy to migrate assets to any RN setup**

### Adding Real Assets

If you want to add real images:

```javascript
// In your component:
import { Image } from 'react-native';

// Local image
<Image source={require('./assets/images/profile.jpg')} />

// Remote image
<Image source={{ uri: 'https://example.com/image.jpg' }} />
```

### Asset Optimization

**For production apps:**
1. Use WebP format for better compression
2. Provide multiple resolutions (@2x, @3x)
3. Consider react-native-fast-image for better performance
4. Use vector icons instead of image icons when possible

**Example structure:**
```
assets/images/
├── profile@1x.png
├── profile@2x.png
├── profile@3x.png
└── background.webp
```