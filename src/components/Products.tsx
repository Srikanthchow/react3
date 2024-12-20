import React from 'react'

export default function Products() {
    const data = [
        { name: "Ramu", email: "ramu@gmail.com", company: "IBM", salary: 45000 },
        { name: "Raju", email: "raju@gmail.com", company: "HP", salary: 35000 },
        { name: "Ramya", email: "ramya@gmail.com", company: "InfoSys", salary: 25000 },
        { name: "John", email: "john@gmail.com", company: "Wipro", salary: 65000 },
        { name: "Abdul", email: "abdul@gmail.com", company: "TCS", salary: 55000 },
      
      ];

  return (
    <div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Company</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ramu</td>
      <td>ramu@gmail.com</td>
      <td>IBM</td>
      <td>45000</td>
    </tr>
    <tr>
      <td>Raju</td>
      <td>raju@gmail.com</td>
      <td>HP</td>
      <td>55000</td>
    </tr>
    <tr>
      <td>Ramya</td>
      <td>ramya@gmail.com</td>
      <td>TCS</td>
      <td>65000</td>
    </tr>
   </tbody>
  </table>

    </div>
  )
}
