import React from "react";
import { Outlet } from "react-router-dom";
class AboutRikeiS extends React.Component {
    render() {
        return (
            <>
                <Outlet />
                <div>Contact</div>
            </>

        )
    }
}
export default AboutRikeiS