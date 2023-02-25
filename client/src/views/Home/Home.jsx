import Cards from "../../components/Cards/Cards";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions";
import SearchBar from "../../components/Searchbar/SearchBar";

const Home = () => {


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  },[])



  return (
    <div>
      <SearchBar/>
      <Cards/>
    </div>
  );
};

export default Home;
