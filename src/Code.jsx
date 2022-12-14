import { Flex, VStack, Spacer } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import CodeGen from './components/CodeGen';
import { codeblock } from './components/CodeFile';

function Code() {
    return (
        <VStack p={5} bgColor={useColorModeValue('#F9F9F9','gray.900')} transition="background-color 200ms linear">
            <Flex w="100%">
                <Spacer></Spacer>
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