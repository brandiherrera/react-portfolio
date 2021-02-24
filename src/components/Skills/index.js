import React, { Fragment } from 'react';

import './index.css';

const skills = [
  {
    title: 'Front-end',
    subGroups: [
      {
        title: 'Subgroup 1',
        list: [
          'front-end item 1',
          'front-end item 1',
          'front-end item 1',
        ],
      },
      {
        title: 'Subgroup 2',
        list: [
          'front-end item 2',
          'front-end item 2',
          'front-end item 2',
        ],
      },
    ],
  },
  {
    title: 'Back-end',
    subGroups: [
      {
        title: 'Subgroup 1',
        list: [
          'back-end item 1',
          'back-end item 1',
          'back-end item 1',
        ],
      },
      {
        title: 'Subgroup 2',
        list: [
          'back-end item 2',
          'back-end item 2',
          'back-end item 2',
        ],
      },
    ],
  },
  {
    title: 'Key Skills',
    subGroups: [
      {
        title: 'Subgroup 1',
        list: [
          'key skills item 1',
          'key skills item 1',
          'key skills item 1',
        ],
      },
      {
        title: 'Subgroup 2',
        list: [
          'key skills item 2',
          'key skills item 2',
          'key skills item 2',
        ],
      },
    ],
  },
]

function Skills() {
  return (
    <div className='column-flex-container'>
      <h2>Skills</h2>
      <div className='skills-content-container'>
        {
          skills.map(skill => (
            <div className='skills-content-item' key={ skill.title }>
              <h3>{ skill.title }</h3>
              {
                skill.subGroups.map(subGroup => (
                  <Fragment key={ subGroup.title }>
                    <h4>{ subGroup.title }</h4>
                    <ul key={ subGroup.title }>
                      {
                        subGroup.list.map((item, i) => <li key={ i }>{ item }</li>)
                      }
                    </ul>
                  </Fragment>
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
