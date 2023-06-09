import React from "react";
import './Tabs.css';
import { Context } from '../../../Context';
import { useContext } from "react";

export default function Tabs() {

    const { setCurrTab, currTab} = useContext(Context);

    const onChange = (event) => {
        const tab_id = event.target.id;
        setCurrTab(`${tab_id}_res`);
    }

    return (
        <div className="courses-categories" id='courses_view'>
            <form className="courses-tab-section">
                <input onChange={onChange} id='python' type='radio' name='courses-tab' defaultChecked={'python_res' === currTab}/>
                <label htmlFor='python' id='python_label'>Python</label>
                <input onChange={onChange} id="excel" type="radio" name="courses-tab" defaultChecked={'excel_res' === currTab}/>
                <label htmlFor="excel" id="excel_label">Excel</label>
                <input onChange={onChange} id="web" type="radio" name="courses-tab" defaultChecked={'web_res' === currTab}/>
                <label htmlFor="web" id="web_label">Web Development</label>
                <input onChange={onChange} id="js" type="radio" name="courses-tab" defaultChecked={'js_res' === currTab}/>
                <label htmlFor="js" id="js_label">Java Script</label>
                <input onChange={onChange} id="data" type="radio" name="courses-tab" defaultChecked={'data_res' === currTab}/>
                <label htmlFor="data" id="data_label">Data Science</label>
                <input onChange={onChange} id="aws" type="radio" name="courses-tab" defaultChecked={'aws_res' === currTab}/>
                <label htmlFor="aws" id="aws_label">AWS Certification</label>
                <input onChange={onChange} id="draw" type="radio" name="courses-tab" defaultChecked={'draw_res' === currTab}/>
                <label htmlFor="draw" id="draw_label">Drawing</label>	
            </form>
        </div>
    )
}