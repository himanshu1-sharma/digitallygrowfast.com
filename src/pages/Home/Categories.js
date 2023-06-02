
import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import CategoryList from "@/api/CategoryApi";
import Image from "next/image";
import Link from "next/link";


export default function Categories() {

    const [category] = useState(CategoryList)

    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.categoryBg}>
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-10">
                                <div className={styles.categoryTitle}>
                                    <h2>Next- Gen digital transformation solution for every {" "}
                                        <span>industry vertical</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            {category.map((curElt, index) => {
                                return (
                                    <>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                            <Link href={curElt.url}>
                                                <div className={styles.categoryCardBg}>
                                                    <div className={styles.categoryCardImg} style={{ backgroundImage: `url('${curElt.thumbnail}')` }}>
                                                        <div className={styles.categoryCardOverlay}>
                                                            <div className={styles.categoryIcon}>
                                                                <Image src={curElt.icon} width={25} height={25} alt={curElt.name} className="img-fluid" />
                                                            </div>
                                                            <div className={styles.categoryName}>
                                                                {curElt.name}
                                                                <Image src="/icons/next.png" alt="next" width={35} height={19} className="img-fluid" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
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
