"use client";
import parse from "html-react-parser";

const HtmlParser: React.FC<{ html: string }> = ({ html }) => {
  return html ? parse(html) : "";
};
export default HtmlParser;