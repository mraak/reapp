import React, { Component } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class Org extends Component {

  render() {
    return (
      <div>
        <div>{this.props.org.name}</div>
      </div>
    )
  }

  _voteForLink = async () => {
    // ... you'll implement this in chapter 6
  }

}

export default createFragmentContainer(Org, graphql`
  fragment Org_org on OrgNode {
    id
    name
  }
`)
