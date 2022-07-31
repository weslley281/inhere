import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  function handlePaticipantAdd() {
    console.log('Você clicou aqui');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Novo Evento</Text>

      <Text style={styles.eventDate}>By Weslley Ferraz</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.imput}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handlePaticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Weslley ferraz" />
      <Participant name="vampeta santiago" />
      <Participant name="thorzinho gotozao" />
    </View>
  );
}
