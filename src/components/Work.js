import React from 'react'
import { HStack, Flex, useMediaQuery, Box, Spacer } from '@chakra-ui/react'

function Work() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <HStack>

            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "24" : "0"}
                align="flex-start">
                <Box w='100%' fontSize='4xl' fontWeight='semibold'>
                    Previous Works
                </Box>
                <Spacer></Spacer>

            </Flex>
        </HStack>
    );
}

export default Work