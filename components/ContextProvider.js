import { createContext } from "react";
import { useEffect, useState } from "react";
import { db } from "@/configuration/firebase-config";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsCollection = collection(db, "posts");
    const postsQuery = query(postsCollection, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      const fetchedItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(fetchedItems);
    });

    return () => unsubscribe();
  }, []);

  return <Context.Provider value={{ posts }}>{children}</Context.Provider>;
};

export default ContextProvider;
