import React from 'react'
import Topics from './Topics'
import Section from './Section'
import Footer from './Footer'
import Support from './Support'

function Mysql() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 md:fixed md:h-screen md:overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">SQL Topics</h2>
        <ul className="space-y-2">
          <Topics name="Introduction" icon={<i className="fas fa-info-circle text-blue-500"></i>}/>
          <Topics name="DataTypes" icon={<i className="fas fa-database text-blue-500"></i>}/>
          <Topics name="Keys" icon={<i className="fas fa-key text-blue-500"></i>}/>
          <Topics name="Keywords" icon={<i className="fas fa-code text-blue-500"></i>}/>
          <Topics name="Clauses" icon={<i className="fas fa-file-code text-blue-500"></i>}/>
          <Topics name="Operators" icon={<i className="fas fa-calculator text-blue-500"></i>}/>
          <Topics name="Functions" icon={<i className="fas fa-cog text-blue-500"></i>}/>
          <Topics name="Joins" icon={<i className="fas fa-link text-blue-500"></i>}/>
          <Topics name="Indexes" icon={<i className="fas fa-list-ol text-blue-500"></i>}/>
          <Topics name="Transactions" icon={<i className="fas fa-exchange-alt text-blue-500"></i>}/>
          <Topics name="Constraints" icon={<i className="fas fa-lock text-blue-500"></i>}/>
          <Topics name="Normalization" icon={<i className="fas fa-table text-blue-500"></i>}/>
          <Topics name="Triggers" icon={<i className="fas fa-bolt text-blue-500"></i>}/>
          <Topics name="Querries" icon={<i className="fas fa-search text-blue-500"></i>}/>
        </ul>
      </div>
      <Support/>
      {/* Main content */}
      <div className="w-full md:w-3/4 p-4 md:ml-[25%] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Learn SQL</h1>

        {/* Introduction Section */}
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
         <Section id="introduction" topic="6. What is view in Database?"
         content="A view is a virtual table based on the result-set of an SQL statement. 
         Unlike regular tables, views do not store data themselves; instead, they pull and display data from other tables as defined by the query used to create the view. Views can simplify data access and enhance security by limiting data exposure to specific columns or filtered rows"
         />

        {/* SQL Commands Section */}
         <Section id="commands" topic="7. What is DDL?"
         content="DDL stands for Data Definition Language. It is used to define the structure of the database and the data types of the columns in the tables. 
         Examples of DDL statements are CREATE, ALTER, and DROP."
         code="CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255));
ALTER TABLE users ADD COLUMN age INT;
DROP TABLE users;"
         language="SQL"
         />
         <Section id="commands" topic="8. What is DML?"
         content="DML stands for Data Manipulation Language. It is used to manipulate the data in the tables. 
         Examples of DML statements are INSERT, UPDATE, and DELETE."
         code="INSERT INTO users (name, email) VALUES ('Jeeban', 'jeeban@example.com');
UPDATE users SET email = 'jeeban@example.com' WHERE name = 'Jeeban';
DELETE FROM users WHERE name = 'Jeeban';"
         language="SQL"
         />
         <Section id="commands" topic="9. What is DQL?"
         content="DQL stands for Data Query Language. It is used to query the data from the tables. 
         Examples of DQL statements are SELECT."
         code="SELECT * FROM users;"
         language="SQL"
         />
         <Section id="commands" topic="10. What is DCL?"
         content="DCL stands for Data Control Language. It is used to control the access to the database. 
         Examples of DCL statements are GRANT and REVOKE."
         code="GRANT SELECT, INSERT, UPDATE, DELETE ON users TO 'jeeban'@'localhost';
REVOKE SELECT, INSERT, UPDATE, DELETE ON users FROM 'jeeban'@'localhost';"
         language="SQL"
         />
         <Section id="commands" topic="11. What is TCL?"
         content="TCL stands for Transaction Control Language. It is used to control the transaction in the database. 
         Examples of TCL statements are COMMIT and ROLLBACK."
         code="COMMIT;
