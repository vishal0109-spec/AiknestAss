import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const patientData = [
  { id: '1', name: 'ROHIT RAMESH', modality: 'MRI', description: 'MRI CARDIAC CE', status: 'Pending', date: '01-10-2024', time: '10:24:28' },
  { id: '2', name: 'anon aikc20d1dc0', modality: 'MRI', description: 'MRI BRAIN WITH M...', status: 'Pending', date: '01-10-2024', time: '18:27:54' },
  { id: '3', name: 'anon aikf797048c', modality: 'MRI', description: 'MRI CERVICAL SPINE', status: 'Pending', date: '01-10-2024', time: '18:25:08' },
  { id: '4', name: 'Pancreas-CT-CB_002', modality: 'CT', description: 'Pancreas/Liver DIB...', status: 'Pending', date: '30-09-2024', time: '12:00:03' },
];

const PatientCard = ({ patient }) => (
  <View style={styles.card}>
    <Text style={styles.patientName}>{patient.name}</Text>
    <View style={styles.row}>
      <Text style={styles.label}>Modality:</Text>
      <Text style={styles.value}>{patient.modality}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>{patient.description}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Date & Time:</Text>
      <Text style={styles.value}>{patient.date} {patient.time}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Report Status:</Text>
      <Text style={patient.status === 'Pending' ? styles.pendingStatus : styles.completedStatus}>
        {patient.status}
      </Text>
    </View>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Patient Report Overview</Text>
      <FlatList
        data={patientData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PatientCard patient={item} />}
        contentContainerStyle={styles.flatListContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
    textTransform: 'uppercase',
  },
  flatListContainer: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#4caf50',
  },
  patientName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: '600',
    marginRight: 10,
    color: '#555',
  },
  value: {
    fontWeight: '400',
    color: '#777',
  },
  pendingStatus: {
    color: '#ff9800',
    fontWeight: '600',
  },
  completedStatus: {
    color: 'green',
    fontWeight: '600',
  },
});
