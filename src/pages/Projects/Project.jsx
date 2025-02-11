/* eslint react/prop-types: 0 */

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Converter } from "showdown";

const converter = new Converter();

const API_URL = "http://localhost:1337/api/projects";

function Project() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL + "?filters[slug][$eq]=" + slug)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setProject(data.data[0]);
        console.log(data.data[0]);
      })
      .catch((error) => console.error("Erreur de fetch : ", error));
  }, [slug]);

  if (loading) {
    console.log("Loading");
    return <h1> Chargement... </h1>;
  }

  const stringifyContent = (content) => {
    let res = "";
    content.forEach(element => {
      if(element.type === "heading"){
        res += "## " + element.children[0].text;
      }
      else{
        res += element.children[0].text;
      }
      res += "\n";
    });

    return res;
  }

  return (
    <div>
      <h1> {project.title} </h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(stringifyContent(project.content)),
        }}
      ></div>

    </div>
  );
}
/*
            */
export default Project;
