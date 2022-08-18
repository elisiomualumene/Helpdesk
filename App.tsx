import React from 'react';
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider } from 'native-base';
import { SignIn } from './src/screens/signIn'
export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <SignIn/>
    </NativeBaseProvider>
  );
}