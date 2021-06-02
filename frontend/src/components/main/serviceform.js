import { Formik } from "formik";
import { Link } from "react-router-dom";

const { useContext } = require("react");


const ServiceForm = props => {
    // const service = useContext(ServiceContext);

    const serviceForm = {
        fullname: '',
        timing: '',
        shift: '',
    };

    const onFormSubmit = (value, { setSubmitting }) => {
        console.log(value);
        setSubmitting = true;

        // service.addUser(value)

        //     .then(res => console.log(res));
    }

    return (



        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-body">
                    <Formik
                        initialValues={serviceForm}
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

                                <div className="row">
                                    <div className="col-md mt-5">
                                        <label className="mt-5">Full Name</label>
                                        <input type="text" className="form-control" id="fullname" onChange={handleChange} value={values.fullname} />
                                    </div>

                                </div>

                                <label className="mt-4">Timing</label>
                                <input type="number" className="form-control" id="timing" onChange={handleChange} value={values.timing} />

                                <label className="mt-4">Shift</label>
                                <input type="email" className="form-control" id="shift" onChange={handleChange} value={values.shift} />


                                <div className="text-center">
                                    <button className="btn btn-warning mt-5 w-100">Submit</button>
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

export default ServiceForm;