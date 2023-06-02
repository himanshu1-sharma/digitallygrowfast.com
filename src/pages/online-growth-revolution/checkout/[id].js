import React, { useEffect, useState } from "react";
import styles from "@/styles/Checkout.module.css";
import Head from "next/head";
import { BASEURL, KEY } from "@/configs/constants";
import axios from "axios";
import Script from "next/script";
import { useRouter } from "next/router";
import Image from "next/image";
import Navigation from "../Navigation";

export default function Payment() {
    const [sdkReady, setSdkReady] = useState(false);
    const [order, setOrder] = useState();
    const router = useRouter();
    const { id } = router.query;
    const [userData, setUseData] = useState({});
    const [getOrder, setGetOrder] = useState();
    const [amount, setAmount] = useState()

    console.log("getOrder", getOrder);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Retrieve data from local storage
            const userdata = JSON.parse(localStorage.getItem("userData"));

            // Update state if data exists
            if (userdata) {
                setUseData(userdata);
            }
        }
    }, []);

    // console.log("user token", userData);

    // console.log("userDetail", userDetail);

    console.log("userData", userData);

    const fetchGetOrder = async () => {
        try {
            await axios
                .get(`${BASEURL}api/dgf/payment/get-all-order`)
                .then((data) => {
                    console.log("data", data.data.data);
                    data.data.data.map((curElt) => {
                        if (curElt.user._id === userData._id) {
                            setGetOrder(curElt);
                        }
                    });
                });
        } catch (error) {
            console.log(error);
        }
    };

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    const handleCheckout = async (e) => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }
        const price = e.target.value;
        const gst = price * 18 / 100;
        const totalamount = Number(price) + parseFloat(gst)
        const amount = totalamount * 100;
        // setAmount(e.target.value * 18 / 100 * 100)

        // await axios
        //   .post(`${BASEURL}api/dgf/payment/checkout`, { amount, userData })
        //   .then((data) => {
        //     setOrder(data.data);
        //   });

        // console.log("price", typeof Number(price))
        // console.log("gst", typeof gst)
        // console.log("totalamount", totalamount)
        // console.log("amount", amount)

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            var resp = await axios.post(`${BASEURL}api/dgf/payment/checkout`, {
                amount,
                userData,
                config
            });
        } catch (error) {
            console.log("order id error", error.response)
        }



        console.log("resp", resp.data.data);

        const orderdata = {
            user: userData.name,
            email: userData.email,
            number: userData.number,
        };

        const options = {
            key: `${KEY}`,
            amount: amount,
            currency: "INR",
            name: "Digrowfa PVT LTD",
            description: "Make the payment to complete the process",
            // image: "https://digrowfa-service.s3.ap-south-1.amazonaws.com/digrowfa-service/revolutionClient/svctoys5angs5w6w7kprns.jpg",
            order_id: resp.data.data.orderId,
            // callback_url: `${BASEURL}api/dgf/payment/payment-verification`,
            handler: async (response) => {
                await axios.post(`${BASEURL}api/dgf/payment/payment-verification`, {
                    options,
                    orderdata,
                    response,
                });
                router.push("/online-growth-revolution/thankyou");
            },
            prefill: {
                name: userData.name,
                email: userData.email,
                contact: userData.number,
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#000000",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    useEffect(() => {
        setSdkReady(true);
        fetchGetOrder();
    }, []);

    console.log("amount", amount);

    const localAmount = 999;
    const localGst = 999 * 18 / 100;
    const totalLocalAmount = localAmount + localGst;

    return (
        <>
            <Head>
                <title>Checkout</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script> */}

            <Navigation />

            <section className="container-fluid p-0">
                <div className={styles.checkoutBg}>
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-12 col-12" id="order2">
                                <div className={styles.checkoutDetail}>
                                    <h1>Payment Details</h1>
                                    {userData.name &&
                                        <div className={styles.checkoutUserDetail}>
                                            <label>Name</label>
                                            <div>{userData.name}</div>
                                        </div>
                                    }

                                    {userData.category &&
                                        <div className={styles.checkoutUserDetail}>
                                            <label>Industry</label>
                                            <div>{userData.category}</div>
                                        </div>
                                    }


                                    {userData.businessName &&
                                        <div className={styles.checkoutUserDetail}>
                                            <label>Business Name</label>
                                            <div>{userData.businessName}</div>
                                        </div>
                                    }

                                    {userData.email &&
                                        <div className={styles.checkoutUserDetail}>
                                            <label>Email</label>
                                            <div>{userData.email}</div>
                                        </div>
                                    }

                                    {userData.number &&
                                        <div className={styles.checkoutUserDetail}>
                                            <label>Contact/Whatsapp Number</label>
                                            <div>{userData.number}</div>
                                        </div>
                                    }

                                    {userData.state &&
                                        <div className={styles.checkoutUserDetail}>
                                            <label>State</label>
                                            <div>{userData.state}</div>
                                        </div>
                                    }

                                    {userData.cityDistrict &&
                                        <div className={styles.checkoutUserDetail}>
                                            <label>City District</label>
                                            <div>{userData.cityDistrict}</div>
                                        </div>
                                    }

                                    {userData.postcode &&
                                        <div className={styles.checkoutUserDetail}>
                                            <label>Postcode</label>
                                            <div>{userData.postcode}</div>
                                        </div>
                                    }

                                    {userData.message &&
                                        <div className={styles.checkoutUserDetail}>
                                            <label>About your business</label>
                                            <div>{userData.message}</div>
                                        </div>
                                    }


                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 col-md-5 col-sm-12 col-12" id="order1">
                                <div className={styles.checkoutCard}>
                                    <div className={styles.cardContent}>
                                        <Image src="/OnlineGrowthRevolution/cardIcon.png" alt="icon" width={27} height={29} className="img-fluid" />
                                        <h2><span># Mission 999</span> <br /> Online Business Setup</h2>
                                    </div>
                                    <div className={styles.cardContentList}>
                                        <ul>
                                            <li>Subtotal</li>
                                            <li><b>{localAmount}/-</b></li>
                                        </ul>
                                        <ul>
                                            <li>GST <small>(18%)</small></li>
                                            <li><b>{localGst}/-</b></li>
                                        </ul>
                                        <div className={styles.divider}></div>
                                        <ul>
                                            <li>Total Amount</li>
                                            <li><b>{totalLocalAmount}/-</b></li>
                                        </ul>
                                        <button value="999" onClick={handleCheckout}>
                                            Make Payment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
