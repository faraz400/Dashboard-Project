import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import "./login-signup.css"; 

const SignupForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(4, "Password must be at least 4 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Submit clicked"); // check if clicked
    setTimeout(() => {
      console.log("User Registered:", values);
      setSubmitting(false);
  
      alert("Signup successful! Please login.");
      navigate("/Loginform"); // Redirect to login page after signup
    }, 1500);
  };
  
  

  return (
    <div className="container mt-5 mycustomclass">
      <div className="row align-items-center">
      <div className="col-md-6 shadow p-4 justify-content-center ">
     
        <h2 className="text-center mb-4">Signup</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
           <Form>
                         <div className="mb-3">
                          
                           <label htmlFor="email" className="labels">Email</label>
                           <Field
                             type="email"
                             name="email"
                             className="form-control"
                             placeholder="Enter your email"
                           />
                       
                           <ErrorMessage
                             name="email"
                             component="div"
                             className="text-danger"
                           />
                         </div>
           
                         <div className="mb-3">
                           <label htmlFor="password" className="labels">Password</label>
                           <Field
                             type="password"
                             name="password"
                             className="form-control"
                             placeholder="Enter your password"
                           />
                           <ErrorMessage
                             name="password"
                             component="div"
                             className="text-danger"
                           />
                         </div>
                         <div className="mb-3">
  <label htmlFor="confirmPassword" className="labels">Confirm Password</label>
  <Field
    type="password"
    name="confirmPassword"  // <-- correct casing
    className="form-control"
    placeholder="Confirm password"
  />
  <ErrorMessage
    name="confirmPassword"
    component="div"
    className="text-danger"
  />
</div>

           
<button
  type="submit"
  className="btn btn-primary w-50 mx-auto d-block"
  disabled={isSubmitting}
>
  {isSubmitting ? "Registering..." : "Signup"}
</button>

                       </Form>
          )}
        </Formik>

        <div className="text-center mt-3">
          <p>
            Already have an account?{" "}
            <Link to="/" className="text-decoration-none">
              Login here
            </Link>
          </p>
        </div>
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center p-4">
  <h3 className="mb-3">Welcome Back!</h3>
  <p className="lead" style={{ maxWidth: "400px" }}>
    Signup to continue visit website, exploring new features, and staying connected.
  </p>
  <p className="text-muted fst-italic">
    “Your journey to productivity starts here.”
  </p>
</div>
      </div>
    </div>
  );
};

export default SignupForm;
