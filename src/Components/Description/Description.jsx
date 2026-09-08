import React from "react";

const Description = ({ apps }) => {
  const { description } = apps;
  console.log(apps);
  return (
    <div className="mx-15 pb-5">
      <h2 className="font-semibold text-2xl">Description</h2>
      <p className="my-3 text-gray-400">{description}</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
        deleniti, tenetur illum dolorum facere, ad possimus ipsam nesciunt
        aliquid voluptas aut! Saepe qui praesentium sed temporibus, eos aperiam
        placeat nesciunt ex, amet accusamus architecto velit minima quae odio,
        ut ducimus ipsam. Placeat, aliquam illum. Asperiores voluptatem odit
        doloribus cum molestiae.
      </p>

      <p className="mt-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam iure ut
        reprehenderit magnam quia nulla eos quae. Similique cum explicabo
        dolorum culpa, ad, nesciunt nulla soluta reprehenderit ullam officiis
        cupiditate consequatur delectus aspernatur non omnis sit adipisci natus.
        Corporis, doloremque?
      </p>
    </div>
  );
};

export default Description;
