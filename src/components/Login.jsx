import { Button, FormControl, FormHelperText, FormLabel, Icon, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Breadcrumbs from './Breadcrumbs'
import { CiLogin } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

const Login = () => {

  return (
    <VStack id='login'>
      <Breadcrumbs current={'Sign In'} />
      <VStack id='form'>
        <VStack id="google">
          <h3>Welcome Back!</h3>
          <p>Continue with Google or enter your details</p>
          <Link id="googleBtn">
            <FcGoogle size={25} /> <span>Login with Google</span> 
          </Link>
        </VStack>
        <VStack id='inputs'>
          <SimpleInput type={'email'} name={'Email'} placeholder={'dev360@test.com'} />
          <PasswordInput name={'Password'}/>
        </VStack>
        <VStack id='formBottom'> 
          <Button p={'0'} variant={'ghost'} id='loginBtn'>
            <CiLogin size={'20'} enableBackground='black'/> <span>Sign In</span>
          </Button>
          <p>
            Don't have an account? <Link to={'/register'}>Sign Up for free</Link>
          </p>
        </VStack>
      </VStack>
    </VStack>
  )
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
    <FormControl id='inputSimple' marginBottom={'1.5vmax'}>
      <FormLabel>{name}</FormLabel>
        <InputGroup>
          <Input type={showPassword ? 'text' : 'password'} value={'Dev360'} />
          <InputRightElement>
            <Icon as={showPassword ? ViewOffIcon : ViewIcon} onClick={handleShowPassword} cursor={'pointer'}/>
          </InputRightElement>
        </InputGroup>
        <FormHelperText id='helperText'>
          <Link to={'/forgot-password'} >Forgot Password?</Link>
        </FormHelperText>
    </FormControl>
  )
}

export default Login