import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { UserContext } from '../../../providers/userContext';

interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {

  const {loginRequest} = useContext(UserContext)

  const formSchema = yup.object().shape({
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    password: yup.string().required('Senha obrigatória')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginForm>({
    resolver: yupResolver(formSchema)
  })

  return(

  <StyledForm onSubmit={handleSubmit(loginRequest)}>
    <input className='input' placeholder='E-mail' type='email' {...register('email')} />
    <input className='input' placeholder='Senha' type='password' {...register('password')} />
    <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
      Entrar
    </StyledButton>
  </StyledForm>
  )
}

export default LoginForm;
