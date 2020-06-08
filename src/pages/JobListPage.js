import React, {useState, useEffect} from 'react';           // rsfp : tạo nhanh
import JobList from '../components/HookJob/JobList';
import FilterJob from '../components/FilterJob';
          
function JobListPage() {
    const [jobList, setJobList] = useState([]);
    const [filter, setFilter] = useState({
        filter : '',
        title_like : '',
    });

    useEffect(() => {
        async function fetchJobList() {
            try {
                const requestUrl = 'https://5e5142b4f2c0d300147c0593.mockapi.io/api/job';
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log({responseJSON});
                console.log(filter);
                setJobList(responseJSON, filter);
            } catch (error) {
                console.log(error.message);
            }         
        }
        fetchJobList();
    }, [filter])

    function handleFilterChange(newFilter) {
        setFilter({
            ...filter,
            title_like : newFilter.filterItem,
        });
        console.log(newFilter);
    }

    return (
        <div>
            <FilterJob onSubmit={handleFilterChange} />
            <JobList jobs={jobList} filter={filter} />
        </div>
    );
}

export default JobListPage;