import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HelloWorld() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:8080/clients')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  };

  return (
    <div>
      <h1>Hello World</h1>
      <p>{message}</p>
    </div>
  );
}

export default HelloWorld;
