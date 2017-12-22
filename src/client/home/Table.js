import React from 'react'

const User = ({ id, name, address, email, phone }) => (
  <tr className='striped--light-gray' key={id}>
    <td className='pv2 ph3'>{name}</td>
    <td className='pv2 ph3'>{address}</td>
    <td className='pv2 ph3'>{email}</td>
    <td className='pv2 ph3'>{phone}</td>
  </tr>
)

export default ({ users }) => (
  <table className='collapse w-100 ba b--black-10 pv2 ph3 center'>
    <tbody>
      <tr className='striped--light-gray'>
        <th className='f6 ttu fw6 pv2 ph3'>Name</th>
        <th className='f6 ttu fw6 pv2 ph3'>Address</th>
        <th className='f6 ttu fw6 pv2 ph3'>Email</th>
        <th className='f6 ttu fw6 pv2 ph3'>Phone</th>
      </tr>

      { users.map(User) }
    </tbody>
  </table>
)
