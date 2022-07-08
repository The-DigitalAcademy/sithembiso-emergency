import {useState, createContext} from 'react'
import uuid from 'react-uuid'

export const StoreContext = createContext()

const StoreContextProvider = ({children}) => {
  const [categories, setCategories] = useState([])
  const [expressions, setExpressions] = useState([])

  // add 1 category
  const onAddCategory = (name) => {
    let category = {cat_id: uuid(), name}
    setCategories([...categories, category])
  }

  // add multiple categories
  const onAddCategories = (data) => {
    setCategories([...data])
  }

  // add 1 expression
  const onAddExpression = (text, cat_id) => {
    let expression = {exp_id: uuid(), cat_id, text}
    setExpressions([...expressions, expression])
  }

  // add multiple expression
  const onAddExpressions = (data) => {
    setExpressions([...data])
  }

  const onRemoveExpression = (exp_id) => {
    let local_exp = expressions.filter(
      (expression) => expression.exp_id != exp_id
    )
    setExpressions(local_exp)
  }

  return (
    <StoreContext.Provider
      value={{
        categories,
        onAddCategory,
        onAddCategories,
        expressions,
        onAddExpression,
        onAddExpressions,
        onRemoveExpression,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
