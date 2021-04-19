import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import Avatar from '../assets/avatar.png'
import SignInInfo from './SignInInfo'
import './style/EditForm.scss'
import Gi from '../assets/Girl.png'
import TickMark from '../assets/TickMark.svg'
import close from '../assets/close.svg'

const EditForm = ({
  Contact,
  setContact,
  PInfo,
  setPInfo,
  EInfo,
  setEInfo,
  SocialNetworks,
  setSocialNetworks,
}) => {
  const [state, setstate] = useState(false)
  const PopUp = () => {
    setstate(true)
  }

  const GetNickName = e => {
    setContact({ ...Contact, Nickname: e.target.value })
  }
  const GetMail = e => {
    setContact({ ...Contact, mail: e.target.value })
  }
  const GetEmail = e => {
    setContact({ ...Contact, Email: e.target.value })
  }
  const GetPhone = e => {
    setContact({ ...Contact, Phone: e.target.value })
  }
  const GetMonth = e => {
    setPInfo({ ...PInfo, Month: e.target.value })
  }
  const GetDay = e => {
    setPInfo({ ...PInfo, Day: e.target.value })
  }
  const GetGender = e => {
    setPInfo({ ...PInfo, Gender: e.target.value })
  }
  const GetUniversity = e => {
    setEInfo({ ...EInfo, University: e.target.value })
  }
  const GetMajor = e => {
    setEInfo({ ...EInfo, Major: e.target.value })
  }
  const GetPosition = e => {
    setEInfo({ ...EInfo, Position: e.target.value })
  }
  const GetLinkedin = e => {
    setSocialNetworks({ ...SocialNetworks, Linkedin: e.target.value })
  }
  const GetGoogle = e => {
    setSocialNetworks({ ...SocialNetworks, Google: e.target.value })
  }
  const GetFacebook = e => {
    setSocialNetworks({ ...SocialNetworks, Facebook: e.target.value })
  }
  const GetTwitter = e => {
    setSocialNetworks({ ...SocialNetworks, Twitter: e.target.value })
  }
  const GetInsta = e => {
    setSocialNetworks({ ...SocialNetworks, Instagram: e.target.value })
  }
  const lis = []

  for (let i = 1; i < 32; i += 1) {
    lis.push(<option value={i}>{i}</option>)
  }
  return (
    <div className="EditForm">
      {state && (
        <div className="Container">
          <div className="CoursesContainer">
            <div className="CompleteMark">
              <img src={TickMark} alt="Your imformation is saved" />
            </div>
            <div className="styles">
              <p>Success!</p>
            </div>
            <div className="description">
              <span>Your profile information was updated</span>
            </div>
            <Link to="/Edit" className="closeApp">
              <img src={close} alt="close application" />
            </Link>
          </div>
        </div>
      )}
      <img src={Gi} className="girl" alt="woman celebrate" />
      <h4 className="intro">Edit My Profile</h4>
      <div className="photoname">
        <div className="photo">
          <h4>Sarah William</h4>
          <img src={Avatar} alt="avatar" />
          <h5>Change</h5>
        </div>
        <form>
          <div className="label">Nick name</div>
          <input onChange={GetNickName} type="text" />
        </form>
      </div>

      <div className="contact">
        <h4>Contact</h4>
        <form>
          <div className="infoContainer">
            <div>
              <div className="label">Mail</div>
            </div>
            <div>
              <input onChange={GetMail} type="text" />
            </div>
          </div>
          <div className="infoContainer">
            <div>
              <div className="label">
                Email Address
                <span>*</span>
              </div>
            </div>
            <div>
              <input onChange={GetEmail} type="text" />
            </div>
          </div>
          <div className="infoContainer">
            <div>
              <div className="label">
                Mobile Phone
                <span>*</span>
              </div>
            </div>
            <div>
              <input onChange={GetPhone} type="text" />
            </div>
          </div>
        </form>
      </div>

      <div className="contact">
        <h4>Personal Information</h4>
        <form>
          <div className="infoContainer">
            <div>
              <div className="label">
                Birth Date
                <span>*</span>
              </div>
            </div>
            <div className="selectInfo">
              <select onChange={GetMonth} id="Birth" name="Birth">
                {moment.months().map((label, value) => (
                  <option value={value}>{label}</option>
                ))}
              </select>
              <select onChange={GetDay} id="date" name="Birth">
                {lis}
              </select>
            </div>
          </div>
          <div className="infoContainer">
            <div>
              <div className="label">
                Gender
                <span>*</span>
              </div>
            </div>
            <div className="selectInfo">
              <select onChange={GetGender} id="gender" name="Birth">
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div className="contact">
        <h4>Education Information</h4>
        <form>
          <div className="infoContainer">
            <div>
              <div className="label">Board/University</div>
            </div>
            <div>
              <input onChange={GetUniversity} type="text" />
            </div>
          </div>
          <div className="infoContainer">
            <div>
              <div className="label">
                Major
                <span>*</span>
              </div>
            </div>
            <div>
              <input onChange={GetMajor} type="text" />
            </div>
          </div>
          <div className="infoContainer">
            <div>
              <div className="label">
                Position
                <span>*</span>
              </div>
            </div>
            <div>
              <input onChange={GetPosition} type="text" />
            </div>
          </div>
        </form>
      </div>
      <div className="contact">
        <h4>Social Networks</h4>
        <form>
          <div className="infoContainer">
            <div>
              <div className="label">Linkedin</div>
            </div>
            <div>
              <input onChange={GetLinkedin} type="text" />
            </div>
          </div>
          <div className="infoContainer">
            <div>
              <div className="label">Google</div>
            </div>
            <div>
              <input onChange={GetGoogle} type="text" />
            </div>
          </div>
          <div className="infoContainer">
            <div>
              <div className="label">Facebook</div>
            </div>
            <div>
              <input onChange={GetFacebook} type="text" />
            </div>
          </div>
          <div className="infoContainer">
            <div>
              <div className="label">Instagram</div>
            </div>
            <div>
              <input onChange={GetInsta} type="text" />
            </div>
          </div>
          <div className="infoContainer">
            <div>
              <div className="label">Twitter</div>
            </div>
            <div>
              <input onChange={GetTwitter} type="text" />
            </div>
          </div>
        </form>
      </div>
      <SignInInfo />
      <div className="BTN">
        <div className="Update" to="/Edit">
          <button onClick={PopUp} type="button">
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditForm
