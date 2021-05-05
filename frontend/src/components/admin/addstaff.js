import { Formik } from "formik";
import { staffContext } from "react";
import { StaffContext } from "../../providers/staffContext";

const StaffEquipment = () => {

    const staffService = React.useContext(StaffContext);

    const staffForm = {
        name: '',
        avatar:'',
        designation: '',
        rentPrice: ''
    };

    const onFormSubmit = (value, { setSubmitting }) => {
        console.log(value);
        setSubmitting = true;

        staffService.addstaff(value)

            .then(res => console.log(res));
    }

    return (
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-body">
                    <Formik
                        initialValues={staffForm}
                        onSubmit={onFormSubmit}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>

                                <h3 className="text-center">Add staff Here</h3>

                                <label className="mt-5">Name</label>
                                <input type="text" className="form-control" id="name" onChange={handleChange} value={values.equipmentname} />

                                <label className="mt-4">Designation</label>
                                <input type="text" className="form-control" id="  designation" onChange={handleChange} value={values. designation} />

                         
                               

                                <label className="mt-4">Rent Price</label>
                                <input type="text" className="form-control" id="rentPrice" onChange={handleChange} value={values.rentPrice} />

                    

                                <label className="mt-4">Avatar</label>
                                <input type="text" className="form-control" id="avatar" onChange={handleChange} value={values.avatar} />



                                <div className="text-center">
                                    <button className="btn btn-warning mt-5 w-100" disabled={isSubmitting}>Submit</button>
                                </div>

                                <p className="mt-3 text-center">Already Registered? <a href="loginpage.html">Login Here</a></p>

                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )

}

export default AddStaff;