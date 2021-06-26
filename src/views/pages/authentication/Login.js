/* eslint-disable-next-line */
import { Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MessageCircle } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import classnames from 'classnames'
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
  Button,
  InputGroup
} from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import useJwt from '@src/auth/jwt/useJwt'
import { useDispatch } from 'react-redux'
import { handleLogin } from '@store/actions/auth'
import { getHomeRouteForLoggedInUser, isObjEmpty } from '@utils'
import { toast, Slide } from 'react-toastify'
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.ir'
import '@styles/base/pages/page-auth.scss'

const ToastContent = ({ type }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <h6 className='toast-title font-weight-bold'>
          {type === 'success' ? 'Welcome' : 'Error'}
        </h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>
        {type === 'success'
          ? 'You have successfully logged in as an user to Messenger. Now you can start to explore. Enjoy!'
          : 'Something went wrong... Please try again later.'}
      </span>
    </div>
  </Fragment>
)

const Login = () => {
  const { handleSubmit, errors, register, control } = useForm()
  const dispatch = useDispatch()
  const history = useHistory()

  const formSubmitHandler = async (d) => {
    if (isObjEmpty(errors)) {
      useJwt
        .login(d)
        .then((res) => {
          console.log(res)
          const data = {
            accessToken: res.data.token
          }
          dispatch(handleLogin(data))
          history.push(getHomeRouteForLoggedInUser('admin'))
          toast.success(<ToastContent type='success' />, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 3000
          })
        })
        .catch((err) => {
          console.log(err.response)
          toast.error(<ToastContent type='error' />, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 3000
          })
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
            <CardTitle tag='h4' className='mb-1'>
              Welcome to Messenger!
            </CardTitle>
            <CardText className='mb-2'>
              Please sign-in to your account and start the adventure
            </CardText>
            <Form
              className='auth-login-form mt-2'
              onSubmit={handleSubmit(formSubmitHandler)}
            >
              <FormGroup>
                <Label className='form-label' for='login-phone'>
                  Phone
                </Label>
                {/* <Input
                  type='text'
                  id='login-userName'
                  name='userName'
                  placeholder='Please enter your phone number...'
                  className={classnames({
                    'is-invalid': errors['userName']
                  })}
                  autoFocus
                  innerRef={register({ required: true })}
                /> */}
                <Controller
                  as={
                    <InputGroup className='input-group-merge'>
                      <Cleave
                        className={classnames({
                          'form-control': true,
                          'is-invalid': errors['userName']
                        })}
                        placeholder='9121234567'
                        options={{ prefix: '+98', blocks: [13] }}
                        id='phone-number'
                        name='userName'
                      />
                    </InputGroup>
                  }
                  name='userName'
                  control={control}
                  rules={{ required: true, pattern: /^\+[0-9]{12}$/g }}
                  defaultValue=''
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
                  label='Remember Me'
                />
              </FormGroup>
              <Button.Ripple type='submit' color='primary' block>
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
