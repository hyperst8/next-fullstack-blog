"use client";
import useSWR from "swr";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Hyperst8 | Dashboard",
  description: "This is the dashboard page",
};

const Dashboard = () => {
  /** useEffect method to fetch data **/
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsloading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsloading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json();
  //     setData(data);
  //     setIsloading(false);
  //   };

  //   getData();
  // }, []);

  //** Session **/
  const session = useSession();

  const router = useRouter();

  /** SWR method to fetch data **/
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (session.status === "loading") {
    return <div>loading...</div>;
  }

  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return <div className={styles.container}>Dashboard</div>;
  }
};

export default Dashboard;
