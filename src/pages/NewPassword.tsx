import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { Errors } from '../types/errors'
import { validatePassword, validateConfirmPassword } from '../utils/validation'
import { SetType } from '../types/inputTypes'
import { setNewUserPassword } from '../api/api'
import { toast } from 'react-toastify'

import Logo from '../assets/Logo'
import Title from '../components/Title'
import Inputs from '../components/Inputs'
import ButtonComponent from '../components/ButtonComponent'
import { hasNoError } from '../utils/utils'

const NewPassword = () => {
  const [errors, setErrors] = useState<Errors>({})
  const [inputs, setInputs] = useState<SetType>({
    password: '',
    confirmPassword: '',
  })
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const token = params.get('token') || ''
  const secret = params.get('secret') || ''

  const validationConfirmPassword = validateConfirmPassword(inputs.password)

  useEffect(() => {
    if (!token || !secret) {
      toast.error('Invalid link. Please reset your password once again')
      navigate('/')
    }
  })

  const handleResetButtonClick = async () => {
    const isFormValid = !hasNoError(errors) && validatePassword(inputs.password) && validationConfirmPassword(inputs.confirmPassword)
    if (!isFormValid) return toast.error("Something wrong happend")

    try {
      const { detail } = await setNewUserPassword({
        token,
        secret,
        password: inputs.password!,
        password_confirm: inputs.confirmPassword!,
      })

      toast.success(detail)
      navigate('/')
    } catch (error) {
      toast.error('Link expired, send email again')
    }
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      width='100%'
      gap='30px'
    >
      <Logo />
      <Title text='Create new Password?' />

      <Box>
        <Inputs
          fields={[
            { name: 'password', type: 'password', label: 'Password', validationHandler: validatePassword },
            { name: 'confirmPassword', type: 'password', label: 'Confirm Password', validationHandler: validateConfirmPassword },
          ]}
          inputs={inputs}
          setInputs={setInputs}
          errors={errors}
          setErrors={setErrors}
          isNewPassword
        />

        <ButtonComponent
          handler={handleResetButtonClick}
          text="Reset Password"
          contained
        />
      </Box>
    </Box>
  );
};

export default NewPassword;