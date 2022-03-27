import React, { useState } from 'react';
import 'antd/dist/antd.css';
import s from './Input.module.css';
import { Input } from 'antd';
import { createTask } from '../../redux/actions/tasks';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';

const CustomInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const clickButton = () => {
    dispatch(createTask(text));
    setText('');
};

const onChange =(e) =>{
  setText(e.target.value);
}

  return ( 
      <div className={s.customInput}>
          <Input placeholder="Enter To DO"  onChange={ onChange} value={text} />
          <div>
          <Button onClick={clickButton}> Click Me </Button>
          </div>
      </div>
  );
 
};


export default CustomInput;