ROLLBACK;"
         language="SQL"
         />

        {/* Database Systems Section */}
         <Section id="dbms" topic="12. What is RDBMS?"
         content="RDBMS stands for Relational Database Management System. It is a software system that allows you to create, modify, and maintain databases. "
         />
         <Section id="dbms" topic="13. What is SQL Server?"
         content="SQL Server is a relational database management system developed by Microsoft. It is a software system that allows you to create, modify, and maintain databases."
         />
         <Section id="dbms" topic="14. What is MySQL?"
         content="MySQL is a relational database management system developed by Oracle. It is a software system that allows you to create, modify, and maintain databases."
         />
         <Section id="dbms" topic="15. What is the difference between SQL and MySQL ?"
         content="SQL is a standard language for managing relational databases. MySQL is a specific implementation of SQL."
         />
         <Section id="dbms" topic="16. What is the difference between SQL and NoSQL?"
         content="SQL is a relational database management system that uses structured query language to manage data. NoSQL is a non-relational database management system that does not use structured query language to manage data.

Key differences include:
1. Structure: SQL databases have a predefined schema and use tables with rows and columns. NoSQL databases are schema-less and can store unstructured data.
2. Query Language: SQL databases use SQL (structured query language). NoSQL databases use various query languages specific to their implementation.
3. ACID Properties: SQL databases strictly follow ACID properties (Atomicity, Consistency, Isolation, Durability). NoSQL databases may sacrifice ACID compliance for performance and scalability.
4. Use Cases: SQL is better for complex queries and transactions. NoSQL is better for handling large volumes of unstructured data and rapid changes.
"
         />
        
        {/* Data Types Section */}
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
         <Section id="datatypes" topic="18. What is the difference between NULL and NOT NULL?"
         content="NULL and NOT NULL are used to specify whether a column can have a null value or not.
         NULL means that the column can have no value at all. NOT NULL means that the column must have a value."
         code="CREATE TABLE examples (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(50) NULL);"
         language="SQL"
         />

        {/* Keys Section */}
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
         <Section id="keys" topic="25. What is Alternate Key?"
         content="Alternate key is a candidate key that is not selected as the primary key. Here are the key properties of alternate keys:
1. Uniqueness: Must contain unique values across all rows
2. Not Null: Cannot contain NULL values
3. Multiple Alternate Keys: A table can have multiple alternate keys
4. Potential Primary Key: Could serve as primary key if needed
5. Independence: Must be independent of other columns
"
         />
         <Section id="keys" topic="26. What is Index?"
         content="Index is a data structure that improves the speed of data retrieval operations on a table. It is used to create a faster search algorithm to locate data without having to search the whole table."
         />
         <Section id="keys" topic="27. What is Clustered Index?"
         content="Clustered index is an index that determines the physical order of data blocks in a table. It is used to create a faster search algorithm to locate data without having to search the whole table."
         />

        {/* SQL Keywords Section */}
         <Section id="keywords" topic="28. What is the difference between DELETE and TRUNCATE?"
         content="DELETE is a DML statement that deletes rows from a table. It is used to delete specific rows from a table. TRUNCATE is a DDL statement that deletes all rows from a table. It is used to delete all rows from a table."
         />
         <Section id="keywords" topic="29. What is the difference between DROP and TRUNCATE?"
         content="DROP is a DDL statement that deletes the entire table. It is used to delete the entire table. TRUNCATE is a DDL statement that deletes all rows from a table. It is used to delete all rows from a table."
         />
         <Section id="keywords" topic="30. What is the difference between ALTER and MODIFY?"
         content="ALTER is a DDL statement that modifies the structure of a table. It is used to add, modify, or drop columns in a table. MODIFY is a DDL statement that modifies the data type of a column in a table."
         code="ALTER TABLE users ADD COLUMN age INT;
ALTER TABLE users MODIFY COLUMN age INT;"
         language="SQL"
         />
         <Section id="keywords" topic="31. What is the difference between CHAR and VARCHAR?"
         content="CHAR and VARCHAR are both string data types char is used to store fixed-length strings and varchar is used to store variable-length strings.

CHAR(50):
- Fixed-length storage that always uses 50 characters
- If you store 'John' (4 chars), it will pad with spaces to 50 chars
- Takes full 50 bytes regardless of content length
- Slightly faster for fixed-length data
- Example: If you store 'John', it becomes 'John                                              ' (padded to 50)

