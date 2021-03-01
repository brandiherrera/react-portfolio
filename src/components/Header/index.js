import './index.css';
import PortfolioImg from '../../images/portfolio-pic.jpg';

function Header() {
  return (
    <div className='header column-flex-container section'>
      <h1 style={{ marginTop: 0 }}>Full-Stack Developer, UX Enthusiast & Team Leader</h1>
      <h2 className='content-section' style={{ color: '#737373' }}>
        Hi, I'm Brandi and I like to create beautiful user experiences.
      </h2>
      <img className='header-pic' src={ PortfolioImg } alt='portfolio header' />
    </div>
  )
}

export default Header;
