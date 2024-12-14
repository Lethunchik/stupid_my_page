import { Link } from "react-router-dom";
import './routerr'
import cl from './Tree.module.css'
import React from "react";
const Tree = () => {
    const tree = ['Летяго Глеб','Летяго Татьяна','Летяго Александр','Крупенини Александр','Крупенина Лидия','Летяго Виктор','Летяго Мария']
    return (
        <div className={cl.wrapper}>
            <span className={cl.mainBranch}>{tree[0]}</span>
            <div className={cl.lineOne}>
                <span>{tree[1]}</span>
                <span className={cl.secondBranch}>{tree[2]}</span>
            </div>
            <div className={cl.lineTwo}>
                <div>
                    <span>{tree[3]}</span>
                    <span>{tree[4]}</span>
                </div>
                <div>
                    <span>{tree[5]}</span>
                    <span>{tree[6]}</span>
                </div>
            </div>
            <div>
                <Link to={'/Formula'}><button>Формула</button></Link>
                <Link to={'/'}><button>Домой</button></Link>
             </div>

        </div>
    );
};

export default Tree;