import React from 'react';

const FetchTable = (props) => {

    const displayJobs = props.jobs.map((job) => {
        return (
            <tr key={job.idOffer}>
                <td>{job.title}</td>
                <td>{job.name}</td>
                <td>{job.level}</td>
                <td>{job.req}</td>
                <td>{job.contract}</td>
            </tr>
        )
    })

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Requirements</th>
                        <th>Contract</th>
                    </tr>
                </thead>
                <tbody>
                    {displayJobs}
                </tbody>
            </table>
        </>
    );
};

export default FetchTable;