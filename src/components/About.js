import React from "react";
import { Outlet } from "react-router-dom";
class About extends React.Component {
    render() {
        return (
            <>
                <Outlet />
                <div>About</div>
            </>
        )
    }
}
export default About 