import React, { useState } from "react";
import ShowLessMore from '../ShowLessMore/ShowLessMore';
import './Descreption.css';

export default function Descreption({courseData}) {

    const [showMore, set_show_more] = useState(false);
    const descreptions = courseData.descreptions;

    return (
        <div className="description-section">
            <div className="description">
                <h4>Description</h4>
                <div className={!showMore ? 'section_html_show_more' : 'section_html'} dangerouslySetInnerHTML={{ __html: descreptions }} />
                <ShowLessMore showMore={showMore} set_show_more={set_show_more} />
            </div>
        </div>
    )

}