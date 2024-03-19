import React, { useState, ChangeEvent, FocusEvent } from 'react'
import { TextField, InputAdornment, IconButton, Tooltip } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FieldsItem, LoginType, SetType, ResetType } from '../types/inputTypes'
import { Errors } from '../types/errors'

type Props = {
  fields: FieldsItem[];
  inputs: LoginType | SetType | ResetType;
  setInputs: (x: LoginType | SetType | ResetType) => void;
  errors: Errors;
  setErrors: (x: {}) => void;
  isNewPassword?: boolean
};

const Inputs = ({
  fields,
  inputs,
  setInputs,
  errors,
  setErrors,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show)

  const handleChange = (
    { target: { name, value } }: ChangeEvent<HTMLInputElement>
  ) => {
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const updateFieldErrors = (key: string, value: string | undefined) => {
    setErrors((previous: Errors) => ({ ...previous, [key]: value }))
  }

  const inputsOnBlur = (validationHandler: any) =>
    ({ target: { name } }: FocusEvent<HTMLInputElement>) => {
      const result = validationHandler(inputs[name])
      updateFieldErrors(name, result)
    }

  const getInputProps = (item: any) => {
    const isConfirmPassword = item.name === 'password' ? showPassword : showConfirmPassword
    const title = isConfirmPassword ? 'Hide password' : 'Show passord'
    return item.type === 'password'
      ? {
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip title={title}>
              <IconButton
                onClick={item.name === 'password' ? handleClickShowPassword : handleClickShowConfirmPassword}
                edge="end"
              >
                {isConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Tooltip>
          </InputAdornment>
        )
      }
      : undefined
  }

  return (
    <>
      {fields.map((item: FieldsItem) => { //todo
        if (item.isHidden) {
          if (errors[item.name]) updateFieldErrors(item.name, undefined)

          return <React.Fragment key={item.name} />
        }

        const InputProps = getInputProps(item)
        const isConfirmPassword = item.name === 'password' ? showPassword : showConfirmPassword

        return (
          <React.Fragment key={item.name}>
            <TextField
              key={item.name}
              type={isConfirmPassword ? 'text' : item.type}
              name={item.name}
              label={item.label}
              sx={{
                width: '400px',
                marginBottom: '25px',
              }}
              error={!!errors[item.name]}
              helperText={errors[item.name]}
              value={inputs[item.name]}
              onChange={handleChange}
              onBlur={inputsOnBlur(item.validationHandler)}
              InputProps={InputProps}
            />
          </React.Fragment>)
      })}
    </>
  )
}

export default Inputs