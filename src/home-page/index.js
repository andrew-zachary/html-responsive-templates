import React, { useState } from "react";
import ReactDom from "react-dom";

import "./index.scss";
import "../big-burger/assets/fonts.css";
import "../healthy-food-restaurant/assets/fonts.css";
import "../spicy-restaurant/assets/fonts.css";
import "../yoga-classes/assets/fonts.css";
import "../food-4-you/assets/fonts.css";
import yoga_classes from "../yoga-classes/assets/thumbnail.jpg";
import healthy_food from "../healthy-food-restaurant/assets/thumbnail.jpg";
import spicy_restaurant from "../spicy-restaurant/assets/thumbnail.jpg";
import big_burger from "../big-burger/assets/thumbnail.jpg";
import food_4_you from "../food-4-you/assets/thumbnail.jpg";

const projects_data = [
  {
    id: "yoga-classes",
    name: "yoga classes",
    num_of_sections: 8,
    colors: ["#00C9D6", "#ffffff", "#3F505A"],
    fonts: [
      { name: "FormaDJRMicro-Bold", value: "formadjrmicro bold" },
      { name: "FormaDJRMicro-Medium", value: "formadjrmicro medium" },
      { name: "FormaDJRMicro-Regular", value: "formadjrmicro regular" },
      { name: "Brevia-Regular", value: "brevia regular" },
      { name: "Brevia-Medium", value: "brevia medium" },
    ],
    img_url: yoga_classes,
    url: "/yoga-classes.html",
    features: ["angled lines for all sections"],
  },
  {
    id: "healthy-food",
    name: "healty food restaurant",
    num_of_sections: 7,
    colors: ["#7287ae", "#504f4f", "#333333", "#e3ecc2", "#ffffff"],
    fonts: [
      { name: "lato-regular", value: "lato regular" },
      { name: "lato-bold", value: "lato bold" },
      { name: "ubuntu-regular", value: "ubuntu regular" },
      { name: "ubuntu-medium", value: "ubuntu medium" },
      { name: "ubuntu-bold", value: "ubuntu bold" },
    ],
    img_url: healthy_food,
    url: "/healthy-food-restaurant.html",
    features: ["animated section reveal"],
  },
  {
    id: "burger-big",
    name: "burger big",
    num_of_sections: 9,
    colors: ["#FF9393", "#FDDF5D", "#FEF9F5", "#3B3B3B"],
    fonts: [
      { name: "Montserrat-Medium", value: "mon medium" },
      { name: "Montserrat-Regular", value: "mon regular" },
      { name: "Montserrat-Black", value: "mon black" },
      { name: "Poppins-Medium", value: "poppins medium" },
      { name: "Poppins-Regular", value: "poppins regular" },
    ],
    img_url: big_burger,
    url: "/big-burger.html",
    features: ["responsive, touch-friendly carousel"],
  },
  {
    id: "restaurant",
    name: "indian restaurant",
    num_of_sections: 6,
    colors: ["#2f2f2f", "#ffc200", "#333333", "#ffffff"],
    fonts: [
      { name: "GrandHotel-Regular", value: "gh regular" },
      { name: "Montserrat-Bold", value: "mon bold" },
      { name: "Montserrat-Medium", value: "mon medium" },
      { name: "Montserrat-Regular", value: "mon regular" },
    ],
    img_url: spicy_restaurant,
    url: "/spicy-restaurant.html",
    features: ["numbers counter-up"],
  },
  {
    id: "food-4-you",
    name: "food4you",
    num_of_sections: 5,
    colors: ["#fee243", "#eceaaa"],
    fonts: [
      { name: "FrederickatheGreat-Regular", value: "FG-R" },
      { name: "Gabelisa", value: "Gab" },
      { name: "Montserrat-Regular", value: "MON-R" },
      { name: "Montserrat-Bold", value: "MON-B" },
      { name: "Montserrat-ExtraBold", value: "MON-EB" },
    ],
    img_url: food_4_you,
    url: "/food-4-you.html",
    features: ["cool slider animation"],
  },
];

