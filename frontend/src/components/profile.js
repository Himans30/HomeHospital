import { Button, Card, CardContent, makeStyles, TextField } from "@material-ui/core";
import clsx from "clsx";
import { Formik } from "formik";
import { useEffect } from "react";
import Swal from "sweetalert2";
import cssClasses from "./cssClasses";

const customStyles = makeStyles(theme => ({
    card: {
        marginTop: '5rem'
    }
}))

const Profile = props => {

    const baseClasses = cssClasses();
    const customClasses = customStyles();


    useEffect(() => {



    }, [])

    const updateForm = {

        fullname: '',
        email: '',
        password: ''
    };

    const onFormSubmit = (value, { setSubmitting }) => {

        Swal.fire({
            icon: 'success',
            title: 'Welldone!',
            text: 'You have successfully registered'
        })
    }

    return (
        <div className="col-md-10 mx-auto">
            <Card className={clsx(baseClasses.card, customClasses.card)}>
                <CardContent>
                    <div className="row">
                        <div className="col-md-4">
                            <img />
                        </div>
                        <div className="col-md-8">
                            <Formik
                                initialValues={updateForm}
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

                                        <TextField label="Full Name" variant="filled" name="fullname" className={baseClasses.input} onChange={handleChange} value={values.username} />
                                        <TextField label="Email" variant="filled" name="email" className={baseClasses.input} onChange={handleChange} value={values.email} />
                                        <TextField type="password" label="Password" name="password" variant="filled" className={baseClasses.input} onChange={handleChange} value={values.password} />

                                        <div className="text-center">
                                            <Button className="mt-5 w-100" disabled={isSubmitting}>Submit</Button>
                                        </div>

                                    </form>
                                )}
                            </Formik>

                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className={clsx(baseClasses.card, customClasses.card)}>
                <CardContent>
                    <TextField label="Full Name" variant="filled" name="fullname" className={baseClasses.input} />
                    <TextField label="Email" variant="filled" name="email" className={baseClasses.input} />
                    <TextField type="password" label="Password" name="password" variant="filled" className={baseClasses.input} />

                    <div className="text-center">
                        <Button className="mt-5 w-100" >Submit</Button>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Profile;