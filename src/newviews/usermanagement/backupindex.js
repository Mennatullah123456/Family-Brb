import React,{useState} from "react";
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
  
const Usermanagement = () => {
    const [visibleXL, setVisibleXL] = useState(false);
    const [activeKey, setActiveKey] = useState(1)
    return(
        <>
        <CRow>
         
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <h3>User</h3>
            </CCardHeader>
            <CCardBody>
          
            <div className="mb-3 overflow-auto">
                    <CTable striped hover>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col"></CTableHeaderCell>
                            <CTableHeaderCell scope="col"></CTableHeaderCell>
                           
                        </CTableRow>    
                    </CTableHead>
                    <CTableBody>
                        <CTableRow style={{height:"22rem"}} >
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>
                                <CAvatar size="md" src={"https://coreui.io/react/demo/4.0/free/static/media/3.07e357f5.jpg"}   />Wesal Nowsher
                            </CTableDataCell>
                            <CTableDataCell >
                            <CNav variant="tabs" role="tablist">
                                <CNavItem>
                                  <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 1}
                                    onClick={() => setActiveKey(1)}
                                  >
                                    Basic Info
                                  </CNavLink>
                                </CNavItem >
                                <CNavItem>
                                  <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 2}
                                    onClick={() => setActiveKey(2)}
                                  >
                                  Contact Info  
                                  </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                  <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 3}
                                    onClick={() => setActiveKey(3)}
                                  >
                                    Categories
                                  </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                  <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 4}
                                    onClick={() => setActiveKey(4)}
                                  >
                                    Dependents
                                  </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                  <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 5}
                                    onClick={() => setActiveKey(5)}
                                  >
                                    Actions
                                  </CNavLink>
                                </CNavItem>
                              </CNav>
                              <CTabContent >
                                <CTabPane role="tabpanel" aria-labelledby="basic-info" visible={activeKey === 1}>
                                    <div className="d-flex  gap-3 p-1 mt-3  w-100"><div className=" " >Name:</div><div><b>Wesal Nowsher</b></div></div>
                                    <div className="d-flex gap-3 p-1 w-100"><div className=" ">Id:</div><div><b>CV9619852</b></div></div>
                                    <div className="d-flex gap-3 p-1 w-100"><div className=" ">Visa status:</div><div><b>visit visa, 90 days left</b></div></div>
                                    <div className="d-flex gap-3 p-1 w-100"><div className=" ">email verification:</div><div className="text-success"><b>Verified</b></div></div>
                                    <div className="d-flex gap-3 p-1 w-100 mb-3"><div className=" ">Ph no:</div><div className="text-danger"> <b>Not Verified</b></div></div>


                                </CTabPane>
                                <CTabPane role="tabpanel" aria-labelledby="Contact-Info" visible={activeKey === 2}>
                                    <div className="d-flex  gap-3 p-1 mt-3  w-100"><div className=" " >Email Id:</div><div> <b>Wesal@cyberspacea.ae</b></div></div>
                                    <div className="d-flex gap-3 p-1 w-100"><div className=" ">Phone no:</div><div><b>0585951900</b></div></div>
                                    

                                </CTabPane>
                                <CTabPane  role="tabpanel" aria-labelledby="Categories" visible={activeKey === 3}>
                                    <div style={{    display: "flex",    gap: "1rem"}}>
                                    <CCard style={{ width: '10rem' }} className="mt-4">
                                    <CCardBody className="d-flex flex-column align-items-center">
                                    <h6 className="text-center">Nutrition </h6>
                                    <h6 className="mt-2 text-center">Kids added: 10</h6>
                                      <h6 className="mt-2 text-center"> Tasks Added: 15</h6>
                                      <h6 className="mt-2 text-center">Tasks Completed: 10</h6>
                                      <CButton color="info text-light mt-2" onClick={() => setVisibleXL(true)}>Details</CButton>
                                      </CCardBody>
                                    </CCard>
                                    </div>
                                </CTabPane>
                                <CTabPane  role="tabpanel" aria-labelledby="Family-Tree" visible={activeKey === 4}>
                                    <div style={{    display: "flex",    gap: "1rem"}}>
                                    <CCard style={{ width: '10rem' }} className="mt-4">
                                    <CCardBody className="d-flex flex-column align-items-center">
                                    <h6 className="text-center">Son</h6>
                                      <CCardImage orientation="left" src={"https://coreui.io/react/demo/4.0/free/static/media/3.07e357f5.jpg"}  />
                                      

                                      <h6 className="mt-2 text-center">Ahmed jan</h6>
                                      <h6 className="mt-2 text-center">27 years old</h6>
                                      <CButton color="info text-light mt-2" onClick={() => setVisibleXL(true)}>  Details</CButton>
                                         
                                        
                                      </CCardBody>
                                    </CCard>
                                    <CCard style={{ width: '10rem' }} className="mt-4">
                                    <CCardBody className="d-flex flex-column align-items-center">
                                    <h6 className="text-center">Daughter</h6>
                                      <CCardImage orientation="left" src={"https://coreui.io/react/demo/4.0/free/static/media/3.07e357f5.jpg"}  />
                                      

                                      <h6 className="mt-2 text-center">Ayat jan</h6>
                                      <h6 className="mt-2 text-center">27 years old</h6>
                                      <CButton color="info text-light mt-2" onClick={() => setVisibleXL(true)}>  Details</CButton>
                                         
                                        
                                      </CCardBody>
                                    </CCard>
                                    <CCard style={{ width: '10rem' }} className="mt-4">
                                    <CCardBody className="d-flex flex-column align-items-center">
                                    <h6 className="text-center">Grand Daughter</h6>
                                      <CCardImage orientation="left" src={"https://coreui.io/react/demo/4.0/free/static/media/3.07e357f5.jpg"}  />
                                      

                                      <h6 className="mt-2 text-center">jannat jan</h6>
                                      <h6 className="mt-2 text-center">27 years old</h6>
                                        
                                      <CButton color="info text-light mt-2" onClick={() => setVisibleXL(true)}>  Details</CButton>
                                        
                                      </CCardBody>
                                    </CCard>
                                    </div>
                                </CTabPane>
                                <CTabPane role="tabpanel" aria-labelledby="Actions" visible={activeKey === 5}>
                                    <div className=" ">
                                    <CButton color="info text-light mt-2 m-2" onClick={() => setVisibleXL(true)}>  Disable account</CButton>
                                  <CButton color="info text-light mt-2 m-2" onClick={() => setVisibleXL(true)}>  Notify</CButton>
                                    </div>
                                </CTabPane>
                              </CTabContent>
                            </CTableDataCell>
                           
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
           <CModalTitle>Add a user</CModalTitle>
         </CModalHeader>
             <CModalBody>
                 <div className="mb-3">
                 
               <CFormInput
                       type="text"
                       id="exampleFormControlInput1"
                       placeholder="Enter Name of the user"
                       
               />
               </div>
               <div className="mb-3">
               <CFormInput
                       type="text"
                       id="exampleFormControlInput1"
                       placeholder="Enter EmiratiId of the user" 
               />
               </div>
               <div className="mb-3">
               <CFormInput
                       type="email"
                       id="exampleFormControlInput1"
                       placeholder="Enter Email of the user" 
               />
               </div>
               <div className="mb-3">
               <CFormInput
                       type="number"
                       id="exampleFormControlInput1"
                       placeholder="Enter phone number of the user" 
               />
               </div>
               <div className="mb-3">
               <CFormInput
                       type="number"
                       id="exampleFormControlInput1"
                       placeholder="number of children"
                       
               />
               </div>
               <div className="mb-3">
               <CFormInput
                       type="text"
                       id="exampleFormControlInput1"
                       placeholder="Enter Guardian Role of the user"
                       
               />
               </div>
               <div className="mb-3">
               <CFormInput
                       type="file"
                       id="exampleFormControlInput1"
                      
               />
               </div>
                <div>
                    <h6>Add user and his children data can be added on his detail pop-up after select hom from the list. </h6>
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


export default Usermanagement;
