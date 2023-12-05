import { useState } from 'react';
import { CORE_CONCEPTS } from './core_concepts_data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button.');

  function handleSelect(selectedButton) {
    // selectedButton => 'components' | 'jsx' | 'props' | 'state' 
    setSelectedTopic(selectedButton);
    // console.log(selectedButton);
  };
  
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
          <CoreConcept 
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
};

export default App;