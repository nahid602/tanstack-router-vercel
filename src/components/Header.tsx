import { Link } from '@tanstack/react-router'



export default function Header() {


  return (
    <>
      <nav>
        <ul>
          <li><Link to={'sign-up'}>sign-up</Link></li>
        </ul>
      </nav>

    </>
  )
}
