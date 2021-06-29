// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import NavbarUser from './NavbarUser'

const ThemeNavbar = (props) => {
  // ** Props
  const { skin, setSkin, setMenuVisibility, isRtl, setIsRtl } = props

  return (
    <Fragment>
      <NavbarUser
        skin={skin}
        setSkin={setSkin}
        setMenuVisibility={setMenuVisibility}
        isRtl={isRtl}
        setIsRtl={setIsRtl}
      />
    </Fragment>
  )
}

export default ThemeNavbar
