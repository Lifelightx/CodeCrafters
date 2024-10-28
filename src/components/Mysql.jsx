import React from 'react'
import Topics from './Topics'
import Section from './Section'

function Mysql() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 md:fixed md:h-screen md:overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">SQL Topics</h2>
        <ul className="space-y-2">
          <Topics name="Introduction"/>
        </ul>
      </div>

      {/* Main content */}
      <div className="w-full md:w-3/4 p-4 md:ml-[25%] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Learn SQL</h1>
        <Section id="introduction" topic="1. What is SQL?"
         content="SQL Stands for Structured Query Language.
         SQL is a standard language for managing relational databases. It is used to create, modify, and query databases." 
         />
         <Section id="introduction" topic="2. What is Database?"
         content="A database is a collection of structured information, or data, typically stored electronically in a computer system."
         />
         <Section id="introduction" topic="3. What is Table?"
         content="A table is a collection of data organized in rows and columns."
         />
         <Section id="introduction" topic="4. What is Column?"
         content="A column is a set of data values of a particular type. It is a vertical component of a table."
         />
         <Section id="introduction" topic="5. What is Row?"
         content="A row is a record in a table. It is also called a tuple. "
         />
         <Section id="introduction" topic="6. What is Database view?"
         content="A view is a virtual table based on the result-set of an SQL statement. 
         Unlike regular tables, views do not store data themselves; instead, they pull and display data from other tables as defined by the query used to create the view. Views can simplify data access and enhance security by limiting data exposure to specific columns or filtered rows"
         />
         <Section id="introduction" topic="7. What is DDL?"
         content="DDL stands for Data Definition Language. It is used to define the structure of the database and the data types of the columns in the tables. 
         Examples of DDL statements are CREATE, ALTER, and DROP."
         code="CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255));
ALTER TABLE users ADD COLUMN age INT;
DROP TABLE users;"
         language="SQL"
         />
         <Section id="introduction" topic="8. What is DML?"
         content="DML stands for Data Manipulation Language. It is used to manipulate the data in the tables. 
         Examples of DML statements are INSERT, UPDATE, and DELETE."
         code="INSERT INTO users (name, email) VALUES ('Jeeban', 'jeeban@example.com');
UPDATE users SET email = 'jeeban@example.com' WHERE name = 'Jeeban';
DELETE FROM users WHERE name = 'Jeeban';"
         language="SQL"
         />
         <Section id="introduction" topic="9. What is DQL?"
         content="DQL stands for Data Query Language. It is used to query the data from the tables. 
         Examples of DQL statements are SELECT."
         code="SELECT * FROM users;"
         language="SQL"
         />
         <Section id="introduction" topic="10. What is DCL?"
         content="DCL stands for Data Control Language. It is used to control the access to the database. 
         Examples of DCL statements are GRANT and REVOKE."
         code="GRANT SELECT, INSERT, UPDATE, DELETE ON users TO 'jeeban'@'localhost';
REVOKE SELECT, INSERT, UPDATE, DELETE ON users FROM 'jeeban'@'localhost';"
         language="SQL"
         />
         <Section id="introduction" topic="11. What is TCL?"
         content="TCL stands for Transaction Control Language. It is used to control the transaction in the database. 
         Examples of TCL statements are COMMIT and ROLLBACK."
         code="COMMIT;
ROLLBACK;"
         language="SQL"
         />

      </div>
    </div>
  )
}

export default Mysql
