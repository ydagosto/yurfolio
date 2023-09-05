import { Typography, Modal, Button } from "antd";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import "../styles.scss";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const { Paragraph, Title } = Typography;

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const EducationItem = (props: any) => {
  const { screenWidth } = props;
  const [visible, setVisible] = useState(false);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function changePage(offset: any) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const positionKey = "Bachelor of Science";
  return (
    <div key={positionKey} className="resume-section">
      <div key={positionKey}>
        <div className="education-header" key={positionKey}>
          <div>
            <Title level={5} className="company">
              University of Oregon (Euguene, OR)
            </Title>
          </div>
          <Title level={5} type="secondary" className="dates">
            September 2013 - June 2017
          </Title>
        </div>
        <Paragraph className="education-description">
          Bachelor of Science in Economics and Business Administration
          <ul>
            <li>Summa Cum Laude: Cumulative GPA: 4.00</li>
            <li>Departmental Honors - Economics</li>
            <li>
              {"Economics Honors Thesis: "}
              {/* <Button type="link" onClick={showModal} className="link-button">
                Ports and Emissions from Shipping
              </Button> */}
              <a onClick={showModal} className="link-button">
                Ports and Emissions from Shipping
              </a>
              <Modal
                title="Ports and Emissions from Shipping"
                open={visible}
                onCancel={handleCancel}
                footer={null}
                width={800}
                className="thesis-modal"
              >
                <Document file="static/documents/thesis.pdf">
                  <Page
                    pageNumber={pageNumber}
                    width={Math.min(screenWidth * 0.8, 750)}
                    renderTextLayer={false}
                  />
                </Document>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Button
                      style={{ marginLeft: 10 }}
                      size="large"
                      shape="round"
                      icon={<FaArrowLeft />}
                      disabled={pageNumber <= 1}
                      onClick={previousPage}
                    />
                    <Button
                      style={{ marginLeft: 10 }}
                      size="large"
                      type="primary"
                      shape="round"
                      icon={<FaArrowRight />}
                      disabled={pageNumber >= 52}
                      onClick={nextPage}
                    />
                  </div>
                  <p>Page {pageNumber} of 52</p>
                </div>
              </Modal>
            </li>
          </ul>
        </Paragraph>
      </div>
    </div>
  );
};

export default EducationItem;
