import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LeadEdit from './Leadedit'

function LeadList() {
    const [leads, setLeads] = useState()
    

    useEffect(()=>{fetchleadlist()},[])

    
    async function leaddelete(id){

        const token=localStorage.getItem("token")

        let headers={"Authorization":token}
        let response=await axios.delete(`http://127.0.0.1:8000/api/leads/${id}/`,{headers})
        if(response.status>=200 && response.status<300){

            fetchleadlist()
            }
    }
          
    

    async function fetchleadlist(){

        const token = localStorage.getItem("token");
        
        const headers = { "Authorization": token };

        let response=await axios.get("http://127.0.0.1:8000/api/leads/",{headers})
        if(response.status>=200 && response.status<300){

            setLeads(response.data);
        }
        
    }
  return (
    <div>
        <div class="container mt-5">
    <div class="card p-4">
        <h2 class="text-center mb-4">Leads List</h2>
        <div class="row mb-3">
            <div class="col-md-6">
                <input type="text" class="form-control" id="searchBar" placeholder="Search leads by name, email, or mobile"/>
            </div>
            <div class="col-md-6 text-end">
                <Link class="btn btn-primary" to="/leadcreate"> <i class="bi bi-plus-circle"></i>Add New Lead</Link>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>College</th>
                        <th>Qualification</th>
                        <th>Source</th>
                        <th>Course</th>
                        <th>Course Mode</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="leadTableBody">
                    {leads?.map((l,index)=>(
                        <tr>
                        <td>{index+1}</td>
                        <td>{l.name}</td>
                        <td>{l.mobile}</td>
                        <td>{l.email}</td>
                        <td>{l.college}y</td>
                        <td>{l.qualification}</td>
                        <td>{l.course}</td>
                        <td>{l.source}</td>
                        <td>{l.course_mode} </td>
                        <td>{l.status}</td>
                        
                        <td>
                            <div class="d-flex justify-content-around gap-2">
                                <button onClick={()=>l(l.id)} class="btn btn-success btn-action" title="Edit">
                                    <i class="bi bi-pencil"></i>
                                </button>
                                <button onClick={()=>leaddelete(l.id)} class="btn btn-danger btn-action" title="Delete">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>

                    ))}
                    {/* <!-- Additional rows go here --> */}
                </tbody>
            </table>
        </div>
    </div>
</div>


    </div>
  )
}

export default LeadList