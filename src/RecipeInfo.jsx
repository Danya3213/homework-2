export default function App (props) {

    console.log(props);    

    return (
  
        <li style={{border: 'solid white 1px', marginBlock: '30px'}}>
            <img src={props.image} alt="" width={500} />
            <h2>{props.name}</h2>
            <h3>{props.time}</h3>
            <h3>{props.servings}</h3>
            <h3>{props.calories}</h3>
            <h3>{props.difficulty}</h3>
        </li>
    );
}