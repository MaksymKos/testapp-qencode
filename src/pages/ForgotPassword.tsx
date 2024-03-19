import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { Errors } from '../types/errors'
import { validateEmail } from '../utils/validation'
import { ResetType } from '../types/inputTypes'
import { resetUserPassword } from '../api/api'
import { toast } from 'react-toastify'

import Title from '../components/Title'
import ButtonComponent from '../components/ButtonComponent'
import Inputs from '../components/Inputs'
import Logo from '../assets/Logo'

const ForgotPassword = () => {
  const [errors, setErrors] = useState<Errors>({})
  const [inputs, setInputs] = useState<ResetType>({
    email: '',
  })
  const navigate = useNavigate()
  const handleCancelButtonClick = () => navigate('/')

  const handleSendButtonClick = async () => {
    const isFormValid = !validateEmail(inputs.email)
    if (!isFormValid) return toast.error('Something wrong with form')

    try {
      const { detail } = await resetUserPassword(inputs.email!)
      toast.success(detail)
    } catch (error) {
      toast.error('Something went wrong')
    }

    setInputs({
      email: '',
    })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
      }}
    >
      <Logo />
      <Title text='Forgot Password?' />

      <Inputs
        fields={[
          { name: 'email', type: 'email', label: 'Enter your email', validationHandler: validateEmail },
        ]}
        inputs={inputs}
        setInputs={setInputs}
        errors={errors}
        setErrors={setErrors}
      />

      <Box sx={{ width: '100%', marginTop: '-30px' }}>
        <ButtonComponent
          handler={handleSendButtonClick}
          text="Send"
          contained
        />
        <ButtonComponent
          handler={handleCancelButtonClick}
          text="Cancel"
        />
      </Box>
    </Box>
  );
};

export default ForgotPassword;