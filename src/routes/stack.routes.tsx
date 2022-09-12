import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { SignIn } from "../screens/signIn";
import { Home } from "../screens/home";

const StackRoutes = () => {
    return (
        <Navigator initialRouteName="SignIn">
            <Screen
                name="signIn"
                component={SignIn}
                options={{ title: 'Entrar',
                    headerStyle: {
                        backgroundColor: 'green',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                }}
            />
            <Screen
                name="Home"
                component={Home}
                options={{ title: 'Home',  
                headerStyle: {
                    backgroundColor: 'green',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                  },
            }}
            />
        </Navigator>
    )
}

export { StackRoutes };