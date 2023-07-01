import React, { useContext } from 'react'
import Editor from '../editor/Editor'
import './code.css'
import { MainDataContext } from '../../context/DataProvider'

const Code = () => {
    const {html,css,js,setHTML,setCSS,setJS} = useContext(MainDataContext)
    return (
        <div className='codeocontainer'>
            <Editor value={html} onChange={setHTML} heading="HTML" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'/>
            <Editor value={css} onChange={setCSS} heading="CSS" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'/>
            <Editor value={js} onChange={setJS} heading="JAVASCRIPT" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'/>
        </div>
    )
}

export default Code