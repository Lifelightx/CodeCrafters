import React from 'react'
import Topics from './Topics'
import Section from './Section'
import Footer from './Footer'

function MongoDb() {
  const sectionData = [
    {
      id:"introduction",
      topic:"1. What is MongoDb?",
      content:"MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON. It is designed to handle large amounts of unstructured data and is often used in web applications where scalability and flexibility are important.",
    },
    {
      id:"installation",
      topic:"2. How to install MongoDb?",
      content:"MongoDB is a document-oriented NoSQL database designed for scalability and flexibility. Unlike traditional relational databases, it doesn't store data in rows and columns. Instead, it uses documents in BSON (Binary JSON) format, allowing for unstructured and semi-structured data storage, making it ideal for applications that handle large and complex datasets.",
    },
    {
      id:"3",
      topic:"3. What is BSON and its purpose?",
      content:"BSON, or Binary JSON, is MongoDB's internal format for storing documents. It extends JSON's capability with data types like Date, Binary, and Null. BSON improves read/write speeds due to its binary format and supports fast encoding/decoding.",
    },
    {
      id:"4", 
      topic:"4. How does MongoDB differ from traditional relational databases?",
      content:"MongoDB is a document-oriented NoSQL database designed for scalability and flexibility. Unlike traditional relational databases, it doesn't store data in rows and columns. Instead, it uses documents in BSON (Binary JSON) format, allowing for unstructured and semi-structured data storage, making it ideal for applications that handle large and complex datasets.",
    },
    {
      id:"5",
      topic:"5. Explain the difference between SQL and NoSQL databases.",
      content:"SQL databases (like MySQL, PostgreSQL) are structured, with a predefined schema and relational data storage. They are suited forapplications with stable requirements and structured data. NoSQL databases (like MongoDB, Couchbase) are non-relational and schema-flexible, making them ideal for applications with rapidly changing or semi-structured data requirements, high throughput needs, or complex data.",
    },
    {
      id:"6",
      topic:"6. What is a MongoDB collection?",
      content:"In MongoDB, a collection is a group of MongoDB documents. It is the equivalent of a table in a relational database. Collections exist within a single database. Collections are created automatically when you insert your first document into a database. Collections are analogous to tables in relational databases.",
    },
    {
      id:"7",
      topic:"7. What is a MongoDB document?",
      content:"In MongoDB, a document is a unit of data that is stored in the database. It is the equivalent of a row in a relational database. Documents are stored in collections. Each document is a set of key-value pairs, similar to a JSON object. Documents are analogous to rows in relational databases.",
      code:`{
  name: 'John',
  age: 30,
  address: {"city":"New York", "state":"USA"},
  hobbies: ["coding", "reading", "traveling"]
}`,
language:"mongodb"
    },
    {
      id:"8",
      topic:"8. CRUD operations in MongoDB",
      content:"CRUD stands for Create, Read, Update, and Delete. These are the four basic operations that you can perform on data in a database. In MongoDB, these operations are used to manage data in collections.",
      code:`
      // Create

      //adds a single document to the collection
      db.collection.insertOne({name: "John",
      age: 30,
      address: {"city":"New York", "state":"USA"}, 
      hobbies: ["coding", "reading", "traveling"]})

      // adds multiple documents to the collection
      db.collection.insertMany([
      {
      name: "John", 
      age: 30, 
      address: {"city":"New York", "state":"USA"}, 
      hobbies: ["coding", "reading", "traveling"]
      },
      {
      name: "Jane", 
      age: 25, 
      address: {"city":"Los Angeles", "state":"USA"}, 
      hobbies: ["coding", "reading", "traveling"]
      }])
      // Read
      // finds all documents with the name "John"
      db.collection.find({name: "John"}) 
      
      // finds a single document with the name "John"
      db.collection.findOne({name: "John"}) 
      // Update
      //updates the age of the document with the name "John" to 31
      db.collection.updateOne({name: "John"}, {$set: {age: 31}}) 

      //updates all documents with the age of 30 to 31
      db.collection.updateMany({age: 30}, {$set: {age: 31}}) 
      // Delete

      //deletes a single document with the name "John"
      db.collection.deleteOne({name: "John"}) 

      //deletes all documents with the age of 30
      db.collection.deleteMany({age: 30}) 
      `,
      language:"mongodb"
    },
    {
      id:"9",
      topic:"9. What is indexing in MongoDB?",
      content:"Indexing in MongoDB is the process of creating a data structure that allows for faster retrieval of data. It is used to improve the performance of queries and to ensure that the data is stored in a way that is easy to access.",
    },
    {
      id:"10",
      topic:"10. How do you create an index in MongoDB?",
      content:"To create an index in MongoDB, we use createIndex() method. The value 1 creates an ascending index and -1 creates a descending index.",
      code:`db.collection.createIndex({ name: 1 })
      //where 1 specifies ascending order and -1 descending.`,
      language:"mongodb"
    },
    {
      id:"11",
      topic:"11. How do you delete an index in MongoDB?",
      content:"To delete an index in MongoDB, we use dropIndex() method.",
      code:`db.collection.dropIndex({ name: 1 })`,
      language:"mongodb"
    },
    {
      id:"12",
      topic:"12. What is aggregation in MongoDB?",
      content:"Aggregation in MongoDB is the process of performing calculations on data. It is used to perform calculations on data and to return the results in a new collection.",
      code:`db.collection.aggregate([
      { $group: { _id: "$age", total: { $sum: "$age" } } }
      ])`,
      language:"mongodb"
    },
    {
      id:"13",
      topic:"13. What are the advantages of MongoDB?",
      content:"MongoDB offers several advantages: Schema flexibility allowing dynamic data structures, horizontal scalability through sharding, high performance for large datasets, rich query language, automatic failover and replication for high availability, and support for multiple storage engines.",
    },
    {
      id:"14",
      topic:"14. What is sharding in MongoDB?",
      content:"Sharding is MongoDB's approach to horizontal scaling. It distributes data across multiple machines to support deployments with very large data sets and high throughput operations. Sharding allows you to add more machines to handle increasing load and data size.",
    },
    {
      id:"15",
      topic:"15. What is replication in MongoDB?",
      content:"Replication in MongoDB is the process of synchronizing data across multiple servers. This provides redundancy and increases data availability. With multiple copies of data on different database servers, replication protects a database from the loss of a single server.",
    },
    {
      id:"16",
      topic:"16. What are MongoDB Operators?",
      content:"MongoDB provides various operators for querying and manipulating data. Common categories include comparison operators ($eq, $gt, $lt), logical operators ($and, $or), array operators ($in, $all), and update operators ($set, $inc).",
      code:`// Example of operators
db.collection.find({ age: { $gt: 25 } }) // Greater than
db.collection.find({ $or: [{ age: 30 }, { name: "John" }] }) // Logical OR
db.collection.updateOne({ name: "John" }, { $inc: { age: 1 } }) // Increment`,
      language:"mongodb"
    },
    {
      id:"17",
      topic:"17. What is the MongoDB Compass?",
      content:"MongoDB Compass is the official GUI for MongoDB. It allows you to visually explore your data, run ad hoc queries, view and optimize query performance, and manage your MongoDB instances through a user-friendly interface.",
    },
    {
      id:"18",
      topic:"18. What is replica set in MongoDB?",
      content:"A replica set is a group of MongoDB servers that work together to provide redundancy and high availability. It ensures that the data is always available and that the system can recover from any failures.",
    },
    {
      id:"19",
      topic:"How does sharding work in MongoDB?",
      content:"Sharding is a technique used to distribute data across multiple servers. It allows MongoDB to handle large amounts of data and to improve performance. Sharding involves dividing the data into smaller chunks and distributing them across multiple servers.",
    },
    {
      id:"20",
      topic:"20. What is the difference between embedded and referenced documents?",
      content:"Embedded documents are stored within a single document, while referenced documents are stored in a separate collection. Embedded documents are useful for small, related data, while referenced documents are useful for larger, more complex data.",
    },
    {
      id:"21",
      topic:"21. How do you handle transactions in MongoDB?",
      content:"MongoDB supports multi-document transactions, which allow you to perform multiple operations on multiple documents as a single unit of work. Transactions ensure data consistency and atomicity across multiple operations.",
    },{
      id:"22",
      topic:"22. What are the pros and cons of using MongoDB over relational databases?",
      content:"MongoDB is a NoSQL database that is designed for scalability and flexibility. It is often used in web applications where scalability and flexibility are important. Relational databases are designed for structured data and are often used in enterprise applications.",
    }
  ]
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 md:fixed md:h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">MongoDb Topics</h2>
        <ul className="space-y-2">
          <Topics name="MongoDb FAQs"/>
        </ul>
      </div>

      {/* Main content */}
      <div className="w-full md:w-3/4 p-4 md:ml-[25%] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Learn MongoDb</h1>
        {sectionData.map((data)=>{
          return(
            <Section
              id={data.id}
              topic={data.topic}
              content={data.content}
              code={data.code}
              language={data.language}
            />
          )
        })}
        <Footer/>
      </div>
    </div>
  )
}

export default MongoDb
