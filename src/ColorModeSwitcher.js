import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ColorModeSwitcher = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <Button variant={'ghost'} color={'current'} pos={'fixed'} top={'2'} zIndex={'overlay'} right={'2'} onClick={toggleColorMode} {...props}>
      {icon}
    </Button>
  );
};

export default ColorModeSwitcher;