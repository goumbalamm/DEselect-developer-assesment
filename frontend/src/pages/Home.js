import StudentCard from '../components/StudentCard';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (<div>
        <Card>
            <Card.Header>View Students</Card.Header>
            <Card.Body>
                <Form.Select aria-label="Default select example">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Card className="text-center mt-2" bg="light">
                    <Card.Body>
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                    </Card.Body>
                </Card>
                <Button variant="warning" className="mt-2">Sort</Button>
            </Card.Body>
        </Card>
    </div>);
}

export default Home