import WorkTile from '../WorkTile';

import './index.css';
import { work } from '../../utils/workUtil';

function RecentWork() {
  return (
    <div className='column-flex-container section'>
      <h2 style={{ color: '#FFF' }}>Recent Work</h2>
      <div className='work-tile-container'>
        {
          work.map((w, i)=> (
            <div className='container' key={ i }>
              <img src={ w.preview } alt={ w.title } className='image' />
              <div className='overlay'>
                <WorkTile
                  key={ i }
                  title={ w.title }
                  desc={ w.desc }
                  codeLink={ w.codeLink }
                  liveLink={ w.liveLink }
                  techStack={ w.techStack }
                />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RecentWork;
