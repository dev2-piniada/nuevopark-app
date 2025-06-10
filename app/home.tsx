import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';

const actions = [
  {
    key: 'Enter',
    label: 'Enter & exit a carpark',
    icon: 'https://t3.app.stg.nuevopark.com/_static/operators/4c4b30ce-dd7a-442b-80b3-340110bf9ba2/staticfiles/b65cddfb-9baa-4dbb-983e-d8d83ac18e36.svg',
  },
  {
    key: 'Book',
    label: 'Book parking in advance',
    icon: 'https://t3.app.stg.nuevopark.com/_static/operators/4c4b30ce-dd7a-442b-80b3-340110bf9ba2/staticfiles/b65cddfb-9baa-4dbb-983e-d8d83ac18e36.svg',
  },
  {
    key: 'Pay',
    label: 'Pay using the App',
    icon: 'https://t3.app.stg.nuevopark.com/_static/operators/4c4b30ce-dd7a-442b-80b3-340110bf9ba2/staticfiles/b65cddfb-9baa-4dbb-983e-d8d83ac18e36.svg',
  },
  {
    key: 'Validate',
    label: 'Validate a parking ticket',
    icon: 'https://t3.app.stg.nuevopark.com/_static/operators/4c4b30ce-dd7a-442b-80b3-340110bf9ba2/staticfiles/b65cddfb-9baa-4dbb-983e-d8d83ac18e36.svg',
  },
  {
    key: 'QuickPark',
    label: 'Repeat a previous park',
    icon: 'https://t3.app.stg.nuevopark.com/_static/operators/4c4b30ce-dd7a-442b-80b3-340110bf9ba2/staticfiles/b65cddfb-9baa-4dbb-983e-d8d83ac18e36.svg',
  },
  {
    key: 'Park',
    label: 'Park with the App',
    icon: 'https://t3.app.stg.nuevopark.com/_static/operators/4c4b30ce-dd7a-442b-80b3-340110bf9ba2/staticfiles/b65cddfb-9baa-4dbb-983e-d8d83ac18e36.svg',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top row */}
      <View style={styles.topRow}>
        <Text style={styles.signupText}>👤 Sign-up</Text>
        <Image
          source={{
            uri: 'https://t3.app.stg.nuevopark.com/_static/operators/4c4b30ce-dd7a-442b-80b3-340110bf9ba2/staticfiles/30ad2398-3290-4f07-9e70-17cf66472838.png',
          }}
          style={styles.logo}
        />
      </View>

      {/* Banner */}
      <TouchableOpacity style={styles.banner}>
        <Text style={styles.bannerText}>Register for Charge parking & save ➔</Text>
      </TouchableOpacity>

      {/* Grid */}
      <FlatList
        data={actions}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ marginTop: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.icon }} style={styles.cardIcon} />
            <Text style={styles.cardTitle}>{item.key}</Text>
            <Text style={styles.cardSubtitle}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Optional footer banner */}
      <View style={styles.footerBanner}>
        <Text style={{ fontSize: 12, color: 'gray' }}>
          Install this App to access all its features
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#b89b9b' },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signupText: { fontSize: 16, margin: 8 },
  logo: { width: 36, height: 36, margin: 8 },
  banner: {
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
    margin: 8,
  },
  bannerText: { fontSize: 14, color: '#333' },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    width: '46%',
    alignItems: 'center',
    margin: 8,
  },
  cardIcon: { width: 48, height: 48, marginBottom: 12 },
  cardTitle: { fontWeight: 'bold', fontSize: 16 },
  cardSubtitle: { fontSize: 12, textAlign: 'center', color: '#666' },
  footerBanner: {
    alignItems: 'center',
    marginTop: 16,
    margin: 8,
    padding: 12,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
  },
});
