import { Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
    const participants = ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    function handlePaticipantAdd() {
        console.log('Adciona um Participante');
    }

    function handlePaticipantRemove(name: string){
        console.log(`Remove o participante ${name}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Novo Evento</Text>

            <Text style={styles.eventDate}>
                By Weslley Ferraz
            </Text>

            <View style={styles.form}>
                <TextInput
                style={styles.imput}
                placeholder="Nome do participante"
                placeholderTextColor="#6B6B6B"
                />

                <TouchableOpacity style={styles.button} onPress={handlePaticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.campoRolagem}
                keyExtractor={item => item}
                data={participants}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handlePaticipantRemove('Weslley')}
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
