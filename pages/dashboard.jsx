import { signOut } from "firebase/auth";
import { auth } from "@/configuration/firebase-config";
import useAuth from "@/Hooks/UseAuth";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Loading from "@/components/Loading";

import Posts from "./posts";

export default function Dashboard() {
  const router = useRouter();
  const { user, isAdmin, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.replace("/login");
    }
  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  return isAdmin ? (
    <div className="container py-5">
      <button className="btn btn-primary mb-5" onClick={handleLogout}>
        Logout
      </button>
      <Posts />
    </div>
  ) : (
    <Loading />
  );
}
