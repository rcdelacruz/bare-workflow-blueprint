import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useTodoStore from '../store/todoStore';

const AddTodoScreen = ({ navigation }) => {
  const { addTodo } = useTodoStore();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const priorities = [
    { value: 'high', label: 'High', color: '#E74C3C', icon: 'priority-high' },
    { value: 'medium', label: 'Medium', color: '#F39C12', icon: 'remove' },
    { value: 'low', label: 'Low', color: '#27AE60', icon: 'expand-more' }
  ];

  const handleSave = async () => {
    if (!formData.title.trim()) {
      Alert.alert('Error', 'Please enter a todo title');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await addTodo(
        formData.title,
        formData.description,
        formData.priority
      );
      
      if (result.success) {
        navigation.goBack();
      } else if (result.offline) {
        // Todo was saved offline, still navigate back
        navigation.goBack();
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to save todo');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          {/* Title Input */}
          <View style={styles.section}>
            <Text style={styles.label}>Title *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter todo title"
              value={formData.title}
              onChangeText={(text) => setFormData(prev => ({ ...prev, title: text }))}
              multiline
              maxLength={100}
              editable={!isSubmitting}
            />
            <Text style={styles.charCount}>{formData.title.length}/100</Text>
          </View>

          {/* Description Input */}
          <View style={styles.section}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.descriptionInput]}
              placeholder="Add more details (optional)"
              value={formData.description}
              onChangeText={(text) => setFormData(prev => ({ ...prev, description: text }))}
              multiline
              numberOfLines={4}
              maxLength={500}
              textAlignVertical="top"
              editable={!isSubmitting}
            />
            <Text style={styles.charCount}>{formData.description.length}/500</Text>
          </View>

          {/* Priority Selection */}
          <View style={styles.section}>
            <Text style={styles.label}>Priority</Text>
            <View style={styles.priorityContainer}>
              {priorities.map((priority) => (
                <TouchableOpacity
                  key={priority.value}
                  style={[
                    styles.priorityButton,
                    formData.priority === priority.value && {
                      backgroundColor: priority.color,
                      borderColor: priority.color
                    }
                  ]}
                  onPress={() => setFormData(prev => ({ ...prev, priority: priority.value }))}
                  disabled={isSubmitting}
                >
                  <Icon
                    name={priority.icon}
                    size={20}
                    color={formData.priority === priority.value ? '#fff' : priority.color}
                  />
                  <Text
                    style={[
                      styles.priorityText,
                      formData.priority === priority.value && { color: '#fff' }
                    ]}
                  >
                    {priority.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Save Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.saveButton,
            (!formData.title.trim() || isSubmitting) && styles.saveButtonDisabled
          ]}
          onPress={handleSave}
          disabled={!formData.title.trim() || isSubmitting}
        >
          {isSubmitting ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <>
              <Icon name="save" size={20} color="#fff" style={styles.saveIcon} />
              <Text style={styles.saveButtonText}>Save Todo</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  content: { flex: 1, paddingHorizontal: 20 },
  form: { paddingVertical: 20 },
  section: { marginBottom: 24 },
  label: { fontSize: 16, fontWeight: '600', color: '#2C3E50', marginBottom: 8 },
  input: { backgroundColor: '#fff', borderRadius: 12, padding: 16, fontSize: 16, color: '#2C3E50', borderWidth: 1, borderColor: '#E5E7EB' },
  descriptionInput: { minHeight: 100 },
  charCount: { fontSize: 12, color: '#7F8C8D', textAlign: 'right', marginTop: 4 },
  priorityContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  priorityButton: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 12, borderRadius: 8, borderWidth: 2, borderColor: '#E5E7EB', backgroundColor: '#fff', marginHorizontal: 4 },
  priorityText: { fontSize: 14, fontWeight: '500', marginLeft: 8, color: '#2C3E50' },
  footer: { padding: 20, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#E5E7EB' },
  saveButton: { backgroundColor: '#3498DB', borderRadius: 12, height: 56, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  saveButtonDisabled: { backgroundColor: '#BDC3C7' },
  saveIcon: { marginRight: 8 },
  saveButtonText: { fontSize: 16, fontWeight: '600', color: '#fff' }
});

export default AddTodoScreen;