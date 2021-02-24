import { HiOutlineMail } from 'react-icons/hi';
import { FaRegFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';

import './index.css';

function Nav() {
  return (
    <div className='flexContainer'>
      <h1>Brandi Herrera</h1>
      <div className='flexContainer'>
        <div>
          <a href='https://www.linkedin.com/in/brandi-c-herrera' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size='30px' />
          </a>
        </div>
        <div>
          <a href='https://www.github.com/brandiherrera' target='_blank' rel='noopener noreferrer'>
            <FaGithub size='30px' />
          </a>
        </div>
        <div>
          <a href='mailto:bcjherrera@gmail.com?Subject=Portfolio%20Contact' target='_blank' rel='noopener noreferrer'>
            <HiOutlineMail size='30px' />
          </a>
        </div>
        <div>
          {/* TODO: Add href */}
          <a href='' target='_blank' rel='noopener noreferrer'>
            <FaRegFilePdf size='30px' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Nav;
