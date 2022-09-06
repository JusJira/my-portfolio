import { HStack } from '@chakra-ui/layout'
import Icon from '@chakra-ui/icon'
import React from 'react'
import { FaFacebook, FaInstagram, FaSchool, FaGithub } from 'react-icons/fa'
import { useMediaQuery } from '@chakra-ui/media-query';

function Social() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <HStack spacing={isNotSmallerScreen ? '24' : 5}>
            <Icon as={FaFacebook} boxSize="50" onClick={() => {window.open('https://facebook.com/Jus.Jira')}}/>
            <Icon as={FaInstagram} boxSize="50" onClick={() => {window.open('https://instagram.com/Jus.Jira')}}/>
            <Icon as={FaGithub} boxSize="50" onClick={() => {window.open('https://github.com/JusJira')}}/>
            <Icon as={FaSchool} boxSize="50" onClick={() => {window.open('https://chula.ac.th')}}/>
        </HStack>
    )
}

export default Social