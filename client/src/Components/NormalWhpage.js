import React, { useEffect,useState } from 'react'
import WhCertificate from './WhCertificate';
import axios from 'axios';

const NormalWhpage = () => {

    const [content,setContent] = useState()

    const getContent = async ()=>{
        const res =await axios.get("/api")
        console.log(res.data)
        setContent(res.data)
    }

    useEffect(() => {
        getContent()
    }, [])

    return (
        <div className="container">
            <WhCertificate content={content} />
        </div>
    )
}

export default NormalWhpage
