import RecipeInfo from './RecipeInfo'

export default function Recipe (props) {
    

    return (

    <ul style={{listStyle: 'none', display: 'flex', flexWrap: 'wrap', textAlign: 'center'}}>
        {props.recipies.map((item, index) => {

            return (

                <RecipeInfo key = {index} {...item} />
            );
        })}
    </ul>
    )
  }