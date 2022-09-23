import { useColorModeValue } from '@chakra-ui/color-mode'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Stack, Flex, Box, Text, Spacer } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import React from 'react'

function Profile() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box pr={isNotSmallerScreen ? "32" : 0} mt={isNotSmallerScreen ? "0" : 16} align={isNotSmallerScreen ? 'flex-start' : 'center'}>
                    <Text fontSize="2.5rem" fontWeight="semibold">Hi</Text>
                    <Text fontSize='4.5rem' fontWeight="bold"
                        bgGradient={useColorModeValue('linear(to-r, #12c2e9, #c471ed, #f64f59)', 'linear(to-r, red.400, purple.500)')}
                        bgClip='text' flex="nowrap">I'm Justin</Text>
                    <Stack align='center'>
                        <Text align={isNotSmallerScreen ? 'start' : 'center'} fontSize='1rem' w='20rem' color={useColorModeValue('gray.500', 'gray.200')}>I am a student majoring in Engineering at Chulalongkorn University, Thailand🇹🇭</Text>
                        <Spacer></Spacer>
                        <Button size='md' width='50%' align='center' mt={8} colorScheme="blue" onClick={() =>
                            window.open("mailto:jus.jira@gmail.com")
                        }>Contact Me</Button>
                    </Stack>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius={isNotSmallerScreen ? 'full' : '25px 25px'}
                    backgroundColor="transparent" boxShadow={useColorModeValue('sm', 'lg')}
                    boxSize="300" objectFit='none' src={useColorModeValue('/profile2.webp', '/profile.webp')} alt='Profile Image' loading='eager' />
                
            </Flex>
        </Stack>
    )
}

export default Profile