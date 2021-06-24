import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Button
} from 'reactstrap'
import '@styles/base/pages/page-auth.scss'

const Register = () => {
  const RememberMe = () => {
    return (
      <Fragment>
        I agree to
        <a className='ml-25' href='/' onClick={(e) => e.preventDefault()}>
          privacy policy & terms
        </a>
      </Fragment>
    )
  }

  return (
    <div className='auth-wrapper auth-v1 px-2'>
      <div className='auth-inner py-2'>
        <Card className='mb-0'>
          <CardBody>
            <Link
              className='brand-logo'
              to='/'
              onClick={(e) => e.preventDefault()}
            >
              <MessageCircle />
              <h2 className='brand-text text-primary ml-1'>Messenger</h2>
            </Link>

            <Form
              className='auth-register-form mt-2'
              onSubmit={(e) => e.preventDefault()}
            >
              <FormGroup>
                <Label className='form-label' for='login-phone'>
                  Phone
                </Label>
                <Input
                  type='text'
                  id='login-phone'
                  placeholder='Please enter your phone number...'
                  autoFocus
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-password'>
                  Password
                </Label>
                <InputPasswordToggle
                  className='input-group-merge'
                  id='register-password'
                />
              </FormGroup>
              <FormGroup>
                <CustomInput
                  type='checkbox'
                  className='custom-control-Primary'
                  id='remember-me'
                  label={<RememberMe />}
                />
              </FormGroup>
              <Button.Ripple color='primary' block>
                Sign up
              </Button.Ripple>
            </Form>
            <p className='text-center mt-2'>
              <span className='mr-25'>Already have an account?</span>
              <Link to='/login'>
                <span>Sign in instead</span>
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Register
