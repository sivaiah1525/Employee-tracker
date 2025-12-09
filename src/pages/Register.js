import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './pages.css';

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const password = watch("password");

  const onRegister = (data) => {
    console.log(data);

    // store user for demo
    localStorage.setItem("registeredUser", JSON.stringify(data));

    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit(onRegister)} className="register-box">
      <h2>Create Account</h2>

      <label>Name</label>
      <input
        type="text"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <label>Email</label>
      <input
        type="email"
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <label>Password</label>
      <input
        type="password"
        {...register("password", { required: "Password is required" })}
      />
      {errors.password && <p className="error">{errors.password.message}</p>}

      <label>Confirm Password</label>
      <input
        type="password"
        {...register("confirmPassword", {
          required: "Confirm password is required",
          validate: (value) =>
            value === password || "Passwords do not match"
        })}
      />
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword.message}</p>
      )}

      <button type="submit">Register</button>
    </form>
  );
}
