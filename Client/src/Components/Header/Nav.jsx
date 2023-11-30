import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
import { Link } from "react-router-dom";
 
const pillTabs = [
  "Home",
  "Catalog",
  "Contacts",
];
 
const Nav= () =>  {
  const [hoveredIndex, setHoveredIndex] = useState(0);
 
  const tabsComponents = pillTabs.map((text, i) => {
    return (
      <Link to={`/${text}`}>
        <button
          key={text}
          onMouseEnter={() => setHoveredIndex(i)}
          style={{
            position: "relative",
            padding: "0.65rem 0.75rem",
            backgroundColor: "#E90064",
            color: "white",
            border: 0,
            borderRadius: "999px",
            fontWeight: "bold"
          }}
        >
          {hoveredIndex === i && (
            <MagicTabSelect
              id="pillTabs"
              transition={{ type: "spring", bounce: 0.35 }}
            >
              <span
                style={{
                  borderRadius: "999px",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 10,
                  backgroundColor: "pink",
                  color:"white",
                  mixBlendMode:"color-burn"
                }}
              />
            </MagicTabSelect>
          )}
          {text}
        </button>
      </Link>
    );
  });
 
  return (
    <div style={{ display: "flex", gap: "0.75rem", margin: "0.75rem 0" }}>
      {tabsComponents}
    </div>
  );
}

export default Nav;