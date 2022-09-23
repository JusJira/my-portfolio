import { Flex, VStack, Spacer } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import CodeGen from './components/CodeGen';
import ThemeToggle from './components/ThemeToggle';
import { codeblock } from './components/CodeFile';

function Code() {
    return (
        <VStack p={5} bgColor={useColorModeValue('#F9F9F9','gray.900')} transition="background-color 200ms linear">
            <Flex w="100%">
                <Spacer></Spacer>
                <div>
                    <Link to='/'>
                        <IconButton aria-label='Homepage' ml={2} icon={<FaHome />} isRound="true"></IconButton>
                    </Link>
                    <ThemeToggle />
                </div>
            </Flex>
            <Flex flexDirection='column'>
                <CodeGen name='Homework 2'
                    lk='https://colab.research.google.com/drive/1S7BXxCcDzpGaajbMqNFd-QwzNrM18qp4?usp=sharing'
                    pic='HW2' code={codeblock.python} />
            </Flex>
        </VStack>
    )
}

export default Code;