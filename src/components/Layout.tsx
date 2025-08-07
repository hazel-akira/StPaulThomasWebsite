// src/components/Layout.tsx
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Helmet>
        <title>St Paul Thomas Academy</title>
      </Helmet>
      <Navbar />
      <main><Outlet/></main>
      <Footer />
    </>
  )
}
