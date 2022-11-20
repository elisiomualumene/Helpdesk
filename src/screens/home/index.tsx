import { Text, Box, Flex, Button, ScrollView } from 'native-base';
import { useState } from 'react';
import { data, data2 } from '../../mock/db';
const Home = ({navigation}) => {

    const [tabs, setTabs] = useState<boolean>(true)

    const [info3, setInfo] = useState<boolean>(true)
    
    const info = {
        id: 1,
        machine: "09779",
        description: "não liga!",
        createdAt: new Date()
    }

    function handleChange(){
        data2.push(info)
    }

    return (
        <Box bg="#121214" h="100%">
            <Flex 
                flexDirection="column"
                justifyContent="space-between"
                direction="row"
                marginTop={6}
                marginBottom={4}
                marginLeft={8}
                marginRight={8}
            >
                <Text 
                    color="white" 
                    fontSize="20px" 
                    fontWeight="bold"
                    >
                        Solicitações
                </Text>
                <Text 
                     color="white" 
                     fontSize="20px" 
                     fontWeight="bold"
                    >
                        {tabs ? data.length : 0}
                </Text>    
            </Flex>
            {/* Buttons */}
            <Flex 
                flexDirection="column"
                justifyContent="space-between"
                direction="row"
                marginLeft={8}
                marginRight={8}
            >
                <Button
                    color="white" 
                    fontSize="20px" 
                    w="50%"
                    mr=".5rem"
                    fontWeight="bold"
                    size="lg"
                    colorScheme={tabs ? "orange" : "gray"}
                    variant={tabs ? "outline" : "solid"}
                    bg={tabs ? "" : "#202024"}
                    borderColor={tabs ? "orange.600" : "none"}
                    onPress={() => setTabs(true)}
                    >
                        EM ANDAMENTO
                </Button>
                <Button 
                     color="white" 
                     w="50%"
                     fontSize="20px" 
                     fontWeight="bold"
                     size="lg"
                     colorScheme={!tabs ? "green" : "gray"}
                     variant={!tabs ? "outline" : "solid"}
                     bg={!tabs ? "" : "#202024"}
                     borderColor={!tabs ? "green.600" : "none"}
                     onPress={() => setTabs(false)}
                    >
                        FINALIZADOS
                </Button>    
            </Flex>
            <ScrollView w="100%" showsVerticalScrollIndicator={false}>
                {
                    tabs ? data.map((data: any) => ( //for
                        <Box 
                            key={data.id} 
                            bg="#202024"
                            h={95}
                            borderRadius={5}
                            marginLeft={"auto"}
                            marginRight={"auto"}
                            w="90%"
                            marginTop={4}
                            >
                            <Flex flexDirection="row" h="100%">
                                <Box 
                                    bg="orange.600" 
                                    h="100%" 
                                    borderLeftRadius={5}
                                    >
                                        {data.id}
                                </Box>
                                <Box>
                                    <Text color="white" m="1rem" fontSize="18px" onPress={handleChange}>
                                        Patrimonio{" "}{data.machine}
                                    </Text>
                                    
                                    <Text color="#C4C4CC" ml="1.5rem" fontSize="12px">
                                        {" "}{data.createAt}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    ))
                : 
                info3 ? (
                data2.map((data: any) => ( //for
                        <Box 
                            key={data.id} 
                            bg="#202024"
                            h={95}
                            borderRadius={5}
                            marginLeft={"auto"}
                            marginRight={"auto"}
                            w="90%"
                            marginTop={4}
                            >
                            <Flex flexDirection="row" h="100%">
                                <Box 
                                    bg="green.600" 
                                    h="100%" 
                                    borderLeftRadius={5}
                                    >
                                        {data.id}
                                </Box>
                                <Box>
                                    <Text color="white" m="1rem" fontSize="18px" >
                                        Patrimonio{" "}{data.machine}
                                    </Text>
                                    
                                    <Text color="#C4C4CC" ml="1.5rem" fontSize="12px">
                                        {" "}{data.createAt}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    )    ))
                
                }
                    
            </ScrollView>

            <Button 
                colorScheme="red" 
                w="91%" 
                mb="10px" 
                m="auto" 
                size="lg"
                onPress={() => setTabs()}
                >
                    Limpar
                </Button>

            <Button colorScheme="green" w="91%" m="auto" size="lg" onPress={() => navigation.navigate("Solicitation")}>Nova Solicitação</Button>
        </Box>
    )
}

export {Home}