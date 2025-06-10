import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/Auth/RegisterForm";
export default function Register(){
const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
          <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Create An Account 🏗</h2>
            <RegisterForm />
                <div>
                   <button onClick={()=> navigate("/login")}>Already have Account? Login</button>
                </div>
          </div>
        </div>
  );
};

;