import { Text, Box, Spinner } from "native-base"

const Home = () => {
    return (
        <Box
            justifyContent="center" 
            alignItems="center" 
            display="flex" 
            flex={1}
            bg="gray.900"
         >
                <Text 
                    color="white" 
                    mb="1rem" 
                    fontSize="29px" 
                    fontWeight="bold" 
                    >
                       Loading
                    </Text>
                <Spinner color="green.500" size="lg"/>
        </Box>
    )
}

export {Home}