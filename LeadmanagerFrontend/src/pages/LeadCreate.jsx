import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LeadCreate() {
 
  const[Lead,SetLead]=useState({  
    "name": "",
    "mobile": "",
    "email": "",
    "college": "",
    "qualification": "",
    "passout_year": "",
    "source": "",
    "course": " ",
    "course_mode": "",
    "status": "",
  })

  const navigate=useNavigate()

  async function handleSubmit(event){
    event.preventDefault()

    console.log(Lead);

    let token=localStorage.getItem("token")

    let headers={"Authorization":token}

    let response=await axios.post("http://127.0.0.1:8000/api/leads/",Lead,{headers})   

    if (response.status>=200 && response.status<300)
      console.log("data created");
      navigate("/leadlist")
      
  }
 
 
 
  return (
  <div>
    
    <div class="container mt-5 ">
                <div class="card p-4">
                    <h2 class="text-center mb-4">Add Student Details</h2>
                    <form action="#" method="post" onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
                                    <input type="text" class="form-control" 
                                    id="name" 
                                    name="name"
                                    placeholder="Enter Name" 
                                    value={Lead.name}
                                    onChange={(e)=>SetLead({...Lead,name:e.target.value})}
                                    required />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-telephone-fill"></i></span>
                                    <input type="text" 
                                    class="form-control" 
                                    id="mobile" 
                                      name="mobile" 
                                    placeholder="Enter Mobile" 
                                    value={Lead.mobile}
                                    onChange={(e)=>SetLead({...Lead,mobile:e.target.value})}

                                    required />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-envelope-fill"></i></span>
                                    <input type="email" 
                                    class="form-control" id="email" name="email" placeholder="Enter Email" 
                                    value={Lead.email}
                                    onChange={(e)=>SetLead({...Lead,email:e.target.value})}
                                    required />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-building"></i></span>
                                    <input type="text" class="form-control" id="college" name="college" placeholder="Enter College" 
                                    value={Lead.college}
                                    onChange={(e)=>SetLead({...Lead,college:e.target.value})}
                                    
                                    required />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-mortarboard-fill"></i></span>
                                    <input type="text" class="form-control" id="qualification" name="qualification" placeholder="Enter Qualification" 
                                    
                                    value={Lead.qualification}
                                    onChange={(e)=>SetLead({...Lead,qualification:e.target.value})}

                                    
                                    required />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-calendar-check-fill"></i></span>
                                    <input type="text" class="form-control" id="passout_year" name="passout_year" placeholder="Enter Passout Year" 
                                     value={Lead.passout_year}
                                     onChange={(e)=>SetLead({...Lead,passout_year:e.target.value})}
                                    required />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="source" class="form-label">Source</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-box-arrow-in-right"></i></span>
                                    <select class="form-select" id="source" name="source" 
                                     value={Lead.source}
                                     onChange={(e)=>SetLead({...Lead,source:e.target.value})}
                                    required>
                                        <option value="instagram">Instagram</option>
                                        <option value="facebook">Facebook</option>
                                        <option value="referral">Referral</option>
                                        <option value="walkin" selected>Walk-in</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="course" class="form-label">Course</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-journal-code"></i></span>
                                    <select class="form-select" id="course" name="course" 
                                     value={Lead.course}
                                     onChange={(e)=>SetLead({...Lead,course:e.target.value})}
                                    required>
                                        <option value="TESTING">TESTING</option>
                                        <option value="PYTHON DJANGO" selected>PYTHON DJANGO</option>
                                        <option value="MEARN">MEARN</option>
                                        <option value="DATA SCIENCE">DATA SCIENCE</option>
                                        <option value="JAVA SPRING">JAVA SPRING</option>
                                        <option value=".NET">.NET</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="course_mode" class="form-label">Course Mode</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-globe"></i></span>
                                    <select class="form-select" id="course_mode" name="course_mode"
                                     value={Lead.course_mode}
                                     onChange={(e)=>SetLead({...Lead,course_mode:e.target.value})}
                                    
                                    required>
                                        <option value="ONLINE">ONLINE</option>
                                        <option value="OFFLINE" selected>OFFLINE</option>
                                        <option value="HYBRID">HYBRID</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="status" class="form-label">Status</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-flag"></i></span>
                                    <select class="form-select" id="status" name="status" 
                                     value={Lead.status}
                                     onChange={(e)=>SetLead({...Lead,status:e.target.value})}
                                    required>
                                        <option value="FOLLOWUP" selected>FOLLOW-UP</option>
                                        <option value="PROCEEDTOADMISSION">PROCEED-TO-ADMISSION</option>
                                        <option value="NOTINTERESETED">NOT-INTERESTED</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary mt-3">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

    </div>
  
  )
}

export default LeadCreate