import React from 'react'

const Characteritems = ({ allitems }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={allitems.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{allitems.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {allitems.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {allitems.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {allitems.birthday}
            </li>
            <li>
              <strong>Status:</strong> {allitems.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Characteritems