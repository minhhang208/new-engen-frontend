import { useStore } from 'react-hookstore';
import { colorList, ColorElement } from '../utils';
import { useState, useEffect } from 'react'; 

export default function useColorList(filter: string): [Array<ColorElement>] {
    const [showColors, setShowColors] = useState<Array<ColorElement>>(colorList);
    const [colorsList, setColorList] = useStore('colorList');
    const filterColor = () => {
        if(filter==="all") {
            setShowColors(colorList);
            setColorList(colorList);
        } else {
            const colors = colorList.filter(color => color.value.indexOf(filter) > -1||color.hue.startsWith(filter.toLocaleLowerCase()));
            setShowColors(colors);
            setColorList(colors);
        }
    };
    useEffect(filterColor ,[filter])
    return [showColors];
}
