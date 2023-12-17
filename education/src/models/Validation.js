export default function Validation(values) {
    const errors = {};
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(!values.username){
      errors.username = "User Name is Required";
    }
  
    if (!values.firstname) {
      errors.firstname = "First Name is Required";
    }
    
    if (!values.lastname) {
      errors.lastname = "Last Name is Required";
    }
    
    if (!values.subject) {
      errors.subject = "Subject Name is Required";
    }
    
    if (!values.address) {
      errors.address = "Address is Required";
    }
    
    if (!values.qualification) {
      errors.qualification = "Qualification is Required";
    }
    
    if (!values.verification) {
      errors.verification = "Verification Document is Required";
    }
    
    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "Invalid Email Format";
    }
    
    if (!values.phoneno) {
      errors.phoneno = "Phone Number is Required";
    }
    
    if (!values.password) {
      errors.password = "Password is Required";
    } else if (!passwordPattern.test(values.password)) {
      errors.password = "Password is not specified";
    }
  
    if (!values.experience) {
      errors.experience = "Experience is Required";
    }
  
    return errors;
  }
  