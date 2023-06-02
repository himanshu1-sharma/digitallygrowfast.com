import React, { useEffect, useState, useRef } from "react"
import styles from "@/styles/Invoice.module.css";
import { useReactToPrint } from 'react-to-print';
import Image from "next/image";
import Table from 'react-bootstrap/Table';



export default function Invoice() {

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Digrowfa-Invoice'

    })

    return (
        <>
            {/* <div ref={componentRef}>
                <div className={styles.invoiceBg}>
                    <div className={styles.invoiceBox}>
                        <div className={styles.invoiceHeader}>
                            <ul>
                                <li>
                                    <Image src="/logo/logoBig.webp" width={150} height={150} alt="digrowfa logo" />
                                </li>
                                <li>INVOice</li>
                            </ul>
                        </div>
                        
                    </div>

                </div>
            </div> */}

            <div ref={componentRef}>
                <section className="container-fluid p-0">
                    <div className={styles.invoiceBg}>
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-12">
                                    <div className={styles.studentInvoice}>
                                        <div className={styles.invoiceTableHeader}>
                                            <Table>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={2}>
                                                            <Image src="/logo/logoBig.webp" width={150} height={150} alt="digrowfa logo" />
                                                        </td>
                                                        <td className={`${styles.invoiceHeaderText} ${styles.invoiceLeftContent}`}>
                                                            <b>Original for recipient</b>
                                                            <h1>Tax invoice</h1>
                                                            <p>Invoice No.: 123456789</p>
                                                            <p>Invoice Data: 1 June 2023</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className={styles.invoiceTableDetail}>
                                            <Table>
                                                <tbody>
                                                    <tr>
                                                        <td className={styles.invoiceTableDetailText}>
                                                            <h2>Supplier details:</h2>
                                                            <p>Digrowfa Private Limited</p>
                                                            <p>S-193, first floor school block,</p>
                                                            <p>shakarpur, laxmi nagar,</p>
                                                            <p>Delhi 110092</p>
                                                            <p>GSTIN : 07AAICD5869P1ZR</p>
                                                        </td>
                                                        <td className={`${styles.invoiceTableDetailText} ${styles.invoiceLeftContent}`}>
                                                            <h2>recipient details:</h2>
                                                            <p>Himanshu Sharma</p>
                                                            <p>himanshu@gmail.com</p>
                                                            <p>9555271705</p>
                                                            <p>B-576 Karan Vihar, Phase V, Kirari Suleman Nagar</p>
                                                            <p>New Delhi 110086</p>
                                                            <p>GSTIN : ---</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className={styles.invoiceProductDetail}>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>Description</th>
                                                        <th>HSN</th>
                                                        <th>Qty.</th>
                                                        <th>Taxable Value</th>
                                                        <th>GST(18%)</th>
                                                        <th>Total Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td>9984 33</td>
                                                        <td>1</td>
                                                        <td><b>999</b></td>
                                                        <td><b>179.82</b></td>
                                                        <td><b>1178.82</b></td>
                                                    </tr>
                                                </tbody>
                                                <thead>
                                                    <tr>
                                                        <th><b>Total</b></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th><b>INR 999</b></th>
                                                    </tr>
                                                </thead>
                                            </Table>
                                        </div>


                                        <p className={styles.invoiceTag}><i>This is a system generated invoice and does not require a signature or a digital signature</i></p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className={styles.printBtn}>
                <button onClick={handlePrint}>print</button>
            </div>


        </>
    )
};
