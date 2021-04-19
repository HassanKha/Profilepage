import React, { Suspense, useState } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, useLocation } from 'react-router-dom'

import styles from './App.module.scss'

// Landing page - for all the same

import LoadingSimple from '../UI/LoadingSimple/LoadingSimple'

// Routes and Layout for public/unauthorized user
import Layout from '../Layouts/PublicLayout'

import NavBar from '../../pages/Landing/components/NavBar/NavBar'
import EditedPage from '../../pages/Profile/ProfilePages/EditedPage'
import EditPage from '../../pages/Profile/ProfilePages/EditPage'

const App = ({ title }) => {
  const [Contact, setContact] = useState({
    Nickname: '',
    mail: '',
    Email: '',
    Phone: '',
  })

  const [PInfo, setPInfo] = useState({
    Month: 'January',
    Day: '1',
    Gender: 'male',
  })
  const [EInfo, setEInfo] = useState({
    University: '',
    Major: '',
    Position: '',
  })
  const [SocialNetworks, setSocialNetworks] = useState({
    Linkedin: '',
    Google: '',
    Facebook: '',
    Instagram: '',
    Twitter: '',
  })
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <EditPage
            SocialNetworks={SocialNetworks}
            setSocialNetworks={setSocialNetworks}
            EInfo={EInfo}
            setEInfo={setEInfo}
            PInfo={PInfo}
            setPInfo={setPInfo}
            Contact={Contact}
            setContact={setContact}
          />
        </Route>
        <Route path="/Edit" exact>
          <EditedPage
            SocialNetworks={SocialNetworks}
            EInfo={EInfo}
            PInfo={PInfo}
            Contact={Contact}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default App
