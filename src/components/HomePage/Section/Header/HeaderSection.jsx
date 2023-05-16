import React, { useContext } from "react";
import AboveCourses from "./AboveCourses";
import Header from "./Header";
import { Context } from "../../../Context";


export default function HeaderSection() {

    const { courseList } = useContext(Context);

    return (
        <div>
            <Header />
            {courseList ? <AboveCourses /> : null}
        </div>
    );
}