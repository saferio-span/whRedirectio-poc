import React from 'react'
import { useHistory } from 'react-router-dom';

const Home = () => {

    const history = useHistory();

    // const handleNotPrevented = ()=>{
    //     history.push('/wh')
    // }

    const handleBasedOnFlag = (e)=>{
        e.preventDefault()
        history.push('/flagBasedWh')
        //eslint-disable-next-line
    }

    const handleWhCertificate = (e)=>{
        e.preventDefault()
        history.push('/wh')
        //eslint-disable-next-line
    }

    return (
        <div className="container">
            <h3 className="mt-2 text-center text-primary">POC for Redirection error of WhCertificate</h3>
            <br/>
            <div className="row">
                <div className="col-2 offset-10">
                    <button className="btn btn-primary" onClick={() => history.push('/List')}>List</button>
                </div>
            </div>
            <div className="row mt-5 ">
                <div className="col-6 d-flex justify-content-center mt-5">
                    <form action="#" onSubmit={handleBasedOnFlag}>
                        <input type="submit" className="btn btn-lg btn-danger" value="Redirection based on logic" />
                    </form>
                </div>
                <div className="col-6 d-flex justify-content-center mt-5">
                    <form action="#" onSubmit={handleWhCertificate}>
                        <input type="submit" className="btn btn-lg btn-success" value="WH Form" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home
