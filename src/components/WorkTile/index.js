import './index.css';

function WorkTile({ title, desc, codeLink, liveLink, techStack }) {
  return (
    <div className='work-tile column-flex-container'>
      <h4>{ title }</h4>
      <p>{ desc }</p>
      <div className='flex-container'>
        <a href={ codeLink } rel='noopener noreferrer' target='_blank'>
          <button className='work-tile-button'>
            Visit Code
          </button>
        </a>
        <a href={ liveLink } rel='noopener noreferrer' target='_blank'>
          <button className='work-tile-button'>
            Visit Website
          </button>
        </a>
      </div>
      <p className='tech-icons'>{ techStack }</p>
    </div>
  )
}

export default WorkTile;
