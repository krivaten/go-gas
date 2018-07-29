import * as React from 'react'
import Button from '@/components/atoms/Button'
import { ApolloProvider, Query } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

export interface IAppState {
  users: any[]
  isLoading: boolean
}

const USERS_QUERY = gql`
  {
    users {
      _id
      firstName
      lastName
      email
    }
  }
`
const client = new ApolloClient({
  uri: '/.netlify/functions/graphql'
})

export default class App extends React.Component {
  state: IAppState = {
    users: [],
    isLoading: false,
  }

  check = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    console.log((this as any).client);
    // try {
    //   this.setState({ isLoading: true })
    //   const response = await fetch('/.netlify/functions/graphql', { method: 'POST' })
    //   const users = await response.json()
    //   this.setState({ users, isLoading: false })
    // } catch ({ message }) {
    //   console.warn(message)
    // }
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <p>Hello... React</p>
        <Button onClick={this.check}>Click Me</Button>
        <Query query={USERS_QUERY}>
          {({loading, error, data}) => {
            if (loading) return <p>Hold up, we're loading</p>
            if (error) return <p>Whoa... something went wrong</p>

            console.log(data.users)
            return data.users.map(user => <p>{user.firstName}</p>)
          }}
        </Query>
      </ApolloProvider>
    )
  }
}
