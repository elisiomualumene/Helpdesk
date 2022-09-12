import { NativeStackScreenProps } from "@react-navigation/native-stack";

interface Routes{
    signIn: any,
    Home: any
}

type Stackprops = NativeStackScreenProps<Routes, singIn>


interface Props {
    routes: Stackprops
}