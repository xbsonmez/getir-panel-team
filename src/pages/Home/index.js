import React, { useState, useEffect } from 'react';
import CustomInput from '../../components/Input';
import Container from '../../components/Container';
import s from './Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, updateTask, setTasks } from '../../redux/actions/tasks';

import {onDropHelper} from '../../utils';

const Home = () => {
    const dispatch = useDispatch();
    const taskL = useSelector(state => state.allTask.data);

    useEffect(() => {
        dispatch(getTasks());
    },[dispatch]);

    const onDragOver = (ev) => {
        console.log('onDragOver');
        ev.preventDefault();
    };


    
    const onDrop = (ev, status) => {

        let card = JSON.parse(ev.dataTransfer.getData("card"));
        const tempList  = onDropHelper(status, taskL, card);

        let tempCard = card;
        if(status === 'completed') {
            tempCard.completed= true;
        } else {
            tempCard.completed= false;
        }

      dispatch(setTasks(tempList));
      dispatch((updateTask(tempCard)));
    };


  return (
    <div className={s.home}> 
        <h1> TO DO LIST</h1>
        <div>
            Enter Your To Do
        </div>
        <div className={s.content}>
            <div>
                <CustomInput />
                <div className={s.containers}>
                <Container 
                    items= {taskL}
                    title='TO DO'
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    status='todo'
                    className={true}
                />
                <Container 
                    items= {taskL}
                    title='DONE'
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    status='completed'
                    className={false}
                />
                </div>
            </div>
        </div>
        <div>
        </div>
       
    </div>
  );
 
};


export default Home;
