import React from 'react'
import { VStack, Flex, Spacer } from '@chakra-ui/layout'
import Header from './components/Header';
import Social from './components/Social';
import Profile from './components/Profile'
import Work from './components/Work'


function App() {


  return (
    <VStack p={5}>
      <Flex w="100%">
        <Spacer></Spacer>
        <Header></Header>
      </Flex>
      <Profile></Profile>
      <Work></Work>
      <Social></Social>
    </VStack>
  );
}

export default App