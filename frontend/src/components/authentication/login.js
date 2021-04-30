import { Formik } from "formik";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../../providers/userContext";

const Login = () => {

    const userService = useContext(UserContext);

    const loginForm = {
        email: '',
        password: ''
    };

    const onFormSubmit = (formdata, { setSubmitting }) => {
        console.log(formdata);
        setSubmitting = true;

        userService.getUserByEmail(formdata.email)
            .then(userdata => {
                if (userdata) {
                    if (userdata['password'] == formdata['password']) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Great!',
                            text: 'Successfully Loggedin',
                        }).then(() => {
                            userService.setLoggedin(true);
                            sessionStorage.setItem('user', JSON.stringify(userdata));
                            userService.setCurrentUser(userdata);

                            // if (userdata['isadmin']) {
                            //   this.router.navigate(['/admin']);
                            // } else {
                            //   this.router.navigate(['/user']);
                            // }
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops!',
                            text: "Email and Password does't match",
                        });
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops!',
                        text: "Email and Password does't match",
                    });
                }
            })

    }

    return (
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-body">
                    <Formik
                        initialValues={loginForm}
                        onSubmit={onFormSubmit}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>

                                <h3 className="text-center">Login Here</h3>

                                <label className="mt-4">Email</label>
                                <input type="text" className="form-control" id="email" onChange={handleChange} value={values.email} />

                                <label className="mt-4">Password</label>
                                <input type="text" className="form-control" id="password" onChange={handleChange} value={values.password} />



                                <div className="text-center">
                                    <button className="btn btn-warning mt-5 w-100" disabled={isSubmitting}>Submit</button>
                                </div>

                                <p className="mt-3 text-center">Register Instead? <Link to="/login">Register Here</Link></p>

                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )

}

export default Login;