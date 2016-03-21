import React from 'react'
import TeamLinks from './teamLinks'

class SlideMenu extends React.Component {
  handleTeamList (event) {
    var teamSelected = event.target.value
  }

  render () {
    var listofTeams = ['team1', 'team2', 'team3', 'team4', 'team5']
    return (
        <TeamLinks teams={ listofTeams } />
    )
  }
}

export default SlideMenu
