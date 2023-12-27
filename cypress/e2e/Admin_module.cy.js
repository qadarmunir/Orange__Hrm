import { Admin_Adduser_objects } from "../Page_Objects/admin_add_member_page_Objects/admin_module";

const Adduser_object = new Admin_Adduser_objects();

describe("Admin_module" ,()=>{
  beforeEach(()=>{
    cy.Login();
  })
  it("ABC",()=>{
    //cy.Login();
    Adduser_object.Admin_pageURL();
    Adduser_object.add_admin_pageURL();
    Adduser_object.User__Role().select('Admin').should("have.value", 0);
    Adduser_object.Employee__name()
    Adduser_object.status()
    Adduser_object.username()
    Adduser_object.password()
    Adduser_object.confirm_password()
    Adduser_object.Save_user_btn()
  });
});