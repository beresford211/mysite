import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div>
        <input type='checkbox' id='nav-trigger' className='nav-trigger'></input>
        <label htmlFor='nav-trigger'></label>
      </div>
    )
  }
}

export default Header
