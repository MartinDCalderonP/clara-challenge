import styles from './styles.module.css'
import LoginForm from '../../components/LoginForm'
import LoginImage from '../../components/LoginImage'

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <LoginForm />
      <LoginImage />
    </div>
  )
}

export default Login
