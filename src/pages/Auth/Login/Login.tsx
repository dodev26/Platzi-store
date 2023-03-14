import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import authApi from 'src/apis/auth.api'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { Schema, schema } from 'src/utils/schema'
import { useAppContext } from 'src/contexts/app.context'
import { useNavigate } from 'react-router-dom'

type FormData = Pick<Schema, 'email' | 'password'>
const loginSchema = schema.pick(['email', 'password'])
const Login = () => {
  const { setIsAuthenticated } = useAppContext()
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(loginSchema)
  })
  const loginMutation = useMutation(authApi.login)

  const onSubmit = handleSubmit(async (data) => {
    const res = await loginMutation.mutateAsync(data)
    if (res.data.access_token && res.data.refresh_token) {
      setIsAuthenticated(true)
    }
  })

  return (
    <div className='py-16'>
      <div className='container'>
        <div>
          <form action='' className='mx-auto w-[349px] p-[15px]' onSubmit={onSubmit}>
            <div className='flex flex-col items-start'>
              <label htmlFor='email' className='mb-2 text-base font-semibold'>
                Email
              </label>
              <input
                className='w-full rounded-xl bg-Fgrey py-[11.5px] pl-[16px] pr-[21px] text-[14px] text-Agrey outline-none transition-all focus:text-black'
                type='email'
                placeholder='email'
                {...register('email')}
              />
            </div>
            <div className='mt-8 flex flex-col items-start'>
              <label htmlFor='password' className='mb-2 text-base font-semibold'>
                Password
              </label>
              <input
                className='w-full rounded-xl bg-Fgrey py-[11.5px] pl-[16px] pr-[21px] text-[14px] text-Agrey outline-none transition-all focus:text-black'
                type='password'
                placeholder='password'
                {...register('password')}
              />
            </div>
            <div className='mt-8 flex flex-col items-start'>
              <button type='submit' className='w-full rounded-xl bg-green px-4 py-3 text-white'>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
