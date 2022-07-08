import {useContext, useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

// mock
import {expression_data} from '../data'

// context
import {StoreContext} from '../Store'

// helper
import FUNCTIONS from '../_function'

// components
import Item from '../components/Item'
import AddExpression from '../components/AddExpression'

const Items = () => {
  let {cat_id} = useParams()
  let navigate = useNavigate()
  const [showAdd, setShowAdd] = useState(false)

  const {expressions, onAddExpressions, onRemoveExpression, onAddExpression} =
    useContext(StoreContext)

  const removeExpression = (exp_id) => {
    onRemoveExpression(exp_id)
  }

  const addExpression = (text) => {
    onAddExpression(text, cat_id)
  }

  useEffect(() => {
    if (!FUNCTIONS.localStorageExists('voiceUp_exppressions')) {
      onAddExpressions(expression_data)
      FUNCTIONS.setToLocalStorage('voiceUp_exppressions', expression_data)
    } else {
      onAddExpressions(FUNCTIONS.getFromLocalStorage('voiceUp_exppressions'))
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      FUNCTIONS.setToLocalStorage('voiceUp_exppressions', expressions)
    }, 500)
  }, [expressions])

  return (
    <div className='container'>
      <button
        className='btn btn-outline-secondary my-2'
        onClick={() => navigate('/')}
      >
        BACK
      </button>

      <ul className='list-group'>
        {expressions
          .filter((expression) => expression.cat_id == cat_id)
          .map((expression, index) => (
            <Item key={index} expression={expression} />
          ))}
      </ul>
      <AddExpression addExpression={addExpression} />
    </div>
  )
}
export default Items
