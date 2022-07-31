import { Text, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        React Native
      </Text>

      <Text style={styles.eventDate}>
        By Weslley Ferraz
      </Text>
    </View>
  );
}