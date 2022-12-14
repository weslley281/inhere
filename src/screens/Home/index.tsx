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
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handlePaticipantAdd() {
    if (participantName === ''){
      return Alert.alert(
        'Erro ao cadastrar',
        'Preencha um nome de Usuário Válido'
      )
    }

    if (participants.includes(participantName)) {
      return Alert.alert(
        'Erro ao Cadastrar',
        'Já exite um participante com esse nome'
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName('');
  }

  function handlePaticipantRemove(name: string) {    
    Alert.alert(
      'Alerta',
      `Você tem certeza que quer remover o participante ${name} ?`,
      [
        {
          text: 'OK',
          onPress: () =>
            setParticipants((prevState) =>
              prevState.filter((participant) => participant !== name)
            ),
        },
        {
          text: 'Cancelar',
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Cadastro de Eventos</Text>

      <Text style={styles.eventDate}>By Weslley Ferraz</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.imput}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
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
