import * as yup from 'yup'

export const schema = yup.object({
  email: yup
    .string()
    .required('email không được để trống !')
    .email('Email không đúng định dạng')
    .min(5, 'Độ dài từ 5 - 160 ký tự')
    .max(160, 'Độ dài từ 5 - 160 ký tự'),
  password: yup
    .string()
    .required('mật khẩu không được để trống !')
    .min(6, 'Độ dài từ 5 - 160 ký tự')
    .max(160, 'Độ dài từ 5 - 160 ký tự'),
  confirm_password: yup
    .string()
    .required('mật khẩu không được để trống !')
    .min(5, 'Độ dài từ 5 - 160 ký tự')
    .max(160, 'Độ dài từ 5 - 160 ký tự')
    .oneOf([yup.ref('password')], 'mật khẩu không khớp !')
})
export type Schema = yup.InferType<typeof schema>
