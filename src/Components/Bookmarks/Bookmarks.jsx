import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ cart, handlePrepare, cooking }) => {
    const removeFromCart = (index) => {
        handlePrepare(cart[index]);
    };
    const totalTime = cooking.reduce((acc, curr) => acc + parseInt(curr.preparing_time), 0);
    const totalCalories = cooking.reduce((acc, curr) => acc + parseInt(curr.calories), 0);

    return (
        <div className='border-2 border-black rounded-xl p-6 col-span-3'>
            <div>
                <h1 className="font-semibold text-3xl text-center my-4">Want to Cook : {cart.length}</h1>
                <hr />

                <table className="w-full">
                    <thead>
                        <tr className="cart-title flex justify-start gap-8 pl-2 text-xl my-4">
                            <th className="font-medium text-[#878787]">#</th>
                            <th className="font-medium text-[#878787]">Name</th>
                            <th className="font-medium text-[#878787] ml-5">Time</th>
                            <th className="font-medium text-[#878787] ml-3">Calories</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((bookmark, index) => (
                                <Bookmark key={bookmark.recipe_id} index={index} bookmark={bookmark} handleRemove={() => removeFromCart(index)} />
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div>
                <h1 className="font-semibold text-3xl text-center mb-4 my-12">Currently Cooking :{cooking.length} </h1>
                <hr />
                <table className="w-full">
                    <thead>
                        <tr className="cart-title flex justify-between gap-8 px-5 text-xl my-4">
                            <th className="font-medium text-[#878787]">#</th>
                            <th className="font-medium text-[#878787]">Name</th>
                            <th className="font-medium text-[#878787] ml-5">Time</th>
                            <th className="font-medium text-[#878787] ml-3">Calories</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            cooking.map((bookmark, index) => (
                                <tr key={bookmark.recipe_id} className="flex justify-around gap-9 mb-4 space-y-4 bg-slate-100 p-2 px-5 rounded-xl">
                                    <td className="text-2xl pt-4 font-semibold">{index + 1}</td>
                                    <td className="text-lg font-medium text-[#282828B3] ml-5">{bookmark.recipe_name}</td>
                                    <td className="text-lg font-medium text-[#282828B3] ">{bookmark.preparing_time}</td>
                                    <td className="text-lg font-medium text-[#282828B3] ml-4">{bookmark.calories} Calories</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <hr />
                <h2 className='text-xl font-semibold text-center mt-8'>Total Time : {totalTime} Minutes</h2>
                <h2 className='text-xl font-semibold text-center'>Total Calories : {totalCalories} Calories</h2>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    cart: PropTypes.array.isRequired,
    handlePrepare: PropTypes.func.isRequired,
    cooking: PropTypes.array
};

export default Bookmarks;