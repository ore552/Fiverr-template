import './App.css'
import logo from './assets/logo.svg'

function App() {

  return (
    <>
      <header>
        <nav className='navbar'>
          <a href="#" className='logo'>
            <img src={logo} alt="img" />
          </a>
          <ul className='menu-links'>
            <li><a href="#">Fiverr Business</a></li>
            <li><a href="#">Explore</a></li>
            <li className='language-item'>            <a href="#">
              <span className='material-symbols-outline'>language</span></a></li>
              <li><a href="#">Become a Seller</a></li>
              <li><a href="#">Sign in</a></li>
              <li className='join-btn'><a href="#">Join Us</a></li>
              <span id='close-menu-btn' className='material-symbols-outlined'>close</span>
          </ul>
          <span id='hamburger-btn' className='material-symbols-outlined'>menu</span>
        </nav>
      </header>

      <section className='hero-section'>
        <div className='content'>
          <h1>Find the right freelance service, right away</h1>
          <form action="#" className='search-form'>
            <input type="text" placeholder='Search for service...' required/>
            <button className='material-symbols-outlined' type='sumbit'>search</button>
          </form>
          <div className='popular-tags'>
            Popular:
            <ul className='tags'>
              <li><a href="#">Wesbite Designs</a></li>
              <li><a href="#">Logo Design</a></li>
              <li><a href="#">WordPress</a></li>
              <li><a href="#">AI Design</a></li>
            </ul>
          </div>
        </div>
      </section>

    </>
  )
}

export default App

