import PlatterJpg from './assets/restauranfood.jpg';
import GreekSalad from './assets/greek salad.jpg';
import Bruchetta from './assets/bruchetta.jpg';
import LemonDessert from './assets/lemon dessert.jpg';

import RecipeCard from './RecipeCard.jsx';

const recipes = [
    {
        id: 1,
        title: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "12.99",
        image: GreekSalad
    },
    {
        id: 2,
        title: "Bruchetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: "5.99",
        image: Bruchetta
    },
    {
        id: 3,
        title: "Lemon Dessert",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: "5.00",
        image: LemonDessert
    }
];

export default function Main() {
    return (
        <main>
            <div className="grid grid-cols-12 gap-4 p-4 items-start bg-primary-green">
                <div className="md:col-start-3 md:col-span-3 col-start-1 col-span-12 flex flex-col h-full">
                    <div>
                        <h1 className="h1 text-primary-yellow mb-0">Little Lemon</h1>
                        <h3 className="h3 text-white">Chicago</h3>
                        <p className="font-sans text-white">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </div>
                    <div className="mt-auto pt-4">
                        <button className="button">Reserve a Table</button>
                    </div>
                </div>
                <div className="aspect-square w-full md:col-end-10 md:col-span-3 col-end-12 col-span-12">
                    <img
                        src={PlatterJpg}
                        alt="platter"
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 p-4 items-start">
                <div className="md:col-start-3 md:col-span-7 col-start-1 col-span-12">
                    <div className="flex justify-between items-center my-4">
                        <h1 className="h1">This week's specials!</h1>
                        <button className="button">Online Menu</button>
                    </div>
                </div>
                <div className="md:col-start-3 md:col-span-7 col-start-1 col-span-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {recipes.map(recipe => (
                            <RecipeCard
                                key={recipe.id}
                                title={recipe.title}
                                description={recipe.description}
                                price={recipe.price}
                                image={recipe.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}