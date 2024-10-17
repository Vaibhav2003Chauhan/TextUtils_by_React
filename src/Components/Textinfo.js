import React from 'react'

export default function Textinfo(props) {
    let textInfo=props.text;
    console.log(textInfo);
    let charNum=textInfo.length;
    let numofWords=textInfo.split(" ").length;

  return (
    <>
    <p>{charNum} Character and {numofWords - 1} Words</p>
    <p>{0.08 * (textInfo.split("").length)} Minute Read</p>
    </>
  )
}
