import React from "react";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

function HighLightText(props) {
  const { text, highListText } = props;
  const matches = match(text, highListText, {
    insideWords: true,
  });
  const parts = parse(text, matches);
  return (
    <div>
      {parts.map((part, index) => (
        <span
          key={index}
          style={{
            fontWeight: part.highlight ? 700 : 400,
          }}
        >
          {part.text}
        </span>
      ))}
    </div>
  );
}

export default React.memo(HighLightText);
