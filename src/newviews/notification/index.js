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
const Notification = () => {
    const [visibleXL, setVisibleXL] = useState(false)
    return(
        <>
        <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
                <h4> Notification</h4>
            </CCardHeader>
            <CCardBody>
            <div className="mb-3"><CButton color="light" onClick={() => setVisibleXL(!visibleXL)}>Add Notification</CButton> </div>
                    <div className="mb-3 overflow-auto">
                    <CTable striped hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Notification</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Files</CTableHeaderCell>
                        
                        </CTableRow>    
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
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
        <CModalTitle>Add Notification</CModalTitle>
      </CModalHeader>
          <CModalBody>
              <div className="mb-3">
              <CFormTextarea id="exampleFormControlTextarea1" rows="3" placeholder="Please write notification to send"></CFormTextarea>
            </div>
            <div className="mb-3">
            <CFormInput
                    type="file"
                    id="exampleFormControlInput1"
                    placeholder="Enter email of admin"
                    
            />
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
export default Notification;
