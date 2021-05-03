import { Formik } from "formik";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/userContext";

const Register = () => {

    const userService = useContext(UserContext);

    const registerForm = {
        fullname: '',
        email: '',
        password: '',
        age: '',
        created: new Date(),
        isadmin: true
    };

    const onFormSubmit = (value, { setSubmitting }) => {
        console.log(value);
        setSubmitting = true;

        userService.addUser(value)

            .then(res => console.log(res));
    }

    return (
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-body">
                    <Formik
                        initialValues={registerForm}
                        onSubmit={onFormSubmit}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>

                                <h3 className="text-center">Register Here</h3>

                                <label className="mt-5">Full Name</label>
                                <input type="text" className="form-control" id="fullname" onChange={handleChange} value={values.fullname} />

                                <label className="mt-4">Email</label>
                                <input type="email" className="form-control" id="email" onChange={handleChange} value={values.email} />

                                <label className="mt-4">Password</label>
                                <input type="password" className="form-control" id="password" onChange={handleChange} value={values.password} />

                                <label className="mt-4">Age</label>
                                <input type="text" className="form-control" id="age" onChange={handleChange} value={values.age} />

                                <div className="text-center">
                                    <button className="btn btn-warning mt-5 w-100" disabled={isSubmitting}>Submit</button>
                                </div>

                                <p className="mt-3 text-center">Already Registered? <Link to="/app/login">Login Here</Link></p>

                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )

}

export default Register;