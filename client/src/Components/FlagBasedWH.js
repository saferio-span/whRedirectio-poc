import React, { useEffect,useState } from 'react'
import { useHistory } from 'react-router-dom';
import WhCertificate from './WhCertificate';
import axios from 'axios';

const FlagBasedWH = () => {

    const history = useHistory();
    const [content,setContent] = useState()

    const getContent = async ()=>{
        const res =await axios.get("/api")
        console.log(res.data)
        setContent(res.data)
    }

    useEffect(()=>{
        const flag = localStorage.getItem('sendToList')
        console.log(flag)
        getContent()
        if(flag === "true")
        {
            history.push('/list')
        }
        //eslint-disable-next-line
    },[])

    return (
        <div className="container">
            <WhCertificate content={content} />
        </div>
    )
}

export default FlagBasedWH
