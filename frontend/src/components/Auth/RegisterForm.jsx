import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { registerUser } from "../../api/auth";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
export default function RegisterForm() {

    const [error,setError] = useState("");

    const {register,handleSubmit,formState:{errors}} = useForm({resolver:zodResolver(schema)})

    const onSubmit = async(data)=>{
         try {
      const res = await registerUser(data);
      alert("Registered successfully");
      console.log(res);
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    }
    }

    return(
         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register("name")}
        placeholder="Name"
        className="w-full mb-2 p-2 border rounded"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        {...register("email")}
        placeholder="Email"
        type="email"
        className="w-full mb-2 p-2 border rounded"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        {...register("password")}
        placeholder="Password"
        type="password"
        className="w-full mb-2 p-2 border rounded"
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button type="submit" className="w-full bg-blue-600 text-white py-2 mt-3 rounded hover:bg-blue-700">
        Register
      </button>
    </form>
    )
}
