import React,{useState} from 'react'
import "./style.css"
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import List from './List';

const Todo = () => {
    const [todo,setTodo]=useState("");
    const [add,setAdd]=useState([]);
    const [validation,setvalidation]=useState("");
    console.log(add)
    //console.log(todo)
    const setData=(e)=>{
        //console.log(e.target.value)
        setTodo(e.target.value)
  }
  const additems=()=>{
      if(todo=="")
      {
         setvalidation("Enter your Todo")
      }
      else{
    setAdd(()=>{
        return [...add,todo]
    });
    setTodo("")
    setvalidation("")
  }
}
  const dltitems =(id)=>{
     const dltdata=add.filter((el,ind)=>{
       return ind !==id 
     });
     setAdd(dltdata)
  }
    return (
        <>
            <div className='main-container'>
                <div className='todo-box'>
                    <img src="https://raw.githubusercontent.com/harsh17112000/react_youtube_todo/main/public/book.png" alt="image" className='todoimg' />
                    <h2 className='heading'>Write your Todo List here</h2>
                     <h3 className='validation'>{validation}</h3>

                    <div className="input-container">
                        <input type="text" name='todo'
                        onChange={setData} value={todo} 
                        placeholder='Enter your task' id='' />
                        <Tooltip title="Add">
                           <Button className='addbtn' onClick={additems}>
                              <AddIcon/>
                           </Button>
                        </Tooltip>
                    </div>
                    <div className="store-container">
                    <ul>
                    {
                        add.map((ele,index)=>{
                            return(
                                <>
                                <List id={index} text={ele} dltitems={dltitems}/>
                                </>
                            )
                        })
                    }
                    </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Todo