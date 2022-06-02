import * as React from 'react';
import {  Book } from '../../shapes/index';
import './MainTitle.css';
const MainTitle = (props) => (
    <div className="Main-Title">
        <span className="Left-Word">Task</span> <Book/> <span className='Right-Word'>Machine</span>
    </div>
);

export  {MainTitle};