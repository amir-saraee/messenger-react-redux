import { Fragment, useState } from 'react'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import {
  Button,
  Media,
  Label,
  Row,
  Col,
  Input,
  FormGroup,
  Alert,
  Form
} from 'reactstrap'
import { toast, Slide } from 'react-toastify'
import axios from 'axios'

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
          ? 'Your data successfuly updated!'
          : 'Something went wrong... Please try again later.'}
      </span>
    </div>
  </Fragment>
)

const GeneralTabs = ({ userData }) => {
  const { register, errors, handleSubmit, control, setValue } = useForm()

  console.log(userData)

  const [avatar, setAvatar] = useState(
    userData && userData.avatar ? userData.avatar : ''
  )

  const onChange = (e) => {
    console.log(e)
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  const onSubmit = async (data) => {
    try {
      axios.put('http://130.185.75.133:8080/edit_user', data)
      toast.success(<ToastContent type='success' />)
    } catch (err) {
      toast.success(<ToastContent type='error' />)
      console.log(err)
    }
  }

  return (
    <Fragment>
      <Media>
        <Media className='mr-25' left>
          <Media
            object
            className='rounded mr-50'
            src={avatar}
            alt='Generic placeholder image'
            height='80'
            width='80'
          />
        </Media>
        <Media className='mt-75 ml-1' body>
          <Button.Ripple
            tag={Label}
            className='mr-75'
            size='sm'
            color='primary'
          >
            Upload
            <Input type='file' onChange={onChange} hidden accept='image/*' />
          </Button.Ripple>
          <Button.Ripple color='secondary' size='sm' outline>
            Reset
          </Button.Ripple>
          <p>Allowed JPG, GIF or PNG. Max size of 800kB</p>
        </Media>
      </Media>
      <Form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm='6'>
            <FormGroup>
              <Label for='username'>Name</Label>
              <Controller
                defaultValue={userData?.name || ''}
                control={control}
                as={Input}
                id='name'
                name='name'
                placeholder='Name'
                innerRef={register({ required: true })}
                onChange={(e) => setValue('name', e.target.value)}
                className={classnames({
                  'is-invalid': errors.name
                })}
              />
            </FormGroup>
          </Col>
          <Col sm='6'>
            <FormGroup>
              <Label for='name'>LastName</Label>
              <Controller
                defaultValue={userData?.familyName || ''}
                control={control}
                as={Input}
                id='lastname'
                name='familyName'
                placeholder='LastName'
                innerRef={register({ required: true })}
                onChange={(e) => setValue('familyName', e.target.value)}
                className={classnames({
                  'is-invalid': errors.familyName
                })}
              />
            </FormGroup>
          </Col>
          <Col sm='6'>
            <FormGroup>
              <Label for='email'>Phone</Label>
              <Input
                defaultValue={userData?.phoneNumber || ''}
                type='text'
                id='phone'
                name='phone'
                placeholder='Phone'
                disabled
              />
            </FormGroup>
          </Col>
          <Col sm='6'>
            <FormGroup>
              <Label for='company'>NickName</Label>
              <Controller
                defaultValue={userData?.nickName || ''}
                control={control}
                as={Input}
                id='nickname'
                name='nickName'
                placeholder='Nickname'
                innerRef={register({ required: true })}
                onChange={(e) => setValue('nickName', e.target.value)}
                className={classnames({
                  'is-invalid': errors.nickName
                })}
              />
            </FormGroup>
          </Col>
          <Col className='mt-2' sm='12'>
            <Button.Ripple type='submit' className='mr-1' color='primary'>
              Save changes
            </Button.Ripple>
            <Button.Ripple color='secondary' outline>
              Cancel
            </Button.Ripple>
          </Col>
        </Row>
      </Form>
    </Fragment>
  )
}

export default GeneralTabs
