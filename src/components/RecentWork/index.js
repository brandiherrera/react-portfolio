import WorkTile from '../WorkTile';

import './index.css';

const recentWork = [
  {
    codeLink: '',
    liveLink: '',
    preview: '',
    techStack: [],
    title: 'Title 1',
    desc: "Let's travel the world"
  },
  {
    codeLink: '',
    liveLink: '',
    preview: '',
    techStack: [],
    title: 'Title 2',
    desc: '',
  },
]

function RecentWork() {
  return (
    <div className='column-flex-container section'>
      <h2>Recent Work</h2>
      <div className='work-tile-container'>
        {
          recentWork.map((rw, i)=> (
            <div className='work-tile-item' key={ i }>
              <WorkTile
                key={ i }
                codeLink={ rw.codeLink }
                liveLink={ rw.liveLink }
                preview={ rw.preview }
                techStack={ rw.techStack }
                title={ rw.title }
                desc={ rw.desc }
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RecentWork;
