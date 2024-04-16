"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import styles from "@/app/styles/Register.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import { Form } from "rsuite";

const Register = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/register", user);
      console.log("Signup success", response.data);
      router.push("/auth/login"); 
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.name.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className={styles.signup_form}>
      <div className={styles.form_container}>
        <p className={styles.title}>
          {loading ? <CircularProgress /> : "Create account"}
        </p>
        <Form className={styles.form}>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.input}
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Enter name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            className={styles.input}
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter email"
            required
          />
          <input
            type="phone"
            name="phone"
            id="phone"
            className={styles.input}
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            placeholder="Enter mobile number"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            className={styles.input}
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter password"
            required
          />
          <p className={styles.page_link}>
            {/* <span className={styles.page_label}>Forgot Password?</span> */}
          </p>
          <button onClick={onSignup} className={styles.form_btn}>
            {buttonDisabled ? "No signup" : "Sign up"}
          </button>
        </Form>
        <p className={styles.sign_up_label}>
          Already have an account?
          <span className={styles.sign_up_link}>
            <Link href="/auth/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
