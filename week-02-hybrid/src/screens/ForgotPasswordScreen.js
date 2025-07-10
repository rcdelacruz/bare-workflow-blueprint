import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../context/AuthContext';

const ForgotPasswordScreen = ({ navigation }) => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleResetPassword = async () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await resetPassword(email);
      if (result.success) {
        setEmailSent(true);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to send reset email');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (emailSent) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.successContainer}>
            <Icon name="check-circle" size={80} color="#27AE60" />
            <Text style={styles.successTitle}>Email Sent!</Text>
            <Text style={styles.successMessage}>
              We've sent password reset instructions to {email}
            </Text>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>Back to Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Icon name="lock-reset" size={64} color="#3498DB" />
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.subtitle}>
            Enter your email address and we'll send you instructions to reset your password.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <Icon name="email" size={20} color="#7F8C8D" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isSubmitting}
            />
          </View>

          <TouchableOpacity
            style={[styles.resetButton, (!email.trim() || isSubmitting) && styles.resetButtonDisabled]}
            onPress={handleResetPassword}
            disabled={!email.trim() || isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <Text style={styles.resetButtonText}>Send Reset Email</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  content: { flex: 1, paddingHorizontal: 24, justifyContent: 'center' },
  header: { alignItems: 'center', marginBottom: 40 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#2C3E50', marginTop: 16, marginBottom: 16 },
  subtitle: { fontSize: 16, color: '#7F8C8D', textAlign: 'center', lineHeight: 24 },
  form: { marginBottom: 32 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 12, borderWidth: 1, borderColor: '#E5E7EB', paddingHorizontal: 16, height: 56, marginBottom: 24 },
  inputIcon: { marginRight: 12 },
  input: { flex: 1, fontSize: 16, color: '#2C3E50' },
  resetButton: { backgroundColor: '#3498DB', borderRadius: 12, height: 56, justifyContent: 'center', alignItems: 'center' },
  resetButtonDisabled: { backgroundColor: '#BDC3C7' },
  resetButtonText: { fontSize: 16, fontWeight: '600', color: '#fff' },
  successContainer: { alignItems: 'center' },
  successTitle: { fontSize: 28, fontWeight: 'bold', color: '#27AE60', marginTop: 20, marginBottom: 16 },
  successMessage: { fontSize: 16, color: '#7F8C8D', textAlign: 'center', lineHeight: 24, marginBottom: 32 },
  backButton: { backgroundColor: '#3498DB', borderRadius: 12, paddingHorizontal: 32, paddingVertical: 16 },
  backButtonText: { fontSize: 16, fontWeight: '600', color: '#fff' }
});

export default ForgotPasswordScreen;