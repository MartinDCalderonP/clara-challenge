export const validateEmail = (email: string): boolean => {
  const regex = /\S+@\S+\.\S+/
  return regex.test(email)
}

export const validatePassword = (password: string): boolean => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[#$()!.])[A-Za-z\d#$()!.]{8,}$/
  return regex.test(password)
}
