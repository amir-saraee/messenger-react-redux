import { Link } from 'react-router-dom'
import { MessageCircle } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Button
} from 'reactstrap'
import '@styles/base/pages/page-auth.scss'

const Login = () => {
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
            <CardTitle tag='h4' className='mb-1'>
              Welcome to Messenger!
            </CardTitle>
            <CardText className='mb-2'>
              Please sign-in to your account and start the adventure
            </CardText>
            <Form
              className='auth-login-form mt-2'
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
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/pages/forgot-password-v1'>
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <InputPasswordToggle
                  className='input-group-merge'
                  id='login-password'
                />
              </FormGroup>
              <FormGroup>
                <CustomInput
                  type='checkbox'
                  className='custom-control-Primary'
                  id='remember-me'
                  label='Remember Me'
                />
              </FormGroup>
              <Button.Ripple color='primary' block>
                Sign in
              </Button.Ripple>
            </Form>
            <p className='text-center mt-2'>
              <span className='mr-25'>New on our platform?</span>
              <Link to='/signup'>
                <span>Create an account</span>
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Login
