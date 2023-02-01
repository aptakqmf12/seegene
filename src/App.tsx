import { useState, useEffect } from "react";
import { getData } from "./service/index";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import styled from "styled-components";
import parse from "html-react-parser";

interface DataType {
  seq: string;
  prodLine: string;
  productName: string;
  category: string;
  detail: {
    outLine: string;
    productName: string;
    seq: string;
    subTitle: string;
  };
}

function App() {
  const [data, setData] = useState<DataType[]>([]);

  const record = async () => {
    const res = await getData();
    console.log(res);
    setData(res);
  };

  useEffect(() => {
    record();
  }, []);

  //const test = `<p class="MsoNormal"><span lang="EN-US"><b>Anyplex™Ⅱ RB5 Detection</b> simultaneously detects and differentiates 5 respiratory bacteria in a single reaction. Based on Seegene’s proprietary DPO™ and TOCE™ technologies, this </span><span lang="EN-US"><span lang="EN-US">multiplex </span>assay performs on&nbsp; real-time PCR instruments and rapidly and simultaneously provide information on the infected CAP-related pathogens as well as two causative agents of whooping cough - <i>Bordetella pertussis</i> (BP) and <i>Bordetella parapertussis</i> (BPP) with high sensitivity and specificity.<o:p></o:p></span></p>`;

  return (
    <Wapper>
      {/* <div dangerouslySetInnerHTML={{ __html: test }}></div> XSS에 취약함*/}
      {data.map((d, i) => (
        <Accordion key={i}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <div>
              <Typography mb={2} fontSize={24} fontWeight={600} color={"red"}>
                {d.category}
              </Typography>
              <Typography>{d.productName}</Typography>
            </div>
          </AccordionSummary>

          <AccordionDetails>
            <div style={{ marginBottom: 10 }}>
              <Typography fontSize={20} fontWeight={600} color={"#adadad"}>
                subTitle
              </Typography>
              <Typography>{parse(d.detail.subTitle)}</Typography>
            </div>

            <div style={{ marginBottom: 10 }}>
              <Typography fontSize={20} fontWeight={600} color={"#adadad"}>
                outLine
              </Typography>
              <Typography>{parse(d.detail.outLine)}</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </Wapper>
  );
}

const ExpandMoreIcon = () => {
  return (
    <svg width={15} height={15} viewBox="0 0 50 50 ">
      <path d="M0 0 L25 50 L50 0" stroke="black" fill="transparent" />
    </svg>
  );
};

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 1280px;
  margin: 0 auto;
`;

export default App;