VARCHAR(50):
- Variable-length storage up to 50 characters
- Only uses as much space as needed plus 1-2 bytes overhead
- If you store 'John' (4 chars), it only uses 4 bytes + overhead
- More flexible and space-efficient for variable length data
- Example: If you store 'John', it stays as 'John' (no padding)

The number 50 represents the maximum number of characters that can be stored in that field. Choose CHAR for fixed-length data (like state codes) and VARCHAR for variable-length data (like names or addresses)."
         code="-- Example showing CHAR vs VARCHAR storage
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    state_code CHAR(2),     -- Good for fixed-length state codes like 'CA', 'NY'
    name VARCHAR(50),       -- Good for variable-length names
    email VARCHAR(100)      -- Good for variable-length emails
);"
         language="SQL"
         />

        {/* SQL Clauses Section */}
         <Section id="clauses"
              topic="32. How DISTINCT is used in SQL?"
              content="DISTINCT is a keyword used in SQL to remove duplicate rows from the result set. It is used to select unique values from a column."
              code="SELECT DISTINCT name FROM users;"
              language="SQL"
         />
         <Section id="clauses"
              topic="33. How ORDER BY is used in SQL?"
              content="ORDER BY is a keyword used in SQL to sort the result set in ascending or descending order."
              code="SELECT * FROM users ORDER BY name ASC; -- Sort by name in ascending order
SELECT * FROM users ORDER BY name DESC; -- Sort by name in descending order"
              language="SQL"
         />
         <Section id="clauses"
              topic="34. How LIMIT is used in SQL?"
              content="LIMIT is a keyword used in SQL to limit the number of rows in the result set."
              code="SELECT * FROM users LIMIT 10;"
              language="SQL"
         />
         <Section id="clauses"
              topic="35. How GROUP BY is used in SQL?"
              content="GROUP BY is a keyword used in SQL to group the result set by one or more columns."
              code="SELECT name, COUNT(*) FROM users GROUP BY name;"
              language="SQL"
         />
         <Section id="clauses"
              topic="36. What is the difference between HAVING and WHERE?"
              content="HAVING and WHERE are both keywords used in SQL to filter the result set. The difference between them is that WHERE is used to filter the result set before it is grouped, and HAVING is used to filter the result set after it is grouped."
              code="-- Example using WHERE: Filter individual rows before grouping
SELECT department, COUNT(*) as emp_count 
FROM employees 
WHERE salary > 50000
GROUP BY department;

-- Example using HAVING: Filter groups after grouping
SELECT department, COUNT(*) as emp_count 
FROM employees 
GROUP BY department
HAVING COUNT(*) > 10;"
              language="SQL"
         />

        {/* SQL Operators Section */}
         <Section id="operators"
              topic="37. What is the difference between UNION and UNION ALL?"
              content="UNION and UNION ALL are both keywords used in SQL to combine the result sets of two or more SELECT statements. UNION removes duplicate rows while UNION ALL keeps all rows including duplicates."
              code="-- Example using UNION: Combine two result sets
SELECT name FROM users WHERE age > 20
UNION
SELECT name FROM users WHERE age < 20;

-- Example using UNION ALL: Combine two result sets including duplicates
SELECT name FROM users WHERE age > 20
UNION ALL
SELECT name FROM users WHERE age < 20;"
              language="SQL"
         />

        {/* SQL Functions Section */}
        <Section id="functions"
            topic="38. What are Aggregate Functions in SQL?"
            content="Aggregate functions perform calculations on a set of values and return a single value. Common aggregate functions include:
            - COUNT(): Counts the number of rows
            - SUM(): Calculates the sum of numeric values
            - AVG(): Calculates the average of numeric values
            - MAX(): Returns the maximum value
            - MIN(): Returns the minimum value"
            code="SELECT 
    COUNT(*) as total_employees,
    AVG(salary) as avg_salary,
    MAX(salary) as highest_salary,
    MIN(salary) as lowest_salary,
    SUM(salary) as total_salary
