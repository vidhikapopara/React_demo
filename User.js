import React from "react";
import Nav from "./components/Nav";
import UserData from "./data/db.json";

function User() {
  return (
    // <div>
    //   {UserData.map((user) => {
    //     return <div>{user.username}</div>;
    //   })}
    // </div>
    <>
      <Nav />
      <div>
        User data
        <table>
          <thead>
            <tr>
              <th>#Id</th>
              <th>Username</th>
              <th>fullname</th>
              <th>join_date</th>
              <th>Image</th>
            </tr>
          </thead>
          {/* <tbody>
            {UserData.map((user) => {
              return (
                <tr key={user.uid}>
                 <td> <strong>{user.username}</strong></td>
                 <td> {user.join_date}</td>
                  <td><img src={user.image} alt={user.title} width="90" /></td>
              )
            })}
          </tbody> */}
          <tbody>
            {UserData.map((user) => {
              return (
                <tr key={user.uid}>
                  <td> {user.uid}</td>
                  <td>
                    <strong>{user.username}</strong>
                  </td>
                  <td> {user.fullname}</td>
                  <td> {user.join_date}</td>
                  <td>
                    <img src={user.image} alt={user.title} width="90" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default User;
