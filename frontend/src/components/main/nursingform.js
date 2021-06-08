import { Formik } from "formik";
import { Link } from "react-router-dom";
import { NursingContext } from "../../providers/nursingContext";

const { useContext, default: React } = require("react");


const NursingForm = props => {
    const nursing = React.useContext(NursingContext);
    const nursingService = React.useContext (NursingContext);
    const [open, setOpen] = React.useState(false);

    const nursingForm = {
        name: '',
        age: '',
        gender: '',
        types_of_illnetypes_of_illnees: '',
        address: '',
        mob_no: '',
        email_address: '',
        timing: '',
        shift: '',
        medical_report: '',
        health_condtion: ''
    };

    

    const onFormSubmit = (value, { setSubmitting }) => {
        console.log(value);
        setSubmitting = true;

        nursingService.addNursing(value)

            .then(res => {console.log(res)
            setOpen(true);
            });
    }

    return (
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-body">
                    <Formik
                        initialValues={nursingForm}
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
                                        <label className="mt-5"> Name</label>
                                        <input type="text" className="form-control" id="name" onChange={handleChange} value={values.name} />
                                    </div>

                                </div>

                                <label className="mt-4">Age</label>
                                <input type="number" className="form-control" id="age" onChange={handleChange} value={values.age} />

                                <label className="mt-4">Gender</label>
                                <input type="number" className="form-control" id="gender" onChange={handleChange} value={values.gender} />

                                <label className="mt-4">Types of illness</label>
                                <input type="number" className="form-control" id="types_of_illnees" onChange={handleChange} value={values.types_of_illnees} />

                                <label className="mt-4">Address</label>
                                <input type="number" className="form-control" id="address" onChange={handleChange} value={values.address} />

                                <label className="mt-4">Mobile No</label>
                                <input type="number" className="form-control" id="mobile_no" onChange={handleChange} value={values.mobile_no} />

                                <label className="mt-4">Email Address</label>
                                <input type="number" className="form-control" id="email_address" onChange={handleChange} value={values.email_address} />

                                <label className="mt-4">Timing</label>
                                <input type="number" className="form-control" id="timing" onChange={handleChange} value={values.timing} />


                                <label className="mt-4">Shift</label>
                                <input type="email" className="form-control" id="shift" onChange={handleChange} value={values.shift} />

                                <label className="mt-4">Medical Report</label>
                                <input type="number" className="form-control" id="medical_report" onChange={handleChange} value={values.medical_report} />

                                <label className="mt-4">Health Condition</label>
                                <input type="number" className="form-control" id="health_condtion" onChange={handleChange} value={values.health_condtion} />



                                <div className="text-center">
                                    <button className="btn btn-primary mt-5 w-100">Submit</button>
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

export default NursingForm;