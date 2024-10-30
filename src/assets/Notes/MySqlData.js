export default [
    {
        id: "1",
        topic: "1. What is MySQL?",
        content: "MySQL is a relational database management system (RDBMS) that allows you to store, retrieve, and manage data in a structured format.",
    },
    {
        id: "2",
        topic: "2. What is RDBMS?",
        content: "RDBMS stands for Relational Database Management System. It is a type of database that stores data in a structured format, with rows and columns, and allows you to manage data using SQL (Structured Query Language).",
    },
    {
        id: "3",
        topic: "3. What is SQL?",
        content: "SQL stands for Structured Query Language. It is a standard language for managing relational databases. It is used to create, modify, and query databases.",
    },
    {
        id: "4",
        topic: "4. What is Database?",
        content: "A database is a collection of structured information, or data, typically stored electronically in a computer system.",
    },
    {
        id: "5",
        topic: "5. What is Table?",
        content: "A table is a collection of data organized in rows and columns.",
    },
    {
        id: "6",
        topic: "6. What is Column?",
        content: "A column is a set of data values of a particular type. It is a vertical component of a table.",
    },
    {
        id: "7",
        topic: "7. What is Row?",
        content: "A row is a horizontal component of a table. It is a collection of data values that are related to each other.",
    },
    {
        id: "8",
        topic:"8. What is view in Database?",
        content:"A view is a virtual table based on the result-set of an SQL statement.Unlike regular tables, views do not store data themselves; instead, they pull and display data from other tables as defined by the query used to create the view. Views can simplify data access and enhance security by limiting data exposure to specific columns or filtered rows",
    },{
        id: "9",
        topic:"9. What is DDL?",
        content:"DDL stands for Data Definition Language. It is a type of SQL that is used to define the structure of a database. It is used to create, modify, and delete tables and other objects in a database.",
        code: "CREATE TABLE table_name (column1, column2, column3, ...); \n ALTER TABLE table_name ADD column_name datatype; \n DROP TABLE table_name;",
        language: "sql",
    },
    {
        id: "10",
        topic:"10. What is DML?",
        content:"DML stands for Data Manipulation Language. It is a type of SQL that is used to manipulate data in a database. It is used to insert, update, and delete data in a database.",
        code: "INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...); \n UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition; \n DELETE FROM table_name WHERE condition;",
        language: "sql",
    },
    {
        id: "11",
        topic:"11. What is DQL?",
        content:"DQL stands for Data Query Language. It is a type of SQL that is used to query data in a database. It is used to retrieve data from a database.",
        code: "SELECT column1, column2, ... FROM table_name WHERE condition;",
        language: "sql",
    },
    {
        id: "12",
        topic:"12. What is DCL?",
        content:"DCL stands for Data Control Language. It is a type of SQL that is used to control access to a database. It is used to grant and revoke permissions to users.",
        code: "GRANT permission_type ON object_name TO user_name; \n REVOKE permission_type ON object_name FROM user_name;",
        language: "sql",
    },
    {
        id: "13",
        topic:"13. What is TCL?",
        content:"TCL stands for Transaction Control Language. It is a type of SQL that is used to control transactions in a database. It is used to commit and rollback transactions.",
        code: "COMMIT; \n ROLLBACK;",
        language: "sql",
    },
    {
        id: "14",
        topic:"14. What is SQL Server?",
        content:"SQL Server is a relational database management system (RDBMS) that allows you to store, retrieve, and manage data in a structured format.",
    },
    {
        id: "15",
        topic:"15. What is the difference between SQL and MySQL?",
        content:"SQL is a standard language for managing relational databases. MySQL is a specific implementation of SQL that is used to manage relational databases.",
    },
    {
        id: "16",
        topic:"16. What is the difference between SQL and NoSQL?",
        content:"SQL is a relational database management system (RDBMS) that stores data in a structured format. NoSQL is a non-relational database management system (NRDBMS) that stores data in a non-structured format. \n Key differences include:\n1. Structure: SQL databases have a predefined schema and use tables with rows and columns. NoSQL databases are schema-less and can store unstructured data.\n2. Query Language: SQL databases use SQL (structured query language). NoSQL databases use various query languages specific to their implementation.\n3. ACID Properties: SQL databases strictly follow ACID properties (Atomicity, Consistency, Isolation, Durability). NoSQL databases may sacrifice ACID compliance for performance and scalability.\n4. Use Cases: SQL is better for complex queries and transactions. NoSQL is better for handling large volumes of unstructured data and rapid changes.",
    },
    {
        id: "17",
        topic:"17. What data types are used in SQL?",
        content:"The data types used in SQL are: \n1. INT: Integer\n2. VARCHAR: Variable character\n3. DATE: Date\n4. TIME: Time\n5. BOOLEAN: Boolean\n6. FLOAT: Floating-point number\n7. DOUBLE: Double-precision floating-point number\n8. TEXT: Text\n9.TIMESTAMP: Date and time combination\n10. BLOB: Binary large object\n11.CHAR: Character\n12.ENUM: Enumerated value",
        code:`CREATE TABLE examples (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Integer: 1, 2, 3
    name VARCHAR(50),                   -- Variable string: 'John Smith'
    birth_date DATE,                    -- Date: '2000-12-25' 
    is_active BOOLEAN,                  -- Boolean: TRUE/FALSE
    salary FLOAT,                       -- Float: 50000.50
    description TEXT,                   -- Text: 'Long description...'
    created_at TIMESTAMP,               -- Timestamp: '2023-12-25 13:30:00'
    state_code CHAR(2)                  -- Fixed char: 'CA'
);`,
        language: "sql",
    },
    {
        id: "18",
        topic:"18. What is the difference between NULL and NOT NULL?",
        content:"NULL and NOT NULL are used to specify whether a column can have a null value or not.\nNULL means that the column can have no value at all. NOT NULL means that the column must have a value.",
        code:`CREATE TABLE examples (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(50) NULL);`,
        language: "sql",
    },
    {
        id: "19",
        topic:"19. What is primary key?",
        content:"Primary key is a column that uniquely identifies each row in a table. It has the following properties:\n1. Uniqueness: Each value must be unique across all rows\n2. Not Null: Cannot contain NULL values\n3. Immutable: Values should not change over time\n4. Single Primary Key: Only one primary key allowed per table",
    },
    {
        id: "20",
        topic:"20. What is foreign key?",
        content:"Foreign key is a column that references the primary key of another table. It is used to ensure that the values in the foreign key column match the values in the primary key column of the referenced table.",
    },
    {
        id: "21",
        topic:"21. What is Composite Key?",
        content:"Composite key is a combination of two or more columns that uniquely identifies each row in a table. It is used to ensure that the values in the composite key columns match the values in the primary key column of the referenced table.",
    },
    {
        id: "22",
        topic:"22. What is Unique Key?",
        content:`Unique key is a column or set of columns that ensures unique values across rows in a table. Here are the key properties of a unique key:

1. Uniqueness: No duplicate values are allowed in the column(s)
2. Multiple Unique Keys: A table can have multiple unique keys
3. NULL Values: Can accept NULL values (unlike primary keys)
4. Foreign Key Reference: Can be referenced by foreign keys from other tables
5. Modification: Values can be modified unlike primary key which should remain stable

Example use cases include:
- Email addresses in a users table
- Product codes in an inventory table
- Social security numbers in an employees table`,
        code:`CREATE TABLE examples (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(50) UNIQUE);`,
        language: "sql",
    },
    {
        id: "23",
        topic:"23. What is Candidate Key?",
        content:"Candidate key is a column or set of columns that can uniquely identify a row in a table. It is used to ensure that the values in the candidate key columns match the values in the primary key column of the referenced table.",
    },
    {
        id: "24",
        topic:"24. What is Super Key?",
        content:"Super key is a column or set of columns that can uniquely identify a row in a table. It is used to ensure that the values in the super key columns match the values in the primary key column of the referenced table.",
    },
    {
        id: "25",
        topic:"25. What is Alternate Key?",
        content:`Alternate key is a candidate key that is not selected as the primary key. Here are the key properties of alternate keys:
1. Uniqueness: Must contain unique values across all rows
2. Not Null: Cannot contain NULL values
3. Multiple Alternate Keys: A table can have multiple alternate keys
4. Potential Primary Key: Could serve as primary key if needed
5. Independence: Must be independent of other columns`,
    },
    {
        id: "26",
        topic:"26. What is Index?",
        content:"Index is a data structure that allows you to quickly search for data in a table. It is used to improve the performance of queries.",
    },
    {
        id: "27",
        topic:"27. What is Clustered Index?",
        content:"Clustered index is a type of index that stores the data rows in a specific order. It is used to improve the performance of queries.",
    },
    {
        id: "28",
        topic:"28. What is the difference between DELETE and TRUNCATE?",
        content:"DELETE is a DML statement that deletes rows from a table. It is used to delete specific rows from a table. TRUNCATE is a DDL statement that deletes all rows from a table. It is used to delete all rows from a table.",
    },
    {
        id: "29",
        topic:"29. What is the difference between DROP and TRUNCATE?",
        content:"DROP is a DDL statement that deletes a table from the database. It is used to delete a table from the database. TRUNCATE is a DDL statement that deletes all rows from a table. It is used to delete all rows from a table.",
    },
    {
        id: "30",
        topic:"30. What is the difference between ALTER and MODIFY?",
        content:"ALTER is a DDL statement that modifies a table. It is used to modify a table. MODIFY is a DDL statement that modifies a column. It is used to modify a column.",
        code:`ALTER TABLE table_name ADD column_name datatype; \n ALTER TABLE table_name MODIFY column_name datatype;`,
        language: "sql",
    },
    {
        id: "31",
        topic:"31. What is the difference between ALTER and ADD?",
        content:"ALTER is a DDL statement that modifies a table. It is used to modify a table. ADD is a DDL statement that adds a column to a table. It is used to add a column to a table.",
    },
    {
        id: "32",
        topic:"32. What is the difference between CHAR and VARCHAR?",
        content:"CHAR is a fixed-length character data type. It is used to store a string of a specific length. VARCHAR is a variable-length character data type. It is used to store a string of a variable length.",
    },
    {
        id: "33",
        topic:"33. What is the difference between VARCHAR and TEXT?",
        content:"VARCHAR is a variable-length character data type. It is used to store a string of a variable length. TEXT is a large object data type. It is used to store a string of a large size.",
    },
    {
        id: "34",
        topic:"34. What is the difference between VARCHAR and NVARCHAR?",
        content:"VARCHAR is a variable-length character data type. It is used to store a string of a variable length. NVARCHAR is a variable-length Unicode character data type. It is used to store a string of a variable length.",
    },
    {
        id: "35",
        topic:"35. How DISTINCT is used in SQL?",
        content:"DISTINCT is a keyword used in SQL to remove duplicate rows from the result set. It is used to select unique values from a column.",
        code:`SELECT DISTINCT column1, column2, ... FROM table_name;`,
        language: "sql",
    },
    {
        id: "36",
        topic:"36. How ORDER BY is used in SQL?",
        content:"ORDER BY is a keyword used in SQL to sort the result set in ascending or descending order.",
        code:`SELECT column1, column2, ... FROM table_name ORDER BY column1 ASC|DESC;`,
        language: "sql",
    },
    {
        id: "37",
        topic:"37. How LIMIT is used in SQL?",
        content:"LIMIT is a keyword used in SQL to limit the number of rows in the result set.",
        code:`SELECT column1, column2, ... FROM table_name LIMIT number;`,
        language: "sql",
    },
    {
        id: "38",
        topic:"38. How OFFSET is used in SQL?",
        content:"OFFSET is a keyword used in SQL to skip the first number of rows in the result set.",
        code:`SELECT column1, column2, ... FROM table_name OFFSET number;`,
        language: "sql",
    },
    {
        id: "39",
        topic:"39. How GROUP BY is used in SQL?",
        content:"GROUP BY is a keyword used in SQL to group the result set by one or more columns.",
        code:`SELECT column1, column2, ... FROM table_name GROUP BY column1, column2, ...;`,
        language: "sql",
    },
    {
        id: "40",
        topic:"40. What is the difference between HAVING and WHERE?",
        content:"HAVING is a keyword used in SQL to filter the result set based on a condition. WHERE is a keyword used in SQL to filter the result set based on a condition.",
        code:`SELECT column1, column2, ... FROM table_name WHERE condition; \n SELECT column1, column2, ... FROM table_name HAVING condition;`,
        language: "sql",
    },
    {
        id: "41",
        topic:"41. What is the difference between UNION and UNION ALL?",
        content:"UNION is a keyword used in SQL to combine the result sets of two or more SELECT statements. UNION ALL is a keyword used in SQL to combine the result sets of two or more SELECT statements.",
        code:`-- Example using UNION: Combine two result sets
SELECT name FROM users WHERE age > 20
UNION
SELECT name FROM users WHERE age < 20;

-- Example using UNION ALL: Combine two result sets including duplicates
SELECT name FROM users WHERE age > 20
UNION ALL
SELECT name FROM users WHERE age < 20;`,
        language: "sql",
    },
    {
        id: "42",
        topic:"42. What is the difference between INNER JOIN and LEFT JOIN?",
        content:"INNER JOIN is a keyword used in SQL to combine the result sets of two or more tables based on a condition. LEFT JOIN is a keyword used in SQL to combine the result sets of two or more tables based on a condition.",
        code:`-- Example using INNER JOIN: Combine two tables based on a condition
SELECT users.name, orders.order_date
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- Example using LEFT JOIN: Include all users, even if there are no matching orders
SELECT users.name, orders.order_date
FROM users
LEFT JOIN orders ON users.id = orders.user_id;`,
        language: "sql",
    },
    {
        id: "43",
        topic:"43. What is the difference between INNER JOIN and RIGHT JOIN?",
        content:"RIGHT JOIN is a keyword used in SQL to combine the result sets of two or more tables based on a condition.",
    },
    {
        id: "44",
        topic:"44. What is the difference between INNER JOIN and FULL OUTER JOIN?",
        content:"FULL OUTER JOIN is a keyword used in SQL to combine the result sets of two or more tables based on a condition.",
    },
    {
        id: "45",
        topic:"45. What are Aggregate Functions?",
        content:"Aggregate functions are used in SQL to perform calculations on a set of values. They return a single value. Common aggregate functions include:\n- COUNT(): Counts the number of rows\n- SUM(): Calculates the sum of numeric values\n- AVG(): Calculates the average of numeric values\n- MAX(): Returns the maximum value\n- MIN(): Returns the minimum value",
        code:`SELECT COUNT(column_name) FROM table_name; \n SELECT SUM(column_name) FROM table_name; \n SELECT AVG(column_name) FROM table_name; \n SELECT MAX(column_name) FROM table_name; \n SELECT MIN(column_name) FROM table_name;`,
        language: "sql",
    },
    {
        id: "46",
        topic:"46. What is the difference between COUNT(*) and COUNT(column_name)?",
        content:"COUNT(*) counts the number of rows in a table. COUNT(column_name) counts the number of rows in a table where the column is not NULL.",
    },
    {
        id: "47",
        topic:"47. What are different types of JOIN?",
        content:"There are different types of JOIN in SQL:\n- INNER JOIN: Returns rows when there is a match in both tables\n- LEFT JOIN: Returns all rows from the left table, and the matched rows from the right table\n- RIGHT JOIN: Returns all rows from the right table, and the matched rows from the left table\n- FULL OUTER JOIN: Returns all rows when there is a match in one of the tables",
    },
    {
        id: "48",
        topic:"48. What are constraints?",
        content:"Constraints are used in SQL to specify the rules for the data in a table. They are used to ensure that the data in a table is valid. 1. NOT NULL: Ensures a column cannot have NULL value\n2. UNIQUE: Ensures all values in a column are different\n3. PRIMARY KEY: A column that uniquely identifies each row\n4. FOREIGN KEY: Ensures referential integrity between tables\n5. CHECK: Ensures all values in a column satisfy certain conditions\n6. DEFAULT: Sets a default value for a column",
    },
    {
        id: "49",
        topic:"49. What is the purpose of indexes in SQL how they are improve query performance?",
        content:"Indexes are used in SQL to improve the performance of queries. They are used to quickly search for data in a table. They are created on columns that are frequently searched.",
    },
    {
        id: "50",
        topic:"What is a Transaction?",
        content:`A transaction is a sequence of operations performed as a single logical unit of work. A transaction has four main properties (ACID):
1. Atomicity: All operations complete successfully or none of them do
2. Consistency: Database remains in a consistent state
3. Isolation: Transactions are isolated from each other
4. Durability: Changes made by committed transactions are permanent`,
code:`BEGIN TRANSACTION;
    UPDATE accounts SET balance = balance - 100 WHERE id = 1;
    UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;

-- If error occurs
ROLLBACK;`,
        language: "sql",
    },
    {
        id: "51",
        topic:"51. What is Normalization?",
        content:`Normalization is the process of organizing data to minimize redundancy and dependency by dividing larger tables into smaller ones and defining relationships between them. The main forms are:
1. First Normal Form (1NF): Eliminate repeating groups
2. Second Normal Form (2NF): Remove partial dependencies
3. Third Normal Form (3NF): Remove transitive dependencies`,
    },
    {
        id: "52",
        topic:"52. What are Stored Procedures?",
        content:`A stored procedure is a prepared SQL code that can be saved and reused. Benefits include:
1. Improved performance
2. Enhanced security
3. Code reusability
4. Reduced network traffic`
    },
    {
        id: "53",
        topic:"53. What is a Trigger?",
        content:"A trigger is a special type of stored procedure that automatically executes when an event occurs in the database. Events can be:\n1. INSERT\n2. UPDATE\n3. DELETE",
        code:`CREATE TRIGGER trigger_name
BEFORE INSERT ON table_name
FOR EACH ROW
BEGIN
   IF NEW.salary < 0 THEN
        SET NEW.salary = 0;
    END IF;
END;`,
        language: "sql",
    },
    {
        id: "54",
        topic:"54. What is Query in SQL?",
        content:"A query is a request for data from the database.",
    },
    {
        id: "55",
        topic:"55. What is Subquery?",
        content:"A subquery is a query within another query.",
    },
    {
        id: "56",
        topic:"56. Write a query to find the employee with the highest salary.",
        code:`SELECT name FROM employees ORDER BY salary DESC LIMIT 1;`,
        language: "sql",
    },
    {
        id: "57",
        topic:"57. Write a query to find the employee with the lowest salary.",
        code:`SELECT name FROM employees ORDER BY salary ASC LIMIT 1;`,
        language: "sql",
    },
    {
        id: "58",
        topic:"58. Write a query to find the employee with the second highest salary.",
        code:`SELECT name FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;`,
        language: "sql",
    },
    {
        id: "59",
        topic:"59. Write a query to retrive employee who joined in the last 30 days.",
        code:`SELECT name FROM employees WHERE joining_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY);`,
        language: "sql",
    },
    {
        id: "60",
        topic:"60.  Write a query to find the count of employees in each department.",
        code:`SELECT department_id, COUNT(*) as employee_count
FROM employees
GROUP BY department_id;`,
        language: "sql",
    },
    {
        id: "61",
        topic:"61. How would you optimize a query that is slow?",
        content:"There are several ways to optimize a slow query:\n1. Use indexes on the columns that are frequently searched\n2. Use a WHERE clause to filter the data\n3. Use a LIMIT clause to limit the number of rows returned\n4. Use a subquery to simplify the query\n5. Use a stored procedure to cache the result set",
    },
    {
        id: "62",
        topic:"62. Write a query to update the salary of all employees by 10%.",
        code:`UPDATE employees SET salary = salary * 1.1;`,
        language: "sql",
    },
    {
        id: "63",
        topic:"63. Write a query to create a new table with columns id, name, and salary.",
        code:`CREATE TABLE employees (id PRIMARY KEY, name VARCHAR(50), salary DECIMAL(10, 2));`,
        language: "sql",
    },
    {
        id: "64",
        topic:"64. Write a query to delete all employees.",
        code:`DELETE FROM employees;`,
        language: "sql",
    },
    {
        id: "65",
        topic:"65. Write a query to delete the employees table.",
        code:`DROP TABLE employees;`,
        language: "sql",
    },
    {
        id: "66",
        topic:"66. Write a query to delete the database.",
        code:`DROP DATABASE database_name;`,
        language: "sql",
    },
    {
        id: "67",
        topic:"67. Write a query to delete all duplicate rows from a table.",
        code:`DELETE FROM table_name
WHERE id NOT IN 
    (SELECT MIN(id) 
    FROM table_name 
    GROUP BY column_name);`,
        language: "sql",
    },
    {
        id: "68",
        topic:"68. Write a query to add a new column to a table.",
        code:`ALTER TABLE table_name ADD column_name datatype;`,
        language: "sql",
    },
    {
        id: "69",
        topic:"69. Write a query to modify a column in a table.",
        code:`ALTER TABLE table_name MODIFY column_name datatype;`,
        language: "sql",
    },
    {
        id: "70",
        topic:"70. Write a query to drop a column from a table.",
        code:`ALTER TABLE table_name DROP COLUMN column_name;`,
        language: "sql",
    },

]
