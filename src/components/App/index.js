import About from '../About'
import Footer from '../Footer'
import Header from '../Header'
import Nav from '../Nav'
import RecentWork from '../RecentWork'
import Skills from '../Skills'

function App() {
  return (
    <div>
      <div className='diagonal-box'>
        <div className='content'>
          <nav>
            <Nav />
          </nav>
          <Header />
        </div>
      </div>
      <main>
        <About />
        <div className='diagonal-box'>
          <div className='content'>
            <Skills />
          </div>
        </div>
        <RecentWork />
      </main>
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default App;
