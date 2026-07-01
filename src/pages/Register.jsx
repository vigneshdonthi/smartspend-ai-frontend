import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Eye,
  EyeOff,
  Wallet,
} from "lucide-react";

import { toast } from "sonner";

import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.password !== formData.confirm_password
    ) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await registerUser(formData);

      toast.success(
        "Account created successfully!"
      );

      navigate("/");

    } catch (error) {

      toast.error(
        error.response?.data?.error ||
          "Registration failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center p-6">

      <div className="absolute -top-28 -left-28 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-28 w-[30rem] h-[30rem] rounded-full bg-indigo-600/20 blur-3xl"></div>

      <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl p-10">

        <div className="flex flex-col items-center">

          <div className="mb-5 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-blue-300">
            AI Powered Personal Finance
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-5 rounded-full shadow-xl mb-6">
            <Wallet className="w-10 h-10 text-white" />
          </div>

          <p className="text-blue-300 text-sm uppercase tracking-[0.25em]">
            Welcome
          </p>

          <h1 className="mt-2 text-4xl font-extrabold text-white">
            Create Account
          </h1>

          <p className="mt-3 text-center text-slate-300 leading-6">
            Start managing your finances with
            AI-powered insights.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <Input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="h-12 rounded-xl border-white/20 bg-white/5 text-white placeholder:text-slate-400"
          />

          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="h-12 rounded-xl border-white/20 bg-white/5 text-white placeholder:text-slate-400"
          />

          <div className="relative">

            <Input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="h-12 rounded-xl border-white/20 bg-white/5 text-white placeholder:text-slate-400 pr-12"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-3.5 text-slate-400 hover:text-white"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          <div className="relative">

            <Input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              name="confirm_password"
              placeholder="Confirm Password"
              value={
                formData.confirm_password
              }
              onChange={handleChange}
              className="h-12 rounded-xl border-white/20 bg-white/5 text-white placeholder:text-slate-400 pr-12"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-4 top-3.5 text-slate-400 hover:text-white"
            >
              {showConfirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          <Button
            disabled={loading}
            className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-base font-semibold"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </Button>

        </form>

        <p className="text-center text-slate-300 mt-8">

          Already have an account?

          <Link
            to="/"
            className="ml-2 font-semibold text-blue-400 hover:text-blue-300"
          >
            Sign In
          </Link>

        </p>

        <p className="mt-8 text-center text-xs text-slate-500">
          © 2026 SmartSpend AI • Personal Finance Assistant
        </p>

      </div>

    </div>
  );
}

export default Register;