import React from 'react'


export default function Credits(props){
    return(
        <p>
            Website developed by {props.developer},{" "}
            <a href={"mailto:"+props.email}>{props.email}</a>
        </p>
    );
}