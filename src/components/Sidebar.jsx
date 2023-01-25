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
  const people = useSelector((state) => state.people.top);

  const endpoint = `${process.env.REACT_APP_BE_PROD_URL}/users`;

  useEffect(() => {
    dispatch(retrieveDataActionTop(endpoint));
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
        {show &&
          people.map((i) => (
            <PeopleCards
              key={i._id}
              userid={i._id}
              name={i.name}
              location={i.area}
              title={i.title}
              image={i.image}
            />
          ))}
      </ListGroup>
    </>
  );
};

export default Sidebar;
