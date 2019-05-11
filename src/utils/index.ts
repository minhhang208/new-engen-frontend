import randomColor from 'randomcolor';
export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle(a: Array<any>) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
export type ColorElement = {
    hue: string;
    value: string
}

export const opacities = [0.2,0.4,0.6,0.8,1]

export function getRGBFromRGBA(color: string) {
    return color.substring(3);
}
export function getRandomColor() {
    return randomColor();
}
export const baseColors = ["red","orange","yellow","green","blue","purple","pink"];
const getRandomeColorsList = (colorEachCategory: number) => {
    let colors: Array<ColorElement> = [];
    baseColors.forEach(color => {  
        for(let i = 0; i <colorEachCategory;i++) {     
            colors = colors.concat({hue: color, value: randomColor({hue: color})});
        }
    })
    return shuffle(colors);
}


export const colorList = getRandomeColorsList(20);


