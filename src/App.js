import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Hero from './components/Hero';
import Homepage from './pages/Homepage';


const App = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(1);
  const [itemsPerPage] = useState(20)
  
  const getEmployees = async () => {
    const url = "https://hiring.rewardgateway.net/list";
    const headers = { 
      Authorization: 'Basic aGFyZDpoYXJk',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }
    const response = await axios.get(url, { headers });
    const { data } = response
    setEmployees(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getEmployees();
  }, []);

  const indexOfLastItem = currentItem * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem)
  const totalItems = employees.length

  const paginate = (pageNumber) => setCurrentItem(pageNumber)

  return (
    <div className="w-screen min-h-screen bg-black">
      <Hero />
      <Homepage employees={currentItems} isLoading={isLoading} itemsPerPage={itemsPerPage} totalItems={totalItems} paginate={paginate} />
    </div>
  )
}

export default App;
