import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { UserContext } from '../../../providers/userContext';

interface iRegisterSubmit {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const RegisterForm = () => {

  const {userRegister} = useContext(UserContext)
  
  const formSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    password: yup
      .string()
      .matches(/.{6,}/, 'Deve ter pelo menos 6 caracteres')
      .required(
        'Senha deve conter ao menos 6 caracteres'
      ),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password')], 'Senhas deve ser iguais')
      .required('Confirmação de senha obrigatória'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm <iRegisterSubmit>({
    resolver: yupResolver(formSchema)
  })

  return(
  <StyledForm onSubmit={handleSubmit(userRegister)}> 
    <input className='input' placeholder='Nome' type='text' {...register('name')} />
    <input className='input' placeholder='E-mail' type='email' {...register('email')} />
    <input className='input' placeholder='Senha' type='password' {...register('password')} />
    <input className='input' placeholder='Confirmação de Senha' type='password' {...register('passwordConfirmation')} />

    <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
      Cadastrar
    </StyledButton>
    
  </StyledForm>
  )

};

export default RegisterForm;
