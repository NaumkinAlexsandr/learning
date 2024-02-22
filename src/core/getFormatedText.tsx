import React from "react";
export const getFormatedText = (text: string) => {
  const paragraphs: string[] = text.split("\n");
  return paragraphs.map((paragraph: string, index: number) => (
    <span
      id="formated-text"
      key={`p_${index}`}
      style={{
        lineHeight: "1.2",
        marginTop: "0",
        marginRight: "0",
        marginBottom: "0",
        marginLeft: "0",
      }}
    >
      {paragraph}
    </span>
  ));
};
