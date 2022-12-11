import React from "react";
//instances of cities will be changed to games
//concatenate data so each attribute is under specified fields
const Table = ({ cities }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Town Hall</th>
        </tr>
      </thead>
      <tbody>
        {cities.length > 0 ? (
          cities.map((city, index) => {
            return (
              <tr key={index}>
                <td>{city.id}</td>
                <td>{city.name}</td>
                <td>{city.townHall}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="5">Our data will display here from our DataBase!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
