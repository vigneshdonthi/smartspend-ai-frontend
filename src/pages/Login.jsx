import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Eye, EyeOff, Wallet } from "lucide-react";

import useAuth from "../hooks/useAuth";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await login(formData);

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.error || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center p-6">

      <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">

        <div className="flex flex-col items-center mb-8">

          <div className="bg-blue-600 p-4 rounded-full mb-4">
            <Wallet className="text-white w-8 h-8" />
          </div>

          <h1 className="text-3xl font-bold text-white">
            SmartSpend AI
          </h1>

          <p className="text-slate-300 mt-2">
            Welcome Back
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <Input
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          <div className="relative">

            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="button"
              className="absolute right-3 top-3"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>

          <Button
            className="w-full"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Login"}
          </Button>

        </form>

        <p className="text-center text-slate-300 mt-6">

          Don't have an account?

          <Link
            className="text-blue-400 ml-2"
            to="/register"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;