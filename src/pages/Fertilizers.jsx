import React from 'react'
import { useNavigate } from "react-router-dom";

// icons

import {
  CCard,
  CRow,
  CCol,
  CCardBody,
  CCardTitle,
  CCardImage,
  CListGroup,
  CListGroupItem,
} from "@coreui/react";


const Fertilizers = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="engine" style={{ marginTop: "2rem" }}>
        <div className="row row-fluid">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <CCard
              className="mb-3"
              style={{ minWidth: "90vw", marginLeft: "2vw" }}
            >
              <CRow className="g-0">
                <CCol md={4}>
                  <CCardImage
                    /* style={{ height: "30vh" }} */
                    src="https://agripac.com.ec/wp-content/uploads/2020/11/4001936-1-1200x1200-1.jpg-1.jpg"
                  />
                </CCol>
                <CCol md={6}>
                  <CCardBody>
                    <CCardTitle>
                      <h1>Name: Kistalon Red</h1>
                    </CCardTitle>
                    <CListGroup flush>
                      <CListGroupItem>
                        Chemicals: Nitrogen (10%), phosphorus(20),
                        potassium(30%)
                      </CListGroupItem>
                      <CListGroupItem>
                        description: This is good for fruit size and strong
                        plants
                      </CListGroupItem>
                      <CListGroupItem>
                        Plant age: This is recommended to be used in older
                        plants
                      </CListGroupItem>
                      <CListGroupItem>
                        Stock: You have 10 bags left in the shed
                      </CListGroupItem>
                      <CListGroupItem>Price: $ 100 per 25kg bag</CListGroupItem>
                    </CListGroup>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => navigate("/fertilizers")}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => navigate("/fertilizers")}
                    >
                     delete
                    </button>
                  </CCardBody>
                </CCol>
              </CRow>
            </CCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fertilizers