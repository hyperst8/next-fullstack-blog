"use client";
import useSWR from "swr";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

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

  /** SWR method to fetch data **/

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
