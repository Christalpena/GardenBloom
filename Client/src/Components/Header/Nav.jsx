import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
import { Link, Navigate } from "react-router-dom";
 
const pillTabs = ["Home", "Catalog", "About_Us", "Contacts"];
 
export default function Nav() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  console.log(selectedIndex)
  const tabsComponents = pillTabs.map((text, i) => {
    console.log(text)

    return (
        <Link to={`/${text}`}>
        <button
            key={text}
            onClick={() => 
                setSelectedIndex(i)
            } 
            style={{
            position: "relative",
            padding: "0.65rem 0.75rem",
            backgroundColor: "pink",
            color: "black",
            borderRadius: "999px",
            borderColor:"transparent",
            margin: "0px 10px"
            }}
        >
            {selectedIndex === i && (
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
                    backgroundColor: "white",
                    mixBlendMode:"soft-light",
                    fontWeight:"bold"
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
    <div style={{ display: "flex", margin: "0.75rem 0" }}>
      {tabsComponents}
    </div>
  );
}