import React, { useEffect, useState } from "react"
import {Input} from "semantic-ui-react";
import useColorList from "../hooks/useColorList";

export default function ColorSearch() {
    const[input, setInput] = useState<string>('');
    useColorList(input);
    const handleInputChange = (event: any) => {
        if(location.hash !== "#/") {
            location.assign(window.location.origin + "/#/");
        }
        setInput(event.target.value);
        
    }
    return <>
        <Input  className="color-search"  size="mini" value={input} onChange={(event: any) => handleInputChange(event)} icon={{ name: 'search', circular: true, link: true }} placeholder='Search...' />
    </>
}