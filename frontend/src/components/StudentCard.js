import Card from 'react-bootstrap/Card';


const StudentCard = ({lastName, firstName, age}) => {
    return (
        <Card className="mt-1">
            <Card.Body>{firstName} {lastName} ({age})</Card.Body>
        </Card>
    );
}

export default StudentCard;