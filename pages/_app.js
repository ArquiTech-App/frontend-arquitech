import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/app.scss'
import {OfficeProvider} from '../context/officeContext'




function MyApp({ Component, pageProps }) {

  
  return (
<OfficeProvider>

  <Component {...pageProps} />
</OfficeProvider>
  
  )
}

export default MyApp
