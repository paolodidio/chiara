import React from 'react'

export default function Contact(props){
    return(
        <div>
            <h1>{props.fullName}</h1>
            <p>
                {props.address}<br/>
                non funziona la mail
                <a href={"mailto:"+props.email}>{props.email}</a><br/>
                <a href={"https://www.instagram.com/"+props.instagram}>{props.instagram}</a><br/>
                <a href={"https://www.youtube.com/"+props.youtube}>{props.youtube}</a>
            </p>
        </div>
    );
}