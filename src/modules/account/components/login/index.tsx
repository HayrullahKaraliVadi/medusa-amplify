import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import Input from '@modules/common/components/input'
import { SubmitButton } from '@modules/checkout/components/submit-button'
import ErrorMessage from '@modules/checkout/components/error-message'
import { LOGIN_VIEW } from '@modules/account/templates/login-template'
import { SIGN_IN } from "../../../../graphql/mutations/auth"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState<string | null>(null)

  const [signIn, { loading }] = useMutation(SIGN_IN)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    try {
      const { data } = await signIn({
        variables: {
          email: form.email,
          password: form.password,
          storefrontId: '16',
        },
      })

      const result = data?.signIn
      if (result?.error) {
        setError(result.error)
      } else {
        console.log('Giriş başarılı:', result)
        // İsteğe bağlı: localStorage.setItem('accessToken', result.accessToken)
        // veya setCurrentView(...) ile yönlendirme yapabilirsin
      }
    } catch (err: any) {
      setError(err.message || 'Giriş sırasında hata oluştu')
    }
  }

  return (
    <div
      className="max-w-sm w-full flex flex-col items-center"
      data-testid="login-page"
    >
      <h1 className="text-large-semi uppercase mb-6">Welcome back</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-8">
        Sign in to access an enhanced shopping experience.
      </p>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            autoComplete="email"
            required
            data-testid="email-input"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            autoComplete="current-password"
            required
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={error} data-testid="login-error-message" />
        <SubmitButton
          data-testid="sign-in-button"
          className="w-full mt-6"
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Not a member?{' '}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
          data-testid="register-button"
        >
          Join us
        </button>
        .
      </span>
    </div>
  )
}

export default Login
