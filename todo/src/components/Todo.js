import React from 'react'
import "./style.css"
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';

const Todo = () => {
    return (
        <>
            <div className='main-container'>
                <div className='todo-box'>
                    <img src="" alt="image" />
                    <h2 className='heading'>Write your Todo List here</h2>


                    <div className="input-container">
                        <input type="text" name='todo' placeholder='Enter your task' id='' />
                        <Tooltip title="Add">
                           <Button className='addbtn'>
                              <AddIcon/>
                           </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Todo