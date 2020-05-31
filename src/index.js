import "./styles.scss";
import $ from "jquery";

let PORTFOLIO_DATA = [
  {
    name: "todo list",
    img: "https://miro.medium.com/max/1400/1*bubW56HD3dK44Uj2Jvs-UA.png"
  },
  {
    name: "calendar",
    img: "https://n32e9.csb.app/src/calendar.png"
  },
  {
    name: "recipe",
    img:
      "https://images.pexels.com/photos/4033296/pexels-photo-4033296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "exercise logger",
    img:
      "https://images.pexels.com/photos/1080882/pexels-photo-1080882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
];

init();

function init () {
  $("<h1 />")
    .text("Jiin Yun's Portfolio")
    .appendTo ("#app");

  $("<div />")
    .attr("id", "portfolio-list")
    .appendTo("#app");

  //build portfolio data entries
  PORTFOLIO_DATA.forEach(function(v) {
    let entry = $("<div />")
      .addClass("portfolio-entry")
      .appendTo("#portfolio-list");

    let atag = $("<div />")
      .attr("href", v.link)
      .attr("target", "_blank")
      .appendTo(entry);

    $("<img />")
      .attr("src", v.img)
      .appendTo(entry);

    $("<div />")
      .text(v.name)
      .appendTo(entry);
  });
}