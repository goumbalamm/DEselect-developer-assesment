const getBackendFilter = (query_params) => {
    const filter = {};
    const {firstName, lastName, age, nationality} = query_params;
    const query = {firstName, lastName, age, nationality};
    for (let ind in query) {
        if (query[ind]) {
            filter[ind] = query[ind];
        }
    }

    return filter;
}

const sortResults = (data, sortDirection) => {
    if (sortDirection == 'desc') {
        data.sort((a, b) => b.firstName.localeCompare(a.firstName));
    } else if (sortDirection == 'asc') {
        data.sort((a, b) => a.firstName.localeCompare(b.firstName));
    }

    return data;
}


module.exports = {getBackendFilter, sortResults};