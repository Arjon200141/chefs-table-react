import PropTypes from 'prop-types';

const Recipe = ({recipe , handleRecipe}) => {
    const {recipe_image , recipe_name , short_description , ingredients , preparing_time , calories} = recipe;

    return (  
            <div className=' border-solid border-2 border-[#747373] p-8 rounded-xl'>
            <img src={recipe_image} alt="" className='w-[331px] h-[200px] mb-4 rounded-md'/>
            <h2 className='font-semibold text-xl mb-2'>{recipe_name}</h2>
            <p className='text-[#878787] mb-4'>{short_description}</p>
            <hr />
            <h3 className='text-lg font-semibold mt-6'>Ingredients : {ingredients.length}</h3>
            <ul className='list-disc my-6 px-4'>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <hr />
            <div className='mt-4 flex gap-12'>
                <div className='flex gap-2'>
                    <img src="https://i.ibb.co/r7yg2FW/clock.png" alt="" className='h-5 w-5'/>
                    <p>{preparing_time}</p>
                </div>
                <div className='flex gap-2'>
                    <img src="https://i.ibb.co/yqpLXr2/fire.png" alt="" className='h-5 w-5'/>
                    <p>{calories}</p>
                </div>
            </div>
            <button onClick={() => handleRecipe(recipe)} className="btn bg-[#0BE58A] rounded-[50px] mt-6 px-4">Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe : PropTypes.object.isRequired,
    handleRecipe: PropTypes.func
}
export default Recipe;