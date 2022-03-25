import React from "react";
import GlossaryListEntry from './GlossaryListEntry.jsx';


var GlossaryList = (props) => {
  return (
    <div>
      {
        props.glossaries.map((glossary, index) =>
        (<GlossaryListEntry key={index} glossary={glossary}/>)
        )
      }
    </div>
  )
}

export default GlossaryList;