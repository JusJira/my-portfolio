import React from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { FaSun, FaMoon, FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa'

function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div>
            <IconButton aria-label='Facebook Link' ml={2} icon={<FaFacebook />} isRound="true" onClick={() => { window.open('https://facebook.com/jus.jira/')}}></IconButton>
            <IconButton aria-label='Instagram Link' ml={2} icon={<FaInstagram />} isRound="true" onClick={() => { window.open('https://instagram.com/jus.jira/')}}></IconButton>
            <IconButton aria-label='Github Link' ml={2} icon={<FaGithub />} isRound="true" onClick={() => { window.open('https://github.com/JusJira')}}></IconButton>
            <IconButton aria-label='Theme Toggle' color={colorMode === 'light' ? 'cyan.900' : 'orange.300'} ml={8} icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
        </div>
    )
}

export default Header