import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function loginPage() {
    const navigate = useNavigate();
    navigate('/login');
}

function Register() {

    const [adminName, setAdminName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/admin/save", {
                adminName: adminName,
                email: email,
                password: password,
            });
            alert("Employee Registation Successfully");

            navigate('/login');

        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="container mt-4">
            <div className="card p-4">
                <h1 className="mb-4">Admin Registration</h1>

                <form>
                    <div className="form-group">
                        <label>Admin Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Name"
                            value={adminName}
                            onChange={(event) => setAdminName(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3" onClick={save}>Save</button>
                    <a href="/login" className="d-block mt-3" onClick={loginPage}>Already have an account? Login here</a>
                </form>
            </div>
        </div>

    );
}

export default Register;