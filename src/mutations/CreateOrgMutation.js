// 1
import {
  commitMutation,
  graphql,
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import environment from '../Environment'

// 2
const mutation = graphql`
  mutation CreateOrgMutation($input: SaveOrgInput!) {
    saveOrg(input: $input) {
      org {
        id
        name
      }
    }
  }
`

// 3
export default (name, callback) => {
  // 4
  const variables = {
    input: {
      orgData: {
        name
      }
    },
  }

  // 5
  commitMutation(
    environment,
    {
      mutation,
      variables,
      // 6
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}
