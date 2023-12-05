import './Header.css';
import reactImg from '../../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Core', 'Crucial', 'Essential'];

function generateRandomIndex() {
  return Math.floor(Math.random() * reactDescriptions.length);
};

export default function Header() {
    const description = reactDescriptions[generateRandomIndex()];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  };
