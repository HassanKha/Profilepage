import React from 'react'

import EditIntro from '../MainComponents/EditIntro'
import EditForm from '../MainComponents/EditForm'
import styles from '../MainComponents/style/EditPage.scss'

const EditPage = ({
  Contact,
  setContact,
  PInfo,
  setPInfo,
  EInfo,
  setEInfo,
  SocialNetworks,
  setSocialNetworks,
}) => {
  return (
    <>
      <EditIntro />
      <EditForm
        SocialNetworks={SocialNetworks}
        setSocialNetworks={setSocialNetworks}
        EInfo={EInfo}
        setEInfo={setEInfo}
        PInfo={PInfo}
        setPInfo={setPInfo}
        Contact={Contact}
        setContact={setContact}
      />
    </>
  )
}

export default EditPage
