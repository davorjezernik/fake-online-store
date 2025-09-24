import React, { useEffect, useState } from 'react';
import { fetchAPI, itemsAPI } from '../shop-page';

function Clothing() {

  const [items, setItems] = useState<ItemsAPI[]>([]);
  
  
  useEffect(() => {
      fetchAPI().then((data) => setItems(data));
  }, [])

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Clothing;
