import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StorageService } from '../services/storageService';
import Constants from 'expo-constants';

const ProfileScreen = ({ navigation }) => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Mobile developer passionate about React Native and modern app development.',
    avatar: null,
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const savedProfile = await StorageService.getData('userProfile');
      if (savedProfile) {
        setProfile(savedProfile);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfile', { profile, onSave: handleSaveProfile });
  };

  const handleSaveProfile = async (updatedProfile) => {
    try {
      await StorageService.storeData('userProfile', updatedProfile);
      setProfile(updatedProfile);
      Alert.alert('Success', 'Profile updated successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save profile');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            {profile.avatar ? (
              <Image source={{ uri: profile.avatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Icon name="person" size={60} color="#fff" />
              </View>
            )}
          </View>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.email}>{profile.email}</Text>
          <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
            <Icon name="pencil" size={16} color="#fff" style={styles.editIcon} />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Info Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          
          <View style={styles.infoItem}>
            <Icon name="call" size={20} color="#3498DB" style={styles.infoIcon} />
            <Text style={styles.infoText}>{profile.phone}</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Icon name="location" size={20} color="#3498DB" style={styles.infoIcon} />
            <Text style={styles.infoText}>{profile.location}</Text>
          </View>
        </View>

        {/* Bio Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.bioText}>{profile.bio}</Text>
        </View>

        {/* App Info Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Information</Text>
          <Text style={styles.appInfo}>Version: {Constants.expoConfig?.version || '1.0.0'}</Text>
          <Text style={styles.appInfo}>Built with Expo Hybrid Approach</Text>
          <Text style={styles.appInfo}>Using Community Modules</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  content: { flex: 1 },
  header: { backgroundColor: '#3498DB', alignItems: 'center', paddingVertical: 40, paddingHorizontal: 20 },
  avatarContainer: { marginBottom: 16 },
  avatar: { width: 120, height: 120, borderRadius: 60, borderWidth: 4, borderColor: '#fff' },
  avatarPlaceholder: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#2C3E50', justifyContent: 'center', alignItems: 'center', borderWidth: 4, borderColor: '#fff' },
  name: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  email: { fontSize: 16, color: '#ECF0F1', marginBottom: 20 },
  editButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#2C3E50', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 25 },
  editIcon: { marginRight: 8 },
  editButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  section: { backgroundColor: '#fff', margin: 16, borderRadius: 12, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#2C3E50', marginBottom: 16 },
  infoItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  infoIcon: { marginRight: 16, width: 24 },
  infoText: { fontSize: 16, color: '#34495E', flex: 1 },
  bioText: { fontSize: 16, color: '#34495E', lineHeight: 24 },
  appInfo: { fontSize: 14, color: '#7F8C8D', marginBottom: 4 }
});

export default ProfileScreen;