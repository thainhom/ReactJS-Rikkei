import React from "react";
import { Outlet } from "react-router-dom";
class AboutRikeiS extends React.Component {
    render() {
        return (
            <>
                <Outlet />
                <div>AboutRikeiS</div>
            </>

        )
    }
}
export default AboutRikeiS