import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "native-base"
const { Screen, Navigator } = createNativeStackNavigator();

import { SignIn } from "../screens/signIn";
import { Home } from "../screens/home";
import { Solicitations } from "../screens/solicitations";

const StackRoutes = () => {
    return (
        <Navigator initialRouteName="SignIn">
            <Screen
                name="signIn"
                component={SignIn}
                options={{ title: 'Entrar',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                      headerShown: false,
                }}
            />
            <Screen
                name="Home"
                component={Home}
                options={{ title: 'Home',  
                headerStyle: {
                    backgroundColor: '#202024',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                headerTitle: () =>  (
                <Text 
                color="green.600" 
                fontSize="35px" 
                fontWeight="bold"
                >
                HELP
                <Text 
                    color="violet.500"
                >
                    DESK
                </Text>
            </Text>),
            }}
            />

        <Screen
                name="Solicitation"
                component={Solicitations}
                options={{ title: 'Nova Solicitação',  
                headerStyle: {
                    backgroundColor: '#202024',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                headerTitle: () =>  (
                <Text 
                color="green.600" 
                fontSize="35px" 
                fontWeight="bold"
                >
                HELP
                <Text 
                    color="violet.500"
                >
                    DESK
                </Text>
            </Text>),
            }}
            />
        </Navigator>
    )
}

export { StackRoutes };