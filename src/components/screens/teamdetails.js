import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { removePlayerFromTeam } from "../../actions/footballaction";
import { addPlayerToTeam } from "../../actions/footballaction";
import { removeTeam } from "../../actions/footballaction";
import Modal from "react-bootstrap/Modal";

export default function Teams() {
  const [player, setPlayer] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState();
  const [selectedPlayer, setSelectedPlayer] = useState();

  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (oneplayer) => {
    setPlayer(oneplayer);
    setSelectedTeam(oneplayer);
    setShow(true);
  };
  const playerData = useSelector(state => state?.football?.playerList);
  const teamdData = useSelector(state => state?.football?.teams);
  const remove = (team) => {
    dispatch(removeTeam(team.id))}

  const removePlayer = (player) => {
  dispatch(removePlayerFromTeam(selectedTeam.id, player.id));
  };
  const setAddPlayer = (player) => {
    console.log("Value",player)
    dispatch(addPlayerToTeam(selectedTeam.id, player));
    };
  return (
    <>
      <div className="d-flex flex-wrap container mt-5">
        {teamdData?.map((n) => {
          return (
            <> <Card className="m-1  "style={{ width: '18rem' }}>
            <Card.Img className='imageCard'src={n.photo} />
            <Card.Body className='cardBody'>
            <Card.Title className='titleCard'>{n.name}</Card.Title>
            <Button
                   
                    variant="primary"
                    onClick={() => handleShow(n)}
                     >
                    View Team Details
                  </Button>
            
           
            <Button varient="primary"  className='m-2'  onClick={() => {remove(n)}}>
            Remove Team
            </Button>
            </Card.Body></Card>
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
                      </Card.Body></Card>

                      
            {
                player?.players?.map(p=>{
                    return  <div >
                    <Card className="m-1  "style={{ width: '18rem' }}>
                                <Card.Img className='imageCard'src={p.photo} />
                                <Card.Body className='cardBody'>
                                <Card.Title className='titleCard'>{p.name}</Card.Title>
                                <Button varient="primary"  className='m-2' onClick={()=>{removePlayer(p)}} >
                      Remove Player
                      </Button>
                                </Card.Body></Card>
                  </div>
                  })
            }
       
           
    
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
