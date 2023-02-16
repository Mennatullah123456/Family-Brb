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
    CModalTitle,
    CTableHead,CTableRow,CTable,CTableHeaderCell,CTableBody,CTableDataCell
  } from '@coreui/react'
const Adminregisteration = () => {
    const [visibleXL, setVisibleXL] = useState(false)
    return(
        <>
        <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
                <h4> Admin Registeration</h4>
            </CCardHeader>
            <CCardBody>
            <div className="mb-3"><CButton color="light" onClick={() => setVisibleXL(!visibleXL)}>Add Admin</CButton> </div>
                    <div className="mb-3 overflow-auto">
                    <CTable striped hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Role</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Ph. No</CTableHeaderCell>
                          
                        </CTableRow>    
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>Nowshad</CTableDataCell>
                            <CTableDataCell>nowshad@cyberspace.ae</CTableDataCell>
                            <CTableDataCell>Aware content creator</CTableDataCell>
                            <CTableDataCell>123456789</CTableDataCell>
                       
                        </CTableRow>    
                        
                        <CTableRow>
                            <CTableHeaderCell scope="row">2</CTableHeaderCell>
                            <CTableDataCell>Wesal</CTableDataCell>
                            <CTableDataCell>Wesal@cyberspace.ae</CTableDataCell>
                            <CTableDataCell>Flyers creator</CTableDataCell>
                            <CTableDataCell>123456789</CTableDataCell>
                            
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell  >Socrat</CTableDataCell>
                        <CTableDataCell>Socrat@cyberspace.ae</CTableDataCell>
                        <CTableDataCell>notifyer</CTableDataCell>
                        <CTableDataCell>123456789</CTableDataCell>
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
        <CModalTitle>Add an Admin</CModalTitle>
      </CModalHeader>
          <CModalBody>
              <div className="mb-3">
            <CFormInput
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder="Enter Name of the admin"
                    
            />
            </div>
            <div className="mb-3">
            <CFormInput
                    type="email"
                    id="exampleFormControlInput1"
                    placeholder="Enter Role of the admin" 
            />
            </div>
            <div className="mb-3">
            <CFormInput
                    type="email"
                    id="exampleFormControlInput1"
                    placeholder="Enter email of admin"
                    
            />
            </div>
            <div className="mb-3">
            <CFormInput
                    type="number"
                    id="exampleFormControlInput1"
                    placeholder="Enter mobile number of the admin"
                    
            />
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


export default Adminregisteration;
