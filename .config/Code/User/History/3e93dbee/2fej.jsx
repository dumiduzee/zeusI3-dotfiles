import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import girl from '../assets/images/avatars/girl 1.png'
import girl1 from '../assets/images/avatars/girl 2.png'
import girl2 from '../assets/images/avatars/grandfather 1.png'
import girl3 from '../assets/images/avatars/man-avatar 1.png'
import girl4 from '../assets/images/avatars/woman (1) 1.png'
import girl5 from '../assets/images/avatars/woman 1.png'



const Dashboard = () => {
  const balance = "LKR 45000";
  const recentActivity = [
    { id: '1', name: 'Dumidu Lakshan', amount: 'LKR 14000', date: '22 Jan 2022', time: '03:23AM', avatar: source={girl4}},
    { id: '2', name: 'Sadew Kavishka', amount: 'LKR 1200', date: '21 Jan 2022', time: '03:23AM', avatar: 'https://example.com/avatar2.png' },
    { id: '3', name: 'Malaka Saman', amount: 'LKR 12000', date: '20 Jan 2022', time: '03:23AM', avatar: 'https://example.com/avatar3.png' },
    { id: '4', name: 'Madura Sadun', amount: 'LKR 23000', date: '19 Jan 2022', time: '03:23AM', avatar: 'https://example.com/avatar4.png' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Balance and Search */}
        <View style={styles.balanceContainer}>
          <FontAwesome name="user-circle" size={50} color="#1E90FF" />
          <Text style={styles.balanceText}>{balance}</Text>
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="search" size={24} color="#1E90FF" />
          </TouchableOpacity>
        </View>

        {/* Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome5 name="paper-plane" size={24} color="#1E90FF" />
            <Text style={styles.actionText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome5 name="download" size={24} color="#1E90FF" />
            <Text style={styles.actionText}>Receive</Text>
          </TouchableOpacity>
        </View>

        {/* Beneficiaries */}
        <Text style={styles.sectionTitle}>Choose Beneficiary</Text>
        <View style={styles.beneficiaryContainer}>
          <TouchableOpacity style={styles.beneficiary}>
            <Text style={styles.beneficiaryText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.beneficiary}>
            <Image source={girl} style={styles.beneficiaryImage} />
            <Text style={styles.beneficiaryName}>Lakmi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.beneficiary}>
            <Image source={girl3} style={styles.beneficiaryImage} />
            <Text style={styles.beneficiaryName}>Lakshan</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <FlatList
          data={recentActivity}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.activityItem}>
              <Image source={{ uri: item.avatar }} style={styles.activityAvatar} />
              <View style={styles.activityInfo}>
                <Text style={styles.activityName}>{item.name}</Text>
                <Text style={styles.activityDate}>{item.date} | {item.time}</Text>
              </View>
              <Text style={styles.activityAmount}>{item.amount}</Text>
            </View>
          )}
        />

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity><FontAwesome name="home" size={28} color="#1E90FF" /></TouchableOpacity>
          <TouchableOpacity><FontAwesome5 name="exchange-alt" size={28} color="#666" /></TouchableOpacity>
          <TouchableOpacity><FontAwesome5 name="gift" size={28} color="#666" /></TouchableOpacity>
          <TouchableOpacity><FontAwesome5 name="user" size={28} color="#666" /></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 25,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    marginTop: 5,
    fontSize: 14,
    color: '#1E90FF',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  beneficiaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  beneficiary: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: 70,
    height: 70,
  },
  beneficiaryText: {
    fontSize: 30,
    color: '#1E90FF',
  },
  beneficiaryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  beneficiaryName: {
    fontSize: 12,
    marginTop: 5,
    color: '#333',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  activityAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  activityInfo: {
    flex: 1,
  },
  activityName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  activityDate: {
    fontSize: 12,
    color: '#666',
  },
  activityAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    backgroundColor: '#FFF',
  },
});

export default Dashboard;
