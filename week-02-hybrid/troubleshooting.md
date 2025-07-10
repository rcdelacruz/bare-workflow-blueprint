# Week 2 Troubleshooting: Firebase & Community Modules

## Firebase Setup Issues

### Problem: Firebase not initializing
**Solution:**
- Check GoogleService-Info.plist in iOS project
- Verify google-services.json in android/app/
- Run `cd ios && pod install`

### Problem: Firestore permission denied
**Solution:**
- Update Firestore security rules
- Ensure user authentication
- Check userId in queries

## Zustand Issues

### Problem: State not updating
**Solution:**
- Use `set()` function properly
- Don't mutate state directly
- Check component re-renders

## Common Solutions
- Clear Metro cache: `npx expo start --clear`
- Rebuild native: `npx expo run:ios`
- Check Firebase console for errors