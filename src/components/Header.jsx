import React from 'react'
import { FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/button';
import ThemeToggle from './ThemeToggle'

function Header() {
    return (
        <div>
            <IconButton aria-label='Facebook Link' ml={2} icon={<FaFacebook />} isRound="true" onClick={() => { window.open('https://facebook.com/jus.jira/')}}></IconButton>
            <IconButton aria-label='Instagram Link' ml={2} icon={<FaInstagram />} isRound="true" onClick={() => { window.open('https://instagram.com/jus.jira/')}}></IconButton>
            <IconButton aria-label='Github Link' ml={2} icon={<FaGithub />} isRound="true" onClick={() => { window.open('https://github.com/JusJira')}}></IconButton>
            <ThemeToggle/>
        </div>
    )
}

export default Header