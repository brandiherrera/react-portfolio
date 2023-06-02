import './index.css';
import PortfolioImg from '../../images/portfolio-pic.jpg';

function Header() {
  return (
    <div className='header column-flex-container section'>
      <img className='header-pic' src={ PortfolioImg } alt='portfolio header' />
      <h1 style={{ fontSize: '36px', fontWeight: 600 }}>Fullstack Dev, UX Enthusiast, & Team Leader</h1>
      <p className='content-section'>
        I'm an experienced professional and team leader who one day decided to change gears and follow my passion of software engineering. I thrive in designing and coding minimalistic, yet beautiful and bespoke things.
      </p>
      {/* <h2 className='content-section' style={{ color: '#737373' }}>
        Hi, I'm Brandi and I like to create beautiful user experiences.
      </h2> */}
    </div>
  )
}

export default Header;
