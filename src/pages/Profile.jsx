import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import {
  getProfile,
  updateProfile,
} from "../services/profileService";

function Profile() {
  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getProfile();
      setProfile(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await updateProfile(profile);

      toast.success("Profile updated successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Unable to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">

        <h1 className="text-3xl font-bold mb-8">
          My Profile
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="text-sm font-medium">
              First Name
            </label>

            <Input
              name="first_name"
              value={profile.first_name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Last Name
            </label>

            <Input
              name="last_name"
              value={profile.last_name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Username
            </label>

            <Input
              name="username"
              value={profile.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Email
            </label>

            <Input
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </div>

        </div>

        <Button
          className="mt-8"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </Button>

      </div>

    </DashboardLayout>
  );
}

export default Profile;