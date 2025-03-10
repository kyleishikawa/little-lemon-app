import { MdDeliveryDining } from 'react-icons/md';

export default function RecipeCard({ title, description, price, image }) {
    return (
        <div className="bg-highlight-grey rounded-lg overflow-hidden flex flex-col h-full">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-6">
                    <h4 className="h4">{title}</h4>
                    <span className="text-secondary-coral">${price}</span>
                </div>
                <p className="mb-auto">{description}</p>
                <button className="mt-6 text-left flex items-center cursor-pointer hover:text-primary-green">
                    <span>Order a delivery</span>
                    <MdDeliveryDining className="ml-2 text-2xl" />
                </button>
            </div>
        </div>
    );
}