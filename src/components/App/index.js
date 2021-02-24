import About from '../About'
import Footer from '../Footer'
import Header from '../Header'
import Nav from '../Nav'
import RecentWork from '../RecentWork'
import Skills from '../Skills'

function App() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <main>
        <Header />
        <About />
        <Skills />
        <RecentWork />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App;
