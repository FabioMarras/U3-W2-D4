import { useState } from "react";
import { Row, Col, Button, Collapse, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data, isButton }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      {isButton ? (
        <>
          <Button
            onClick={() => {
              dispatch({ type: "ADD_JOB", payload: data });
              setOpen(!open);
              setShowBadge(true);
              setTimeout(() => {
                setShowBadge(false);
              }, 3000);
            }}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            aggiungi ai preferiti
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">{showBadge && <Badge bg="primary">aggiunto</Badge>}</div>
          </Collapse>
        </>
      ) : (
        ""
      )}
    </Row>
  );
};

export default Job;
