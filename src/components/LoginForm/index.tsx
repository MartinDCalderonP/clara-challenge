import styles from './styles.module.css'
import { FormEvent, useState } from 'react'
import { validateEmail, validatePassword } from '../../utils/validations'

const fields = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email'
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password'
  },
  {
    name: 'agree',
    type: 'checkbox',
    placeholder: 'Agree'
  }
]

const LoginForm = () => {
  const [formData, setFormData] = useState<Record<string, string | boolean>>({
    email: '',
    password: '',
    agree: false
  })

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target as HTMLInputElement

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const [errorMessages, setErrorMessages] = useState<string[]>([])
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSuccessMessage(null)

    const errors: string[] = []

    if (!formData.email) {
      errors.push('Email is required')
    }

    if (!formData.password) {
      errors.push('Password is required')
    }

    if (errors.length > 0) {
      setErrorMessages(errors)
      return
    }

    setErrorMessages([])

    if (!validateEmail(formData.email as string)) {
      setErrorMessages(['Email is invalid'])
      return
    }

    if (!validatePassword(formData.password as string)) {
      setErrorMessages(['Password is invalid'])
      return
    }

    if (!formData.agree) {
      setErrorMessages(['You must agree to the terms'])
      return
    }

    setSuccessMessage('Form submitted successfully')
  }

  return (
    <article className={styles.loginFormContainer}>
      <form action='' className={styles.loginForm} onSubmit={handleFormSubmit}>
        {fields.map((field) => (
          <div key={field.name}>
            <input
              className={styles.loginFormField}
              name={field.name}
              placeholder={field.placeholder}
              type={field.type}
              value={formData[field.name] as string}
              onChange={handleChange}
            />

            {field.type === 'checkbox' && (
              <label htmlFor={field.name}>{field.placeholder}</label>
            )}
          </div>
        ))}
        <button type='submit'>Submit</button>
      </form>

      {errorMessages.length > 0 && (
        <div className={styles.errorMessages}>
          {errorMessages.map((message) => (
            <p key={message}>{message}</p>
          ))}
        </div>
      )}

      {successMessage && (
        <div className={styles.successMessage}>
          <p>{successMessage}</p>
        </div>
      )}
    </article>
  )
}

export default LoginForm
