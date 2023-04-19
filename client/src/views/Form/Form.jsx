import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../redux/actions";
import style from "./Form.module.css";

const validate = (form) => {
  //desesetructurar y cambiar errors a ingles organizar el alert extraer funciones a utils deshabilitar el submit si los otros campos no cumple los requisitos
  const regexUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
  const regexTitle = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
  const error = {};

  if (!form.title) error.title = "This field is required";
  else if (!regexTitle.test(form.title)) error.title = "invalid name";

  if (!form.image) error.image = "This field is required";
  else if (!regexUrl.test(form.image)) error.image = "invalid url";

  if (!form.summary) error.summary = "This field is required";
  if (!form.steps) error.steps = "This field is required";

  if (form.diets.length < 1) error.diets = "select a diet"; // cuando se quita la opcion no sale el error nuevamente

  return error;
};

const changeDiets = (diet) => {
  const obj = {
    "gluten free": 1,
    "dairy free": 2,
    "lacto ovo vegetarian": 3,
    vegan: 4,
    paleolithic: 5,
    primal: 6,
    "whole 30": 7,
    pescatarian: 8,
    ketogenic: 9,
    "fodmap friendly": 10,
  };

  return obj[diet];
};

const Form = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDiets());
  }, []);

  const diets = useSelector((state) => state.diets);

  const [form, setform] = useState({
    title: "",
    image: "",
    diets: [],
    summary: "",
    healthScore: 0,
    steps: "",
  });

  const [error, setError] = useState({
    title: "",
    image: "",
    diets: "",
    summary: "",
    healthScore: "",
    steps: "",
  });



  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setform({ ...form, [property]: value });
    setError(validate({ ...form, [property]: value }));
  };



  const checkboxChangeHandler = (event) => {
    const value = event.target.value;
    if (form.diets.includes(value))
      setform({ ...form, diets: form.diets.filter((diet) => diet !== value) });
    else setform({ ...form, diets: [...form.diets, value] });
    setError(validate({ ...form, diets: [...form.diets, value] }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/recipes", form)
      .then((res) => alert(res))
      .catch((err) => alert(err));
  };

  return (
    <div className={style.form_container}>
      <h1 className={style.form_title}>Create Recipe Form</h1>
      <p className={style.form_title}>
        Please fill out this form with the required information
      </p>
      <form onSubmit={submitHandler}>
        <fieldset>
          {error.title && <div className={style.form_error}>{error.title}</div>}
          <label htmlFor="title">
            Title:
            <input
              className={style.form_input}
              id="title"
              name="title"
              type="text"
              placeholder="Enter your recipe name"
              value={form.title}
              onChange={changeHandler}
            />
          </label>
          <label htmlFor="image">
            {error.image && (
              <div className={style.form_error}>{error.image}</div>
            )}
            Image:
            <input
              className={style.form_input}
              id="image"
              name="image"
              type="text"
              placeholder="Enter your url image"
              value={form.image}
              onChange={changeHandler}
            />
          </label>
          <label htmlFor="healthScore">
            Health Score:
            <input
              className={style.form_input}
              id="healthScore"
              name="healthScore"
              type="range"
              min="0"
              max="100"
              placeholder="Enter your url image"
              value={form.healthScore}
              onChange={changeHandler}
            />
            <div>{form.healthScore}</div>
          </label>
          {error.summary && (
            <div className={style.form_error}>{error.summary}</div>
          )}
          <label htmlFor="summary">
            Summary:
            <textarea
              className={style.form_textarea}
              id="summary"
              name="summary"
              value={form.summary}
              onChange={changeHandler}
            ></textarea>
          </label>
          {error.steps && <div className={style.form_error}>{error.steps}</div>}
          <label htmlFor="steps">
            Steps:
            <textarea
              className={style.form_textarea}
              id="steps"
              name="steps"
              value={form.steps}
              onChange={changeHandler}
            ></textarea>
          </label>
        </fieldset>
        <fieldset>
          <h3>Diets:</h3>
          {error.diets && (
            <span className={style.form_error}>{error.diets}</span>
          )}
          <div className={style.form_diets_container}>
            {diets &&
              diets.map((diet) => {
                return (
                  <div className={style.form_diets}>
                    <label htmlFor={diet} key={diet}>
                      <input
                        id={diet}
                        type="checkbox"
                        name={diet}
                        value={changeDiets(diet)}
                        onChange={checkboxChangeHandler}
                      ></input>{" "}
                      {diet}
                    </label>
                  </div>
                );
              })}
          </div>
        </fieldset>
          <button className={style.form_button} type="submit">
            SUBMIT
          </button>
      </form>
    </div>
  );
};

export default Form;
