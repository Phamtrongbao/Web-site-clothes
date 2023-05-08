import { Fragment } from 'react'
import { Outlet, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';



export default function HomeTemplate() {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}
