import React, { Suspense } from 'react'
import { VStack, Flex, Spacer } from '@chakra-ui/layout'
import Header from './components/Header';
import Social from './components/Social';
// import Profile from './components/Profile'
const Profile = React.lazy(() => import('./components/Profile'))



function App() {


  return (
    <VStack p={5}>
      <Flex w="100%">
        <Spacer></Spacer>
        <Header></Header>
      </Flex>
      <Suspense fallback={<div>Loading</div>}>
        <Profile></Profile>
      </Suspense>
      <Social></Social>
    </VStack>
  );
}

export default App