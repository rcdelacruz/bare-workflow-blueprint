# Week 1 Exercises: Expo Hybrid Fundamentals

## Exercise 1: Setup and First Run (30 minutes)

### Goal
Get the hybrid Personal Profile App running on both iOS and Android.

### Steps
1. Follow the setup guide to create the project
2. Install all community modules
3. Configure vector icons for both platforms
4. Run the app on iOS simulator and Android emulator
5. Test the navigation between Profile and Edit Profile screens

### Success Criteria
- [ ] App runs without errors
- [ ] Vector icons display correctly
- [ ] Navigation works smoothly
- [ ] Hot reload works for JavaScript changes

## Exercise 2: Community Module Integration (45 minutes)

### Goal
Understand how community modules work in the Expo hybrid setup.

### Tasks
1. **Storage Integration**
   - Modify the profile data
   - Verify it persists after app restart
   - Check AsyncStorage in debugger

2. **Icon Customization**
   - Replace some icons with different Ionicons
   - Add a new icon to the edit button
   - Test icon rendering

3. **Navigation Enhancement**
   - Add a third screen (e.g., Settings)
   - Implement navigation to this screen
   - Add proper header configuration

### Code Challenges
```javascript
// Add this to ProfileScreen.js
const handleViewSettings = () => {
  // Navigate to a new Settings screen
};

// Create SettingsScreen.js with:
// - Toggle for dark mode (store in AsyncStorage)
// - App version display
// - Clear all data button
```

## Exercise 3: Debugging and Development Workflow (30 minutes)

### Goal
Master the Expo hybrid development workflow.

### Tasks
1. **Hot Reload Testing**
   - Change text content → should update instantly
   - Change styles → should update instantly
   - Add a new component → test hot reload

2. **Development Builds**
   - Make a change that requires native rebuild
   - Use `npx expo run:ios` to test
   - Compare experience with pure Expo Go

3. **Debugging**
   - Add console.log statements
   - View logs in terminal
   - Use React Native Debugger if available

### Debugging Checklist
- [ ] Console logs appear in terminal
- [ ] Hot reload works for JS changes
- [ ] Development builds work for native changes
- [ ] No red screen errors

## Exercise 4: Compare Approaches (20 minutes)

### Goal
Understand the difference between Expo hybrid and standard Expo.

### Comparison Task
Create a simple comparison document:

```markdown
# My Experience: Expo Hybrid vs Standard Expo

## Setup Differences
- Standard Expo: 
- Hybrid Expo: 

## Module Choices
- Standard: expo-secure-store
- Hybrid: @react-native-async-storage/async-storage
- Why better: 

## Development Experience
- Hot reload: 
- Debugging: 
- Native modules: 

## Migration Path
- How easy would it be to go pure React Native?
- What would I need to change?
```

## Exercise 5: Extend the Profile App (60 minutes)

### Goal
Build additional features using community modules only.

### Features to Add
1. **Settings Screen**
   ```javascript
   // Settings to implement:
   - Dark/Light theme toggle
   - Notification preferences
   - Clear all data
   - App version info
   ```

2. **Profile Image Placeholder Customization**
   ```javascript
   // Add initials generation:
   const getInitials = (name) => {
     return name.split(' ').map(n => n[0]).join('').toUpperCase();
   };
   ```

3. **Form Validation Enhancement**
   ```javascript
   // Add more validation rules:
   - Email format validation
   - Phone number format
   - Name length requirements
   ```

### Success Criteria
- [ ] Settings screen fully functional
- [ ] Theme toggle works and persists
- [ ] Validation provides good user feedback
- [ ] All features use community modules

## Bonus Challenge: Migration Test

### Goal
Prove the hybrid approach's flexibility.

### Task
Create a second version of the profile app that:
1. Removes all Expo dependencies except CLI
2. Uses pure React Native CLI commands
3. Keeps all the same community modules
4. Functions identically

### Steps
```bash
# In a new directory:
npx react-native init PersonalProfilePure
# Copy src/ folder from hybrid version
# Install same community modules
# Test functionality
```

### Learning Outcome
You should see that:
- Community modules work in both setups
- Code is 95% identical
- Skills transfer completely
- Hybrid approach taught real React Native development