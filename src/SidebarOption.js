import React from 'react';
import './sidebaroption.css';

export default function SidebarOption({title,Icon}) {
    return (
        <div className="sidebaroption">
            {Icon && <Icon className="sidebaroption__icon"/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}  
        </div>
    );
}
