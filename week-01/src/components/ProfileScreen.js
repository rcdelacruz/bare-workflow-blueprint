import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';
import { styles } from '../styles/styles';

const ProfileScreen = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:your.email@example.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+1234567890');
  };

  const handleLinkedInPress = () => {
    Linking.openURL('https://linkedin.com/in/yourprofile');
  };

  const handleGitHubPress = () => {
    Linking.openURL('https://github.com/yourusername');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image
            source={require('../assets/images/profile-photo.jpg')}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <Text style={styles.name}>Your Name</Text>
          <Text style={styles.title}>React Native Developer</Text>
          <Text style={styles.location}>📍 Your City, Country</Text>
        </View>

        {/* Bio Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.bio}>
            Passionate mobile developer specializing in React Native. 
            I love building beautiful, performant apps that solve real-world problems. 
            Currently learning the bare workflow approach to gain deeper native insights.
          </Text>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {['React Native', 'JavaScript', 'TypeScript', 'iOS', 'Android', 'Git'].map(
              (skill, index) => (
                <View key={index} style={styles.skillTag}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              )
            )}
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get In Touch</Text>
          
          <TouchableOpacity style={styles.contactItem} onPress={handleEmailPress}>
            <Text style={styles.contactIcon}>📧</Text>
            <Text style={styles.contactText}>your.email@example.com</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={handlePhonePress}>
            <Text style={styles.contactIcon}>📱</Text>
            <Text style={styles.contactText}>+1 (234) 567-8900</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={handleLinkedInPress}>
            <Text style={styles.contactIcon}>💼</Text>
            <Text style={styles.contactText}>LinkedIn Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={handleGitHubPress}>
            <Text style={styles.contactIcon}>🔗</Text>
            <Text style={styles.contactText}>GitHub Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          
          <View style={styles.experienceItem}>
            <Text style={styles.jobTitle}>Mobile Developer</Text>
            <Text style={styles.company}>Your Company • 2023 - Present</Text>
            <Text style={styles.jobDescription}>
              Developing cross-platform mobile applications using React Native. 
              Focus on performance optimization and user experience.
            </Text>
          </View>

          <View style={styles.experienceItem}>
            <Text style={styles.jobTitle}>Frontend Developer</Text>
            <Text style={styles.company}>Previous Company • 2021 - 2023</Text>
            <Text style={styles.jobDescription}>
              Built responsive web applications with React and modern JavaScript. 
              Collaborated with design teams to implement pixel-perfect UIs.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;