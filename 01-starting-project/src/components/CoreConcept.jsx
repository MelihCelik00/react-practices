export default function CoreConcept({image, title, description}) { // if you dont want to destructure param object (props), 
    return (                                          // you can use only props and props.image, props.title, props.description 
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  };