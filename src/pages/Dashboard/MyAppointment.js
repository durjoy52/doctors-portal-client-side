import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiTime } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        `https://floating-fjord-09767.herokuapp.com/booking?patient=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          console.log(res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setAppointments(data);
        });
    }
  }, [user, navigate]);

  return (
    <div>
      <h2>My Appointments: {appointments?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>
                  <MdDateRange />
                  {a.date}
                </td>
                <td>
                  <BiTime />
                  {a.slot}
                </td>
                <td>{a.treatment}</td>
                <td>
                  {(a.price && !a.paid) && 
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-success btn-sm"><span className="text-white">pay</span></button>
                    </Link>
                  }
                  {(a.price && a.paid) && 
                      <span className="text-success">paid</span>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyAppointment;
