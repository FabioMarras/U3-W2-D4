import { useState } from "react";
import { Container, Row, Col, Form, Button, Badge, Alert, Spinner } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFetch } from "../redux/actions";

const MainSearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  // const job = useSelector((state) => state.cart.content);
  const jobs = useSelector((state) => state.mainR.content);

  const mainLoading = useSelector((state) => state.mainR.isLoading);
  const errorMessage = useSelector((state) => state.mainR.hasError);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getFetch(query));
    // try {
    //   const response = await fetch(baseEndpoint + query + "&limit=10");
    //   if (response.ok) {
    //     const { data } = await response.json();
    //     setJobs(data);
    //   } else {
    //     alert("Error fetching results");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const jobsStateLength = useSelector((state) => state.addRemove.content.length);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
              required
            />
          </Form>
        </Col>
        {!mainLoading ? (
          errorMessage ? (
            <Col xs={10} className="mx-auto mb-5 mt-2">
              <Alert variant="info"> Oh no! Errore nel reperimento dei dati 😰{errorMessage}</Alert>
            </Col>
          ) : (
            <Col xs={10} className="mx-auto mb-5 mt-2">
              <Link to={"/company"}>
                <Button variant="primary">
                  Preferiti <Badge bg="success">{jobsStateLength}</Badge>
                </Button>
              </Link>
              {jobs.map((jobData) => (
                <Job key={jobData._id} data={jobData} isButton={true} />
              ))}
            </Col>
          )
        ) : (
          <Col xs={10} className="mx-auto mb-5 mt-2">
            <Spinner animation="grow" />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;
