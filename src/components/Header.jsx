import { Link } from 'react-router-dom'

export function Header () {
  return (
    <>
      <h1>React App</h1>

      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/News'>News</Link></li>
      </ul>
    </>
  )
}
