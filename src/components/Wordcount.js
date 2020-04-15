import React from "react"
 
export default function Wordcount (props) {

  return (
    <section>
        <h1>Results</h1>
        <div>
        	<p>lines: {props.lines}</p>
        	<p>words: {props.words}</p>
        	<p>bytes: {props.bytes}</p>
        </div>
    </section>
  )
}