import { Formik } from "formik";
import React from "react";
import { staffContext } from "react";
import { StaffContext } from "../../providers/staffContext";

const AddStaff = () => {

    const staffService = React.useContext(StaffContext);

    const staffForm = {
        name: '',
        avatar: '',
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
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="name" onChange={handleChange} value={values.name} placeholder=" " />
                                    <label for="name">Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="designation" onChange={handleChange} value={values.designation} placeholder=" " />
                                    <label for="name">Designation</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="rentPrice" onChange={handleChange} value={values.rentPrice} placeholder=" " />
                                    <label for="name">Rent Price</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="avatar" onChange={handleChange} value={values.avatar} placeholder=" " />
                                    <label for="name">Avatar</label>
                                </div>

                                    <div className="text-center">
                                    <button className="btn btn-warning mt-5 w-100" disabled={isSubmitting}>Submit</button>
                                </div>

                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )

}

export default AddStaff;