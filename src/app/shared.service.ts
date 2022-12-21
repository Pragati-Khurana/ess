import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:19666/api";
  readonly PhotoUrl="http://localhost:19666/Photos/";

  constructor(private http:HttpClient) { }

  getEmployeeMaster():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmployeeMaster/');
  }

  getHead():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmployeeMaster/GetHead');
  }

  filterGender(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmployeeMaster/FilterByGender?g='+val);
  }

  SearchEmp(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmployeeMaster/SearchE?s='+val);
  }

  CountGenderM():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmployeeMaster/CountGenM');
  }

  CountGenderF():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmployeeMaster/CountGenF');
  }

  CountE():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmployeeMaster/CountEmp');
  }

  getEmployeeDetails(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmployeeMaster/GetEmployee/?id='+ val);
  }

  getContactDetails(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmployeeMaster/GetContactDetails?id='+val);
  }

  getFamilyDetails(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmployeeMaster/GetFamilyDetails?id='+val);
  }

  getEducationDetails(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmployeeMaster/GetEducationDetails?id='+val);
  }

  getSalaryDetails(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmployeeMaster/GetSalary?id='+val);
  }

  getExperienceDetails(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmployeeMaster/GetExperience?id='+val);
  }

  getExperienceDetails2():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmployeeMaster/GetExperience2/');
  }

  getDesignationDetails(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmployeeMaster/GetDesignation/?id='+ val);
  }

  getDepartmentNames():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmployeeMaster/GetDepartmentNames/');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/EmployeeMaster',val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/EmployeeMaster/SaveFile',val);
  }

  addExperience(val:any){
    return this.http.post(this.APIUrl+'/EmployeeMaster/AddExperienceD',val);
  }

  addEducational(val:any){
    return this.http.post(this.APIUrl+'/EmployeeMaster/AddEducationalD',val);
  }

  addFamily(val:any){
    return this.http.post(this.APIUrl+'/EmployeeMaster/AddFamilyD',val);
  }

  addSalary(val:any){
    return this.http.post(this.APIUrl+'/EmployeeMaster/AddSalaryD',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/EmployeeMaster',val);
  }

  updateExperience(val:any){
    return this.http.put(this.APIUrl+'/EmployeeMaster/EditExperience',val);
  }

  updateEducation(val:any){
    return this.http.put(this.APIUrl+'/EmployeeMaster/EditEducation',val);
  }

  updateSalary(val:any){
    return this.http.put(this.APIUrl+'/EmployeeMaster/EditSalary',val);
  }

  updateFamily(val:any){
    return this.http.put(this.APIUrl+'/EmployeeMaster/EditFamily',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/EmployeeMaster?id='+val);
  }

  deleteExperience(val:any){
    return this.http.delete(this.APIUrl+'/EmployeeMaster/DeleteExperience?id='+val);
  }

  deleteEducation(val:any){
    return this.http.delete(this.APIUrl+'/EmployeeMaster/DeleteEducation?id='+val);
  }

  deleteSalary(val:any){
    return this.http.delete(this.APIUrl+'/EmployeeMaster/DeleteSalary?id='+val);
  }

  deleteFamily(val:any){
    return this.http.delete(this.APIUrl+'/EmployeeMaster/DeleteFamily?id='+val);
  }

  //Leave module
  getLeaveNames():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Leave/GetLeaveNames/');
  }

  addTLeave(val:any){
    return this.http.post(this.APIUrl+'/Leave/AddTempLeave',val);
  }

  getTLeaveD():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Leave/GetTLeaveDetails');
  }

  getTLeaveDID(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Leave/GetTLeaveDetailsID?id='+val);
  }

  addLEntry(val:any){
    return this.http.post(this.APIUrl+'/Leave/AddLeaveEntry',val);
  }

  getLEntry2():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Leave/GetLeaveEntry2');
  }

  addLEntry2(val:any){
    return this.http.post(this.APIUrl+'/Leave/AddLeaveEntry2',val);
  }

  updateLeaveEntry2(val:any){
    return this.http.put(this.APIUrl+'/Leave/EditLeaveEntry2',val);
  }

  deleteLeaveEntry2(val:any){
    return this.http.delete(this.APIUrl+'/Leave/DeleteLeaveEntry2?id='+val);
  }

  getLMaster(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Leave/GetLeaveMaster?id='+val);
  }

  deleteTLeave(val:any){
    return this.http.delete(this.APIUrl+'/Leave/DeleteTempLeave?id='+val);
  }

  updateELDetails(val:any){
    return this.http.put(this.APIUrl+'/Leave/EditLeaveDetails',val);
  }

  addELDetails(val:any){
    return this.http.post(this.APIUrl+'/Leave/AddLeaveDetails',val);
  }

  getELDetails():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Leave/GetLeaveDetails');
  }

  getELDetailsID(val1:any,val2:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Leave/GetLeaveDetailsID/?id='+ val1+'&yr='+val2);
  }

  //sending email
  sendRequest(val:any[]){
    return this.http.post(this.APIUrl+'/EmployeeMaster/SEmail',val);
  }

  //employee side attendance
  getAttendanceList(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Attendance/GetAttendanceList?id='+val);
  }

  getSearchDateWise(val:any,val2:any,val3:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Attendance/SearchDateWise?id='+val+'&startdate='+val2+'&todate='+val3);
  }

//hr side attendance
  getFullAttendanceList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Attendance/GetFullAttendanceList/');
  }
  
  SearchEmpAttendance(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Attendance/SearchEmp?s='+val);
  }
  
  SearchByDate(val:any,val2:any,val3:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Attendance/SearchByDate?s='+val+'&startdate='+val2+'&todate='+val3);
  }

  //attandance
  addTempAttandance(val:any){
    return this.http.post(this.APIUrl+'/Attandance/AddTempAttandance',val);
  }

  getShiftDetails(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Attendance/GetShiftDetails?id='+val);
  }

  getTAttendance():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Attandance/GetTAttendance');
  }

  deleteTAttendance(val:any){
    return this.http.delete(this.APIUrl+'/Attandance/DeleteTempAttendance?id='+val);
  }

  addMuster(val:any){
    return this.http.post(this.APIUrl+'/Attandance/AddMusterRegister',val);
  }
  //delete attendance
  getAttendanceDetails(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Attendance/GetAttendanceDetails?id='+val);
  }
  
  editAttendance(val:any){
    return this.http.put(this.APIUrl+'/Attendance/EditAttendance',val);
  }

  deleteAttendance(val:any,val2:any){
    return this.http.delete(this.APIUrl+'/Attandance/DeleteAttendance?id='+val+'&pdate='+val2);
  }

  //salary module

  //employee side salary

  getSalaryList(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Salary/GetSalaryList?id='+val);
  }

  getSearchSalaryDateWise(val:any,val2:any,val3:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Salary/SearchSalaryDateWise?id='+val+'&startdate='+val2+'&todate='+val3);
  }

  //hr side salary

  getFullSalaryList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Salary/GetFullSalaryList/');
  }
  
  SearchEmpSalary(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Salary/SearchEmp?s='+val);
  }
  
  SearchByNameDateSalary(val:any,val2:any,val3:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Salary/SearchByNameDate?s='+val+'&startdate='+val2+'&todate='+val3);
  }
}
