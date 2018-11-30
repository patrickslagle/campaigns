# Campaigns

## Information
Find user campaigns

## How to Use

1. npm install
2. Input your database information connection information in the sql-pool.js file. This is under the database folder.
3. View file create.scripts.sql in the database folder, and run the table create scripts for your Postgres database in the order.
4. Input the information from the .csv file using the scripts in database-upload.sql. Make sure to use the User_info.csv file in the database folder, the scripts work specifically for this .csv format. 
5. npm run dev for development mode. This concurrently runs client and server files.

For Production:
```
npm run webpack
```

For Testing: 
```
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE.md]