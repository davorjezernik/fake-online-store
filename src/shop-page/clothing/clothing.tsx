import React, { useEffect } from 'react';

function Clothing() {

  function clothingList() {
    const [item, setItem ] = itemState<items[]>([])
    useEffect(() => {
      fetchAPI().then((date) => setItem(data));
    }, []);
  }

  return (
    <div>
      {item.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <p>{item.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Clothing;
