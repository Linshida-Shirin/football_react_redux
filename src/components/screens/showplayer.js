import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addPlayerToTeam } from '../../actions/footballaction'
import { removePlayer } from "../../actions/footballaction";
import Modal from "react-bootstrap/Modal";

export default function Players() {
  const [player, setPlayer] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState({});

  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (oneplayer) =>{
    setPlayer(oneplayer);
    setShow(true);
  };

  const playerData = useSelector(state => state?.football?.playerList);
  const teamdData = useSelector(state => state?.football?.teams);
  const remove = (player) => {
    dispatch(removePlayer(player.id));
}
  const addPlayer = (player) => {
    dispatch(addPlayerToTeam(selectedTeam, player));
     handleClose();
  };
  return (
    <>
      <div className="d-flex flex-wrap container mt-5">
        {playerData?.map((n) => {
          return (
            <> 
            <Card className="m-1  "style={{ width: '18rem' }}>
                <Card.Img className='imageCard'src={n.photo} />
                <Card.Body className='cardBody'>
                    <Card.Title className='titleCard'>{n.name}</Card.Title>
                    <Card.Text>{n.details}</Card.Text>
                    <Card.Text>{"Position : "}{n.position}</Card.Text>
                    <Button variant="primary" onClick={() => handleShow(n)} > View Player Details </Button>
                    <Button varient="primary"  className='m-2'  onClick={() => {remove(n)}}> Remove Player </Button>
                </Card.Body>
            </Card>
            </>
          );
        })}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{player.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
              <Card className="m-1  "style={{ width: '25rem' }}>
                      <Card.Img className='imageCard'src={player.photo} />
                      <Card.Body className='cardBody'>
                      <Card.Text>{player.details}</Card.Text>
                      <Card.Text>{"Position : "}{player.position}</Card.Text>
                      <b style={{ marginLeft: "6rem" }}><u>Add Player to Team</u></b><br/>
                      Select Team :
                      <select className="m-2 theme-pink" disabled={!player.available} onChange={(e)=>{setSelectedTeam(e.target.value)}} >
                          {teamdData?.map((team) => {
                          return (
                            <option> <img src={team.photo} alt="team"style={{ width: "30px" }} />{team.name}</option>
                            );
                          })}
                      </select>
                    </Card.Body></Card>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => addPlayer(player)}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
