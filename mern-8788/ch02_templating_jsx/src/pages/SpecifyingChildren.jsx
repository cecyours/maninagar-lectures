import React from "react";
import CustomSection from "../components/CustomSection";

function SpecifyingChildren() {
  return (
    <div>
      <CustomSection name={"Master Redu"}>
        <h2>Bio</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quidem
          pariatur soluta earum molestias quisquam error, nostrum exercitationem
          accusantium illo sunt? Veritatis consectetur, nobis obcaecati
          recusandae iure molestias neque qui?
        </p>
      </CustomSection>

      <CustomSection name={"Dria"}>
        <h2>Bio</h2>
        <p>
          Iron Man, also known as Tony Stark, is a fictional superhero appearing
          in American comic books published by Marvel Comics. Created by writer
          and editor Stan Lee, developed by scripter Larry Lieber, and designed
          by artists Don Heck and Jack Kirby, the character made his first
          appearance in Tales of Suspense #39 (cover dated March 1963). Stark is
          an industrialist, genius inventor, and consummate playboy who is also
          a founding member of the Avengers.
        </p>
        <div>
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>Graphql</li>
          </ul>
        </div>
      </CustomSection>
    </div>
  );
}

export default SpecifyingChildren;
