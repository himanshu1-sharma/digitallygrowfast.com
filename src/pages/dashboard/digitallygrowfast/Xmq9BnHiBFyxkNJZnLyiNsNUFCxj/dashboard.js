import React, { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import styles from '@/styles/Dashboard.module.css'
import form from '@/styles/Contact.module.css'
import Navigation from "@/components/Navigation/Navigation";
import Button from "@/components/common/Button";
// import { UserContext } from "@/configs/Context";
import { useRouter } from "next/router";

export default function Dashboard() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const { user, logout } = useContext(UserContext)
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await Axios.post(`${BASEURL}api/admin/admin-login`, { email, password })
                .then(data => {
                    if (data.data.errorcode === 0) {

                        // setUser(data.data.data)
                        // localStorage.setItem('userInfo', JSON.stringify(data.data.data))
                        router.push("/dashboard/digitallygrowfast/Xmq9BnHiBFyxkNJZnLyiNsNUFCxj/dashboard")
                    }
                    else {

                    }
                })
        } catch (error) {
            console.log(error.message)
        }
    }


    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.dashboardBg}>
                    <Navigation />
                    <div className={styles.formContainer}>
                        <div className='container'>
                            <div className='row d-flex justify-content-center'>
                                <div className="col-lg-4">

                                    <div className={form.formBox}>
                                        <Form onSubmit={handleLogin}>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <Form.Group className="mb-3">
                                                        <Form.Control
                                                            type="email"
                                                            placeholder="Email"
                                                            name="email"
                                                            id="email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <Form.Group className="mb-3">
                                                        <Form.Control
                                                            type="password"
                                                            placeholder="Password"
                                                            name="password"
                                                            id="password"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <Button name="Login" />
                                        </Form>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
