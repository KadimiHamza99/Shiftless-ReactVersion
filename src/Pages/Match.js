import React , {useState} from 'react';
import Checkbox from '../Components/Checkbox';
import Footer from '../Components/Footer';
import MatchTable from '../Components/MatchTable';
import Navbar from '../Components/Navbar';

const Match = () => {

    const [matchData,setMatchData] = useState([])

    const matchingData = (data) => {
        setMatchData(data)
    }
    return (
        <div>
            <Navbar />
            <Checkbox matchingData={matchingData}/>
            <MatchTable matchData={matchData}/>
            <Footer />
        </div>
    );
};

export default Match;