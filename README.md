# The Bare Workflow Blueprint: A 10-Week React Native Program

🚀 **Transform into a Professional Mobile Developer with Expo DX + Community Module Freedom**

This comprehensive 10-week training program teaches you to build professional React Native apps using the **Expo Hybrid Approach** - combining Expo's incredible developer experience with community modules to avoid vendor lock-in.

## 🎯 Why the Expo Hybrid Approach?

- **🔧 Best Developer Experience**: Expo's amazing tooling - fast refresh, easy debugging, cloud builds
- **📱 Community Module Freedom**: Use industry-standard libraries, not proprietary ones
- **🌟 No Vendor Lock-in**: Skills transfer to any React Native setup
- **🚀 Career Ready**: What professional teams actually use in production

## 🎓 The Hybrid Philosophy

### What We Keep from Expo ✅
- **Amazing DX** - Fast refresh, hot reload, great debugging
- **Expo CLI** - Best-in-class development server
- **EAS Build** - Cloud builds for both platforms  
- **Easy device testing** - Scan QR code with Expo Go
- **Great tooling** - Flipper integration, network inspector

### What We Use Instead ⚡
| Instead of Expo | We Use Community | Why Better |
|----------------|------------------|------------|
| `expo-camera` | `react-native-vision-camera` | More features, better performance |
| `expo-notifications` | `@react-native-firebase/messaging` | More reliable, customizable |
| `expo-location` | `react-native-geolocation-service` | Better background support |
| `expo-sqlite` | `react-native-sqlite-storage` | More SQL features |
| `expo-secure-store` | `react-native-keychain` | Industry standard |

## 📅 10-Week Timeline

| Week | Phase | Focus | Key Deliverable |
|------|-------|-------|----------------|
| **1** | Hybrid Setup | Expo DX + Community Modules | Profile app with hybrid approach |
| **2** | Full-Stack | Firebase + Community Libraries | To-Do app with real backend |
| **3-4** | Capstone Build | Architecture & Auth | Authenticated flight search |
| **5-6** | Capstone Build | Core Features & State | Full booking functionality |
| **7-8** | Polish & Deploy | Advanced Features | Maps & notifications |
| **9-10** | Production | Testing & Store Deployment | Live app in stores |

## 🗂️ Repository Structure

```
bare-workflow-blueprint/
├── 📁 week-01-hybrid/    # Expo Hybrid Setup & Fundamentals
├── 📁 week-02-hybrid/    # Full-Stack with Community Modules  
├── 📁 week-03-04/        # Capstone: Architecture & Auth
├── 📁 week-05-06/        # Capstone: Core Features
├── 📁 week-07-08/        # Advanced Features & Polish
├── 📁 week-09-10/        # Testing & Store Deployment
├── 📁 capstone-projects/ # Sample project templates
├── 📁 resources/         # Tools, guides, and references
├── 📁 docs/             # Detailed documentation
└── 📄 docs/expo-hybrid-approach.md # Core philosophy
```

## 🚀 Quick Start

### Setup Your First Hybrid Project
```bash
# Option 1: Start with bare minimum (recommended)
npx create-expo-app MyApp --template bare-minimum

# Option 2: Start managed, add dev builds
npx create-expo-app MyApp
cd MyApp
npx expo install expo-dev-client
```

### Add Community Modules
```bash
# Use community modules instead of Expo SDK
npm install @react-native-async-storage/async-storage
npm install react-native-vector-icons
npm install react-native-maps
npm install @react-native-firebase/app
```

### Enjoy Expo DX
```bash
# Amazing development experience
npx expo start

# Run with native modules
npx expo run:ios
npx expo run:android
```

## 📚 What Makes This Different?

Unlike other React Native tutorials, this program:

- **Starts with Expo Hybrid** - Best DX without vendor lock-in
- **Uses community modules** - Industry-standard libraries from day one
- **Teaches migration paths** - How to move between different setups
- **Focuses on real skills** - What you'll actually use professionally
- **Covers team workflows** - Git, code reviews, agile practices

## 🎯 Training Projects

### Foundation Projects
- **📱 Personal Profile App** (Week 1) - Hybrid setup fundamentals
- **✅ Full-Stack To-Do App** (Week 2) - Community modules + backend

### Capstone Project
- **✈️ Airline Booking App** (Weeks 3-10) - Production-ready application

### Additional Templates
- 🎪 Event Discovery & Ticketing
- 🍳 Recipe & Meal Planning  
- 📚 Language Learning Flashcards
- 🛒 E-commerce Marketplace
- 🏃 Fitness & Workout Tracker
- 📍 Local Guide & Review App
- 💺 Seat Booking System

## 🛠️ Tech Stack

### Core Setup
- **Expo CLI** for amazing developer experience
- **Community Modules** for all core functionality
- **TypeScript** for type safety
- **EAS Build** for cloud builds (optional)

### State & Backend
- **Zustand** for state management
- **Firebase/Supabase** with community SDKs
- **React Navigation** for navigation
- **React Query** for data fetching

### Native Features
- **react-native-vision-camera** for camera
- **react-native-maps** for location
- **@react-native-firebase/messaging** for notifications
- **react-native-gesture-handler** for interactions

## 🤝 Contributing

This is an educational resource! Help us improve:

- 🐛 Report curriculum bugs or outdated information
- 💡 Suggest better community module alternatives
- 📝 Contribute guides or troubleshooting tips
- 🎯 Share your completed projects

## 📄 License

MIT License - Use this curriculum for educational purposes.

## 🙋‍♂️ Support

- **Issues**: GitHub Issues for bugs or questions
- **Discussions**: Community help and experience sharing
- **Wiki**: Additional resources and FAQs

## 🔄 Migration Paths

### Want Pure React Native?
- Remove Expo CLI dependencies
- Replace `expo start` with `npx react-native start`
- You're already using community modules! ✅

### Want More Expo Features?
- Add specific Expo modules you need
- Use development builds for flexibility
- Leverage EAS services selectively

---

**Ready to get the best of both worlds?** 

Start with [Week 1: Expo Hybrid Setup](./week-01-hybrid/README.md) 🚀

**Want to understand the philosophy first?** 

Read [The Expo Hybrid Approach](./docs/expo-hybrid-approach.md) 🎯