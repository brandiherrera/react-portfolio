import WorkTile from '../WorkTile';

import './index.css';
import { work } from '../../utils/workUtil';

function RecentWork() {
  return (
    <div className='work-tile-container'>
      {
        work.map((w, i)=> (
          <WorkTile
            key={ i }
            company={ w.company }
            image={ w.image }
            link={ w.link }
            role={ w.role }
          />
        ))
      }
    </div>
  )
}

export default RecentWork;
