// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const removeTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="list_item">
      <p className="paragraph">{title}</p>
      <button className="delete" type="button" onClick={removeTodo}>
        delete
      </button>
    </li>
  )
}

export default TodoItem
