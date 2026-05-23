// import About from "./About"
// import Contact from "./Contact"





// function App() {
//   return (
//     <div>
//       <h1>Hello App component</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, <br /> praesentium temporibus? Non, quam eligendi. Quasi eligendi praesentium error libero quam eaque recusandae assumenda accusamus, facere porro sapiente harum quos neque.</p>

//       <About/>
//       <Contact/>


//     </div>
//   )
// }

// export default App

// states hook
// counter app
// todo app

// event.preventDefault()
// event.stopPropogation()





// function App() {
//   let num = 10;

//   const greetUser = ()=>{
//     console.log("hello user");

//   }
//   return (
//     <>
//     <h1>Counter App {num}</h1>
//     <button onClick={greetUser}>call function</button>
//     </>
//   )
// }

// export default App



// Hooks
// react ka apna functions hain hooks ki phehchan ya haa k uska name Use sa start hota



// import React, { useState } from 'react'

// const App = () => {
//   // let counter = 0
//   const [counter , setCounter] = useState(0)

//   const changeCounter = (feature)=>{
//     console.log('counter added' , feature);
//     if(feature === 'add'){
//       setCounter(counter + 1)
//       return 
//     }

//     counter > 0 ?
//     setCounter(counter - 1) : null
//   }
//   return (
//     <>
//       <h1>{counter }Counter App {counter}</h1>
//       <button onClick={()=> changeCounter('add')}>Add {counter} </button>
//       <button onClick={()=> changeCounter('less')}>Less {counter} </button>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo neque eveniet {counter} id molestiae sunt iste eos {counter}, {counter} placeat {counter} doloribus ut earum nemo dicta consectetur obcaecati! Voluptates, {counter}.</p>
//     </>
//   )
// }

// export default App


import { useState } from "react"

const App = () => {
  const [input, setInput] = useState('')
  const [todo , setTodo] = useState([]);

  const addTodo = (event)=>{
    event.preventDefault()
    console.log(input);
    setTodo([...todo , input])

    setInput('');
    
  }


  const updateTodo = (feature , index)=> {
    console.log(feature , index);

    if(feature === 'delete'){
      todo.splice(index , 1);
      setTodo([...todo])
      return
    }

    const updatedVal = prompt("enter updated val" , todo[index])
    todo.splice(index , 1 , updatedVal)
    setTodo([...todo])
    
  }
  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="enter todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ol>
        {todo.map((item , index) => {
          return <li key={index}>{item}
          <button onClick={()=>updateTodo('delete' , index)}>delete</button>
          <button onClick={()=>updateTodo('edit' , index)}>edit</button>
          
          </li>
        })}
      </ol>




    </>
  )
}

export default App



// import {useState} from 'react'

// const App = () => {
//   const [toggle , setToggle] = useState(true);

//   // const changeToggle = ()=>{
//   //   setToggle()
//   // }
  
