import PropTypes from 'prop-types';

const Bookmark = ({ index, bookmark, handleRemove }) => {
  const { recipe_name, preparing_time, calories } = bookmark;

  return (
    <tr className="flex justify-around items-center gap-2 mb-4 space-y-4 bg-slate-100 px-2 pb-4 rounded-xl">
      <td className="text-xl pt-5 font-semibold ">{index + 1}</td>
      <td className="text-lg font-medium text-[#282828B3]">{recipe_name}</td>
      <td className="text-lg font-medium text-[#282828B3]">{preparing_time}</td>
      <td className="text-lg font-medium text-[#282828B3]">{calories} Calories</td>
      <td>
        <button onClick={handleRemove} className="btn bg-[#0BE58A] rounded-[50px] w-full">Preparing</button>
      </td>
    </tr>

  );
};

Bookmark.propTypes = {
  index: PropTypes.number.isRequired,
  bookmark: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default Bookmark;