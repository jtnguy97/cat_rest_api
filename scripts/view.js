import covidInfo from "./components/covidInfo.js";

const renderDOM = (html) => document.getElementById('view').innerHTML = html;

export const PlayScene = (props) => { 
    const {data} = props; 
        renderDOM( 
        `${covidInfo(data)}`
    )
}
