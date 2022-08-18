import React from 'react';
import { Box, Text, Input, Stack, Button } from 'native-base'

const SignIn = () => {
    return(
        <Box 
            justifyContent="center" 
            alignItems="center" 
            display="flex" 
            flex={1}
            bg="gray.900"
            >
            <Text 
                color="green.600" 
                fontSize="40px" 
                fontWeight="bold"
                mt="-2rem"
                mb="2rem"
                >
                HELP
                <Text 
                    color="violet.500"
                >
                    DESK
                </Text>
            </Text>
            <Stack 
                space={4} 
                w="100%" 
                alignItems="center"
                >
                <Input 
                w={{
                base: "80%",
                md: "25%"
                }} 
                size={5}
                color="muted.400" 
                placeholder="Name"
                fontSize={'18px'}
                bgColor={'gray.900'}
                borderColor={'green.900'}
                _focus={{borderColor: 'green.900'}}
                />
                <Input w={{
                base: "80%",
                md: "25%"
                }}
                size={5}
                color="muted.400" 
                placeholder="Password" 
                fontSize={'18px'}
                bgColor={'gray.900'}
                borderColor={'green.900'}
                _focus={{borderColor: 'green.900'}}
                />
                <Button 
                    colorScheme={'green'} 
                    w="80%"
                    size={'lg'}
                    marginTop={8}
                    >
                    Entrar
                </Button>
            </Stack>;
        </Box>
    )
}
export { SignIn };