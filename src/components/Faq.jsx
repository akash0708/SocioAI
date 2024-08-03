import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: 'none',
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  backgroundColor: "rgba(0, 0, 0, 0)", 
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, 0)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center", 
  textAlign: "center",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1rem", color:"#64BD83" }} />}
    {...props}
  />
))(({ theme, expanded }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255,0)"
      : "rgba(0, 0, 0,0)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection:"column",
    textAlign: "center",
  },
  transition: "opacity 0.8s ease-in-out",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "50.5%",
    transform: "translateX(-48.5%)",
    width: "300px",
    height: expanded ? "2px" : "0",
    backgroundColor: "#64BD83",
    opacity: expanded ? 1 : 0, 
    transition: "opacity .3s ease-in-out, background-color .3s ease-in-out",
  },
}));

export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const faq = [
    { id: 1, ques: "Is this only for Jadavpur University students?", ans: "No. This is open for all students enrolled in any college under any registered university." },
    { id: 2, ques: "Who is eligible for participation in the Project Presentation route of Socio.AI Ideathon?", ans: "Students who are in their 3rd Semester or later, who are pursuing a project under an instructor or professor, and have not published the same yet, are allowed to participate." },
    { id: 3, ques: "Who is eligible for participation in the Thesis Presentation route of Socio.AI Ideathon?", ans: "Post-graduate students who are/who will be pursuing research for a duration of 1 year or more under a guide, may present their thesis if it is unpublished." },
    { id: 4, ques: "Where will be the Ideathon held?", ans: "Socio.AI will be conducted by IEEE Jadavpur University Student Branch, at Jadavpur University, Jadavpur Campus on Aug XX, 2024." },
    { id: 5, ques: "What are the prizes for winners?", ans: "" }
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="w-full sm:h-fit pt-16 sm:mt-12 sm:mb-10 my-52 flex flex-col justify-center items-center bg-opacity-0 bg-black">
        <div className="w-full sm:h-fit pt-16 sm:mt-12 sm:mb-10 my-52 flex flex-col justify-center items-center">
          <h1 className="text-[76.63px] md:text-5xl font-extrabold text-[#1D2E28] text-center mb-12 mb-[90px]">
            FREQUENTLY ASKED QUESTIONS
          </h1>

          <div className="flex flex-col w-4/5 mx-auto rounded-lg">
            {faq.map((items) => (
              <Accordion
                expanded={expanded === `panel${items.id}`}
                onChange={handleChange(`panel${items.id}`)}
                key={items.id}
              >
                <AccordionSummary
                  expanded={expanded === `panel${items.id}`}
                  aria-controls={`panel${items.id}-content`}
                  id={`panel${items.id}-header`}
                >
                  <Typography color="#1D2E28" style={{ fontSize: '1.2rem' }}>
                    {items.ques}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="#64BD83" style={{ fontSize: '1.2rem' }}>
                    {items.ans}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
