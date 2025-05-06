import React, { useState } from "react"; // React and useState imported
import { Modal } from 'react-responsive-modal'; // Modal from react-responsive-modal
import 'react-responsive-modal/styles.css'; // Modal CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { PlusOutlined } from "@ant-design/icons"; // Ant icon for add
import { useFormik } from "formik"; // Import useFormik hook
import * as Yup from "yup"; // Import Yup for validation

const Crud = () => {
    const [open, setOpen] = useState(false); // State for modal open/close
    const [userdata, setUserdata] = useState([]); // State for storing all users
    const [editIndex, setEditIndex] = useState(null); // State for tracking index of editing user

    const onOpenModal = () => setOpen(true); // Open modal function
    const onCloseModal = () => {
        setEditIndex(null); // Reset edit index when modal closes
        setOpen(false); // Close modal
        formik.resetForm(); //  Reset form using Formik method
    };

    //  Formik setup
    const formik = useFormik({
        initialValues: { // Initial values instead of `user` state
            name: "",
            number: "",
            email: ""
        },
        validationSchema: Yup.object({ //  Yup validation schema
            name: Yup.string().required("Name is required").min(2),
            number: Yup.string().required("Number is required"),
            email: Yup.string().email("Invalid email").required("Email is required")
        }),
        onSubmit: (values) => { //  On form submit
            if (editIndex !== null) {
                const updated = [...userdata]; // Clone array
                updated[editIndex] = values; // Replace user at edit index
                setUserdata(updated); // Update state
                setEditIndex(null); // Reset index
            } else {
                setUserdata([...userdata, values]); //  Add new user
            }
            onCloseModal(); // Close modal after submission
        }
    });

    //  Edit user: populate formik values directly
    const handleEdit = (index) => {
        setEditIndex(index); // Set the mode to edit
        onOpenModal(); // Open modal
        formik.setValues(userdata[index]); //  Set formik form values
    };

    const deleteUser = (index) => {
      console.log("delete user", index)
        const updated = userdata.filter((_, i) => i !== index); // Filter out user
        setUserdata(updated); // Update state
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center my-3">
                <h1>CRUD App</h1>
                <button className="btn btn-success" onClick={onOpenModal}>
                    <PlusOutlined /> Add New {/*  Icon with button */}
                </button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userdata.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.number}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-primary me-2" onClick={() => handleEdit(index)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteUser(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/*  Modal for form */}
            <Modal open={open} onClose={onCloseModal} center>
                <h4>{editIndex !== null ? "Edit Data" : "Add Data"}</h4>

                {/*  Formik form */}
                <form onSubmit={formik.handleSubmit}>
              
                    {/* Name field */}
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            onChange={formik.handleChange} //  Jab user kuch type kare, Formik ka handleChange uss naye value ko update kara.
                            value={formik.values.name} //  Formik value
                        />
                        {formik.touched.name && formik.errors.name && (
                            <small className="text-danger">{formik.errors.name}</small> //  Error display
                        )}
                    </div>

                    {/*  Number field */}
                    <div className="mb-3">
                        <label htmlFor="number">Number</label>
                        <input
                            type="text"
                            name="number"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.number} 
                        />
                        {formik.errors.number && formik.touched.number ?
                         <samll>{formik.errors.number}</samll> : null}
                    </div>

                    {/*  Email field */}
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.email && formik.errors.email && (
                            <small className="text-danger">{formik.errors.email}</small>
                        )}
                    </div>

                    {/*  Submit/Update button */}
                    <button type="submit" className="btn btn-primary">
                        {editIndex !== null ? "Update" : "Submit"}
                    </button>
                </form>
            </Modal>
        </div>
    );
};

export default Crud;