//   return (
//     <>
//     <h1>App</h1>
//     <button onClick={()=> setToggle(!toggle)}>{toggle ? 'On' : 'Off'}</button>
//     {!toggle ? <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi quaerat dolorum expedita exercitationem, atque laudantium maiores. Recusandae ut incidunt ratione optio blanditiis omnis reprehenderit accusantium ea tempore rem! Soluta odit culpa accusamus quis veniam vero harum iure architecto ullam, animi accusantium fuga nam quidem possimus et autem esse sit quas voluptatem dicta excepturi eligendi suscipit, obcaecati ducimus! Iste repudiandae consequatur commodi neque iusto. Magni repudiandae dicta minus saepe. Magni itaque vitae eveniet id praesentium corporis velit rerum quas, atque rem, accusantium odit, consequatur dicta ipsam facere quasi tempore deleniti voluptate? Praesentium sequi nam, fuga dignissimos voluptas a distinctio voluptates quibusdam non doloremque ut enim eius corrupti nulla odio esse odit nostrum aperiam maiores animi delectus iste reiciendis? Quas unde expedita cupiditate incidunt, omnis voluptate, quam culpa praesentium maiores adipisci dolorum! Aliquid, minima in autem eveniet commodi saepe enim voluptas excepturi a officiis fuga tempora rerum nesciunt, itaque molestiae architecto inventore. Saepe, placeat eveniet? Vel, temporibus vero quod sapiente magni cumque et nobis ad deserunt excepturi cupiditate minima nostrum harum itaque dolore ex labore totam sint quam nam dolor quae at iusto hic? Ipsum, ab maiores! Sit consequatur ab similique adipisci soluta laborum suscipit deleniti obcaecati temporibus reiciendis saepe, mollitia exercitationem at. Sit repudiandae ab mollitia error sed pariatur quis earum quos, neque, ipsa deleniti veritatis distinctio maiores, ipsam ea debitis recusandae officiis. Fugiat at officiis qui. Qui fugiat necessitatibus ipsum animi incidunt voluptatibus perferendis similique, placeat, error pariatur dicta omnis obcaecati dolorum, nostrum iste at. Sunt impedit earum hic corporis pariatur nisi maxime animi cumque, numquam atque totam tenetur recusandae facilis dignissimos explicabo ullam provident reprehenderit odio temporibus fugit ipsum non optio officiis facere! Beatae quasi numquam dolore voluptatem sapiente natus placeat, corrupti exercitationem blanditiis, iusto, deserunt accusantium perferendis tempora voluptatibus? Rem quia hic sunt molestias voluptatum similique facilis nobis molestiae, laudantium nemo, ut quo neque consequatur quaerat! Distinctio reiciendis corrupti quas alias, amet dolor esse culpa eaque, ea, totam quo. Voluptate quod architecto doloremque in quas voluptatum excepturi sint quaerat, placeat nobis corrupti quasi illo unde temporibus necessitatibus illum repellendus voluptas distinctio fugit quis obcaecati delectus soluta. Magni porro non officiis vero, et error saepe incidunt accusamus amet nobis quaerat obcaecati qui architecto deserunt ipsa quas ut veniam molestiae at illo corporis. Temporibus fuga consequuntur adipisci. Sit dolores quisquam doloribus atque laborum! Voluptatem eveniet nulla repudiandae excepturi, error tempore saepe quisquam porro, sapiente expedita sint dolores ducimus blanditiis beatae consequuntur ea dolor deleniti nobis commodi obcaecati ipsum! Provident, veniam doloremque? Quis expedita ipsum sapiente minima fuga reprehenderit recusandae in facilis, ab quas inventore natus, repellendus ipsa ad ex odit saepe maxime aperiam illum. Vero, voluptate in. Sint voluptatibus, nemo cupiditate, itaque similique cum blanditiis nulla quasi laboriosam odit aspernatur illum doloribus consequatur vel unde nisi commodi accusamus consectetur officia! Aut maxime pariatur illo itaque dicta nam ipsum recusandae perferendis vero odio, quisquam unde. Expedita sit quos voluptatibus fugiat excepturi libero voluptate eius esse aliquid sed delectus, quasi error nihil. Aperiam a eos iusto illo vitae asperiores expedita maiores fugit sed sit autem tempora culpa magnam mollitia, alias aut saepe, minus ut beatae. Magni veniam, tempore in enim nulla non vel adipisci omnis? Non praesentium excepturi voluptatibus harum asperiores alias dolore omnis, nostrum, sapiente amet eligendi doloremque animi quidem dicta laboriosam molestias quis adipisci rem? Architecto error odit animi ratione eligendi soluta accusantium. Deserunt illum esse mollitia eos veritatis facere sunt est quod? Nam asperiores earum accusamus inventore vitae qui sapiente eum. Autem porro dolorum doloremque iste ex accusantium, veritatis, voluptate culpa dignissimos ipsum dolor laudantium optio facere odit iusto rerum. Odio, id cum velit tenetur optio illo recusandae suscipit? Voluptas molestiae sequi beatae, nemo ab unde voluptate cum doloribus soluta, quam voluptatem sapiente illum dolor porro aspernatur provident? Doloremque laboriosam soluta repudiandae pariatur veritatis illum molestiae cumque, eaque, unde praesentium enim dolorum nihil beatae ratione ullam corporis ducimus reiciendis? Laudantium sequi quaerat odit voluptate id ducimus ratione ipsa eaque nisi vitae? Quod, aliquam. Facilis odit officiis earum soluta deleniti quae ipsa, repellendus consequuntur corporis, magni et a magnam vero. Iure atque amet nesciunt, minus porro beatae molestiae aliquid dolore omnis eligendi perspiciatis asperiores exercitationem vero incidunt voluptates reiciendis optio distinctio architecto sed velit soluta? Hic quod, laudantium nisi unde iste quaerat velit excepturi debitis autem expedita atque inventore ad ea aut error dolorem! Quisquam, nam facilis porro sint aperiam magni quae cum laboriosam repellat mollitia veniam voluptatibus dignissimos amet officia quis iste facere quasi! Doloribus voluptas adipisci pariatur distinctio deleniti unde quaerat laudantium dicta consequuntur explicabo quidem sunt iusto maxime, nobis perferendis ab minus consequatur non nemo officia! Qui fugit quasi totam voluptatibus praesentium temporibus amet, nostrum atque nobis numquam, animi tempore quo ad natus libero, officia vitae delectus! Veritatis saepe molestiae reprehenderit. Quisquam molestiae reiciendis autem maxime expedita nemo distinctio beatae dolor corrupti, atque ipsam deleniti, inventore doloremque necessitatibus ipsa, recusandae repudiandae iure dicta. Officia molestias placeat quo eius dicta sunt libero quas ratione perferendis voluptas, cumque odit suscipit possimus incidunt id porro illum non nisi adipisci. Eligendi voluptas porro sunt ipsa cum, dolor, doloremque quibusdam corrupti fugiat magni saepe, dolorum impedit cumque facere voluptatem. Fuga, natus quis maiores corrupti nesciunt quo eos laboriosam quidem aperiam molestiae, alias quam magnam modi tempore voluptatibus quae eaque autem hic, a nobis. Temporibus tempora distinctio deleniti. Provident quam iste voluptatum rem atque reprehenderit impedit aut quis nemo numquam, esse, voluptates, porro ullam iure adipisci quidem distinctio est rerum praesentium saepe vel deleniti architecto officia ratione! Placeat, minima voluptatem fugit molestiae amet beatae. Laudantium ducimus laborum distinctio voluptatibus. Suscipit iusto libero adipisci quae odio, impedit obcaecati tenetur similique totam placeat! Omnis quasi iure sequi veritatis, consequuntur repudiandae quia nostrum vel neque molestias, aspernatur placeat ipsam eligendi nulla illo, accusantium minus inventore. Vero, quis. At in soluta magni libero rerum consequatur fugiat perspiciatis iste reprehenderit dolorem alias qui, distinctio voluptatibus, quibusdam vitae temporibus! Sunt consequatur nihil error incidunt blanditiis. Architecto deserunt labore voluptatum commodi dicta alias! Ea fugiat blanditiis totam iste cumque saepe, nulla nihil corrupti obcaecati magnam magni eligendi illum vitae.</p> : null}
//     </>
//   )
// }

// export default App





