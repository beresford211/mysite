import React from 'react'

class TeamLinks extends React.Component {
  static propTypes={
    teams: React.PropTypes.array.isRequired,
    userInput: React.PropTypes.string
  };

  onChange = function(){
    
  };

  render () {
    return (
      <ul className='navigation'>
        {this.props.teams.map((team) => <li><a href={team}>{team}</a></li>)}
      </ul>
    )
  }
}

export default TeamLinks
