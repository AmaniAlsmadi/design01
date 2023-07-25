import React from 'react';
import Header from "./header";
import Footer from "./footer";
import TodoWrapper from './TodoWrapper';
import style from '../css/style.module.css';

export default function Main() {
    return (
        <div className={style.main}>
            <Header/>
            <TodoWrapper/>
            <Footer/>
        </div>
    )
}
