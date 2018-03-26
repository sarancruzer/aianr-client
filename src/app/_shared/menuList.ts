interface _category {
    questions: string;
    view: number;
  }
  
  interface _menu {
    categoryList?: _category[];
    name: string;
    link: string;
  }
  
  export const _menuList: _menu[] = [
  
    {
      name: "Leave - Queries", link: "firstLink", categoryList: [
        { questions: "What are the Norms for Casual Leave ?", view: 0 }
        , { questions: "How many casual leaves can be taken in a year?", view: 0 }
        , { questions: "How many kinds of leave does our organization provide", view: 0 }
        , { questions: "How many leaves are remaining for me in this financial year ?", view: 0 }
        , { questions: "Norms for Maternity Leave", view: 0 }
        , { questions: "Norms for paternity leave", view: 0 }
        , { questions: "How many sick leave remaining for me?", view: 0 }
        , { questions: "Norms for Sick Leave", view: 0 }
        , { questions: "What is the leave code for sick leave", view: 0 }
        , { questions: "What is the leave code for casual leave", view: 0 }
        , { questions: "What is the code XX?", view: 0 }
        , { questions: "What is the code AX?", view: 0 }
        , { questions: "Norms for Permission", view: 0 }
        , { questions: "How many days privilege leave available?", view: 0 }
        , { questions: "Norms for Privilege Leave", view: 0 }
        , { questions: "What are the Norms for Trainee Leave?", view: 0 }
        , { questions: "Norms for Condolence Leave", view: 0 }
        , { questions: "Whom should I contact to inform my leave of absence ?", view: 0 }
        , { questions: "Who is my reporting manager ?", view: 0 }
        , { questions: "Should I produce medical certificate for sick leaves", view: 0 }
        , { questions: "Norms for Compensatory off", view: 0 }
        , { questions: "My Disapproved Leaves", view: 0 }
        , { questions: "Will I be paid fully when I am under injury leave?", view: 0 }
        , { questions: "My Approved Leaves", view: 0 }
        , { questions: "How to correct wrongly marked leave ?", view: 0 }
        , { questions: "I want to apply for leave", view: 0 }
        , { questions: "How can i avail restricted holidays ?", view: 0 }
        , { questions: "What if my approving manager is not available to approve my leaves", view: 0 }
      ]
    },
    {
      name: "Office Time Schedule - Queries"
      , link: "secondLink"
      , categoryList: [
        { questions: "What is my working hours?", view: 0 }
        , { questions: "How many late comings are allowed in a month?", view: 0 }
        , { questions: "What is my shift details?", view: 0 }
        , { questions: "What are the available shift in our company?", view: 0 }
        , { questions: "What is my shift details?", view: 0 }
        , { questions: "How do I request for shift change ?", view: 0 }
        , { questions: "What is the commencement time of lunch break ?", view: 0 }
        , { questions: "How do I escalate my disapproved request ?", view: 0 }
        , { questions: "Should I take prior approval for overtime", view: 0 }
        , { questions: "Current month compoff report", view: 0 }
        , { questions: "How do I correct my attendance data error ?", view: 0 }
  
        , { questions: "Buffer time for punching", view: 0 }
        , { questions: "How do I correct mispunch ?", view: 0 }
      ]
    },
    {
      name: "Employee Benefits - Queries"
      , link: "thirdLink"
      , categoryList: [
        { questions: "How I can solve tax related issues ?", view: 0 }
        , { questions: "What are the insurance benefits available for employees ?", view: 0 }
        , { questions: "How to encash my available privilege leaves PL ?", view: 0 }
        , { questions: "What is the ESI policy of the company ?", view: 0 }
        , { questions: "What is my eligibility for mediclaim ?", view: 0 }
        , { questions: "What are the norms for accidental insurance?", view: 0 }
        , { questions: "What is my eligibility for travel and accommodation benefits on official tour ?", view: 0 }
        , { questions: "How I can apply for loan ?", view: 0 }
        , { questions: "How do we apply for house rent allowance ?", view: 0 }
        , { questions: "How do we apply for claims and reimbursement ?", view: 0 }
        , { questions: "What is the policy to hire employees and selection process ?", view: 0 }
        , { questions: "Whom should I contact for availing training in specific skills?", view: 0 }
        , { questions: "How do I resolve conflicts with my immediate boss ?", view: 0 }
        , { questions: "How do I escalate my grievances?", view: 0 }
      ]
    },
    {
      name: "Management - Queries"
      , link: "fourthLink"
      , categoryList: [
        , { questions: "Who is the Deputy Manager ?", view: 1 }
        , { questions: "Who is the Assistant Engineer ?", view: 1 }
        , { questions: "What is the designation of Sasi Kumar ?", view: 1 }
        , { questions: "Who is on leave today ?", view: 1 }
        , { questions: "How many employees are on leave today ?", view: 1 }
        , { questions: "How many days was XXXX on leave this month ?", view: 1 }
        , { questions: "Was Sasi Kumar present yesterday ?", view: 1 }
        , { questions: "How many days was XX late to office this month", view: 1 }
        , { questions: "How many days was xxxx on comp off this month ?", view: 1 }
  
      ]
    },
    {
      name: "Report"
      , link: "fivethLink"
      , categoryList: [
        { questions: "Holiday List", view: 0 }
        , { questions: "Leave Types", view: 0 }
        , { questions: "My Remaining leave Chart", view: 0 }
        , { questions: "Leave Approval Status Report", view: 1 }
        , { questions: "Today Leave List", view: 1 }
        , { questions: "My attendance report", view: 1 }
        , { questions: "Comp Off Status Chart", view: 1 }
        , { questions: "Employees Official Details", view: 1 }
        , { questions: "Employees Personal Details", view: 1 }
        , { questions: "Comp off Application Status List", view: 1 }
      ]
    }
  ]