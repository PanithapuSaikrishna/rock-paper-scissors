import { Accordion } from "react-bootstrap";

export const GameRules = () => {
  return (
    <div className="m-2">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Game Rules</Accordion.Header>
          <Accordion.Body>
            <p className="badge bg-success m-2">1. Paper beats rock</p>
            <p className="badge bg-success m-2">2. Rock beats scissors</p>
            <p className="badge bg-success m-2">3. Scissors beats paper</p>
            <p className="badge bg-success m-2">
              4. If two choices are same, then it's a tie
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
