import './index.css';

function WorkTile({ company, image, link, role }) {
  return (
    <a href={ link } rel='noopener noreferrer' target='_blank'>
      <button className='work-tile'>
        <img src={ image } alt={ company } className='image' />
        <div className='flex-container-spaced'>
          <p style={{ position: 'absolute', bottom: 0, left: 0, marginLeft: '24px' }}>
            { role }
          </p>
          <p style={{ position: 'absolute', bottom: 0, right: 0, marginRight: '24px', color: '#ccc' }}>
            { company }
          </p>
        </div>
      </button>
    </a>
  )
}

export default WorkTile;
