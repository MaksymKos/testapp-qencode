export function validateEmail(email: string) { 
  let data: string = ''

  if (!email.trim()) {
    data = "The email field is required"
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    data = "The email is not valid"
  }

  return data
}

export function validatePassword(password: string) { 
  let data: string = '';

  if (!password.trim()) {
    data = "The password field is required"
  } else if (password.length < 8) {
    data = "The password must be at least 8 characters long"
  } else if (password.length > 50) {
    data = "The password must not be longer than 50 characters"
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
    data = "Password is not strong. Should contain at least one numeric, one uppercase letter, and one lowercase letter"
  }

  return data
}

export function validateConfirmPassword(
  password: string,
) {
  return (confirmPassword: string) => {
    let data: string = '';

    if (!confirmPassword.trim()) {
      data = "The confirm password field is required"
    } else if (password !== confirmPassword) {
      data = "The passwords are not the same"
    }

    return data
  }
}
