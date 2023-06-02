
import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import plan from "@/styles/Plan.module.css";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/router";
import PlanApi from "@/api/PlanApi";

export default function Plan() {


    const [planList] = useState(PlanApi)
    const router = useRouter();
    const { asPath } = router;
    const [params] = useState(asPath)

    console.log("asPath1", asPath)

    const handleGrowth = (e) => {
        const curValue = e.target.value;
        planList.map(curElt => {
            if (curValue === curElt.url) {
                router.push({
                    pathname: `${curElt.url}`,
                    query: { page: asPath }
                });
            }

        })

    }

    return (
        <>

            <section className="container-fluid p-0">
                <div className={styles.businessGoalsBg}>
                    <div className='container'>
                        <div className='row mt-5'>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className={plan.title}>
                                    <h2>Choose the best online growth package <br /> <span> for your business.</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center mt-5">
                            {planList && planList.map((curElt, index) => {
                                return (
                                    <>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className={plan.planCardBg} key={index}>
                                                <div className={plan.planCard}>
                                                    <div className={plan.planCardIcon} style={{ backgroundImage: `url('/icons/${curElt.icon}.png')` }}></div>
                                                    <h4>{curElt.name} <br />
                                                        <span>{curElt.span}</span></h4>
                                                    <h6>
                                                        {curElt.priceTitle}<br />
                                                        <span>₹{curElt.price}/-</span>
                                                    </h6>

                                                    <p>{curElt.description}</p>

                                                    <div className="w-100 d-flex justify-content-end">
                                                        <div className={plan.planBtn}>
                                                            <button value={curElt.url} onClick={handleGrowth}>View Detail</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
