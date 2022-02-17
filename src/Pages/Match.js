import React , {useState} from 'react';
import Checkbox from '../Components/Checkbox';
import Footer from '../Components/Footer';
import MatchTable from '../Components/MatchTable';
import Navbar from '../Components/Navbar';

const Match = () => {

    const [matchData,setMatchData] = useState([])
    const [match,setMatch] = useState(false)

    const matchingData = (data) => {
        setMatch(true)
        setMatchData(data)
    }
    return (
        <div>
            <Navbar />
            <Checkbox matchingData={matchingData}/>
            {match ? <MatchTable matchData={matchData}/> : <span/>}
            <Footer />
        </div>
    );
};

export default Match;