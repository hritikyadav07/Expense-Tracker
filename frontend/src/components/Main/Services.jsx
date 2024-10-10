import React from 'react';
import ServiceCard from './ServiceCard';
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'

const Services = () => {
    const services =[
        {
            id: 1,
            title: 'Web Development',
            description: 'We develop high-quality websites for businesses of all sizes.',
            image: service1
        },
        {
            id: 2,
            title: 'Mobile App Development',
            description: 'We develop cross-platform mobile apps for businesses.',
            image: service2
        },
        {
            id: 3,
            title: 'Digital Marketing',
            description: 'We help businesses grow their online presence.',
            image: service3
        }
    ]
  return (
    <section id='services' className="py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Services</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-10">
            {
                services.map(service => (
                    <ServiceCard key={service.id} {...service} />
                ))
            }
      </div>
    </section>
  );
};

export default Services;