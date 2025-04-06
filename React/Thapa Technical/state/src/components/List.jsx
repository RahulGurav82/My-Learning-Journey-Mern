import React, {use, useState} from 'react'

const List = () => {
    const [users, setUsers] = useState([
        { name : "Rahul", Age : 21},
        { name : "Tanaya", Age : 23},
        { name : "Test", Age : 25},
        { name : "Test1", Age : 20}
    ]);

    let TotalCount = users.length;
    let AverageAge = users.reduce((acc, crrVal) => acc + crrVal.Age, 0)
    console.log(AverageAge)

  return (
    <div>
        <ul>
            {users.map((user) =>  (
                <li key={user.Age}>Name : {user.name}, Age : {user.Age} </li>
            ))}
            <p>Total Students : {TotalCount}</p>
            <p>Average Age : {AverageAge/TotalCount}</p>
        </ul>
    </div>
  )
}

export default List