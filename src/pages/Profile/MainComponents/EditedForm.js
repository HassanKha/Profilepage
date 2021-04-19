import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import {
  faLinkedin,
  faGoogle,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import SignInInfo from './SignInInfo'
import './style/EditedForm.scss'
import Avatar from '../assets/avatar.png'
import Gi from '../assets/Girl.png'

const EditedForm = ({ Contact, PInfo, EInfo, SocialNetworks }) => {
  return (
    <div className="EditForm">
      <img src={Gi} className="girl" alt="woman celebrate" />
      <div className="Edit">
        <h4 className="intro">My Profile</h4>
        <div>
          <FontAwesomeIcon className="EditIcon" icon={faEdit} />
          <Link className="Link" to="/">
            Edit
          </Link>
        </div>
      </div>
      <div className="photoname">
        <div className="photo">
          <h4>Sarah William</h4>
          <img src={Avatar} alt="avatar" />
          <h5>change</h5>
        </div>
        <form>
          <div className="label">Nick name</div>
          <h6>{Contact.Nickname}</h6>
        </form>
      </div>

      <div className="contact">
        <h4>Contact</h4>
        <form>
          <div className="infoContainer">
            <div>
              <div className="label">mail</div>
            </div>
            <h6>{Contact.mail}</h6>
          </div>
          <div className="infoContainer">
            <div>
              <div className="label">
                Email address
                <span>*</span>
              </div>
            </div>
            <h6>{Contact.Email}</h6>
          </div>
          <div className="infoContainer">
            <div>
              <div className="label">
                Mobile Phone
                <span>*</span>
              </div>
            </div>
            <h6>{Contact.Phone}</h6>
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
            <h6>{`${PInfo.Month} ${PInfo.Day}th`}</h6>
          </div>
          <div className="infoContainer">
            <div>
              <div className="label">
                Gender
                <span>*</span>
              </div>
            </div>
            <div>
              <h6>{PInfo.Gender}</h6>
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
            <h6>{EInfo.University}</h6>
          </div>
          <div className="infoContainer">
            <div>
              <div className="label">
                Major
                <span>*</span>
              </div>
            </div>
            <h6>{EInfo.Major}</h6>
          </div>
          <div className="infoContainer">
            <div>
              <div className="label">
                Position
                <span>*</span>
              </div>
            </div>
            <h6>{EInfo.Position}</h6>
          </div>
        </form>
      </div>

      <div className="contact smedia">
        <h4>Social Networks</h4>
        <form>
          <div className="infoContainer media">
            <div className="Social linkedinIcon">
              <div className="label">
                <FontAwesomeIcon className=" Icon " icon={faLinkedin} />
                <a href={SocialNetworks.Linkedin}>Linkedin</a>
              </div>
            </div>
          </div>
          <div className="infoContainer media">
            <div className="Social GoogleIcon">
              <div className="label">
                <FontAwesomeIcon className="Icon " icon={faGoogle} />
                <a href={SocialNetworks.Google}>Google</a>
              </div>
            </div>
          </div>
          <div className="infoContainer media">
            <div className="Social FacebookIcon">
              <div className="label">
                <FontAwesomeIcon className=" Icon" icon={faFacebook} />
                <a href={SocialNetworks.Facebook}>Facebook</a>
              </div>
            </div>
          </div>
          <div className="infoContainer media">
            <div className="Social InstaIcon">
              <div className="label">
                <FontAwesomeIcon className=" Icon" icon={faInstagram} />
                <a href={SocialNetworks.Instagram}>Instagram</a>
              </div>
            </div>
          </div>
          <div className="infoContainer media">
            <div className="Social TwitterIcon">
              <div className="label">
                <FontAwesomeIcon className=" Icon" icon={faTwitter} />
                <a href={SocialNetworks.Twitter}>Twitter</a>
              </div>
            </div>
          </div>
        </form>
      </div>
      <SignInInfo />
    </div>
  )
}

export default EditedForm
