export const requestFailed = (error) => {
    return {
        type: 'REQUEST_FAIL',
        payload: error
    }
};
