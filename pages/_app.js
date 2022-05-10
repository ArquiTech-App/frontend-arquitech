import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/app.scss'
import {OfficeProvider} from '../context/officeContext'




function MyApp({ Component, pageProps }) {

  if (typeof window !== 'undefined') {
    console.log('You are on the browser')
    // ✅ Can use window here
  } else {
    console.log('You are on the server')
    // ⛔️ Don't use window here
  }
  
  return (
<OfficeProvider>

  <Component {...pageProps} />
</OfficeProvider>
  
  )
}

export default MyApp
