import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../Environment'
import OrgsList from './OrgsList'


const OrgsListPageQuery = graphql`
  query OrgsListPageQuery {
    viewer(id:"VXNlck5vZGU6Mg==") {
      ...OrgsList_viewer
    }
  }
`
class OrgsListPage extends Component {

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={OrgsListPageQuery}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            console.log("props.viewer", props.viewer);
            return <OrgsList viewer={props.viewer} />
          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default OrgsListPage
