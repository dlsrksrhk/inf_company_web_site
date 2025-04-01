import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import MainPage from './pages/mainPage/MainPage'
import About from './pages/about/About'
import Leadership from './pages/leadership/Leadership'
import Board from './pages/board/Board'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/leadership',
        element: <Leadership />,
      },
      {
        path: '/board',
        element: <Board />,
      },
      {
        path: '/our-services',
        element: <Services />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
