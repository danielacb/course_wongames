import {
  requestPasswordValidate,
  resetPasswordValidate,
  signInValidate,
  signUpValidate
} from '.'

describe('validations', () => {
  describe('signInValidate()', () => {
    it('should validate empty values', () => {
      const values = { email: '', password: '' }

      expect(signInValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty'
      })
    })

    it('should return invalid email error', () => {
      const values = { email: 'fakeemail', password: 'mypassword' }

      expect(signInValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })
  })

  describe('signUpValidate()', () => {
    it('should validate empty values', () => {
      const values = { username: '', email: '', password: '' }

      expect(signUpValidate(values)).toMatchObject({
        username: expect.any(String),
        email: expect.any(String),
        password: expect.any(String),
        confirm_password: expect.any(String)
      })
    })

    it('should return short username error', () => {
      const values = {
        username: 'jo',
        email: 'myname@email.com',
        password: 'mypassword'
      }

      expect(signUpValidate(values).username).toMatchInlineSnapshot(
        `"\\"username\\" length must be at least 5 characters long"`
      )
    })

    it('should return invalid email error', () => {
      const values = {
        username: 'myuser',
        email: 'fakeemail',
        password: 'mypassword'
      }

      expect(signUpValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })

    it('should return a error if passwords do not match', () => {
      const values = {
        username: 'myuser',
        email: 'myemail@email.com',
        password: 'mypassword',
        confirm_password: 'notthesame'
      }

      expect(signUpValidate(values).confirm_password).toMatchInlineSnapshot(
        `"passwords do not match"`
      )
    })
  })
})

describe('requestPasswordValidate()', () => {
  it('should validate empty fields', () => {
    const values = { email: '' }

    expect(requestPasswordValidate(values)).toMatchObject({
      email: '"email" is not allowed to be empty'
    })
  })

  it('should return invalid email error', () => {
    const values = { email: 'invalid-email' }
    expect(requestPasswordValidate(values).email).toMatchInlineSnapshot(
      `"\\"email\\" must be a valid email"`
    )
  })
})

describe('resetPasswordValidate()', () => {
  it('should validate empty fields', () => {
    const values = { password: '', confirm_password: '' }

    expect(resetPasswordValidate(values)).toMatchObject({
      password: expect.any(String)
    })
  })

  it('should validate confirm password when empty', () => {
    const values = { password: '123', confirm_password: '' }

    expect(
      resetPasswordValidate(values).confirm_password
    ).toMatchInlineSnapshot(
      `"\\"confirm_password\\" is not allowed to be empty"`
    )
  })

  it('should validate confirm password when different', () => {
    const values = { password: '123', confirm_password: '321' }

    expect(
      resetPasswordValidate(values).confirm_password
    ).toMatchInlineSnapshot(`"passwords do not match"`)
  })
})
