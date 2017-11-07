import React, { Component } from 'react'
import CreateOrgMutation from '../mutations/CreateOrgMutation'

class CreateOrg extends Component {

  state = {
    orgName: ''
  }

  render() {

    return (
      <div>
        <div>
          <input
            value={this.state.orgName}
            onChange={(e) => this.setState({ orgName: e.target.value })}
            type='text'
            placeholder='A name for the org'
          />
        </div>
        <div
          className='button'
          onClick={() => this._createOrg()}
        >
          submit
        </div>
      </div>
    )

  }

  _createOrg = () => {
    const { orgName } = this.state
    CreateOrgMutation(orgName, () => console.log(`Mutation completed`))
  }

}

export default CreateOrg
