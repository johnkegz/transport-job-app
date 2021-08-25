export const getData = () => {
    const result = fetch('https://brenger-interviews.s3.amazonaws.com/open_transport_jobs.json')
        .then(response => response.json())
        .then(data => data)
        .catch((error) => error);
    return result
}