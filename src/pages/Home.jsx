import {useContext, useEffect, useState} from 'react'
import CategoryItem from '../components/CategoryItem'
import Speech from '../components/Speech'
// mock
import {categories_data} from '../data'

// context
import {StoreContext} from '../Store'

// helper
import FUNCTIONS from '../_function'

const Home = () => {
  const {categories, onAddCategories} = useContext(StoreContext)
  const [showAdd, setShowAdd] = useState(false)

  useEffect(() => {
    if (!FUNCTIONS.localStorageExists('voiceUp_categories')) {
      onAddCategories(categories_data)
      FUNCTIONS.setToLocalStorage('voiceUp_categories', categories_data)
    } else {
      onAddCategories(FUNCTIONS.getFromLocalStorage('voiceUp_categories'))
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      FUNCTIONS.setToLocalStorage('voiceUp_categories', categories)
    }, 500)
  }, [categories])

  const reset = () => {
    if (window.confirm('Reset the App ?')) {
      localStorage.clear()
      window.location.reload()
    }
  }

  return (
    <div className='container'>
      <div className='cat_container'>
        <div className='row mt-1'>
          {categories.map((category, index) => (
            <CategoryItem key={index} category={category} />
          ))}
        </div>
      </div>

      <Speech />
    </div>
  )
}
export default Home;
