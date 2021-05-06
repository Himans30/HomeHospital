import { Formik } from "formik";
import React from "react";
import { EquipmentContext } from "../../providers/equipmentContext";

const AddEquipment = () => {

    const equipmentService = React.useContext(EquipmentContext);

    const equipmentForm = {
        name: '',
        description: '',
        features: '',
        price: '',
        rentprice: '',
        rentable: '',
        category: '',
        avatar: '',
        created: new Date()
    };

    const onFormSubmit = (value, { setSubmitting }) => {
        console.log(value);
        setSubmitting = true;

        equipmentService.addEquipment(value)

            .then(res => console.log(res));
    }

    return (
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-body">
                    <Formik
                        initialValues={equipmentForm}
                        onSubmit={onFormSubmit}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>

                                <h3 className="text-center">Add Equipment Here</h3>


                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="name" onChange={handleChange} value={values.name} placeholder=" " />
                                    <label for="name">Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <textarea type="text" className="form-control" id="description" onChange={handleChange} value={values.description} placeholder=" " ></textarea>
                                    <label for="description">Description</label>
                                </div>


                                <label className="mt-4">Features</label>
                                <input type="text" className="form-control" id="features" onChange={handleChange} value={values.features} />

                                <label className="mt-4">Features</label>
                                <input type="text" className="form-control" id="features" onChange={handleChange} value={values.features} />

                                <label className="mt-4">Price</label>
                                <input type="text" className="form-control" id="price" onChange={handleChange} value={values.price} />

                                <label className="mt-4">Rent Price</label>
                                <input type="text" className="form-control" id="rentPrice" onChange={handleChange} value={values.rentPrice} />

                                <label className="mt-4">Rentable</label>
                                <input type="text" className="form-control" id="rentable" onChange={handleChange} value={values.rentable} />

                                <label className="mt-4">Category</label>
                                <input type="text" className="form-control" id="category" onChange={handleChange} value={values.category} />

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

export default AddEquipment;