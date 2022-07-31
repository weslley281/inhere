import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  function handlePaticipantAdd() {
    console.log('Adciona um Participante');
  }

  function handlePaticipantRemove(name: string){
    console.log(`Remove o participante ${name}`);
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

      <Participant name="Weslley ferraz" onRemove={() => handlePaticipantRemove('Weslley')}/>
    </View>
  );
}
