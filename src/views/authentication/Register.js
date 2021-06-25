/* eslint-disable-next-line */
import { Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MessageCircle } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import classnames from 'classnames'
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
import { useForm } from 'react-hook-form'

import { isObjEmpty } from '@utils'
import { toast, Slide } from 'react-toastify'
import '@styles/base/pages/page-auth.scss'
import axios from 'axios'

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

const ToastContent = ({ type }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <h6 className='toast-title font-weight-bold'>
          {type === 'success' ? 'Success' : 'Error'}
        </h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>
        {type === 'success'
          ? 'You have successfully Signed up as an user to Messenger. Now you can start to explore. Enjoy!'
          : 'Something went wrong... Please try again later.'}
      </span>
    </div>
  </Fragment>
)

const Register = () => {
  const { handleSubmit, errors, register } = useForm()
  const history = useHistory()

  const formSubmitHandler = async (d) => {
    try {
      if (isObjEmpty(errors)) {
        const response = await axios.post(
          'http://130.185.75.133:8080/register',
          d
        )
        history.push('/login')
        toast.success(<ToastContent type='success' />, {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 3000
        })
      }
    } catch (err) {
      console.log(err)
      toast.error(<ToastContent type='error' />, {
        transition: Slide,
        hideProgressBar: true,
        autoClose: 3000
      })
    }
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
              onSubmit={handleSubmit(formSubmitHandler)}
            >
              <FormGroup>
                <Label className='form-label' for='login-phone'>
                  Phone
                </Label>
                <Input
                  type='text'
                  id='login-userName'
                  name='userName'
                  placeholder='Please enter your phone number...'
                  className={classnames({
                    'is-invalid': errors['userName']
                  })}
                  autoFocus
                  innerRef={register({ required: true })}
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
                  name='pass'
                  innerRef={register({ required: true })}
                  className={classnames({
                    'is-invalid': errors['pass']
                  })}
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
              <Button.Ripple type='submit' color='primary' block>
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
