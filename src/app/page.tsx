'use client'
import IntialLoader from "@/Component/Loader/InitialLoader";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
      redirect('/home')
  },[])
  return (
    <IntialLoader/>
  );
}
