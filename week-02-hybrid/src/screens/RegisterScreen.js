import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../context/AuthContext';

const RegisterScreen = ({ navigation }) => {
  const { signUp, loading } = useAuth();
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.displayName.trim()) {
      newErrors.displayName = 'Display name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      const result = await signUp(formData.email, formData.password, formData.displayName);
      if (!result.success) {
        Alert.alert('Sign Up Failed', result.error || 'Please try again');
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = 
    formData.displayName && 
    formData.email && 
    formData.password && 
    formData.confirmPassword &&
    Object.keys(errors).length === 0;
  const isLoading = loading || isSubmitting;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoid} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Icon name="person-add" size={64} color="#3498DB" />
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Join TodoApp Pro</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <View style={[styles.inputWrapper, errors.displayName && styles.inputError]}>
                <Icon name="person" size={20} color="#7F8C8D" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Display name"
                  value={formData.displayName}
                  onChangeText={(value) => handleInputChange('displayName', value)}
                  autoCapitalize="words"
                  editable={!isLoading}
                />
              </View>
              {errors.displayName && <Text style={styles.errorText}>{errors.displayName}</Text>}
            </View>

            <View style={styles.inputContainer}>
              <View style={[styles.inputWrapper, errors.email && styles.inputError]}>
                <Icon name="email" size={20} color="#7F8C8D" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email address"
                  value={formData.email}
                  onChangeText={(value) => handleInputChange('email', value)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  editable={!isLoading}
                />
              </View>
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>

            <View style={styles.inputContainer}>
              <View style={[styles.inputWrapper, errors.password && styles.inputError]}>
                <Icon name="lock" size={20} color="#7F8C8D" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={formData.password}
                  onChangeText={(value) => handleInputChange('password', value)}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  editable={!isLoading}
                />
                <TouchableOpacity
                  style={styles.passwordToggle}
                  onPress={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  <Icon name={showPassword ? 'visibility-off' : 'visibility'} size={20} color="#7F8C8D" />
                </TouchableOpacity>
              </View>
              {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            </View>

            <View style={styles.inputContainer}>
              <View style={[styles.inputWrapper, errors.confirmPassword && styles.inputError]}>
                <Icon name="lock" size={20} color="#7F8C8D" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChangeText={(value) => handleInputChange('confirmPassword', value)}
                  secureTextEntry={!showConfirmPassword}
                  autoCapitalize="none"
                  editable={!isLoading}
                />
                <TouchableOpacity
                  style={styles.passwordToggle}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={isLoading}
                >
                  <Icon name={showConfirmPassword ? 'visibility-off' : 'visibility'} size={20} color="#7F8C8D" />
                </TouchableOpacity>
              </View>
              {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
            </View>

            <TouchableOpacity
              style={[styles.signUpButton, (!isFormValid || isLoading) && styles.signUpButtonDisabled]}
              onPress={handleSignUp}
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={styles.signUpButtonText}>Create Account</Text>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} disabled={isLoading}>
              <Text style={styles.signInLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  keyboardAvoid: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 24, justifyContent: 'center' },
  header: { alignItems: 'center', marginBottom: 40 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#2C3E50', marginTop: 16, marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#7F8C8D', textAlign: 'center' },
  form: { marginBottom: 32 },
  inputContainer: { marginBottom: 20 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 12, borderWidth: 1, borderColor: '#E5E7EB', paddingHorizontal: 16, height: 56 },
  inputError: { borderColor: '#E74C3C' },
  inputIcon: { marginRight: 12 },
  input: { flex: 1, fontSize: 16, color: '#2C3E50' },
  passwordToggle: { padding: 4 },
  errorText: { fontSize: 14, color: '#E74C3C', marginTop: 4 },
  signUpButton: { backgroundColor: '#3498DB', borderRadius: 12, height: 56, justifyContent: 'center', alignItems: 'center' },
  signUpButtonDisabled: { backgroundColor: '#BDC3C7' },
  signUpButtonText: { fontSize: 16, fontWeight: '600', color: '#fff' },
  footer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  footerText: { fontSize: 16, color: '#7F8C8D' },
  signInLink: { fontSize: 16, color: '#3498DB', fontWeight: '600' }
});

export default RegisterScreen;