import ReactDOM from 'react-dom'
import React, { Component, Fragment } from 'react'

const initialState = () => {
  const data = document.getElementById('__APP__DATA__').dataset.state

  return JSON.parse(data)
}

const User = ({ id, name, address, email, phone }) => (
  <div key={id}>
    <h1>{name}</h1>
    <address className='oi'>{address}</address>
    <a href={`mailto:${email}`} style={{ display: 'block' }}>{email}</a>
    <a href={`tel:${phone}`} style={{ display: 'block' }}>{phone}</a>
  </div>
)

class App extends Component {
  render()  {
    const { users } = this.state
    
    return (
      <Fragment>
        <button onClick={this.oi}>log state</button>
        { users.map(User) }
      </Fragment>
    )
  }
  
  componentDidUpdate() {
    console.log(this.state.users)
  }
  
  oi = () => {
    console.log(this.state)
  }

  state = initialState()
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
