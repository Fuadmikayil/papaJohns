'use client';
import React from 'react';
import Image from 'next/image';

const pizzas = [
  {
    id: 1,
    name: 'Çiken Ranč',
    description: 'Ranč Sousu, Qril Toyuğu, Pomidor, Mozzarella',
    price: 6.00,
    image: '/assets/pizza1.jpg',
  },
  {
    id: 2,
    name: 'Marqarita',
    description: 'Pizza sousu, Ekstra Mozzarella, Pomidor, Oreqano',
    price: 6.00,
    image: '/assets/pizza2.jpg',
  },
  {
    id: 3,
    name: '4 Pendir',
    description: 'Pizza sousu, Mozzarella, Feta, Parmezan və Cheddar pendirləri',
    price: 11.00,
    image: '/assets/pizza3.jpg',
  },
];

const PizzaList = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-8">PIZZA</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition flex flex-col group">
            <Image 
              src={pizza.image} 
              alt={pizza.name} 
              width={500} 
              height={400} 
              className="w-full h-60 object-cover"
              unoptimized
            />
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-xl font-bold mb-2">{pizza.name}</h2>
                <p className="text-gray-600 mb-4">{pizza.description}</p>
              </div>
              <div className="mt-auto">
                <p className="text-lg font-semibold mb-4">{pizza.price.toFixed(2)} AZN-dən</p>
                <button className="w-full cursor-pointer bg-lime-400 hover:bg-lime-500 text-black py-2 rounded-full font-bold transition opacity-0 group-hover:opacity-100">
                  SƏBƏTƏ ƏLAVƏ ET
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
