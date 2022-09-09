import { Link } from 'react-router-dom';
import { Flex, Box, Image, useColorModeValue, Button, Text } from '@chakra-ui/react'

function NotFound() {

    return (
        <Flex alignItems='center' justifyContent='center' margin='0' padding='0' h='100vh'>
            <Box align='center'>
                <Image alignSelf="center" borderRadius='25px 25px'
                    backgroundColor="transparent" boxShadow={useColorModeValue('sm', 'lg')}
                    boxSize="300" objectFit='none' src='images/notfound.png' alt='Profile Image' loading='eager' />
                <Text fontSize='3xl' mt={8} fontWeight="semibold">Oops, your page was not found.</Text>
                <Link to='/'>
                    <Button size='md' width='50%' align='center' mt={8} colorScheme="blue">Goto Homepage</Button>
                </Link>
            </Box>
        </Flex>
    )
}

export default NotFound;