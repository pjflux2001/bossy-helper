import React from 'react'
import '../assets/scss/index.scss'

const displayOrg = (props) => (
  <>
    <div className='card'>
      <img className='card-logo' src={props.logo} alt='organisation logo' />
      <div className='card-title'>{props.name}</div>
      <p className='card-summary'>{props.summary}</p>
    </div>
  </>
)

export default displayOrg