FROM employees;"
            language="SQL"
        />

        {/* SQL Joins Section */}
        <Section id="joins"
            topic="39. What are the different types of JOINs in SQL?"
            content="SQL supports several types of JOINs:
            1. INNER JOIN: Returns only matching records from both tables
            2. LEFT JOIN: Returns all records from left table and matching from right
            3. RIGHT JOIN: Returns all records from right table and matching from left
            4. FULL JOIN: Returns all records when there's a match in either table"
            code="-- INNER JOIN
SELECT orders.order_id, customers.name
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;

-- LEFT JOIN
SELECT customers.name, orders.order_id
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id;"
            language="SQL"
        />

        {/* SQL Constraints Section */}
        <Section id="constraints"
            topic="40. What are Constraints in SQL?"
            content="Constraints are rules enforced on data columns in tables. Common constraints include:
            1. NOT NULL: Ensures a column cannot have NULL value
            2. UNIQUE: Ensures all values in a column are different
            3. PRIMARY KEY: A column that uniquely identifies each row
            4. FOREIGN KEY: Ensures referential integrity between tables
            5. CHECK: Ensures all values in a column satisfy certain conditions
            6. DEFAULT: Sets a default value for a column"
            code="CREATE TABLE employees (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    age INT CHECK (age >= 18),
    salary DECIMAL(10,2) NOT NULL,
    department_id INT,
    hire_date DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);"
            language="SQL"
        />
        {/* SQL Indexes Section */}
        <Section id="indexes"
            topic="41. What is an Index in SQL?"
            content="An index is a database structure that improves the speed of data retrieval operations on a database table. It creates a pointer to data based on the values in specific columns."
            code="-- Creating an index
CREATE INDEX idx_lastname
ON employees (last_name);

-- Creating a unique index
CREATE UNIQUE INDEX idx_email
ON employees (email);"
            language="SQL"
        />
        <Section id="indexes"
          topic="What is the purpose of indexes in SQL and how they improve query performance?"
          content="Indexes are used to improve the performance of queries by creating a pointer to data based on the values in specific columns. They create a faster search algorithm to locate data without having to search the whole table."
        />

        {/* SQL Transactions Section */}
        <Section id="transactions" 
            topic="42. What is a Transaction in SQL?"
            content="A transaction is a sequence of operations performed as a single logical unit of work. A transaction has four main properties (ACID):
            1. Atomicity: All operations complete successfully or none of them do
            2. Consistency: Database remains in a consistent state
            3. Isolation: Transactions are isolated from each other
            4. Durability: Changes made by committed transactions are permanent"
            code="BEGIN TRANSACTION;
    UPDATE accounts SET balance = balance - 100 WHERE id = 1;
    UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;

-- If error occurs
ROLLBACK;"
            language="SQL"
        />

        {/* SQL Normalization Section */}
        <Section id="normalization"
            topic="43. What is Normalization in SQL?"
            content="Normalization is the process of organizing data to minimize redundancy and dependency by dividing larger tables into smaller ones and defining relationships between them. The main forms are:
            1. First Normal Form (1NF): Eliminate repeating groups
            2. Second Normal Form (2NF): Remove partial dependencies
            3. Third Normal Form (3NF): Remove transitive dependencies"
            code="-- Before Normalization
CREATE TABLE orders (
    order_id INT,
    product_name VARCHAR(100),
    customer_name VARCHAR(100),
    customer_address VARCHAR(200)
);

-- After Normalization
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100),
    address VARCHAR(200)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);"
            language="SQL"
        />

        {/* SQL Stored Procedures Section */}
        <Section id="stored-procedures"
            topic="44. What are Stored Procedures?"
            content="A stored procedure is a prepared SQL code that can be saved and reused. Benefits include:
            1. Improved performance
            2. Enhanced security
            3. Code reusability
            4. Reduced network traffic"
            code="DELIMITER //

CREATE PROCEDURE GetEmployeesByDepartment(IN dept_id INT)
BEGIN
    SELECT * FROM employees 
    WHERE department_id = dept_id;
END //

DELIMITER ;

-- Calling the stored procedure
CALL GetEmployeesByDepartment(1);"
            language="SQL"
        />

        {/* SQL Triggers Section */}
        <Section id="triggers"
            topic="45. What are Triggers in SQL?"
            content="A trigger is a special type of stored procedure that automatically executes when an event occurs in the database. Events can be:
            1. INSERT
            2. UPDATE
            3. DELETE"
            code="CREATE TRIGGER before_employee_update
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
    IF NEW.salary < 0 THEN
        SET NEW.salary = 0;
    END IF;
