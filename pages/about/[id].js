import fs from 'fs';
import path from 'path';
import "../../styles/employeedetail.css";

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    const paths = data.employees.map((employee) => ({
        params: { id: employee.id.toString() }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    const employee = data.employees.find(emp => emp.id.toString() === params.id);

    return { props: { employee } };
}

export default function EmployeeDetail({ employee }) {
    return (
        <div className="employee-detail">
            <h1>Employee Details</h1>
            <div className="employee-card">
                <p><strong>Name:</strong> {employee.name}</p>
                <p><strong>Designation:</strong> {employee.designation}</p>
                <p><strong>Department:</strong> {employee.department}</p>
                <p><strong>Email:</strong> {employee.email}</p>
                <p><strong>Phone:</strong> {employee.phone}</p>
            </div>
        </div>
    );
}
