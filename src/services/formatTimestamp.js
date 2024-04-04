// "timestamp": "2024-04-03T15-31-41.000Z",
// needs to be converted to "2024-04-03T15:31:41.000Z" to be recognised by javascript

export const convertTimestamp = (timestamp) => {
    const time = timestamp.substring(11, timestamp.length);
    const correctTimeFormat = time.replaceAll('-', ':');
    const formatted =  timestamp.substring(0, 11) + correctTimeFormat;
    return formatted;
}