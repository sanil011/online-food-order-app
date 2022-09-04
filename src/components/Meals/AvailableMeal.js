import classes from './AvailableMeal.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Chilly Potato',
      description: 'Finest Potatoes and veggies',
      price: 100,
    },
    {
      id: 'm2',
      name: 'Paneer Lababdar',
      description: 'A Indian specialty!',
      price: 220,
    },
    {
      id: 'm3',
      name: 'Malai Kofta',
      description: 'Prepare in pure desi ghee',
      price: 180,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 210,
    },
  ];

  const AvailableMeal = () =>{
    return(
        <section className={classes.meals}>
        <Card>
            <ul>{DUMMY_MEALS.map(meal => <MealItem 
             id={meal.id}
             key={meal.id} 
             name={meal.name} 
             description={meal.description}
             price={meal.price}/>
             )}</ul>
            </Card>
        </section>
    )
  } ;
  export default AvailableMeal;