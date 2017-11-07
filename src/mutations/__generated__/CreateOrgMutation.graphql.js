/**
 * @flow
 * @relayHash e26691629e7b2d59a99d7681aeccad06
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateOrgMutationVariables = {|
  input: {
    orgData?: ?{
      orgId?: ?string;
      name: string;
    };
    clientMutationId?: ?string;
  };
|};
export type CreateOrgMutationResponse = {|
  +saveOrg: ?{|
    +org: ?{|
      +id: string;
      +name: string;
    |};
  |};
|};
*/


/*
mutation CreateOrgMutation(
  $input: SaveOrgInput!
) {
  saveOrg(input: $input) {
    org {
      id
      name
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SaveOrgInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateOrgMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "SaveOrgInput!"
          }
        ],
        "concreteType": "SaveOrgPayload",
        "name": "saveOrg",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "OrgNode",
            "name": "org",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreateOrgMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SaveOrgInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateOrgMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "SaveOrgInput!"
          }
        ],
        "concreteType": "SaveOrgPayload",
        "name": "saveOrg",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "OrgNode",
            "name": "org",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreateOrgMutation(\n  $input: SaveOrgInput!\n) {\n  saveOrg(input: $input) {\n    org {\n      id\n      name\n    }\n  }\n}\n"
};

module.exports = batch;
