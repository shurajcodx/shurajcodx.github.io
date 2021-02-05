import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const IntroSection = () => {
  return (
    <section className='intro-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-1 col-lg-2'></div>
          <div className='col-md-10 col-lg-8'>
            <div className='intro'>
              <div className='profile-img'>
                <img
                  src='https://scontent.fbhr1-1.fna.fbcdn.net/v/t1.0-9/31934759_1697303150346343_1009155136594903040_n.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_ohc=lWWcneKD2NoAX9MOplX&_nc_ht=scontent.fbhr1-1.fna&oh=7f38baf6defb2aa874e96bad9d93ff46&oe=604176F2'
                  alt='Shuraj Shampang'
                />
              </div>
              <h2>
                <b>Shuraj Shampang</b>
              </h2>
              <h4 className='font-yellow'>Software Engineer</h4>
              <ul className='information margin-tb-30'>
                <li>
                  <b>BORN : </b>August 02, 1995
                </li>
                <li>
                  <b>EMAIL : </b>shuraj.shampang@gmail.com
                </li>
                <li>
                  <b>MARITAL STATUS : </b>Unmarried
                </li>
              </ul>
              <ul className='social-icons'>
                <li>
                  <a
                    href='https://github.com/shurajcodx'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.facebook.com/shurajcodx'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.instagram.com/shurajcodx_'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/shuraj-shampang-9ab602b5'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
