import { Formik } from "formik";
import { equipmentContext } from "react";
import { EquipmentContext } from "../../providers/equipmentContext";

const AddEquipment = () => {

    const equipmentService = equipmentContext(EquipmentContext);

    const equipmentForm = {
        name: '',
        description: '',
        features: '',
        price:'',
        rentprice:'',
        rentable:'',
        category:'',
        avatar:''
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

                                <label className="mt-5">Name</label>
                                <input type="text" className="form-control" id="name" onChange={handleChange} value={values.equipmentname} />

                                <label className="mt-4">Description</label>
                                <input type="text" className="form-control" id="Description" onChange={handleChange} value={values.Description} />

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