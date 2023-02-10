import Header from './components/Header/Header'
import About from './components/pages/About Us/About'
import Footer from './components/Footer/Footer'
import Main from './components/pages/Main/Main'
import News from './components/pages/News/News'
import PageArticle from './components/pages/Page Article/PageArticle'
import ProductPage from './components/pages/Product Page/ProductPage'
import Basket from './components/pages/Basket/Basket'

function App() {

  return (
    <div className="App">
      <Header />
      {/* <Main />
      <About />
      <News />
      <PageArticle />
      <ProductPage /> */}
      <Basket />
      <Footer />
    </div>
  )
}

export default App
