import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      {/* <h1 className=" font-bold text-xl">{title}</h1> */}
      {isVisible ? (
        <div>
          <button
            className="font-bold text-xl cursor-pointer underline"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            {title}
          </button>{" "}
          <h1>{description}</h1>
        </div>
      ) : (
        <button
          className="font-bold text-xl cursor-pointer underline"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          {title}
        </button>
      )}
    </div>
  );
};
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title="About Instamart"
        description="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nemo eius odio laboriosam atque exercitationem ducimus qui. Autem, harum sit et magni minima, odio mollitia quod tenetur ipsam velit atque corrupti. Optio voluptate doloremque itaque repellendus voluptatem labore qui aspernatur sequi inventore iusto quos, iste, vero necessitatibus. Incidunt, error quod unde quo architecto consequatur dolor minus accusamus sequi provident excepturi beatae velit vel dignissimos quae numquam aspernatur inventore mollitia minima voluptates corporis molestias repellendus enim ratione! Laboriosam corporis eligendi iste, nisi et dolorum laudantium reiciendis deserunt adipisci nihil beatae, ipsa quod ea assumenda, modi facere repudiandae voluptatibus deleniti neque. Non?
"
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "about" ? "" : "about")
        }
      />
      <Section
        title="Team Instamart"
        description="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nemo eius odio laboriosam atque exercitationem ducimus qui. Autem, harum sit et magni minima, odio mollitia quod tenetur ipsam velit atque corrupti. Optio voluptate doloremque itaque repellendus voluptatem labore qui aspernatur sequi inventore iusto quos, iste, vero necessitatibus. Incidunt, error quod unde quo architecto consequatur dolor minus accusamus sequi provident excepturi beatae velit vel dignissimos quae numquam aspernatur inventore mollitia minima voluptates corporis molestias repellendus enim ratione! Laboriosam corporis eligendi iste, nisi et dolorum laudantium reiciendis deserunt adipisci nihil beatae, ipsa quod ea assumenda, modi facere repudiandae voluptatibus deleniti neque. Non?
"
        isVisible={visibleSection === "team"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "team" ? "" : "team")
        }
      />
      <Section
        title="Products"
        description="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nemo eius odio laboriosam atque exercitationem ducimus qui. Autem, harum sit et magni minima, odio mollitia quod tenetur ipsam velit atque corrupti. Optio voluptate doloremque itaque repellendus voluptatem labore qui aspernatur sequi inventore iusto quos, iste, vero necessitatibus. Incidunt, error quod unde quo architecto consequatur dolor minus accusamus sequi provident excepturi beatae velit vel dignissimos quae numquam aspernatur inventore mollitia minima voluptates corporis molestias repellendus enim ratione! Laboriosam corporis eligendi iste, nisi et dolorum laudantium reiciendis deserunt adipisci nihil beatae, ipsa quod ea assumenda, modi facere repudiandae voluptatibus deleniti neque. Non?
"
        isVisible={visibleSection == "product"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "product" ? "" : "product")
        }
      />
    </div>
  );
};
export default Instamart;
