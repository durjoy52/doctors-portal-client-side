import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, 'PP');
    // useEffect(() => {
    //     fetch(`https://floating-fjord-09767.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattedDate])

    const {data: services,isLoading,refetch} = useQuery(['available',formattedDate],()=>fetch(`https://floating-fjord-09767.herokuapp.com/available?date=${formattedDate}`)
    .then(res => res.json())
    )
    if(isLoading){
      return <Loading/>
    }
  return (
    <div className="my-10">
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            setTreatment={setTreatment}
            key={service._id}
            service={service}
          ></Service>
        ))}
        {treatment && (
          <BookingModal
            setTreatment={setTreatment}
            date={date}
            refetch={refetch}
            treatment={treatment}
          />
        )}
      </div>
    </div>
  );
};

export default AvailableAppointments;
