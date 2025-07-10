import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }

  const signUp = async (email, password, displayName) => {
    try {
      setLoading(true);
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      await userCredential.user.updateProfile({ displayName });
      return { success: true, user: userCredential.user };
    } catch (error) {
      let message = 'An error occurred during sign up';
      switch (error.code) {
        case 'auth/email-already-in-use': message = 'That email address is already in use!'; break;
        case 'auth/invalid-email': message = 'That email address is invalid!'; break;
        case 'auth/weak-password': message = 'Password should be at least 6 characters!'; break;
      }
      Alert.alert('Sign Up Error', message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      let message = 'An error occurred during sign in';
      switch (error.code) {
        case 'auth/invalid-email': message = 'That email address is invalid!'; break;
        case 'auth/user-disabled': message = 'This account has been disabled!'; break;
        case 'auth/user-not-found': message = 'No account found with this email!'; break;
        case 'auth/wrong-password': message = 'Incorrect password!'; break;
      }
      Alert.alert('Sign In Error', message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      await auth().signOut();
      return { success: true };
    } catch (error) {
      Alert.alert('Sign Out Error', 'An error occurred during sign out');
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email) => {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Password Reset', 'Password reset email sent! Check your inbox.');
      return { success: true };
    } catch (error) {
      let message = 'An error occurred during password reset';
      switch (error.code) {
        case 'auth/invalid-email': message = 'That email address is invalid!'; break;
        case 'auth/user-not-found': message = 'No account found with this email!'; break;
      }
      Alert.alert('Password Reset Error', message);
      return { success: false, error: message };
    }
  };

  const value = { user, loading, signUp, signIn, signOut, resetPassword };

  return (
    <AuthContext.Provider value={value}>
      {!initializing && children}
    </AuthContext.Provider>
  );
};