import React, { useState } from 'react'
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  CustomInput
} from 'reactstrap'
import { Search } from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'
import ImgAvatar from '../../../../assets/images/avatars/1-small.png'
import Avatar from '@components/avatar'

const AddGroup = ({ modalIsOpen, setModalIsOpen }) => {
  const [privacy, setPrivacy] = useState('public')
  return (
    <Modal
      isOpen={modalIsOpen}
      toggle={() => setModalIsOpen((prevState) => !prevState)}
    >
      <ModalHeader toggle={() => setModalIsOpen((prevState) => !prevState)}>
        Create a New Group
      </ModalHeader>
      <ModalBody>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='create-group-form'
        >
          <div>
            <label htmlFor=''>Group name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Type group name here'
            />
          </div>
          <div>
            <label htmlFor=''>Group privacy</label>
            <div className='group-privacy-wrap'>
              <CustomInput
                type='radio'
                className='custom-control-primary'
                id='public'
                label='Public group'
                onChange={(e) => setPrivacy('public')}
                checked={privacy === 'public'}
              />
              <CustomInput
                type='radio'
                className='custom-control-primary'
                id='private'
                label='Private group'
                onChange={(e) => setPrivacy('private')}
                checked={privacy === 'private'}
              />
            </div>
          </div>
          <div>
            <label htmlFor=''>Mebmbers</label>
            <div>
              <div className='search-members'>
                <input
                  type='text'
                  placeholder='Search...'
                  className='form-control'
                />
                <Search className='search-members-icon' />
              </div>
              <PerfectScrollbar
                className='find-members-wraper'
                options={{ wheelPropagation: false }}
              >
                <div className='member-block'>
                  <div className='member-info'>
                    <Avatar
                      className='avatar-border'
                      img={ImgAvatar}
                      imgHeight='42'
                      imgWidth='42'
                    />
                    <span>username</span>
                  </div>
                  <div className='member-checkbox'>
                    <CustomInput
                      type='checkbox'
                      id={'id'}
                      label=''
                      // checked={!!selectedRows.includes(col.id)}
                      // onChange={() => handleSelect(col.id)}
                    />
                  </div>
                </div>
                <div className='member-block'>
                  <div className='member-info'>
                    <Avatar
                      className='avatar-border'
                      img={ImgAvatar}
                      imgHeight='42'
                      imgWidth='42'
                    />
                    <span>username</span>
                  </div>
                  <div className='member-checkbox'>
                    <CustomInput type='checkbox' id={'id'} label='' />
                  </div>
                </div>
                <div className='member-block'>
                  <div className='member-info'>
                    <Avatar
                      className='avatar-border'
                      img={ImgAvatar}
                      imgHeight='42'
                      imgWidth='42'
                    />
                    <span>username</span>
                  </div>
                  <div className='member-checkbox'>
                    <CustomInput type='checkbox' id={'id'} label='' />
                  </div>
                </div>
                <div className='member-block'>
                  <div className='member-info'>
                    <Avatar
                      className='avatar-border'
                      img={ImgAvatar}
                      imgHeight='42'
                      imgWidth='42'
                    />
                    <span>username</span>
                  </div>
                  <div className='member-checkbox'>
                    <CustomInput type='checkbox' id={'id'} label='' />
                  </div>
                </div>
                <div className='member-block'>
                  <div className='member-info'>
                    <Avatar
                      className='avatar-border'
                      img={ImgAvatar}
                      imgHeight='42'
                      imgWidth='42'
                    />
                    <span>username</span>
                  </div>
                  <div className='member-checkbox'>
                    <CustomInput type='checkbox' id={'id'} label='' />
                  </div>
                </div>
              </PerfectScrollbar>
            </div>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color='primary'>Create</Button>
      </ModalFooter>
    </Modal>
  )
}

export default AddGroup
