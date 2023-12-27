//const object
//const object
const Admin_pageURL = "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers";
const add_admin_pageURL= "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser";
const Save_userbtn = ".oxd-button--secondary";
const User_Role = ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text";
const Employee_name = ".oxd-autocomplete-text-input > input')";
const Status = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
const Username = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'
const Password = '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
const Confirm_password = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'


class Admin_Adduser_objects{
    Admin_pageURL(){
        return cy.visit(Admin_pageURL);
    }
    // URL(){
    //     return cy.url();
    // } ""
    add_admin_pageURL(){
        return cy.visit(add_admin_pageURL);
    };
    Save_user_btn(){
        return cy.get(Save_userbtn)
    };
    User__Role(){
        return cy.get(User_Role)
    }
    Employee__name(){
        return cy.get(Employee_name)
    }
    status(){
        return cy.get(Status)
    }
    username(){
        return cy.get(Username)
    }
    password(){
        return cy.get(Password)
    }
   confirm_password(){
    return cy.get(Confirm_password)
   }
};
export {Admin_Adduser_objects};