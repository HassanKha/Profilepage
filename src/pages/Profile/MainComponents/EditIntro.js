import React from 'react'
import woman from '../assets/undraw_teacher.svg'
import './style/EditIntro.scss'

const EditIntro = () => {
  return (
    <div className="EditIntro">
      <div className="leftContent">
        <h1>Welcome Sheela!</h1>
        <h3>Check What`s up with your Schedule... </h3>
      </div>
      <div className="img">
        <img src={woman} alt="woman sit on table" />
      </div>
    </div>
  )
}

export default EditIntro
