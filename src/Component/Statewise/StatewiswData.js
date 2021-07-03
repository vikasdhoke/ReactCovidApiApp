import React, { useEffect, useState } from 'react';


const StatewiseData =()=>{

const [data,setData]=useState([]);  

const getCovidData= async()=>{
   const res = await fetch('https://api.covid19india.org/data.json');
   const actualData = await res.json();
   console.log(actualData.statewise);
   setData(actualData.statewise);

}

    useEffect(()=>{
        getCovidData()
    },[]);

    return (
        <>
        
            <div className="container-fluid" mt-5>
                <div className="main-heading" >
                    <h1 className="mb-5 text-center" ><span className="font-weght-bold">INDIA</span> covid 19 Dashboard</h1>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>State</th>
                                    <th>Confirmed</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                    <th>Active</th>
                                    <th>Updated</th>
                                </tr>
                            </thead>

                            <tbody>
                            {
                                data.map((curenEle,ind)=>{
                                    return (
                                        <tr key={ind}>
                                            <th>{curenEle.state}</th>
                                            <td>{curenEle.confirmed}</td>
                                            <td>{curenEle.recovered}</td>
                                            <td>{curenEle.deaths}</td>
                                            <td>{curenEle.active}</td>
                                            <td>{curenEle.lastupdatedtime}</td>
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

export default StatewiseData;