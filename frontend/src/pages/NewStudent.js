import CreateStudentForm from '../components/CreateStudentForm';
import Card from 'react-bootstrap/Card';

const NewStudent = ({saveNewStudent}) => {
    return(<div>
        <Card>
            <Card.Header>Add New Student</Card.Header>
            <Card.Body className="text-center">
                <CreateStudentForm saveNewStudent={saveNewStudent}/>
            </Card.Body>
        </Card>
        
    </div>);
}

export default NewStudent;