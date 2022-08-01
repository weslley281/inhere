import { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState(['Weslley']);

  function handlePaticipantAdd() {
    if (participants.includes('a')) {
      return Alert.alert(
        'Erro ao Cadastrar',
        'Já exite um participante com esse nome'
      );
    }

    setParticipants(prevState => [...prevState , 'Gotosao']);
  }

  function handlePaticipantRemove(name: string) {
    Alert.alert(
      'Alerta',
      `Você tem certeza que quer remover o participante ${name} ?`,
      [
        {
          text: 'OK',
          onPress: () => Alert.alert(`Você deletou ${name}`),
        },
        {
          text: 'Cancelar',
        },
      ]
    );
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

      <FlatList
        style={styles.campoRolagem}
        keyExtractor={(item) => item}
        data={participants}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handlePaticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpytText}>
            Ninguém quer ir nesse evento, seu trouxa
          </Text>
        )}
      />
    </View>
  );
}
