import React, { useState, useRef } from "react";
import { createContext, useEffect } from "react";

export const Context = createContext({});

export const Provider = (props) => {

    const {children} = props;
    const [coursesList, setCoursesList] = useState();
    const [topCategories, setTopCategories] = useState();
    const [currTab, setCurrTab] = useState("ssc_cgl");
    const [searchTerm, setSearchTerm] = useState('');
    const [YLimit, setYLimit] = useState(0);
    const YRef = useRef(null);
    const Categories = {
        "ssc_cgl": "SSC CGL",
        "ssc_chsl": "SSC CHSL",
        "ssc_cpo": "SSC CPO",
        "railway_d": " Railway Group D",
        "railway_ntpc": "Railway NTPC",
        "railway_alp": "Railway ALP" 
    }

    const ScreenDimensions = {
        Mobile: {
            maxWidth: 464,
            minWidth: 0,
            coverHeight: 800,
        },
        Tablet: {
            maxWidth: 1024,
            minWidth: 464,
            coverHeight: 900,
        },
        Desktop: {
            maxWidth: 1440,
            minWidth: 1024,
            coverHeight: 1000,
        },
        Large_Desktop: {
            maxWidth: 3000,
            minWidth: 1440,
            coverHeight: 400,
        }
    }

    useEffect(() => {

        // TODO API 
        fetch("")
        .then((res) => res.json())
        .then((res) => {
            setCoursesList(res.data)
        });

        fetch("")
        .then((res) => res.json())
        .then((res) => {
            setTopCategories(res);
        });

    }, []);

    const queryCourse = (courseTab, courseId) => {
        if(courseList === undefined) {
            fetch("")
            .then((res) => res.json())
            .then((res) => {
                setCoursesList(res.data);
            });
            return null;
        }

        const courses = coursesList[courseTab].items;

        for(let course of courses)
        if(course.id === courseId)
        return course;
    }

    const coursesContext = {
        coursesList,
        topCategories,
        currTab,
        searchTerm,
        ScreenDimensions,
        YRef,
        YLimit,
        Categories,
        queryCourse,
        setCurrTab,
        setSearchTerm,
        setYLimit
    };

    return <Context.Provider value={coursesContext}>{children}</Context.Provider>;
}