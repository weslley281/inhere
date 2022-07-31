import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131016',
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 48,
        }}
      >
        React Native
      </Text>

      <Text style={{
        color: '#6B9B9B',
        fontSize: 16
      }}>By Weslley Ferraz</Text>
    </View>
  );
}
