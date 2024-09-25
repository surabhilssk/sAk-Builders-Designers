import './App.css'
import { Header } from './components/HeaderComponent'
import { SamplePage } from './components/SamplePage'
import { TitleComponent } from './components/TitleComponent'
import { FooterComponent } from './components/Footer'
import { Services } from './components/Services'

function App() {

  return (
    <div>
      <div>
        <Header />
      </div>
      <div class="relative md:h-screen">
        <div class="bg-hero h-96 bg-cover bg-center md:h-full md:bg-top flex items-center sm:justify-end">
          <TitleComponent />
        </div>
      </div>
      <div className='px-10 mb-4'>
        <Services />
      </div>
      <div className='px-10 mb-10'>
        <SamplePage />
      </div>
      {/* <hr class="w-48 h-1 mx-auto my-6 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
      <div>
        <FooterComponent />
      </div>
    </div>
  )
}

export default App
