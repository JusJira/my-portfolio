import React from 'react'
import { Flex, useMediaQuery, Text } from '@chakra-ui/react'
import WorkTemplate from './WorkTemplate';

function Work() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <>
            <Text fontSize="2.5em" w='100' fontWeight="bold">Previous Works</Text>
            <Flex direction={isNotSmallerScreen ? "row" : "column" } flexGrow='0' flexShrink='0' flexWrap='wrap'
                align="flex-start" gap={isNotSmallerScreen ? '10': '0'}>
                <WorkTemplate name='React Video Player' desc='This site uses react-player to play videos.' link='https://mech.imjustin.dev/' imgfile='react-code'></WorkTemplate>
                <WorkTemplate name='Minecraft Website' desc='A website for my minecraft server.' link='https://mc.imjustin.dev/' imgfile='minecraft-website'></WorkTemplate>
            </Flex>
        </>
    );
}

export default Work