// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import "./Contact.css";
import React from 'react';

const Contact = ({data}) => {
    return (
      <div className='Contact'>
        <img className="foto" src={data.photo} alt={data.name}></img>
      <section className="Detail">
        <h3>{data.name}</h3>
        <p>{data.phone}</p>
        <p>{data.email}</p>
      </section>

      </div>
    );
};

export default Contact; 