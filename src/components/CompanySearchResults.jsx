import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const [jobs, setJobs] = useState([]);
  const params = useParams();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const stato = useSelector((state) => state.addRemove.content);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {stato.map((jobStato, i) => (
            <div key={jobStato._id}>
              <Job data={jobStato} />
              <Button
                onClick={() => {
                  dispatch({ type: "REMOVE_JOB", payload: i });
                }}
              >
                Delete
              </Button>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
