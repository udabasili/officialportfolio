import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { FaReact } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa';
import { SiNginx } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { SiMongodb } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';

interface IProps {
    color: string;
    icon: IconType
}

const TechnologyIcon:FC<IProps> = ({icon: Icon, color}) =>{
    return (
        <div className="icon">
            <Icon style={{
                color
            }}/>
        </div>
      
    )
}

const ICON_MAP = {
    react:{
            name: "React",
            color: "blue",
            icon: FaReact
    },
    node: {
        name: "Node",
        color: "green",
        icon: FaNode
    },
    docker: {
        name: "Docker",
        color: "blue",
        icon: FaDocker
    },
    nginx:{
        name: "Nginx",
        color: "green",
        icon: SiNginx
    },
    firebase:{
        name: "Firebase",
        color: "orange",
        icon: IoLogoFirebase
    },
    mongodb:{
        name: "MongoDb",
        color: "green",
        icon: SiMongodb
    },
    redux: {
        name: "Redux",
        color: "green",
        icon: SiRedux
    },
    mysql:{
        name: "MySQL",
        color: "blue",
        icon: SiMysql
    },
}


export default function WebStack({
        tech,
        info

    }) {
    const foundIcons = tech.split(',').filter(function(icon){
        if (ICON_MAP[icon.toLowerCase()]) {
            return true;
        }
        return false;
    }).map(function(icon){
            return ICON_MAP[icon.toLowerCase()]
        
    })

    return (
        <div className="web-stack">
            <div className="web-stack__left">
                <div className="icons">
                    {
                        foundIcons.length > 0 && foundIcons.map((item, key) => (
                            <TechnologyIcon 
                                key={key}
                                icon={item.icon} 
                                color={item.color}/>
                        ))
                    }
                </div>
            </div>
            <div className="web-stack__right">
                <h3 className="heading-3 u-margin-bottom-small">Web Stack</h3>
                <p className="paragraph">
                    {info}
                </p>
            </div>
        </div>
    )
}
