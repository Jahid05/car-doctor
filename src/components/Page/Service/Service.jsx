import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mx-auto space-y-4 w-1/2">
        <h2 className="text-2xl md:text-3xl font-semibold text-theme-100">
          Service
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold">Our Service Area</h1>
        <p className="md:text-lg text-theme-300">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center">
      <button className="btn btn-outline border-theme-100 text-theme-100 normal-case mt-12">More Services</button>
      </div>
    </div>
  );
};

export default Service;
