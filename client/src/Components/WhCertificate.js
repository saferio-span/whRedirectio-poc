import React from 'react'
import { useHistory } from 'react-router-dom';

const WhCertificate = ({content}) => {
    const history = useHistory();
        
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-11"><h1>Wh certificate</h1></div>
                <div className="col-1"><button className="btn btn-primary" onClick={() => history.push('/')}>Back</button></div>
            </div>
            <iframe className="my-1" title="W9" width="100%" height="625" src={content} />            
        </div>
    )
}

export default WhCertificate
