import React from "react";

const List = () => {
  const userData = [
    {
      id: 1,
      fname: "Maninagar",
      lname: "Shah",
      email: "maninagar.shah@example.com",
      phone: "9876543210",
      age: 28,
      address: "123, Main Road, Ahmedabad",
    },
    {
      id: 2,
      fname: "Nikol",
      lname: "Patel",
      email: "nikol.patel@example.com",
      phone: "9823456789",
      age: 32,
      address: "45, Nikol Street, Ahmedabad",
    },
    {
      id: 3,
      fname: "Vatva",
      lname: "Mehta",
      email: "vatva.mehta@example.com",
      phone: "9845671234",
      age: 25,
      address: "78, Vatva Road, Ahmedabad",
    },
    {
      id: 4,
      fname: "Ghatlodia",
      lname: "Trivedi",
      email: "ghatlodia.trivedi@example.com",
      phone: "9832145698",
      age: 29,
      address: "56, Ghatlodia Nagar, Ahmedabad",
    },
    {
      id: 5,
      fname: "Bapunagar",
      lname: "Joshi",
      email: "bapunagar.joshi@example.com",
      phone: "9812365478",
      age: 40,
      address: "33, Bapunagar Society, Ahmedabad",
    },
    {
      id: 6,
      fname: "Thaltej",
      lname: "Desai",
      email: "thaltej.desai@example.com",
      phone: "9807654321",
      age: 37,
      address: "90, Thaltej Park, Ahmedabad",
    },
    {
      id: 7,
      fname: "Satellite",
      lname: "Iyer",
      email: "satellite.iyer@example.com",
      phone: "9871236540",
      age: 35,
      address: "12, Satellite Avenue, Ahmedabad",
    },
    {
      id: 8,
      fname: "Chandkheda",
      lname: "Rao",
      email: "chandkheda.rao@example.com",
      phone: "9898765432",
      age: 31,
      address: "101, Chandkheda Road, Ahmedabad",
    },
    {
      id: 9,
      fname: "Naroda",
      lname: "Sharma",
      email: "naroda.sharma@example.com",
      phone: "9811122334",
      age: 27,
      address: "44, Naroda Colony, Ahmedabad",
    },
    {
      id: 10,
      fname: "Paldi",
      lname: "Verma",
      email: "paldi.verma@example.com",
      phone: "9876543211",
      age: 42,
      address: "77, Paldi Plaza, Ahmedabad",
    },
  ];

  return (
    <div className="container mt-4">
      <h2>User List</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.age}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
