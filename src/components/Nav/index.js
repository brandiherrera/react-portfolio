import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdPictureAsPdf, MdEmail } from 'react-icons/md';

import './index.css';

function Nav() {
  return (
    <div className='nav-flex-container'>
      <h2>
        Brandi Herrera
      </h2>
      <div className='flex-container'>
        <div>
          <a href='https://www.linkedin.com/in/brandi-c-herrera' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size='24px' />
          </a>
        </div>
        <div>
          <a href='https://www.github.com/brandiherrera' target='_blank' rel='noopener noreferrer'>
            <FaGithub size='24px' />
          </a>
        </div>
        <div>
          <a href='mailto:bcjherrera@gmail.com?Subject=Portfolio%20Contact' target='_blank' rel='noopener noreferrer'>
            <MdEmail size='24px' />
          </a>
        </div>
        {/* TODO: Add href */}
        {/* <div>
          <a href='' target='_blank' rel='noopener noreferrer'>
            <MdPictureAsPdf size='30px' />
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default Nav;
