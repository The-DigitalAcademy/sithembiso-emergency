import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Items from './pages/Items'
import Header from './components/Header'
import StoreContextProvider from './Store'

const App = () => {
  return (
    <>
      <Header />
      <StoreContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:cat_id' element={<Items />} />
        </Routes>
      </StoreContextProvider>
    </>
  )
}
export default App
