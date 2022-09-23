import React from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

function ThemeToggle() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <IconButton aria-label='Theme Toggle' color={colorMode === 'light' ? 'cyan.900' : 'orange.300'} ml={8} icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
    )
}

export default ThemeToggle