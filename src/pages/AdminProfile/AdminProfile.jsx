import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'

export const AdminProfile = () => {
    const {data: users, load, error, setLoading} = useFetch('http://localhost:3002/users')

    const handelDelete = async (userToDelete) =>{
        setLoading(true)
        try {
          await fetch(`http://localhost:3002/users/${userToDelete}`, {method: 'DELETE'})
          await fecthData()
        } catch (error) {
          console.log("it seems like you are not be able to eliminate this user..", error)
        } finally{
          setLoading(false)
        }
    
      }


    if (users.length < 0) {
        return <h1>no user found</h1>;
      } else {
        return (
          <div className="mt-5">
            {load && <div>Loading..</div>}
            {error && <p>Error: {error}</p>}
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((item, i) => {
                  return (
                    <tr key={i + 1}>
                      <td>{item.id}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>{item.role.id}</td>
                      <td>
                        <Link to={`/edit-user/${item.id}`}>
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                        </Link>
                        <Link to={`/user/${item.id}`}>
                          <i className="fa fa-eye" aria-hidden="true"></i>
                        </Link>
    
                        <button
                          onClick={() => handelDelete(item.id)}
                        >Delete Me</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
}
