import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Home from "../components/home/Home";
import Login from "../components/login/Login";

export default function HomePage(props) {
  return (
    <div className="pgContain">
      <Home />
    </div>
  );
}
