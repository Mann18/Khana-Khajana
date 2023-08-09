import { useState } from "react";

const Section = ({ type, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black p-2 m-2">
      <h1 className=" font-bold text-xl">{type}</h1>
      {isVisible ? (
        <div>
          <button
            onClick={() => {
              setIsVisible(false);
            }}
          >
            hide
          </button>{" "}
          <h1>{description}</h1>
        </div>
      ) : (
        <button
          className="mr-2"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          show
        </button>
      )}
    </div>
  );
};
const Instamart = () => {
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart Page</h1>
      <Section
        type="About Instamart"
        description="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nemo eius odio laboriosam atque exercitationem ducimus qui. Autem, harum sit et magni minima, odio mollitia quod tenetur ipsam velit atque corrupti. Optio voluptate doloremque itaque repellendus voluptatem labore qui aspernatur sequi inventore iusto quos, iste, vero necessitatibus. Incidunt, error quod unde quo architecto consequatur dolor minus accusamus sequi provident excepturi beatae velit vel dignissimos quae numquam aspernatur inventore mollitia minima voluptates corporis molestias repellendus enim ratione! Laboriosam corporis eligendi iste, nisi et dolorum laudantium reiciendis deserunt adipisci nihil beatae, ipsa quod ea assumenda, modi facere repudiandae voluptatibus deleniti neque. Non?
"
      />
      <Section
        type="Contact Instamart"
        description="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nemo eius odio laboriosam atque exercitationem ducimus qui. Autem, harum sit et magni minima, odio mollitia quod tenetur ipsam velit atque corrupti. Optio voluptate doloremque itaque repellendus voluptatem labore qui aspernatur sequi inventore iusto quos, iste, vero necessitatibus. Incidunt, error quod unde quo architecto consequatur dolor minus accusamus sequi provident excepturi beatae velit vel dignissimos quae numquam aspernatur inventore mollitia minima voluptates corporis molestias repellendus enim ratione! Laboriosam corporis eligendi iste, nisi et dolorum laudantium reiciendis deserunt adipisci nihil beatae, ipsa quod ea assumenda, modi facere repudiandae voluptatibus deleniti neque. Non?
"
      />
      <Section
        type="Products"
        description="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nemo eius odio laboriosam atque exercitationem ducimus qui. Autem, harum sit et magni minima, odio mollitia quod tenetur ipsam velit atque corrupti. Optio voluptate doloremque itaque repellendus voluptatem labore qui aspernatur sequi inventore iusto quos, iste, vero necessitatibus. Incidunt, error quod unde quo architecto consequatur dolor minus accusamus sequi provident excepturi beatae velit vel dignissimos quae numquam aspernatur inventore mollitia minima voluptates corporis molestias repellendus enim ratione! Laboriosam corporis eligendi iste, nisi et dolorum laudantium reiciendis deserunt adipisci nihil beatae, ipsa quod ea assumenda, modi facere repudiandae voluptatibus deleniti neque. Non?
"
      />
    </div>
  );
};
export default Instamart;
