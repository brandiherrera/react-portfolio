import './index.css';
import { skills } from '../../utils/skillsUtil';

function Skills() {
  return (
    <div className='column-flex-container section' style={{ color: '#595959' }}>
      <h2>Skills</h2>
      <div className='skills-content-container'>
        {
          skills.map(skill => (
            <div className='skills-content-item' key={ skill.title }>
              <h3>{ skill.title }</h3>
              {
                skill.subGroups.map(subGroup => (
                  <div className='skills-subgroup' key={ subGroup.title }>
                    <h4 style={{ color: '#252F8E' }}>{ subGroup.title }</h4>
                    {
                      subGroup.list.map((item, i) =>
                        <p key={ i }>{ item }</p>)
                    }
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills;