const App = () => {
  const [bgColor, setBgColor] = useState("#FEF9F5");
  const [fontColor, setFontColor] = useState("#3B3B3B");
  const [font, setFont] = useState("mon bold");
  const [textTransform, setTextTransform] = useState("capitalize");
  const [fontSize, setFontSize] = useState("40");

  const style_mode_handler = (e, mode, project_id) => {
    const project_mode_btns = document.querySelectorAll(
      `.${project_id}-mode-btn`
    );
    project_mode_btns.forEach((ele) => {
      ele.classList.remove("selected-mode");
    });

    const project_color_blocks = document.querySelectorAll(
      `.${project_id}-color-block`
    );
    project_color_blocks.forEach((ele) => {
      ele.setAttribute("data-mode", mode);
    });

    e.target.classList.add("selected-mode");
  };

  const style_color_handler = (e, color) => {
    if (e.target.getAttribute("data-mode") === "bg") {
      setBgColor(color);
    } else if (e.target.getAttribute("data-mode") === "font") {
      setFontColor(color);
    }
  };

  return (
    <section id="all-templates">
      <div className="experimental" style={{ backgroundColor: bgColor }}>
        <h1
          className="text-center pt-5 pb-5"
          style={{
            color: fontColor,
            fontFamily: font,
            textTransform,
            fontSize: `${fontSize}px`,
          }}>
          html responsive templates
        </h1>
        <div className="btns-ctrl pb-3 d-flex flex-column justify-content-center align-items-center mt-3">
          <div className="slidecontainer pb-3">
            <form id="formBasicRange" className="slidecontainer">
              <label htmlFor="font-slider" className="form-label">
                Font Size
              </label>
              <input
                type="range"
                className="slider mx-auto"
                min="40"
                max="52"
                id="font-slider"
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}></input>
            </form>
          </div>
          <label className="checkbox">
            <span className="checkbox__input">
              <input
                type="checkbox"
                name="checked"
                onChange={(e) =>
                  setTextTransform(
                    e.target.checked ? "uppercase" : "capitalize"
                  )
                }
              />
              <span className="checkbox__control">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    d="M1.73 12.91l6.37 6.37L22.79 4.59"
                  />
                </svg>
              </span>
            </span>
            <span className="text-uppercase">uppercase</span>
          </label>
        </div>
      </div>
      <ul id="att-list" className="mt-5 list-unstyled">
        {projects_data.map((project) => {
          return (
            <li key={project.name} className="pb-5 pt-5">
              <div className="template-img">
                <a href={project.url} className="text-uppercase">
                  <div className="view-page d-flex justify-content-center align-items-center text-uppercase">
                    view page
                  </div>
                  <img src={project.img_url} alt="" />
                </a>
              </div>
              <div className="d-flex flex-column" id="template-desc">
                <a href={project.url}>
                  <h1 id="project-name" className="text-uppercase">
                    {project.name}
                  </h1>
                </a>
                <div id="colors" className="pl-3">
                  <h1
                    className={`mode-setter text-uppercase d-inline-block selected-mode ${project.id}-mode-btn`}
                    onClick={(e) => style_mode_handler(e, "bg", project.id)}>
                    background color
                  </h1>
                  <span id="space-span">&nbsp;/&nbsp;</span>
                  <h1
                    className={`mode-setter text-uppercase d-inline-block ${project.id}-mode-btn`}
                    onClick={(e) => style_mode_handler(e, "font", project.id)}>
                    font color
                  </h1>
                  <ul className="list-unstyled">
                    {project.colors.map((color) => {
                      return (
                        <li className="d-inline" key={color}>
                          <span
                            className={`d-inline-block color-block ${project.id}-color-block`}
                            data-mode="bg"
                            style={{ backgroundColor: color }}
                            onClick={(e) =>
                              style_color_handler(e, color)
                            }></span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div id="fonts" className="pl-3">
                  <h1 className="text-uppercase">fonts</h1>
                  <ul className="list-unstyled">
                    {project.fonts.map((font) => {
                      return (
                        <li className="d-inline-block" key={font.name}>
                          <span
                            className="d-block"
                            onClick={() =>
                              setFont(font.value)
                            }>{`${font.name} ,`}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div id="features" className="pl-3">
                  <h1 className="text-uppercase">features</h1>
                  <ul className="list-unstyled">
                    {project.features.map((feature) => {
                      return (
                        <li className="d-inline-block" key={feature}>
                          <span className="d-block">{`${feature} ,`}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
