import React, { Component } from 'react'
import Org from './Org'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class OrgsList extends Component {

  render() {

    const orgsToRender = [{
      id: '1',
      name: 'The coolest GraphQL backend 😎',
      url: 'https://www.graph.cool'
    }, {
      id: '2',
      name: 'Highly performant GraphQL client from Facebook',
      url: 'https://facebook.github.io/relay/'
    }]

    return (
      // <div>
      //   {orgsToRender.map(org => (
      //     <Org key={org.id} org={org}/>
      //   ))}
      // </div>

      <div>
        {this.props.viewer.orgs.edges.map(({node}) =>
          <Org key={node.__id} org={node} />
        )}
      </div>
    )
  }

}

export default createFragmentContainer(OrgsList, graphql`
  fragment OrgsList_viewer on UserNode {
    orgs(last: 10) @connection(key: "OrgsList_orgs", filters: []) {
      edges {
        node {
          ...Org_org
        }
      }
    }
  }
`)
