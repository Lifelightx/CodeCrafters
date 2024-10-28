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
          <Topics name="DataTypes"/>
          <Topics name="Keys"/>
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
         <Section id="introduction" topic="12. What is RDBMS?"
         content="RDBMS stands for Relational Database Management System. It is a software system that allows you to create, modify, and maintain databases. "
         />
         <Section id="introduction" topic="13. What is SQL Server?"
         content="SQL Server is a relational database management system developed by Microsoft. It is a software system that allows you to create, modify, and maintain databases."
         />
         <Section id="introduction" topic="14. What is MySQL?"
         content="MySQL is a relational database management system developed by Oracle. It is a software system that allows you to create, modify, and maintain databases."
         />
         <Section id="introduction" topic="15. What is the difference between SQL and MySQL ?"
         content="SQL is a standard language for managing relational databases. MySQL is a specific implementation of SQL."
         />
         <Section id="introduction" topic="16. What is the difference between SQL and NoSQL?"
         content="SQL is a relational database management system that uses structured query language to manage data. NoSQL is a non-relational database management system that does not use structured query language to manage data.

Key differences include:
1. Structure: SQL databases have a predefined schema and use tables with rows and columns. NoSQL databases are schema-less and can store unstructured data.
2. Query Language: SQL databases use SQL (structured query language). NoSQL databases use various query languages specific to their implementation.
3. ACID Properties: SQL databases strictly follow ACID properties (Atomicity, Consistency, Isolation, Durability). NoSQL databases may sacrifice ACID compliance for performance and scalability.
4. Use Cases: SQL is better for complex queries and transactions. NoSQL is better for handling large volumes of unstructured data and rapid changes.
"
         />
        
         <Section id="datatypes" topic="17. What data types are used in SQL?"
         content="The data types used in SQL are:
         - INT: Integer - Used to store whole numbers without decimals (e.g., 1, 100, -5)
         - VARCHAR: Variable character - Used to store variable-length strings with a maximum length (e.g., names, emails)
         - DATE: Date - Used to store dates in YYYY-MM-DD format (e.g., 2023-12-25)
         - BOOLEAN: Boolean - Used to store true/false or 1/0 values
         - FLOAT: Floating point - Used to store decimal numbers (e.g., 3.14, 2.5)
         - TEXT: Text - Used to store large strings without length limit
         - TIMESTAMP: Timestamp - Used to store date and time (e.g., 2023-12-25 13:30:00)
         - CHAR: Fixed character - Used to store fixed-length strings (e.g., state codes like 'CA', 'NY')"
         code="
CREATE TABLE examples (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Integer: 1, 2, 3
    name VARCHAR(50),                   -- Variable string: 'John Smith'
    birth_date DATE,                    -- Date: '2000-12-25' 
    is_active BOOLEAN,                  -- Boolean: TRUE/FALSE
    salary FLOAT,                       -- Float: 50000.50
    description TEXT,                   -- Text: 'Long description...'
    created_at TIMESTAMP,               -- Timestamp: '2023-12-25 13:30:00'
    state_code CHAR(2)                  -- Fixed char: 'CA'
);"
         language="SQL"
         />
         <Section id="introduction" topic="18. What is the difference between NULL and NOT NULL?"
         content="NULL and NOT NULL are used to specify whether a column can have a null value or not.
         NULL means that the column can have no value at all. NOT NULL means that the column must have a value."
         code="CREATE TABLE examples (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(50) NULL);"
         language="SQL"
         />
         <Section id="keys" topic="19. What is Primary Key?"
         content="Primary key is a column that uniquely identifies each row in a table. It has the following properties:

1. Uniqueness: Each value must be unique across all rows
2. Not Null: Cannot contain NULL values
3. Immutable: Values should not change over time
4. Single Primary Key: Only one primary key allowed per table
"
         />
         <Section id="keys" topic="20. What is Foreign Key?"
         content="Foreign key is a column that references the primary key of another table. It is used to ensure that the values in the foreign key column match the values in the primary key column of the referenced table."
         />
         <Section id="keys" topic="21. What is Composite Key?"
         content="Composite key is a combination of two or more columns that uniquely identifies each row in a table. It is used to ensure that each row in a table is unique."
         />
         <Section id="keys" topic="22. What is Unique Key?"
         content="Unique key is a column or set of columns that ensures unique values across rows in a table. Here are the key properties of a unique key:

1. Uniqueness: No duplicate values are allowed in the column(s)
2. Multiple Unique Keys: A table can have multiple unique keys
3. NULL Values: Can accept NULL values (unlike primary keys)
4. Foreign Key Reference: Can be referenced by foreign keys from other tables
5. Modification: Values can be modified unlike primary key which should remain stable

Example use cases include:
- Email addresses in a users table
- Product codes in an inventory table
- Social security numbers in an employees table"
code="CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), email VARCHAR(50) UNIQUE);"
         language="SQL"
         /> 
         <Section id="keys" topic="23. What is Candidate Key?"
         content="Candidate key is a column or a combination of columns that can uniquely identify each row in a table. It is used to ensure that each row in a table is unique."
         />
         <Section id="keys" topic="24. What is Super Key?"
         content="Super key is a column or a combination of columns that can uniquely identify each row in a table. It is used to ensure that each row in a table is unique."
         />

      </div>
    </div>
  )
}

export default Mysql
