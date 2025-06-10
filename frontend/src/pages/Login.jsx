import{useNavigate} from "react-router-dom"
import LoginForm from "../components/Auth/LoginForm";

export default function Login(){
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login 🚀</h2>
        <LoginForm onSuccess={() => navigate("/")} />
            <div>
               <button className="text-center mb-6 mt-2" onClick={()=> navigate("/register")}>Create New Account</button>
            </div>
      </div>
    </div>
    )
}