import React from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaInstagram} from '@fortawesome/free-solid-svg-icons'
// import { FaLinkedin} from '@fortawesome/free-solid-svg-icons'
// import { FaEnvelope} from '@fortawesome/free-solid-svg-icons'

const FooterComponent = () => {
  return (
    <div>
      
       <footer className='footer'>
                <div className="container">
                    {/* <div className="row">
                        <div className="col text-center">
                           
                            <a href="https://www.instagram.com/"><FaInstagram /></a>
                            <a href="https://www.linkedin.com/"><FaLinkedin /></a>
                            <a href="mailto:example@gmail.com"><FaEnvelope /></a>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col text-center">
                            <span>Copyright @ 2024 Shubham Walunj</span>
                        </div>
                    </div>
                </div>
            </footer> 
        </div>

  )
}

export default FooterComponent