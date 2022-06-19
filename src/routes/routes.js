import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";

import CustomerChart from "../components/Analytics/CustomerChart";
import CarChart from "../components/Analytics/CarChart";
import SalesChart from "../components/Analytics/SalesChart";
import Payment from "../components/Payment/Payment";
import Deposit from "../components/Deposit/Deposit";
import Marketing from "../components/Marketing/Marketing";
import CustomerDetails from "../components/Customers/CustomerDetails";
import Referral from "../components/Referral/Referral";
import Review from "../components/Review/Review";
import Support from "../components/Support/Support";


function AllRoutes(){
    return (
        <Routes>
            <Route exact path="/" caseSensitive={false} element={<Home />} />

            <Route exact path="/customerchart" caseSensitive={false} element={<CustomerChart/>} />
            <Route exact path="/carchart" caseSensitive={false} element={<CarChart/>} />
            <Route exact path="/saleschart" caseSensitive={false} element={<SalesChart/>} />
            <Route exact path="/payment" caseSensitive={false} element={<Payment/>} />
            <Route exact path="/deposit" caseSensitive={false} element={<Deposit/>} />
            <Route exact path="/customerdetails" caseSensitive={false} element={<CustomerDetails/>} />
            <Route exact path="/marketing" caseSensitive={false} element={<Marketing/>} />
            <Route exact path="/referral" caseSensitive={false} element={<Referral/>} />
            <Route exact path="/review" caseSensitive={false} element={<Review/>} />
            <Route exact path="/support" caseSensitive={false} element={<Support />} />
        </Routes>
    )
}

export default AllRoutes