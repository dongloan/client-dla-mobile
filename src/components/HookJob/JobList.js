import React from 'react';
import PropTypes from 'prop-types';

JobList.propTypes = {
    jobs : PropTypes.array,
};

JobList.defaultProps = {
    jobs : [],
}

function JobList(props) {
    const {jobs, filter} = props;
    console.log(filter);
    return (
        <div>
            {jobs.map(job => (
                <li key={job.id}>{job.name}</li>
            ))}
        </div>
    );
    
}

export default JobList;