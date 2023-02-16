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
    CModalTitle,CAvatar ,
    CTableHead,CTableRow,CTable,CTableHeaderCell,CTableBody,CTableDataCell,CFormTextarea 
  } from '@coreui/react'
const Userfeedback = () => {
    const [visibleXL, setVisibleXL] = useState(false);
    return(
        <>
        <CRow>    
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
            <h4>  User Feedback</h4>
            </CCardHeader>
            <CCardBody>
            <div className="mb-3 overflow-auto">
                    <CTable striped hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell> 
                            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Remarks</CTableHeaderCell>
                            <CTableHeaderCell scope="col"></CTableHeaderCell>
                         </CTableRow>    
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell> 
                            <CTableDataCell>Nowshad@cyberspace.ae</CTableDataCell>
                            <CTableDataCell scope="col">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                            </CTableDataCell>
                            <CTableDataCell><CButton color="dark"  onClick={() => setVisibleXL(!visibleXL)} >Reply</CButton></CTableDataCell>
                        </CTableRow>    
                        <CTableRow>
                            <CTableHeaderCell scope="row">2</CTableHeaderCell>
                            <CTableDataCell>Socrat@cyberspace.ae</CTableDataCell>
                            <CTableDataCell scope="col">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                            </CTableDataCell>
                            <CTableDataCell><CButton color="dark" onClick={() => setVisibleXL(!visibleXL)} >Reply</CButton></CTableDataCell>
                        </CTableRow>   
                        <CTableRow>
                            <CTableHeaderCell scope="row">3</CTableHeaderCell>
                            <CTableDataCell>Wesal@cyberspace.ae</CTableDataCell>
                             <CTableDataCell scope="col">
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.
                             </CTableDataCell>
                             <CTableDataCell><CButton color="dark" onClick={() => setVisibleXL(!visibleXL)} >Reply</CButton></CTableDataCell>
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
           <CModalTitle>Reply to Feedback</CModalTitle>
         </CModalHeader>
             <CModalBody>
                 <div className="mb-3">
                 <CFormTextarea id="exampleFormControlTextarea1" rows="3" placeholder="Please write the reply"></CFormTextarea>
               </div>
               <div className="mb-3">
                <CButton color="primary" >Reply</CButton>
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

export default Userfeedback;