END;"
            language="SQL"
        />
        <Section id="querries"
          topic="46. What is a Query in SQL?"
          content="A query is a request for data from the database. It is used to retrieve data from the database."
        />
        <Section id="querries"
          topic="47. What is a Subquery in SQL?"
          content="A subquery is a query within another query. It is used to retrieve data from the database."
          code="-- Main Query
SELECT name
FROM employees
WHERE salary > (
    -- Subquery
    SELECT AVG(salary) 
    FROM employees
);"
          language="SQL"
        />
        <Section id="querries"
          topic="48. Write a query to find the employee with the highest salary."
          content=""
          code="SELECT * FROM employees ORDER BY salary DESC LIMIT 1;"
          language="SQL"
        />
        <Section id="querries"
        topic="49. Write a query to find the employee with Second Highest Salary."
        content=""
        code="SELECT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;
"
        language="SQL"
        />
        <Section id="querries"
        topic="50. Write a query to find the employee with the lowest salary."
        content=""
        code="SELECT * FROM employees ORDER BY salary ASC LIMIT 1;"
        language="SQL"
        />
        <Section id="querries"
          topic="51. Write a query to retrive employee who joined in the last 30 days."
          content=""
          code="SELECT * FROM employees WHERE hire_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY);"
          language="SQL"
        />
        <Section id="querries"
          topic="52. Write a query to find the count of employees in each department."
          content=""
          code="SELECT department_id, COUNT(*) as employee_count
FROM employees
GROUP BY department_id;"
          language="SQL"
        />
        <Section id="querries"
          topic="53. How would you optimize a query that is slow?"
          content="There are several ways to optimize a slow query:
          1. Use EXPLAIN to analyze the query execution plan
          2. Add indexes to frequently searched columns
          3. Optimize table structure and data types
          4. Use caching mechanisms
          5. Consider using a more efficient database or query optimization tools"
        />
        <Section id="querries"
          topic="54. Write a query to update the salary of all employees by 10%."
          content=""
          code="UPDATE employees SET salary = salary * 1.1;"
          language="SQL"
        />
        <Section id="querries"
          topic="55. Write a query to create a new table with columns id, name, and salary."
          content=""
          code="CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10,2)
);"
          language="SQL"
        />
        <Section id="querries"
          topic="56. Write a query to delete all employees."
          content=""
          code="DELETE FROM employees;"
          language="SQL"
        />
        <Section id="querries"
          topic="57. Write a query to create a table from an existing table."
          content=""
          code="CREATE TABLE new_table AS SELECT * FROM existing_table;"
          language="SQL"
        />
        <Section id="querries"
        topic="58. Write a query to retrive the top 5 employees with the highest salary."
        content=""
        code="SELECT * FROM employees ORDER BY salary DESC LIMIT 5;"
        language="SQL"
        />
        <Section id="querries"
        topic="59. Write a query to delete all duplicate rows from a table based on a column."
        content=""
        code="DELETE FROM employees
WHERE id NOT IN (
    SELECT MIN(id) 
    FROM employees
    GROUP BY name
);"
        language="SQL"
        />
        <Section id="querries" 
        topic="60. Write a query to add a new column to a table."
        content=""
        code="ALTER TABLE employees ADD COLUMN department_id INT;"
        language="SQL"
        />
        <Section id="querries"
        topic="61. Write a query to drop a column from a table."
        content=""
        code="ALTER TABLE employees DROP COLUMN department_id;"
        language="SQL"
        />
        <Section id="querries"
        topic="62. Write a query to rename a column in a table."
        content=""
        code="ALTER TABLE employees CHANGE COLUMN old_column_name new_column_name VARCHAR(100);"
        language="SQL"
        />
        <Section id="querries"
        topic="63. Write a query to truncate a table."
        content=""
        code="TRUNCATE TABLE employees;"
        language="SQL"
        />
        

      <Footer/>
      </div>
    </div>
  )
}

export default Mysql
