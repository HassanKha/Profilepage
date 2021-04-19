import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFingerprint,
  faUser,
  faQrcode,
} from '@fortawesome/free-solid-svg-icons'
import ToggleSwitch from './ToggleSwitch'
import './style/SignInInfo.scss'

const SignInInfo = () => {
  return (
    <div className="SignInInfo">
      <h4>Sign in information</h4>
      <div className="content">
        <div className="contentLabels">
          <h4>Fingerprint</h4>
          <h4>Face ID</h4>
          <h4>QR Code</h4>
        </div>
        <div className="allcontent">
          <div className="contentTools">
            <div className="toSign">
              <FontAwesomeIcon icon={faFingerprint} />
              <h5>Fingerprint</h5>
            </div>

            <ToggleSwitch />
          </div>
          <div className="contentTools">
            <div className="toSign">
              <FontAwesomeIcon icon={faUser} />
              <h5>Face Id</h5>
            </div>
            <ToggleSwitch />
          </div>
          <div className="contentTools">
            <div className="toSign">
              <FontAwesomeIcon icon={faQrcode} />
              <h5>QR Code</h5>
            </div>

            <ToggleSwitch />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInInfo
