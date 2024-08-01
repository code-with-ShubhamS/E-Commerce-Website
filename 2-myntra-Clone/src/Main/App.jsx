import { Outlet } from 'react-router-dom'
// import '../App.css'
import '../App.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../index.css'
import Fetching from '../components/Fetching'
import { useSelector } from 'react-redux'
import LoadingSpiner from '../components/LoadingSpiner'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
   const fetch= useSelector(store=>store.fetchStatus)
  return (
    <>
    <Header></Header>
    <Fetching></Fetching>
     {fetch.currentlyFetching?<LoadingSpiner/>:<Outlet/>}
    <Footer/>
    </>
  )
}
export default App
