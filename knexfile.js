module.exports = {
    client: 'sqlite3', // specifying the DBMS database management system
    useNullAsDefault: true, // a flag thats require for default
    connection: {
        filename: './data/cars.db3', // locaiton of our database file
    },
};
