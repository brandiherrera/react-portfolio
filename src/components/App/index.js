import Footer from '../Footer'
import Header from '../Header'
import Nav from '../Nav'
import RecentWork from '../RecentWork'

function App() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <Header />
      <main>
        <RecentWork />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App;
