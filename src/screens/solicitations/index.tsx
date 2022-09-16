import { Text, Box, Input, ScrollView, Button } from "native-base";
import { Alert } from 'react-native';

const Solicitations = ({navigation}) => {
    return (
        <Box bg="#121214" h="100%">
            <Text 
                color="white" 
                textAlign="center" 
                fontSize="18px"
                fontWeight="bold"
                mt="2rem"
                mb="1rem"
                >
                    CRIAR NOVA SOLICITAÇÃO
            </Text>
            <ScrollView w="100%" showsVerticalScrollIndicator={false}>
                <Input h={50} mb={5} placeholder="Nº do Patrimonio" w="90%" m="auto"/>
                <Input h={450} mb={3} placeholder="Descrição do Problema" w="90%" m="auto"/>
            </ScrollView>
            <Button colorScheme="green" w="91%" m="auto" size="lg" onPress={() => Alert.alert("Criado com sucesso!", navigation.navigate("Home"))}>Solicitar</Button>
       </Box>
    )
}

export { Solicitations };