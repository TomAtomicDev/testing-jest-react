import React from 'react'
import {PropTypes} from './prop-types'

function Skills(props:PropTypes) {
  return (
    <>
      <ul>
        {props.skills.map((skill) => {
          return <li>{skill}</li>
        })}
      </ul>
    </>
    
  )
}

Skills.propTypes = {}

export default Skills;
