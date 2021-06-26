import { Fragment, useState, useEffect } from 'react'
import Tabs from './Tabs'
import axios from 'axios'
import Breadcrumbs from '@components/breadcrumbs'
import GeneralTabContent from './GeneralTabContent'
import PasswordTabContent from './PasswordTabContent'
import { Row, Col, TabContent, TabPane, Card, CardBody } from 'reactstrap'
import useJwt from '@src/auth/jwt/useJwt'

import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState('1'),
    [userData, setUserData] = useState(null)

  const toggleTab = (tab) => {
    setActiveTab(tab)
  }

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await axios.get(
          'http://130.185.75.133:8080/get_user_info'
        )
        setUserData(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    sendRequest()
  }, [])

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle='Account Settings'
        breadCrumbParent='Pages'
        breadCrumbActive='Account Settings'
      />
      <Row>
        <Col className='mb-2 mb-md-0' md='3'>
          <Tabs activeTab={activeTab} toggleTab={toggleTab} />
        </Col>
        <Col md='9'>
          {userData && (
            <Card>
              <CardBody>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId='1'>
                    <GeneralTabContent userData={userData} />
                  </TabPane>
                  <TabPane tabId='2'>
                    <PasswordTabContent />
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          )}
        </Col>
      </Row>
    </Fragment>
  )
}

export default AccountSettings
