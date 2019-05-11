import React, {useState} from 'react';
import {Menu, Button} from "semantic-ui-react";
import { baseColors, getRandomColor } from '../utils';
import useColorList from "../hooks/useColorList";
import "./colorMenu.css";


export default function ColorMenu() {
    const [activeItem, setActiveItem] = useState<string>('all');
    
    const [colors] = useColorList(activeItem);
    
    const handleSelectMenu = (color: string) => {
        setActiveItem(color);
        if(location.hash !== "#/") {
            location.assign(window.location.origin + "/#/");
        }
        
    };
    const menuList = ["all"].concat(baseColors);
    const handleClickRandomButton = () => {
        const color = getRandomColor();
        location.assign(
            `${window.location.origin}/#/detail/${color.substring(1)}`
          );
    }
    return <>
        <div className="menu menu-column">
        <Menu vertical>
        <div className="random-button" >
        <Button  fluid 
            content='Random Color' onClick={() => handleClickRandomButton()}        
          />          
          </div>          
            {
                menuList.map(color => {
                    return <Menu.Item name={color} key={color} active={activeItem===color} onClick={() => handleSelectMenu(color)} />
                })
            }
        </Menu>
        </div>
    </>
}