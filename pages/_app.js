import '../styles/globals.css'
import Nav from '../components/Nav/Nav'
import { ProjectProvider } from '../context/projectContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProjectProvider>
        <Nav />
        <Component {...pageProps} />
      </ProjectProvider>
    </>
  )
}

export default MyApp
