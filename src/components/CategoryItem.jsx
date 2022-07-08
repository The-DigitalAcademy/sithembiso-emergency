import {useNavigate} from 'react-router-dom'

const CategoryItem = ({category}) => {
  let navigate = useNavigate()
  const getRadomColor = () => {
    const colors = [
      'alert alert-secondary',
      'alert alert-secondary',
      'alert alert-success',
      'alert alert-info',
    ]
    return colors[Math.floor(Math.random() * 4)]
  }

  return (
    <div className='col-6' onClick={() => navigate(`/${category.cat_id}`)}>
      <div className={getRadomColor()} role='alert'>
        {category.name}
      </div>
    </div>
  )
}
export default CategoryItem
