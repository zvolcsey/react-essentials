import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import Section from "../Section/Section";
import "./Examples.css";
import Tabs from "../Tabs/Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'jsx', 'state', 'components', 'props'
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  let buttons = (
    <>
      <TabButton
        isSelected={selectedTopic === 'components'}
        onClick={() => handleSelect('components')} 
      >Components</TabButton>
      <TabButton 
        isSelected={selectedTopic === 'jsx'}
        onClick={() => handleSelect('jsx')} 
      >JSX</TabButton>
      <TabButton 
        isSelected={selectedTopic === 'props'}
        onClick={() => handleSelect('props')} 
      >Props</TabButton>
      <TabButton
        isSelected={selectedTopic === 'state'}
        onClick={() => handleSelect('state')} 
      >State</TabButton>
    </>
  );

  return (
    <Section title={"Examples"} id="examples">
      <Tabs buttons={buttons}>
        {tabContent}
      </Tabs>
    </Section>
  );
}