"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import {
  BiChevronUpCircle,
  BiPlus,
  BiSolidChevronUpCircle,
} from "react-icons/bi";
import HtmlParser from "../HtmlParser";


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // borderBottom: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  borderTop: `1px solid ${theme.palette.divider}`,

  marginBottom: "10px",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <BiSolidChevronUpCircle
        style={{ fontSize: "1.5rem", color: "#fe5200" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  // backgroundImage: "linear-gradient(88deg, #01245a, #0765ce)",

  backgroundColor: "#fff",
  color: "#0e2b3d",
  padding: "5px",
  borderRadius: "4px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    marginTop: "0px",
    marginBottom: "0px",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "8px",
  // borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const CommonAccordion: React.FC<any> = ({ data }) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  React.useEffect(() => {
    if (data.length) setExpanded(data[0]?.Title);
  }, [data]);

  if (!data.length) return <></>;

  return (
    <>
      {data?.map((a: any, i: any) => {
        return (
          <Accordion
            key={a.Title}
            expanded={expanded === a.Title}
            onChange={handleChange(a.Title)}

          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{
                display: "flex",
                alignItems: 'flex-start',
                paddingTop: "15px",
              }}
            >
              {a.Count ? (
                <p className="w-[30px] h-[30px] rounded-full bg-secondary-light/50 flex items-center justify-center  mb-0">
                  {a.Count}
                </p>
              ) : null}
              <h6 className="lg:text-lg flex flex-1 text-sm font-bold ml-5">{a.Title}</h6>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: "10px",
                width: "90%",
                margin: "0 auto"
              }}
            >
              {a?.Component ? (
                a.Component
              ) : (
                <div className="w-[60%] text-sm text-[#4e4e4e]  leading-6 text-justify  mx-auto">
                  <HtmlParser html={a?.Description} />
                </div>
              )}

            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default CommonAccordion;
