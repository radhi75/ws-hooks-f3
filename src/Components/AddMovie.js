import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddMovie = ({setData,data}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name,setName]=useState("")
  const [rating,setRate]=useState(0)
  const handleClick=()=>setData([...data,{id:Math.random(),name,rating}])
  return (
    <div><Button variant="warning" onClick={handleShow}>
    Add movie
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>New movie</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter movie Name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>rate</Form.Label>
        <Form.Control type="Number" placeholder="rating" onChange={(e)=>setRate(Number(e.target.value))}/>
      </Form.Group>

     
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClick}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default AddMovie