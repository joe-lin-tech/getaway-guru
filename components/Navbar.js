import Link from 'next/link'

const NavBar = () => {
  const pages = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ]

  return (
    <nav>
      {pages.map(({ title, href }) => (
        <Link key={title} href={href}>
        </Link>
      ))}
    </nav>
  )
}

export default NavBar






