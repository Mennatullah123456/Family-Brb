import React,{useState} from "react";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CModalHeader,
    CModalFooter,
    CFormInput,
    CModalBody,
    CModal ,
    CCol,
    CRow,
    CModalTitle,CFormTextarea,
    CTableHead,CTableRow,CTable,CTableHeaderCell,CTableBody,CTableDataCell
  } from '@coreui/react'
const Awareness = () => {
    const [visibleXL, setVisibleXL] = useState(false)
    return(
        <>
        <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
                <h4> Awareness Content</h4>
            </CCardHeader>
            <CCardBody>
            <div className="mb-3"><CButton color="light" onClick={() => setVisibleXL(!visibleXL)}>Add Awareness content</CButton> </div>
                    <div className="mb-3 overflow-auto">
                    <CTable striped hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Media files</CTableHeaderCell>
                        </CTableRow>    
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>
                                <video width="100%" height="200" controls>
                                    <source src={require("../../assets/VIDEOS/bulb_blue.mp4")} type="video/mp4" />
                                 </video>
                            </CTableDataCell>
                            <CTableDataCell> </CTableDataCell>
                          
                        </CTableRow>    
                        
                        <CTableRow>
                            <CTableHeaderCell scope="row">2</CTableHeaderCell>
                            <CTableDataCell>
                                <video width="100%" height="200" controls>
                                    <source src={require("../../assets/VIDEOS/Simple_Token.mp4")} type="video/mp4" />
                                 </video>
                            </CTableDataCell>
                            <CTableDataCell> </CTableDataCell>
                             
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell>
                                <video width="100%" height="200" controls>
                                    <source src={require("../../assets/VIDEOS/MR8_5517.mov")} type="video" />
                                </video>
                            </CTableDataCell>
                        <CTableDataCell> </CTableDataCell>
                        
                        </CTableRow>
                    </CTableBody>
                    </CTable>
                </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CModal size="xl" visible={visibleXL} onClose={() => setVisibleXL(false)}>
      <CModalHeader>
        <CModalTitle>Add Awareness Content</CModalTitle>
      </CModalHeader>
          <CModalBody>
              <div className="mb-3">
              
            </div>
            <div className="mb-3">
            <CFormInput
                    type="file"
                    id="exampleFormControlInput1"     />
            </div>
            <div className="mb-3">
             <CButton color="primary" >Save changes</CButton>
             </div>
            </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisibleXL(false)}>
          Close
        </CButton>
        

       
      </CModalFooter>
    </CModal>
      </>
    )
}
export default Awareness;
