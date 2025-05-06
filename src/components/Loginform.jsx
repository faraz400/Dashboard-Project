import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import "./login-signup.css"; // Import your custom CSS file
const LoginForm = () => {
  const navigate = useNavigate(); // Use useNavigate hook to programmatically navigate

  const initialValues = {
    email: "",
    password: "",
  };

  const hardcodedCredentials = {
    email: "user@example.com",
    password: "1234",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(4, "Minimum 4 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting, setErrors }) => { //handleSubmit function to handle form submission button click
    setTimeout(() => {
      if (
        values.email === hardcodedCredentials.email &&
        values.password === hardcodedCredentials.password
      ) {
        navigate("/dashboard");
      } else {
        setErrors({ email: "Invalid email or password" });
      }
      setSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container mt-5 mycustomclass">
      <div className="row align-items-center">
        <div className="col-md-6 shadow p-4 justify-content-center ">

          <h2 className="text-center mb-4 loginheading">Login</h2>
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

                <button
                  type="submit"
                  className="btn btn-primary w-50 mx-auto d-block" //mx-auto d-block centers the button
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </Form>
            )}
          </Formik>

          <div className="text-center mt-5">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-decoration-none">
                Register here
              </Link>
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center p-4">
          <h3 className="mb-3">Welcome Back!</h3>
          <p className="lead" style={{ maxWidth: "400px" }}>
            We're glad to see you again. Log in to continue managing your dashboard, exploring new features, and staying connected.
          </p>
          <p className="text-muted fst-italic">
            “Your journey to productivity starts here.”
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoginForm;
