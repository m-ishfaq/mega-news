import { Button, FormControl, FormHelperText, FormLabel, Icon, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Breadcrumbs from './Breadcrumbs'
import { Link, useLocation } from 'react-router-dom'

const Forgot = () => {
    const location = useLocation();
    const current = location.pathname.split('/').filter(Boolean).pop();

    if(current === 'forgot-password') {
        return (
            <VStack id='login'>
              <Breadcrumbs current={'Sign In'} />
              <VStack id='form'>
                <VStack id="google">
                  <h3>Get Reset Link!</h3>
                </VStack>
                <VStack id='inputs'>
                  <SimpleInput type={'email'} name={'Email'} placeholder={'dev360@test.com'} />
                </VStack>
                <VStack id='formBottom'> 
                    <Button p={'0'} variant={'ghost'} id='loginBtn'>
                        <span>Get Reset Link</span>
                    </Button>
                    <p>
                        Back to login? <Link to={'/sign-in'}>Click Here</Link>
                    </p>
                </VStack>
              </VStack>
            </VStack>
        )
    } else {
        return (
            <VStack id='login'>
              <Breadcrumbs current={'Sign In'} />
              <VStack id='form'>
                <VStack id="google">
                  <h3>Reset Password Now!</h3>
                </VStack>
                <VStack id='inputs'>
                  <PasswordInput name={'Password'} />
                  <PasswordInput name={'Confirm Password'} />
                </VStack>
                <VStack id='formBottom'> 
                  <Button p={'0'} variant={'ghost'} id='loginBtn'>
                    <span>Get Reset Link</span>
                  </Button>
                </VStack>
              </VStack>
            </VStack>
        )
    }
}

const SimpleInput = ({type, name, placeholder}) => (
    <FormControl id='inputSimple'>
      <FormLabel>{name}</FormLabel>
      <Input type={type} placeholder={placeholder} />
    </FormControl>
);
  
const PasswordInput = ({name}) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    
    return (
      <FormControl id='inputSimple'>
        <FormLabel>{name}</FormLabel>
          <InputGroup>
            <Input type={showPassword ? 'text' : 'password'} value={'Dev360'} />
            <InputRightElement>
              <Icon as={showPassword ? ViewOffIcon : ViewIcon} onClick={handleShowPassword} cursor={'pointer'}/>
            </InputRightElement>
          </InputGroup>
      </FormControl>
    )
}

export default Forgot