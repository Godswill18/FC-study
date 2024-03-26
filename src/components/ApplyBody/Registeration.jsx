// Write your JS code here
import {Component} from 'react'
import './registeration.css'

class Registration extends Component {
  state = {
    firstname: '',
    lastname: '',
    country: '',
    phoneNumber: '',
    email: '',
    checkFirstName: '',
    checkLastName: '',
    checkCountry: '',
    checkPhoneNumber: '',
    checkEmail: '',
    submitted: false,
  }

  onFirstName = event => {
    this.setState({firstname: event.target.value})
  }

  onLastName = event => {
    this.setState({lastname: event.target.value})
  }

  onCountry = event => {
    this.setState({country: event.target.value})
  }

  onPhoneNumber = event => {
    this.setState({phoneNumber: event.target.value})
  }

  onEmail = event => {
    this.setState({email: event.target.value})
  }

  checkingFirstName = event => {
    if (event.target.value === '') {
      this.setState({checkFirstName: true})
    } else {
      this.setState({checkFirstName: false})
    }
  }

  checkingLastName = event => {
    if (event.target.value === '') {
      this.setState({checkLastName: true})
    } else {
      this.setState({checkLastName: false})
    }
  }

  checkingCountry = event => {
    if (event.target.value === '') {
      this.setState({checkCountry: true})
    } else {
      this.setState({checkCountry: false})
    }
  }

  checkingPhoneNumber = event => {
    if (event.target.value === '') {
      this.setState({checkPhoneNumber: true})
    } else {
      this.setState({checkPhoneNumber: false})
    }
  }

  checkingEmail = event => {
    if (event.target.value === '') {
      this.setState({checkEmail: true})
    } else {
      this.setState({checkEmail: false})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {firstname, lastname, country, phoneNumber, email} = this.state
    if (firstname !== '' && lastname !== '' && country !== '' && phoneNumber !== '' && email !== '') {
      this.setState({
        checkFirstName: false,
        checkLastName: false,
        checkCountry: false,
        checkPhoneNumber: false,
        checkEmail: false,
        firstname: '',
        lastname: '',
        country: '',
        phoneNumber: '',
        email: '',
        submitted: true,
      })
    } else if (firstname === '' && lastname !== '' && country !== '' && phoneNumber !== '' && email !== '') {
      this.setState({checkFirstName: true, checkLastName: false, checkCountry: false, checkPhoneNumber: false, checkEmail: false})
    } else if (firstname !== '' && lastname === '' && country !== '' && phoneNumber !== '' && email !== '') {
      this.setState({checkFirstName: false, checkLastName: true, checkCountry: false, checkPhoneNumber: false, checkEmail: false})
    } else if (firstname !== '' && lastname === '' && country !== '' && phoneNumber !== '' && email !== '') {
      this.setState({checkFirstName: false, checkLastName: false, checkCountry: true, checkPhoneNumber: false, checkEmail: false})
    } else if (firstname !== '' && lastname === '' && country !== '' && phoneNumber !== '' && email !== '') {
      this.setState({checkFirstName: false, checkLastName: false, checkCountry: false, checkPhoneNumber: true, checkEmail: false})
    }  else if (firstname !== '' && lastname === '' && country !== '' && phoneNumber !== '' && email !== '') {
      this.setState({checkFirstName: false, checkLastName: false, checkCountry: false, checkPhoneNumber: false, checkEmail: true})
    }
     else {
      this.setState({checkFirstName: true, checkLastName: true, checkCountry: true, checkPhoneNumber: true, checkEmail: true})
    }
  }

  resetForm = () => {
    this.setState({submitted: false})
  }

  render() {
    const {
      firstname,
      lastname,
      country,
      phoneNumber,
      email,
      checkFirstName,
      checkLastName,
      checkCountry,
      checkPhoneNumber,
      checkEmail,
      submitted,
    } = this.state

    const firstNameEmpty = checkFirstName ? 'red' : '';
    const lastNameEmpty = checkLastName ? 'red' : '';
    const countryEmpty = checkCountry ? 'red' : '';
    const phoneNumberEmpty = checkPhoneNumber ? 'red' : '' ;
    const emailEmpty = checkEmail ? 'red' : '';

    return (
      <div className="contain">
        <div className='side-heading'>
          <h1>Register with us today</h1>
          <p>Start the journey with us today</p>
        </div>
        
        {submitted ? (
          <div className="success-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="success-logo"
            />
            <p className="success-msg">Submitted Successfully</p>
            <button type="submit" className="button" onClick={this.resetForm}>
              Submit Another Response
            </button>
          </div>
          ) : (
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <label className="label" htmlFor="firstName">
              FIRST NAME
            </label>
            <input
              id="firstName"
              type="text"
              value={firstname}
              placeholder="First Name"
              className={`inpuT ${firstNameEmpty}`}
              onChange={this.onFirstName}
              onBlur={this.checkingFirstName}
            />
            {checkFirstName && <p className="error">*Required</p>}
            <label className="label" htmlFor="lastName">
              LAST NAME
            </label>
            <input
              id="lastName"
              type="text"
              value={lastname}
              placeholder="Last Name"
              className={`inpuT ${lastNameEmpty}`}
              onChange={this.onLastName}
              onBlur={this.checkingLastName}
            />

            {checkCountry && <p className="error">*Required</p>}
            <label className="label" htmlFor="country">
              Country
            </label>
            <input
              id="country"
              type="text"
              value={country}
              placeholder="Country"
              className={`inpuT ${countryEmpty}`}
              onChange={this.onCountry}
              onBlur={this.checkingCountry}
            />

            {checkCountry && <p className="error">*Required</p>}
            <label className="label" htmlFor="phone number">
              Phone number
            </label>
            <input
              id="phone-number"
              type="phone number"
              value={phoneNumber}
              placeholder="Phone number"
              className={`inpuT ${phoneNumberEmpty}`}
              onChange={this.onPhoneNumber}
              onBlur={this.checkingPhoneNumber}
            />

              {checkCountry && <p className="error">*Required</p>}
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="cemail"
              type="email"
              value={email}
              placeholder="email"
              className={`inpuT ${emailEmpty}`}
              onChange={this.onEmail}
              onBlur={this.checkingEmail}
            />
            <label htmlFor="services" className="label">
              Services
            </label>
            <select name="services" className='services'>
              <option value="1">IT Compliance</option>
              <option value="2">Study Abroad</option>
            </select>
            <br /> <br />
            {checkLastName && <p className="error">*Required</p>}
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default Registration

