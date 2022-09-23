import { Stack, Flex, Box, Button, Text } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'


function CodeGen(props) {
    const codename = props.name
    const link = props.lk
    const code = props.code

    return (
        <Stack m='60px' pb='100px'>
            <Flex alignItems='center' justifyContent='center' margin='0' padding='0' h='100vh'>
                <Box align='center'>
                    <Box align='left' bgColor={useColorModeValue('purple.100','blue.900')} p={10} borderRadius='0.5em'>
                        <pre>
                            <code>{code}</code>
                        </pre>
                    </Box>
                    <Text fontSize='3xl' mt={8} fontWeight="semibold">{codename}</Text>
                    <Text fontSize='lg' fontWeight="700" color='red.500'>!! เอาไว้เป็นแนวทางเท่านั้นห้ามลอกส่ง !!</Text>
                    <Button size='md' width='60%' align='center' mt={8} colorScheme="blue" fontSize='80%'
                        onClick={() => window.open(link)
                        }
                    >Goto Google Colab</Button>
                </Box>
            </Flex>
        </Stack>
    )
}

export default CodeGen;