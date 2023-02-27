import React from 'react'
import './User.css'
import { useState, useEffect } from 'react'
import Header from '../../Headers/Header'


export const User = () => {

    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    const [originalData, setOriginalData] = useState([]);

    useEffect(() => {

        fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
            .then(response => response.json())
            .then(data => {
                setOriginalData(data)
                setData(data);

            })
            .catch(error => console.log(error))

    }, [])


    const getinput = (e) => {
        setInput(e.target.value)
        filteredData(e.target.value)
    }



    console.log(data)

    console.log(input)

    const filteredData = (svalue) => {

        if(svalue.length<2){

            alert("Please enter at least 2 characters")

           
        }else {
           

            let filteredUsers = data.filter(user => {
                const name = user.fullName.toLowerCase();
    
                const query = svalue.toLowerCase();
                return name.includes(query)
            });
            setData(filteredUsers)
        }


    }



    const resetfun=()=>{
        setInput("");
        setData(originalData);
        const inputt=document.getElementById("inputB")
        inputt.value="";
    }


    

    return (
        <>
        <Header/>


        <div className='user-section'>
            <h1>Users</h1>
            <div className='search-part'>
                <div className='input-part'>

                    <div><input id="inputB" onChange={getinput} type="text" placeholder="Search by Name" name="search" /> <button onClick={resetfun} className='reset-btn'>Reset</button></div>


                </div>
                <div className='user-table'>
                    <table>
                        <thead>
                            <tr className='table-heading'>
                                <th>ID</th>
                                <th>User Avatar</th>
                                <th>Full Name</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>Current Location</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map(item => {
                               
                                return (
                                  
                                    <tr className='table-row' key={item.id}>
                                        <td>{item.id}</td>
                                        <td ><img src={item.profilePic} alt="images" /></td>
                                        <td className='light-font'>{item.fullName}</td>
                                        <td className='dark-font' >{item.dob}</td>
                                        <td  className='light-font'>{item.gender}</td>
                                        <td  className='light-font'>{item.currentCity}</td>
                                    </tr>

                                   
                                )
                                
                            })}

                            </tbody>

                       
                    </table>
                </div>


            </div>

        </div>



        </>
        
    )
}