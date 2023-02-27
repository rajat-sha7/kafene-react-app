import React from 'react'
import './Products.css'
import { useState, useEffect } from 'react'
import Header from '../../Headers/Header'

const Products = () => {

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([]);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    useEffect(() => {

        fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
            .then(response => response.json())
            .then(data => {

                setData(data);

            })
            .catch(error => console.log(error))

    }, [])
    console.log(data)

    console.log(selectedCheckboxes)




    const handleChange = (e) => {
        const value = e.target.value;
        if (selectedCheckboxes.includes(value)) {
            setSelectedCheckboxes(selectedCheckboxes.filter(item => item !== value));

        } else {
            setSelectedCheckboxes([...selectedCheckboxes, value])


        }

    }



    useEffect(() => {




        if (selectedCheckboxes.includes("Lowstock") && selectedCheckboxes.includes("expiryDate")) {
            let filterData = []
            setFilteredData(filterData)
        } else if (selectedCheckboxes.includes("Lowstock")) {
            let filterData = data.filter((item) => {
                return item.stock < 100;
            })
            setFilteredData(filterData)
        } else if (selectedCheckboxes.includes("expiryDate")) {
            const currentDate = new Date();

            let filteredData = data.filter((item) => {
                const itemDate = new Date(item.expiryDate.replace(/,/g, ""));
                return itemDate < currentDate
            })
            setFilteredData(filteredData)
        } else {
            setFilteredData(data)
        }

    }, [data, selectedCheckboxes])




    console.log(filteredData)










    return (
        <>


            <Header />

            <div className='product-section'>


                <div className='left-part'>
                    <h1>Products</h1>
                    <div className='search-part1'>
                        <h3>filter</h3>
                        <p> const:{filteredData.length} </p>




                        {/* <div className='input-part'> */}

                        <p>   <label className='label-part' >
                            <input type="checkbox" onChange={handleChange} name="expiryDate" value="expiryDate" />Expired </label>
                        </p>
                        <p>
                            <label className='label-part'  > <input type="checkbox" onChange={handleChange} name="lowstock" value="Lowstock" />Lowstock</label>
                        </p>


                        {/* </div> */}


                    </div>
                </div>




                <div className='right-part'>

                    <div className='user-table'>
                        <table>
                            <thead>
                                <tr className='table-heading'>
                                    <th>ID</th>
                                    <th>Product Name</th>
                                    <th>Product Brand</th>
                                    <th>Expiry Date</th>
                                    <th>Unit Price</th>
                                    <th>stock</th>

                                </tr>
                            </thead>

                            <tbody>

                                {filteredData.map(item => {
                                    return (
                                        <tr className='table-row' key={item.id}>
                                            <td className='light-font'>{item.id}</td>

                                            <td className='dark-font'>{item.medicineName}</td>
                                            <td className='light-font'>{item.medicineBrand}</td>
                                            <td className='dark-font'>{item.expiryDate}</td>
                                            <td className='light-font'>{item.unitPrice}</td>
                                            <td className='light-font'>{item.stock}</td>
                                        </tr>


                                    )
                                })





                                }

                            </tbody>
                        </table>
                    </div>
                </div>




            </div>
        </>

    )
}

export default Products