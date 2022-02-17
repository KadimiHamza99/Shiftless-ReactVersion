import React from 'react';

const MatchTable = (props) => {
    
    const MatchRow = props.matchData.map((data)=>{
        return(
            <tr>
                <td>{data.Title}</td>
                <td>{data.Company}</td>
                <td>{data.Location}</td>
                <td>{data.Matching.toFixed(2)}%</td>
            </tr> 
        )
    })
    
    return (
        <>
            <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Matching</th>
                    </tr>
                </thead>
                <tbody>
                    {MatchRow}
                </tbody>
            </table>
        </>
        </>
    );
};

export default MatchTable;