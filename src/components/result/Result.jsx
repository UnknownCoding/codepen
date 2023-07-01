import React, { useContext, useEffect, useState } from 'react'
import './result.css'
import { MainDataContext } from '../../context/DataProvider'

const Result = () => {
    const {html,css,js} = useContext(MainDataContext)
    const [src,setSrc] = useState('')
    const srcCode = 
    `
        <html>
            <body>
                ${html}
            </body>
            <style>
                ${css}
            <style/>
            <script>
                ${js}
            </script>
        </html>
    `

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setSrc(srcCode)
        },2000)
        return () => clearTimeout(timeout) 
    },[html,js,css])

    return (
        <div className='resultconatiner'>   
            <iframe srcDoc={src} title='Output' sandbox='allow-scripts' frameBorder={0} width="100" height="100%"/>
        </div>
    )
}

export default Result