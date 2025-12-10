import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './pages.css';
import  {authService} from "../services/auth"
export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const password = watch("password");

  const onRegister = async (data) => {
    console.log(data);
      const body = {
        name:data.name,
      email: data.email,
      password: data.password,
    }
    try {
          const apires=await authService.register(body)
    console.log(apires)
    // store user for demo
    localStorage.setItem("registeredUser", JSON.stringify(data));
        window.alert("Register Successful");

    navigate("/login");
    } catch (error) {
    window.alert("Something went wrong, please try again");
    }
  };
  const backtologin=()=> navigate("/login");
  

  return (
   <form onSubmit={handleSubmit(onRegister)} className="container">
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
      validate: (value) => value === password || "Passwords do not match",
    })}
  />
  {errors.confirmPassword && (
    <p className="error">{errors.confirmPassword.message}</p>
  )}

       <div className="actionbuttons">
        <button className="blackbutton" onClick={backtologin}>Bact To Login</button>
        <button type="submit">Register</button>
       </div>
</form>
  );
}
