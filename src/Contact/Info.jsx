import React from 'react'
import './Info.css'

function Info({pic,title,para}) {
  return (
    <div id="info">
        <div id="pic">{pic}</div>
        <div>
            <h3>{title}</h3>
            <p>{para}</p>
        </div>
    </div>
  )
}

export default Info