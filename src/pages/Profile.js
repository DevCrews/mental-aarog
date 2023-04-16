import Navbar from "../components/Navbar";
import supabase from "../config";
import { useEffect, useState } from "react";
import profile from "../lottieFiles/profile.json";
import Lottie from "react-lottie";

const Profile = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const user = supabase.auth.user();
    if (user) {
      setUser(user);
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-w-flex profile">
        {user && (
          <>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: profile,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={300}
              width={300}
            />

            <div className="flex-center">
              <div className="dash-card dash-card-auto">
                <h2>{user.user_metadata.name}</h2>
                <p>📧 {user.email}</p>
                <p>📞 {user.user_metadata.mobile}</p>
                <p>🐦 @{user.user_metadata.twitter}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
