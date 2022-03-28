import React from 'react';
import clsx from 'clsx';
import s from './Card.module.css';
import { Button } from 'antd';
import { updateTask, deleteTask, setTasks } from '../../redux/actions/tasks';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillDelete } from "react-icons/ai";
import {onDropHelper} from '../../utils';

const Card = ({card,className}) => {

const dispatch = useDispatch();
  

const taskL = useSelector(state => state.allTask.data);

  const onDragStart = (e,card)=> {
    console.log('dragStart', card);
    var tempCard = JSON.stringify(card);
    e.dataTransfer.setData("card", tempCard);
  };

  const onDoubleClick = () => {
    updateStatus();
  };

  
  const onClick = ()=> {
    updateStatus();
  };

  const updateStatus = () => {

    let status = !card.completed ? 'completed' : 'todo';
    
    let tempCard = card;
    if(card.completed) {
        tempCard.completed= false;
    } else {
        tempCard.completed= true;
    }

    const tempList  = onDropHelper(status, taskL, card);

    dispatch(setTasks(tempList));
    dispatch((updateTask(tempCard)));
  }


  const onClickTrash = ()=> {
    dispatch((deleteTask(card.id)));
  };

  const container = clsx({
    [s.card] : true,
    [s.todo] : className,
    [s.completed] : !className,
});

  return (
      <div className={container} draggable onDoubleClick={(e)=>onDoubleClick(e,card)} onDragStart={(e)=>onDragStart(e,card)}> 
        <div className={s.cardContainer}>
          <div className={s.title} >
            <div>
            {card.title}
            </div>
          </div>
          <div className={s.btn}>
            <Button onClick={ onClick }>{card.completed ? 'TO DO':'DONE'}</Button>
            <Button onClick={ onClickTrash }><AiFillDelete /></Button>
          </div>
        </div>
      </div>
  );
};


export default Card;
