import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
    const participants = ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

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

            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map(participant => (
                        <Participant
                            key={participant}
                            name={participant}
                            onRemove={() => handlePaticipantRemove('Weslley')}
                        />
                    ))
                }
            </ScrollView>
        </View>
    );
}
