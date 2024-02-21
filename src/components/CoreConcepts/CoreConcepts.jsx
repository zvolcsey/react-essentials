import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "../CoreConcept/CoreConcept";
import "./CoreConcepts.css"

export default function CoreConcepts() {
  let coreConceptsElements = CORE_CONCEPTS.map((conceptItem) => 
    <CoreConcept key={conceptItem.title} {...conceptItem} />
  );

  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {coreConceptsElements}            
      </ul>
    </section>
  );
}