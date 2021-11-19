import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const List = () => {
    const history = useHistory();

    useEffect(()=>{
        localStorage.setItem('sendToList',true)
    },[])

    const handleClearStorage =()=>{
        localStorage.setItem('sendToList',false)
        history.push('/')
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-9">
                    <h3 className="mt-2 text-primary">List page</h3>
                </div>
                <div className="col-2 float-right">
                    <button className="btn btn-danger" onClick={handleClearStorage}>Clear flag and go back</button>
                </div>
                <div className="col-1">
                    <button className="btn btn-primary" onClick={() => history.push('/')}>Back</button>
                </div>
                
            </div>

        </div>
    )
}

export default List
