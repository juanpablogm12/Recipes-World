import Card from "../Card/Card";
import { useSelector } from "react-redux";
import style from "./Cards.module.css";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";

const Cards = () => {
  const recipes = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = recipes.slice(indexOfFirstPost, indexOfLastPost);
  const recipesRender = recipes.length > 9 ? currentPost : recipes;
  console.log(recipes)
  return (
    <div className={style.card_container}>
      <div>
        {recipes.length > 9 && (
          <Pagination
            postPerPage={postsPerPage}
            totalPosts={recipes.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        )}
      </div>
      <div className={style.cards}>
        {recipesRender &&
          recipesRender.map(({ id, title, image, diets }) => {
            return (
              <Card
                key={id}
                id={id}
                title={title}
                image={image}
                diets={diets}
              />
            );
          })}
      </div>
      <div>
        {recipes.length > 9 && (
          <Pagination
            postPerPage={postsPerPage}
            totalPosts={recipes.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default Cards;
