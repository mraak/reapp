get-graphql-schema http://127.0.0.1:8000/graphql > ./schema.graphql


relay-compiler --src ./src --schema ./schema.graphql

relay-compiler --src ./src --schema ./schema.graphql --extensions jsx


yarn start

One important note here is that there is a naming convention for the fragments you’re creating! Each fragment should be named according to the file and the prop that will get injected into the component: <FileName>_<propName>


https://www.graphqlhub.com/


mutation saveorg($input:SaveOrgInput!){
  saveOrg(input:$input){
    org{
      id
      name
    }
  }
}

{"input": {"orgData": {"name": "Newrg"}}}
