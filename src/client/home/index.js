import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import Table from './Table'

const initialState = () => {
  const data = document.getElementById('__APP__DATA__').dataset.state

  return JSON.parse(data)
}

const User = ({ id, name, address, email, phone }) => (
  <tr className='striped--light-gray' key={id}>
    <td className='pv2 ph3'>{name}</td>
    <td className='pv2 ph3'>{address}</td>
    <td className='pv2 ph3'>{email}</td>
    <td className='pv2 ph3'>{phone}</td>
  </tr>
)

class App extends Component {
  render()  {
    return <Table users={this.state.users} />
  }
  
  componentDidUpdate() {
    console.log(this.state.users)
  }

  state = initialState()
}

ReactDOM.render(
  <App />,
  document.getElementById('table')
)
