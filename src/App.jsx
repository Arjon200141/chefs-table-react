import { useState } from 'react';
import './App.css';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header';
import Recipes from './Components/Recipes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const handleRecipe = (recipe) => {
    const isExist = wantToCook.find(item => item.recipe_id === recipe.recipe_id);
    if (!isExist) {
      setWantToCook([...wantToCook, recipe]);
    } else {
      toast.warning("This recipe has already been Added!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
  }
};

  const handlePrepare = (recipe) => {
    const updatedCart = wantToCook.filter(item => item.recipe_id !== recipe.recipe_id);
    setWantToCook(updatedCart);
    setCurrentlyCooking([...currentlyCooking, recipe]);
  };

  return (
    <>
      <Header />
      <div className='grid grid-cols-7 mx-12 mb-10 gap-4'>
        <Recipes handleRecipe={handleRecipe} />
        <Bookmarks cart={wantToCook} cooking={currentlyCooking} handlePrepare={handlePrepare} />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
