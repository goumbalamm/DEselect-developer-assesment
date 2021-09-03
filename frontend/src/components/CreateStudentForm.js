import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Spinner from 'react-bootstrap/Spinner';

import { useState } from 'react';


const CreateStudentForm = ({ saveNewStudent }) => {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [age, setAge] = useState(1);
    const [nationality, setNationality] = useState('');

    const firstNameChangeHandler = (e) => {
        setFirstName(e.target.value);
    }
    const lastNameChangeHandler = (e) => {
        setLastName(e.target.value);
    }
    const ageChangeHandler = (e) => {
        setAge(e.target.value);
    }
    const nationalityChangeHandler = (e) => {
        setNationality(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (firstName && lastName && age && nationality) {
            saveNewStudent({ firstName, lastName, age, nationality });
            setFirstName('');
            setLastName('');
            setAge(1);
            setNationality('');
        }
    }


    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Group as={Row} className="mb-3" controlId="firstName">
                <Form.Label column sm="3">First Name:</Form.Label>
                <Col sm="9">
                    <Form.Control type="text" value={firstName} onChange={firstNameChangeHandler} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="lastName">
                <Form.Label column sm="3">Last Name:</Form.Label>
                <Col sm="9">
                    <Form.Control type="text" value={lastName} onChange={lastNameChangeHandler} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="age">
                <Form.Label column sm="3">Age:</Form.Label>
                <Col sm="9">
                    <Form.Control type="number" min={1} max={120} value={age} onChange={ageChangeHandler} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="nationality">
                <Form.Label column sm="3">Nationality:</Form.Label>
                <Col sm="9">
                    <Form.Control type="text" value={nationality} onChange={nationalityChangeHandler} />
                </Col>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            {/* <Spinner animation="border" variant="primary" /> */}
        </Form>
    );
}
export default CreateStudentForm;