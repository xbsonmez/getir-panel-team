import React, { useState, useEffect } from 'react';
import CustomInput from '../../components/Input';
import Container from '../../components/Container';
import s from './Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, updateTask } from '../../redux/actions/tasks';

import {onDropHelper} from '../../utils';

const Home = () => {
    const dispatch = useDispatch();
    const taskL = useSelector(state => state.allTask.data);
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        dispatch(getTasks());
    },[dispatch]);

    const onDragOver = (ev) => {
        console.log('onDragOver');
        ev.preventDefault();
    };

    const onDrop = (ev, status) => {

        let card = JSON.parse(ev.dataTransfer.getData("card"));
        const tempList  = onDropHelper(ev, status, taskL, card);

        setTask({taskList:tempList});
        
        let tempCard = card;
        if(status === 'complated') {
            tempCard.complated= true;
        } else {
            tempCard.complated= false;
        }
    
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
                    status='complated'
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
