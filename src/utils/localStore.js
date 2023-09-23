const getJobList = () => {
    const jobList = localStorage.getItem('jobList');
    if(jobList) {
        return JSON.parse(jobList)
    }
    return []
}



const addToLocaStore = (id) => {
    const jobList = getJobList();
    const exit = jobList.find((item) => item.id === id)
    if(!exit) {
        jobList.push(id)
    }  
    const jobListStr = JSON.stringify(jobList);
    localStorage.setItem('jobList', jobListStr)
}


export default {addToLocaStore, getJobList}