/**
 * @flow
 * @relayHash da29458b3d3daedbd745c3b4ddf4cf6f
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type OrgsListPageQueryResponse = {|
  +viewer: ?{| |};
|};
*/


/*
query OrgsListPageQuery {
  viewer(id: "VXNlck5vZGU6Mg==") {
    ...OrgsList_viewer
    id
  }
}

fragment OrgsList_viewer on UserNode {
  orgs(last: 10) {
    edges {
      node {
        __typename
        ...Org_org
        id
      }
      cursor
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
}

fragment Org_org on OrgNode {
  id
  name
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "OrgsListPageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "id",
            "value": "VXNlck5vZGU6Mg==",
            "type": "ID!"
          }
        ],
        "concreteType": "UserNode",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "OrgsList_viewer",
            "args": null
          }
        ],
        "storageKey": "viewer{\"id\":\"VXNlck5vZGU6Mg==\"}"
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "OrgsListPageQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "OrgsListPageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "id",
            "value": "VXNlck5vZGU6Mg==",
            "type": "ID!"
          }
        ],
        "concreteType": "UserNode",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "last",
                "value": 10,
                "type": "Int"
              }
            ],
            "concreteType": "OrgNodeConnection",
            "name": "orgs",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "OrgNodeEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "OrgNode",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "__typename",
                        "storageKey": null
                      },
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "hasPreviousPage",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "startCursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "orgs{\"last\":10}"
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "last",
                "value": 10,
                "type": "Int"
              }
            ],
            "handle": "connection",
            "name": "orgs",
            "key": "OrgsList_orgs",
            "filters": []
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "viewer{\"id\":\"VXNlck5vZGU6Mg==\"}"
      }
    ]
  },
  "text": "query OrgsListPageQuery {\n  viewer(id: \"VXNlck5vZGU6Mg==\") {\n    ...OrgsList_viewer\n    id\n  }\n}\n\nfragment OrgsList_viewer on UserNode {\n  orgs(last: 10) {\n    edges {\n      node {\n        __typename\n        ...Org_org\n        id\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment Org_org on OrgNode {\n  id\n  name\n}\n"
};

module.exports = batch;
