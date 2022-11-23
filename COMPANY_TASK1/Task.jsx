import React from 'react'
import { useState } from 'react'
import "./Task.css"
import Data from "./Data.json"

const Task = () => {
    const [state,setstate] = useState("")
  return (
    <div>
        <h4>CALIFORNIA CAFE DIRECTORY</h4>
        <center>
            <div className="container">
                <div className="col-md">
                    <input type="text" placeholder='Search your favorite cafe' onChange={(event)=>setstate(event.target.value)}/>
                    <div className="col-md-4">
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Postal code</th>
                                    <th>Lat</th>
                                    <th>Long</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                            Data.filter((city)=>city.name.toLowerCase().includes(state.toLowerCase())).map((city)=>
                            {
                                return(
                                    <tr>
                                        <td>{city.sl}</td>
                                        <td>{city.name}</td>
                                        <td>{city.address}</td>
                                        <td>{city.postal}</td>
                                        <td>{city.lat}</td>
                                        <td>{city.long}</td>
                                    </tr>
                                    
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </center>
    </div>
  )
}

export default Task