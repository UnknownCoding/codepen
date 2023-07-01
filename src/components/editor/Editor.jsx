import React, { useState } from 'react'
import './editor.css'
import { FcSettings } from 'react-icons/fc';
import { BiChevronDownCircle } from 'react-icons/bi';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

const Editor = ({src,heading,value,onChange}) => {
    const handleChange = (editor,data,value) => {
        onChange(value)
    }
    const [full,setFull] = useState(false)
    const [opts,setOpts] = useState(false)
    const [size,setSize] = useState(null)
    return (
        <section className={`editorContainer ${full && 'expand'}`} style={{fontSize:`${size && `${size}px` }`}}>
            <div className='topcontainer'>
                <div className='iconsname'>
                    <img className='' src={src}/>
                    <p>{heading}</p>
                </div>
                <div className='settings'>
                    <div className='topIconsContainer'>
                        <div className='topIcons' onClick={()=>setOpts(!opts)}>
                            <FcSettings/>
                        </div>
                        <div className='topIcons' onClick={()=>setFull(!full)}>
                            <BiChevronDownCircle/>
                        </div>
                    </div>
                </div>
            </div>
            <main className='mainCode'>
                <CodeMirror value={value} onBeforeChange={handleChange} className='controlled-editor' options={{theme: 'material',lineNumbers: true}}/>
            </main>
        </section>
    )
}

export default Editor