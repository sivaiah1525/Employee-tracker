import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './pages.css';

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onLogin = (data) => {
    console.log("Form Data:", data);

    // simple login example
    if (data.email === "admin@gmail.com" && data.password === "admin@12345") {
      localStorage.setItem("auth", "true");
      navigate("/main/dashboard");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <form onSubmit={handleSubmit(onLogin)} className="login-box">
      <h2>Login</h2>

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

      <button type="submit">Login</button>
    </form>
  );
}
