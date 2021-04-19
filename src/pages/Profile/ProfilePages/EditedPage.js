import React from 'react'

import EditedForm from '../MainComponents/EditedForm'
import EditIntro from '../MainComponents/EditIntro'

const EditedPage = ({ Contact, PInfo, EInfo, SocialNetworks }) => {
  return (
    <>
      <EditIntro />
      <EditedForm
        SocialNetworks={SocialNetworks}
        Contact={Contact}
        EInfo={EInfo}
        PInfo={PInfo}
      />
    </>
  )
}

export default EditedPage
