import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";

import CustomerDetails from "../components/Customers/CustomerDetails";
import Referral from "../components/Referral/Referral";
import Review from "../components/Review/Review";
import Support from "../components/Support/Support";


function AllRoutes(){
    return (
        <Routes>
            <Route exact path="/" caseSensitive={false} element={<Home />} />

            <Route exact path="/customerdetails" caseSensitive={false} element={<CustomerDetails/>} />

            <Route exact path="/referral" caseSensitive={false} element={<Referral/>} />
            <Route exact path="/review" caseSensitive={false} element={<Review/>} />
            <Route exact path="/support" caseSensitive={false} element={<Support />} />
        </Routes>
    )
}

export default AllRoutes