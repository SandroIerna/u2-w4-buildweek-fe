import { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PeopleCards from "./PeopleCards";
import { retrieveDataActionTop } from "./redux/actions";

const Sidebar = () => {
  // const [people, setPeople] = useState([]);
  const [show, setToShow] = useState(false);
  // const [random, setRandom] = useState([]);
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people.top)

  const endpoint = "https://striveschool-api.herokuapp.com/api/profile/";
  const headers = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjU1N2M5NmRmYjAwMTUyMWE1YmYiLCJpYXQiOjE2NzA4Mzc1OTEsImV4cCI6MTY3MjA0NzE5MX0.sionel4q5K1g2fRqRfazPcioEsiTmI5SAxk9wfavbhQ",
    },
  };

  useEffect(() => {
    dispatch(retrieveDataActionTop(endpoint, headers));
    setTimeout(() => {
      setToShow(true);
    }, 300);
  }, []);

  // const retrieveData = async () => {
  //   try {
  //     let response = await fetch(endpoint, headers);
  //     let fetchedData = await response.json();
  //     if (response.ok) {
  //       setPeople(getRandom(fetchedData, 6))
  //     } else {
  //       console.log("There was a problem fetching data");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   retrieveData();
  //   setTimeout(() => {
  //     setToShow(true)
  //   }, 500)
  // }, []);

  return (
    <>
      <h4 className="mt-3">People also follow</h4>
      <ListGroup variant="flush" className="">
        {show && people.map((i)=> (
          <PeopleCards key={i._id} userid={i._id} name={i.name} location={i.area} title={i.title} image={i.image}/>
        ))}
      </ListGroup>
    </>
  );
};

export default Sidebar;
