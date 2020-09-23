import React from "react";

function PlaygroundComponent() {
  return (
    <div className="wrapper">
      <div className="row">
        <section id="section1">Section 1</section>
        <section>Section 2</section>
      </div>
      <div className="row">
        <section>
          <section>Section 3.1</section>
          <section>Section 3.2</section>
        </section>
        <section>Section 4</section>
      </div>
      <div className="row">
        <section>Section 5</section>
        <section>Section 6</section>
      </div>
    </div>
  );
}

export default PlaygroundComponent;
