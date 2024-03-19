import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, FormGroup, Typography, Link, Tooltip } from '@mui/material'

import { Errors } from '../types/errors'
import { validateEmail, validatePassword } from '../utils/validation'
import { LoginType } from '../types/inputTypes'
import { loginUser } from '../api/api'
import { toast } from 'react-toastify'

import Inputs from '../components/Inputs'
import Title from '../components/Title'
import Logo from '../assets/Logo'
import Divider from '../components/Divider'
import ButtonComponent from '../components/ButtonComponent'
import SocialsAuth from '../components/SocialsAuth'

const LoginPage = () => {
  const [errors, setErrors] = useState<Errors>({})
  const [inputs, setInputs] = useState<LoginType>({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleLoginButtonClick = async () => {
    const isFormValid = !validateEmail(inputs.email) && !validatePassword(inputs.password)
    if (!isFormValid) return toast.error('Something wrong with form')

    try {
      const userData = await loginUser({
        email: inputs.email!,
        password: inputs.password!,
      })

      localStorage.setItem('token', userData.refresh_token)
      toast.success(userData.detail)
      navigate('home')
    } catch (error) {
      toast.warning('Something wrong with login or password')
    }
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      width='100%'
    >

      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap='30px'
        marginBottom='30px'
      >
        <Logo />
        <Title text='Log in to your account' />
        <SocialsAuth />
        <Divider />
      </Box>

      <FormGroup>
        <Inputs
          fields={[
            { name: 'email', type: 'email', label: 'Work email', validationHandler: validateEmail },
            { name: 'password', type: 'password', label: 'Password', validationHandler: validatePassword, isHidden: !!validateEmail(inputs.email || '') },
          ]}
          inputs={inputs}
          setInputs={setInputs}
          errors={errors}
          setErrors={setErrors}
        />

        <Box
          display='flex'
          justifyContent='flex-end'
          marginBottom='30px'
        >
          <Link underline='none' href='/#/reset'>
            Forgot your password?
          </Link>
        </Box>

        <ButtonComponent
          handler={handleLoginButtonClick}
          text="Log in to Qencode"
          contained
        />
      </FormGroup>

      <Typography sx={{
        fontFamily: 'Basis Grotesque Pro',
        fontSize: '15px',
      }}>
        Is your company new to Qencode?{' '}
        <Tooltip title="Not developed yet🫠">
          <Link underline='none'>
            Sign up
          </Link>
        </Tooltip>
      </Typography>

    </Box>
  )
}

export default LoginPage