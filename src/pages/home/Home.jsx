import './home.css'
import Body from "../../components/body/body"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'



export default function Home() {
  return (
    <>
     <Header/>
    <div className='homeContainer'>
      <Body/>
      <Footer/>
    </div>
    </>
  
  )
}
