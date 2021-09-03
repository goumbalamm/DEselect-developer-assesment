import StudentCard from '../components/StudentCard';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

const Home = ({loadData}) => {
    const [nationalities, setNationalities] = useState([]);
    const [students, setStudents] = useState([]);
    const [selected, setSelected] = useState();
    const [sort, setSort] = useState('asc');
    useEffect(() => {
        loadData().then((data) => {
            const nationalities = data.data.data.map((student) => student.nationality);
            nationalities.sort();
            const sortedSet = Array.from(new Set(nationalities));
            setNationalities(sortedSet);
            setSelected(sortedSet[0]);
        })
    }, []);
    useEffect(() => {
        loadData(`sort=${sort}&nationality=${selected}`).then((data) => {
            const students = data.data.data.map((student) => ({firstName: student.firstName,
                lastName: student.lastName, age: student.age
            }));
            setStudents(students);
        })
    }, [selected, sort]);
    const selectChangeHandler = (e) => {
        setSelected(e.target.value);
    }
    const handleSort = (e) => {
        if(sort === 'asc') {
            setSort('desc');
        } else {
            setSort('asc');
        }

    }

    return (<div>
        <Card>
            <Card.Header>View Students</Card.Header>
            <Card.Body>
                <Form.Select aria-label="Default select example" value={selected} onChange={selectChangeHandler}>
               { nationalities.map((nationalty, index) => <option key={index} value={nationalty}>{nationalty}</option>)}
                    
                </Form.Select>
                <Card className="text-center mt-2" bg="light">
                    <Card.Body>
                        {students.map(student => <StudentCard key= {student.id} 
                        firstName={student.firstName} lastName={student.lastName} age={student.age}/>)}
                    </Card.Body>
                </Card>
                <Button variant="warning" className="mt-2" onClick={handleSort}>Sort</Button>
            </Card.Body>
        </Card>
    </div>);
}

export default Home