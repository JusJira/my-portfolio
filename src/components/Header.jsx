import React from 'react'
import { FaInstagram, FaGithub, FaFacebook, FaHome , FaTerminal } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout'
import ThemeToggle from './ThemeToggle'
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <Flex w="100%" justifyContent='right' bgColor={useColorModeValue('#F9F9F9', 'gray.900')} padding='10px' transition="background-color 200ms linear">
            <IconButton aria-label='Facebook Link' ml={2} icon={<FaFacebook />} isRound="true" onClick={() => { window.open('https://facebook.com/jus.jira/')}}></IconButton>
            <IconButton aria-label='Instagram Link' ml={2} icon={<FaInstagram />} isRound="true" onClick={() => { window.open('https://instagram.com/jus.jira/')}}></IconButton>
            <IconButton aria-label='Github Link' ml={2} icon={<FaGithub />} isRound="true" onClick={() => { window.open('https://github.com/JusJira')}}></IconButton>
            <Link to='/'>
                        <IconButton aria-label='Homepage' display={props.home ? 'flex' : 'none'} ml={2} icon={<FaHome />} isRound="true"></IconButton>
            </Link>
            <Link to='/code'>
                        <IconButton aria-label='Code Page' display={props.code ? 'flex' : 'none'} ml={2} icon={<FaTerminal />} isRound="true"></IconButton>
            </Link>
            <ThemeToggle/>
        </Flex>
    )
}

export default Header