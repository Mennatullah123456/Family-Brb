import React from "react";
import {
    CButton,
    CCard,
    CCardBody,
   
    CCardHeader,
    CModalHeader,
    CModalFooter,
    CFormInput,CCardTitle ,
    CModalBody,CCardImage,CCardText,
    CModal ,
    CCol,CNav,CNavLink,CNavItem,CTabContent,CTabPane,
    CRow,
    CModalTitle,CAvatar ,
    CTableHead,CTableRow,CTable,CTableHeaderCell,CTableBody,CTableDataCell
  } from '@coreui/react'
  
 function Userfeedback(props){
    return(
        <>
          <CModal size="xl" visible={props.userFeedbackModal} onClose={() => props.setUserFeedbackModal(false)}>
         <CModalHeader>
           <CModalTitle>User Details</CModalTitle>
         </CModalHeader>
             <CModalBody>
             <div className="mb-3 overflow-auto">
                    <CTable striped hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell> 
                            <CTableHeaderCell scope="col">Remarks</CTableHeaderCell>
                            <CTableHeaderCell scope="col"></CTableHeaderCell>
                         </CTableRow>    
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell> 
                            <CTableDataCell scope="col">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                            </CTableDataCell>
                            <CTableDataCell><CButton color="dark"    >Reply</CButton></CTableDataCell>
                        </CTableRow>    
                        <CTableRow>
                            <CTableHeaderCell scope="row">2</CTableHeaderCell>
                            
                            <CTableDataCell scope="col">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                            </CTableDataCell>
                            <CTableDataCell><CButton color="dark"  >Reply</CButton></CTableDataCell>
                        </CTableRow>   
                        <CTableRow>
                            <CTableHeaderCell scope="row">3</CTableHeaderCell>
                             <CTableDataCell scope="col">
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised.
                             </CTableDataCell>
                             <CTableDataCell><CButton color="dark"   >Reply</CButton></CTableDataCell>
                        </CTableRow> 
                    </CTableBody>
                    </CTable>
                </div>
               </CModalBody>
         <CModalFooter>
           <CButton color="secondary" onClick={() => props.setUserFeedbackModal(false)}>
             Close
           </CButton>
           
   
          
         </CModalFooter>
       </CModal>
        </>
    )
}

export default Userfeedback;

