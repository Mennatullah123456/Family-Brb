import React,{useState} from "react";
import {
    CButton,
    CCard,
    CCardBody,
   
    CCardHeader,
    CModalHeader,CFormSwitch,
    CModalFooter,
    CFormInput,CCardTitle ,
    CModalBody,CCardImage,CCardText,
    CModal ,
    CCol,CNav,CNavLink,CNavItem,CTabContent,CTabPane,
    CRow,
    CModalTitle,CAvatar ,CPaginationItem,CPagination,
    CTableHead,CTableRow,CTable,CTableHeaderCell,CTableBody,CTableDataCell
  } from '@coreui/react'
  

  import Userfeedback from "./userfeedback"
import CIcon from '@coreui/icons-react'
const Usermanagement = () => {
    const [visibleXL, setVisibleXL] = useState(false);
    
    const [userFeedbackModal, setUserFeedbackModal] = useState(false);
    const [activeKey, setActiveKey] = useState(1);
    return(
        <>
        <CRow>
         
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <h3>Users</h3>
            </CCardHeader>
            <CCardBody>
          
            <div className="  overflow-auto">
                    <CTable striped >
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">User</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Basic Info</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Contact Info</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Children</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Last login</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Actions </CTableHeaderCell>
                        </CTableRow>    
                    </CTableHead>
                    <CTableBody>
                        <CTableRow style={{height:"5rem",zIndex:"-1"}} onClick={(e) => {e.stopPropagation(); setVisibleXL(true)}} >
                            <CTableDataCell scope="row">
                              <div className="d-flex flex-column align-items-center ">
                              <CCardImage orientation="left" className="rounded-circle" src={"avatars/2.jpg"}  /> 
                              <h6 className="text-center mt-2">wesalnowsher</h6>
                              </div></CTableDataCell>
                            <CTableDataCell>   
                                    <div className="d-flex  p-1 gap-2 "><div className=" ">Id:</div><div><b>CV9619852</b></div></div>
                                    <div className="d-flex  p-1  gap-2 "><div className=" ">Visa status:</div><div><b>visit visa, 90 days left</b></div></div>
                                    <div className="d-flex  p-1  gap-2 "><div className=" ">Nationality:</div><div><b>Indian</b></div></div>
                                    {/* <div className="d-flex   p-1 gap-2  "><div className=" ">email verification:</div><div className="text-success"></div></div> */}
                                    {/* <div className="d-flex   p-1 gap-2    "><div className="  ">Ph no:</div><div className="text-danger"> <b><i class="fa fa-close"></i></b></div></div> */}
                                    
                            </CTableDataCell>
                            <CTableDataCell>
                                    <div className="d-flex  p-1 gap-2 "><div className=" ">Email Id:</div><div><b>Wesal@cyberspace.ae</b> <b><i class="fa fa-check"></i></b></div></div>
                                    <div className="d-flex  p-1  gap-2 "><div className=" ">Ph NO:</div><div><b>+971585951900</b></div></div>
                            </CTableDataCell>
                            <CTableDataCell >
                             <div className="d-flex children">
                             <div className="d-flex flex-column   align-items-center">
                                  <CCardImage orientation="left" className="rounded-circle " src={"avatars/9.jpg"}  /> 
                                  <p className="text-left  ">Ahmed jan</p>
                              </div>
                              <div className="d-flex flex-column  align-items-center">
                              <CCardImage orientation="left" className="rounded-circle  " src={"avatars/4.jpg"}  /> 
                              <p className="text-left    ">Ayat jan</p>
                              </div>
                              <div className="d-flex flex-column   align-items-center" >
                              <CCardImage orientation="left" className="rounded-circle  " src={"avatars/5.jpg"}  /> 
                              <p className="text-left     ">jannat jan</p>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="cursor-pointer">
                                  <b>2 more</b>
                                </p>
                              </div>
                              

                             </div>
                              </CTableDataCell>
                            <CTableDataCell>
                                13th march, 2022
                            </CTableDataCell>
                            <CTableDataCell>
                              <div className="d-flex flex-column" >
                                <div className="plusometer d-flex flex-column align-items-start" >
                                  <CFormSwitch onChange={(e )=> {e.stopPropagation();setVisibleXL(false)}}  label="Enable/Disable user" id="formSwitchCheckChecked" defaultChecked/>
                                  <CButton onClick={(e)=> {e.stopPropagation(); setVisibleXL(false)}}  color="warning" className="mt-2">Notify</CButton>
                                  <CButton  onClick={(e)=> { e.stopPropagation();   setUserFeedbackModal(true);}}   color="info" className="mt-2">User FeedBacks</CButton>
                                  </div> 
                              </div> 
                            </CTableDataCell> 
                        </CTableRow>         
                    </CTableBody>
                    </CTable>
                </div>
            </CCardBody>
          </CCard>
        </CCol> 
      </CRow>
      <Userfeedback  userFeedbackModal={userFeedbackModal} setUserFeedbackModal={setUserFeedbackModal}/>
        <CModal size="xl" visible={visibleXL} onClose={() => setVisibleXL(false)}>
        <CModalHeader>
          <CModalTitle>User Details</CModalTitle>
        </CModalHeader>
            <CModalBody>
                <div className="mb-3 d-flex gap-3">
                          <div className="d-flex flex-column  ">
                            <CCardImage orientation="left" className="rounded-circle"
                             src={"avatars/2.jpg"}  /> 
                            
                            </div>
                          
                            <div>
                            <div className="d-flex  p-1 gap-2 "><div className=" ">Name:</div><div><b>wesalnowsher</b></div></div>
                            <div className="d-flex  p-1 gap-2 "><div className=" ">Email Id:</div><div><b>Wesal@cyberspace.ae</b> <b><i class="fa fa-check"></i></b></div></div>
                            <div className="d-flex  p-1  gap-2 "><div className=" ">Phone NO:</div><div><b>+971585951900</b></div></div>
                            <div className="d-flex  p-1 gap-2 "><div className=" ">Passport Id:</div><div><b>CV9619852</b></div></div>
                            <div className="d-flex  p-1  gap-2 "><div className=" ">Visa status:</div><div><b>visit visa, 90 days left</b></div></div>
                            
                            <div className="d-flex  p-1  gap-2 "><div className=" ">Nationality:</div><div><b>Indian</b></div></div>
                            {/* <div className="d-flex   p-1 gap-2    "><div className="  ">Ph no:</div><div className="text-danger"> <b><i class="fa fa-close"></i></b></div></div>
                              */}
                            </div>
                            <div className="w-50 d-flex justify-content-center align-items-center">
                          
                            <div className="d-flex flex-column gap-2" >
                            <p className="mb-0"> Last login: <b>13th march, 2022</b></p>
                              <div className="plusometer"><CFormSwitch   label="Enable/Disable user" id="formSwitchCheckChecked" defaultChecked/>
                              
                              </div> 
                            </div> 
                            </div>
              
                </div>
            
              
              <div className=" d-flex flex-column mb-3">
                <h3>Children:</h3> 
                    <div className=" children-modal  gap-4">
                    <CCard className=" children-modal-inner d-inline-flex m-4 col-3">
                      <CCardHeader>
              
                      <h6> jannat jan</h6>
                      </CCardHeader>
                      <CCardBody>
                        
                        
                      <div className="  overflow-auto">
                      <div className=" chillren-inner-outer d-flex flex-column   align-items-center" >
                            <CCardImage orientation="left" className="rounded-circle  " src={"avatars/4.jpg"}  /> 
                            <p className="text-left  mb-0    ">Active Points: <b>15</b> </p>
                            <p className="text-left    mb-0  ">Redeemed Points: <b>14</b> </p>
                            <p className="text-left  mb-0    ">Tasks In-hand: <b>14</b> </p>
                            <p className="text-left  mb-0    ">Completed tasks: <b>17</b> </p>
                            <p className="text-left  mb-0    ">Overall rating: <b><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 4</b> </p>
                            </div>
                          </div>
                      </CCardBody>
                    </CCard>
                    <CCard className="children-modal-inner d-inline-flex m-4    col-3">
                      <CCardHeader>
              
                      <h6> Ahmed jan</h6>
                      </CCardHeader>
                      <CCardBody>
                        
                        
                      <div className="  overflow-auto">
                      <div className="chillren-inner-outer d-flex flex-column   align-items-center" >
                            <CCardImage orientation="left" className="rounded-circle  " src={"avatars/9.jpg"} /> 
                            <p className="text-left  mb-0    ">Active Points: <b>15</b> </p>
                            <p className="text-left    mb-0  ">Redeemed Points: <b>14</b> </p>
                            <p className="text-left  mb-0    ">Tasks In-hand: <b>14</b> </p>
                            <p className="text-left  mb-0    ">Completed tasks: <b>17</b> </p>
                            <p className="text-left  mb-0    ">Overall rating: <b><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 4</b> </p>
                            </div>
                          </div>
                      </CCardBody>
                    </CCard>
                    <CCard className="children-modal-inner d-inline-flex m-4   col-3">
                      <CCardHeader>
              
                      <h6> Ayat jan</h6>
                      </CCardHeader>
                      <CCardBody>
                        
                        
                      <div className="  overflow-auto">
                      <div className=" chillren-inner-outer d-flex flex-column   align-items-center" >
                            <CCardImage orientation="left" className="rounded-circle  " src={"avatars/5.jpg"} /> 
                            <p className="text-left  mb-0    ">Active Points: <b>15</b> </p>
                            <p className="text-left    mb-0  ">Redeemed Points: <b>14</b> </p>
                            <p className="text-left  mb-0    ">Tasks In-hand: <b>14</b> </p>
                            <p className="text-left  mb-0    ">Completed tasks: <b>17</b> </p>
                            <p className="text-left  mb-0    ">Overall rating: <b><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 4</b> </p>
                            </div>
                          </div>
                      </CCardBody>
                    </CCard>
                    <CCard className="children-modal-inner d-inline-flex m-4   col-3">
                      <CCardHeader>
              
                      <h6> Muhammad jan</h6>
                      </CCardHeader>
                      <CCardBody>
                        
                        
                      <div className="mb-3 overflow-auto">
                      <div className="chillren-inner-outer d-flex flex-column   align-items-center" >
                            <CCardImage orientation="left" className="rounded-circle  "
                             src={"avatars/6.jpg"} /> 
                            <p className="text-left  mb-0    ">Active Points: <b>15</b> </p>
                            <p className="text-left    mb-0  ">Redeemed Points: <b>14</b> </p>
                            <p className="text-left  mb-0    ">Tasks In-hand: <b>14</b> </p>
                            <p className="text-left  mb-0    ">Completed tasks: <b>17</b> </p>
                            <p className="text-left  mb-0    ">Overall rating: <b><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 4</b> </p>
                            </div>
                          </div>
                      </CCardBody>
                    </CCard>
                    <CCard className="children-modal-inner d-inline-flex m-4 col-3">
                      <CCardHeader>
              
                      <h6> Hayat jan</h6>
                      </CCardHeader>
                      <CCardBody>
                        
                        
                      <div className="mb-3 overflow-auto">
                      <div className="d-flex flex-column   align-items-center chillren-inner-outer" >
                            <CCardImage orientation="left" className="rounded-circle  " 
                            src={"avatars/7.jpg"}  /> 
                            <p className="text-left  mb-0    ">Active Points: <b>15</b> </p>
                            <p className="text-left    mb-0  ">Redeemed Points: <b>14</b> </p>
                            <p className="text-left  mb-0    ">Tasks In-hand: <b>14</b> </p>
                            <p className="text-left  mb-0    ">Completed tasks: <b>17</b> </p>
                            <p className="text-left  mb-0    ">Overall rating: <b><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 4</b> </p>
                            </div>
                          </div>
                      </CCardBody>
                    </CCard>
                    </div>
              </div>
              <CPagination align="center" aria-label="Page navigation example">
                <CPaginationItem disabled>Previous</CPaginationItem>
                <CPaginationItem active>1</CPaginationItem>
                  
                <CPaginationItem disabled>Next</CPaginationItem>
              </CPagination>
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
