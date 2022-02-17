import React, { useState } from 'react';
import FetchButton from '../Components/FetchButton';
import FetchTable from '../Components/FetchTable';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Fetch = () => {

    const [fetched,setFetched] = useState(false)
    const [jobs,setJobs] = useState([])

    const handleFetch = (result) => {
        setFetched(true)
        setJobs(result)
    }

    return (
        <div>
            {console.log("render")}
            <Navbar />
            {fetched ? <FetchTable jobs={jobs}/> : <FetchButton handleFetch={handleFetch} />}
            <Footer />
        </div>
    );
};

export default Fetch;