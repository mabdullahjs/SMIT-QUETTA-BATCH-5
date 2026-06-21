import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo } from "./config/redux/reducers/todoSlice";

const App = () => {
   const [input , setInput] = useState('');

  const selector = useSelector(selector => selector.todo)

  const dispatch = useDispatch()


  const addtodoToRedux = (event)=>{
    event.preventDefault()
    console.log('todo added' , input);

    dispatch(addTodo({
      title: input
    }))
    
  }

  const deleteTodoFromRedux = (id)=>{
    console.log(id);
    dispatch(deleteTodo({id}))
    
  }

  return (
    <>
      <h1>hello redux toolkit</h1>
      <form onSubmit={addtodoToRedux}>
        <input type="text" placeholder='enter todo' value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>add Todo</button>
      </form>

      <ul>
        {selector.length > 0 && selector.map(item => {
          return <li key={item.id}>{item.title}
            <button onClick={()=>deleteTodoFromRedux(item.id)}>delete</button>
            <button>edit</button>
          </li>
        })}
      </ul>
    </>
  )
}

export default App