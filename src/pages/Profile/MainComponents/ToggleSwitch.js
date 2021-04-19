import React from 'react'
import './style/ToggleSwitch.scss'

const ToggleSwitch = () => {
  return (
    <div>
      <div className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </div>
    </div>
  )
}

export default ToggleSwitch
