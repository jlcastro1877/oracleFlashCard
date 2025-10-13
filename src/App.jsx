// src/App.jsx
import { useState } from "react";
import FlashcardList from "./FlashcardList";
import "./App.css";

export default function App() {
  // 1️⃣ Flashcards com tópicos e múltipla escolha
  const [flashcards] = useState([
    {
      id: 1,
      topic: "Oracle Modern Best Practice (OMBP)",
      question: "What is the primary purpose of Oracle Fusion Cloud ERP's General Ledger Module?",
      options: [
        "A.Manage Supplier invoices",
        "B.Track employee expenses",
        "C.Centralized financial reporting",
        "D.Automate collections"
      ],
      answer: "C.Centralized financial reporting",
    },
    {
      id: 2,
      topic: "Oracle Modern Best Practice (OMBP)",
      question: "Which feature is central to Oracle Modern Best Practice?",
      options: [
        "A.Manual data entry",
        "B.AI/ML-powered automation",
        "C.On-premise deployment",
        "D.Legacy system integration"
      ],
      answer: "B.AI/ML-powered automation",
    },
    {
      id: 3,
      topic: "Oracle Modern Best Practice (OMBP)",
      question: "What does Oracle Modern Best Practice aim to improve?",
      options: [
        "A.Hardware performance",
        "B.Business process efficiency",
        "C.Employee satisfaction",
        "D.Tax compliance"
      ],
      answer: "B.Business process efficiency",
    },
    {
      id: 4,
      topic: "Oracle Modern Best Practice (OMBP)",
      question: "Oracle Modern Best Practice is embedded into applications using Starter Configuration?",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "A.True",
    },
    {
      id: 5,
      topic: "Oracle Modern Best Practice (OMBP)",
      question: "Oracle Cloud ERP is only suitable for large enterprises.",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "B.False",
    },
    {
      id: 6,
      topic: "Oracle Modern Best Practice (OMBP)",
      question: "(Financials) Wich module integrates with Payables for seamless operations?",
      options: [
        "A.Receivables",
        "B.Procurement",
        "C.Fixed Assets",
        "D.All of the above"
      ],
      answer: "D.All of the above",
    },
    {
      id: 7,
      topic: "Oracle Modern Best Practice (OMBP)",
      question: "(Financials) What does the Average Days Delinquent (ADD) metrics measure?",
      options: [
        "A.Supplier payment speed",
        "B.Customer payment delays",
        "C.Employee expense timing",
        "D.Tax filing accuracy"
      ],
      answer: "B.Customer payment delays",
    },
    {
      id: 8,
      topic: "Oracle Modern Best Practice (Financials)",
      question: "What is the purpose of Dynamic Discounting?",
      options: [
        "A.Improve supplier relationships",
        "B.Delay payments",
        "C.Automate tax reporting",
        "D.Reduce invoice volume"
      ],
      answer: "A.Improve supplier relationships",
    },
    {
      id: 9,
      topic: "Oracle Modern Best Practice (Financials)",
      question: "Which module automates customer collections?",
      options: [
        "A.Payables",
        "B.Advanced Collections",
        "C.Expenses",
        "D.Fixed Assets"
      ],
      answer: "B.Advanced Collections",
    },
    {
      id: 10,
      topic: "Oracle Modern Best Practice (Financials)",
      question: "What ensures supplier invoices are validated before payment?",
      options: [
        "A.Invoice Matching and Validation",
        "B.Payment Holds",
        "C.Invoice Archiving",
        "D.Fixed Assets"
      ],
      answer: "A.Invoice Matching and Validation",
    },
    {
      id: 11,
      topic: "Oracle Modern Best Practice (Financials)",
      question: "ADD is a KPI used in Financial OMBPs",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "A.True",
    },
    {
      id: 12,
      topic: "Oracle Modern Best Practice (Financials)",
      question: "Dynamic Discounting benefits only suppliers",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "B.False",
    },
    {
      id: 13,
      topic: "Oracle Modern Best Practice (Financials)",
      question: "The Payables module handles employee reimbursements",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "B.False",
    },
    {
      id: 14,
      topic: "Oracle Modern Best Practice (Project Management)",
      question: "Which module supports project budgeting and resource tracking?",
      options: [
        "A.Procurement",
        "B.Project Management",
        "C.Receivables",
        "D.Risk Management"
      ],
      answer: "B.Project Management",
    },
    {
      id: 15,
      topic: "Oracle Modern Best Practice (Project Management)",
      question: "What is a Key KPI in Project Management OMBP?",
      options: [
        "A.Budget Variance",
        "B.Tax rate",
        "C.Invoice volume",
        "D.Lease duration"
      ],
      answer: "A.Budget Variance",
    },
    {
      id: 16,
      topic: "Oracle Modern Best Practice (Project Management)",
      question: "What does the Resource Management dashboard help with?",
      options: [
        "A.Supplier onboarding",
        "B.Employee training",
        "C.Resource allocation",
        "D.Tax reporting"
      ],
      answer: "C.Resource allocation",
    },
     {
      id: 17,
      topic: "Oracle Modern Best Practice (Project Management)",
      question: "Project Management OMBP includes scheduling and task tracking",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "A.True",
    },
    {
      id: 18,
      topic: "Oracle Modern Best Practice (Project Management)",
      question: "Project Management OMBP is unrelated to financials planning",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "B.False",
    },
    {
      id: 19,
      topic: "Oracle Modern Best Practice (Risk Management)",
      question: "What is the purpose of Risk Management OMBP?",
      options: [
        "A.Automate payroll",
        "B.Track compliance and controls",
        "C.Manage supplier contracts",
        "D.Reconcile bank statements"
      ],
      answer: "B.Track compliance and controls",
    },
    {
      id: 20,
      topic: "Oracle Modern Best Practice (Risk Management)",
      question: "Which KPI is associated with Risk Management?",
      options: [
        "A.Control effectiveness",
        "B.Invoice accuracy",
        "C.Budget variance",
        "D.Payment speed"
      ],
      answer: "A.Control effectiveness",
    },
     {
      id: 21,
      topic: "Oracle Modern Best Practice (Risk Management)",
      question: "What does Risk Management OMBP help identify?",
      options: [
        "A.Tax errors",
        "B.Process inefficiencies",
        "C.Compliance gaps",
        "D.All of the above"
      ],
      answer: "D.All of the above",
    },
    {
      id: 22,
      topic: "Oracle Modern Best Practice (Risk Management)",
      question: "Risk Management OMBP focuses only on financial reporting.",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "B.False",
    },
    {
      id: 23,
      topic: "Oracle Modern Best Practice (Risk Management)",
      question: "Risk Management OMBP includes audit trail tracking.",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "A.True",
    },
    {
      id: 24,
      topic: "Oracle Modern Best Practice (Integration & Data Flow Across ERP Modules)",
      question: "Which modules integrate with Cash Management for reconciliation?",
      options: [
        "A.Payables and Receivables",
        "B.Fixed Assets and Expenses",
        "C.Procurement and Projects",
        "D.Advanced Collections and Lease Accounting"
      ],
      answer: "A.Payables and Receivables",
    },
    {
      id: 25,
      topic: "Oracle Modern Best Practice (Integration & Data Flow Across ERP Modules)",
      question: "What is the role of Account Reconciliation?",
      options: [
        "A.Automate supplier payments",
        "B.Ensure financial accuracy",
        "C.Track employee expenses",
        "D.Manage customer collections"
      ],
      answer: "B.Ensure financial accuracy",
    },
    {
      id: 26,
      topic: "Oracle Modern Best Practice (Integration & Data Flow Across ERP Modules)",
      question: "What is the purpose of Dunning Plans?",
      options: [
        "A.Automate supplier payments",
        "B.Send reminders for overdue payments",
        "C.Track employee expenses",
        "D.Reconcile bank statements"
      ],
      answer: "B.Send reminders for overdue payments",
    },
    {
      id: 27,
      topic: "Oracle Modern Best Practice (Cloud Success Navigator & Oracle Cloud Quality Standards)",
      question: "What is the role of Cloud Success Navigator?",
      options: [
        "A.Bug reporting",
        "B.Migration automation",
        "C.Cloud adoption guidance",
        "D.Invoice processing"
      ],
      answer: "C.Cloud adoption guidance",
    },
    {
      id: 28,
      topic: "Oracle Modern Best Practice (Cloud Success Navigator & Oracle Cloud Quality Standards)",
      question: "What do Oracle Cloud Quality Standards ensure?",
      options: [
        "A.Consistent implementation",
        "B.Faster tax filing",
        "C.Employee satisfaction",
        "D.Supplier discounts"
      ],
      answer: "A.Consistent implementation",
    },
       {
      id: 29,
      topic: "Oracle Modern Best Practice (Cloud Success Navigator & Oracle Cloud Quality Standards)",
      question: "How are OMBPs embedded into Oracle Cloud?",
      options: [
        "A.Through Starter Configuration",
        "B.Manual coding",
        "C.External plugins",
        "D.Third-party apps"
      ],
      answer: "A.Through Starter Configuration",
    },
    {
      id: 30,
      topic: "Oracle Modern Best Practice (Cloud Success Navigator & Oracle Cloud Quality Standards)",
      question: "Cloud Success Navigator helps optimize cloud transformation.",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "A.True",
    },
    {
      id: 31,
      topic: "Oracle Modern Best Practice (Cloud Success Navigator & Oracle Cloud Quality Standards)",
      question: "Oracle Cloud Quality Standards are optional for certification",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "B.False",
    },
    {
      id: 41,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "OMBP is embedded into Oracle Cloud Applications through Starter Configuration",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "A.True",
    },
    {
      id: 42,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "Which OMBP principle focuses on reducing manual steps through digital automation?",
      options: [
        "A.Mobile enablement",
        "B.AI/ML-driven automation",
        "C.Manual data entry",
        "D.Custom workflow scripting"
      ],
      answer: "B.AI/ML-driven automation",
    },
    {
      id: 43,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "(Scenario) A finance user needs to validate supplier invoices before payment is released. Which module performs this function?",
      options: [
        "A.Payables",
        "B.Receivables",
        "C.Cash Management",
        "D.Procurement"
      ],
      answer: "A.Payables",
    },
    {
      id: 44,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "Average Days Delinquent (ADD) is a KPI that measures how long suppliers take to ship goods.",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "B.False",
    },
    {
      id: 45,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "In the Financials OMBP, which process ensures accuracy and compliance before supplier payment?",
      options: [
        "A.Invoice Matching and Validation",
        "B.Bank Reconciliation",
        "C.Project Billing",
        "D.Account Consolidation"
      ],
      answer: "A.Invoice Matching and Validation",
    },
    {
      id: 46,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "(Scenario) A Church department pays vendors for construction materials. Which OMBP process applies?",
      options: [
        "A.Invoice-to-Cash",
        "B.Source-to-Pay",
        "C.Record-to-Report",
        "D.Acquire-to-Retire"
      ],
      answer: "B.Source-to-Pay",
    },
     {
      id: 47,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "Which KPI belongs to the Project Management OMBP?",
      options: [
        "A.Control Effectiveness",
        "B.Budget Variance",
        "C.Days Payable Outstanding",
        "D.Average Days Delinquent"
      ],
      answer: "B.Budget Variance",
    },
    {
      id: 48,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "Project Management OMBP includes scheduling, task trancking, and resource management.",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "A.True",
    },
    {
      id: 48,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "Project Management OMBP includes scheduling, task trancking, and resource management.",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "A.True",
    },
     {
      id: 49,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "(Scenario) A project manager compares planned vs. actual spending for a temple-building project.Which KPI measures this?",
      options: [
        "A.Resource Utilization",
        "B.Budget Variance",
        "C.Project Margin",
        "D.Schedule Adherence"
      ],
      answer: "B.Budget Variance",
    },
    {
      id: 50,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "Which Oracle Cloud module consolidates transactions from all subledgers?",
      options: [
        "A.Payables",
        "B.Receivables",
        "C.General Ledger (GL)",
        "D.Procurement"
      ],
      answer: "C.General Ledger (GL)",
    },
    {
      id: 51,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "Risk Management OMBP focuses only on financial reporting and excludes operational compliance.",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "B.False",
    },
     {
      id: 52,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "Which KPI evaluates how effectively internal controls mitigate risk?",
      options: [
        "A.Policy Violation Rate",
        "B.Control Effectiveness",
        "C.Audit Closure Rate",
        "D.Risk Exposure Index"
      ],
      answer: "B.Control Effectiveness",
    },
    {
      id: 53,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "(Scenario) A user can both create and approve vendor invoices? Which Risk Management control detects this?",
      options: [
        "A.Transaction Approval Workflow",
        "B.Segregation of Duties (SOD) Analysis",
        "C.Budget Variance Alert",
        "D.Data Reconciliation"
      ],
      answer: "B.Segregation of Duties (SOD) Analysis",
    },
    {
      id: 54,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "Audit trail tracking is part of the Risk Management OMBP",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "A.True",
    },
    {
      id: 55,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "Which module reconciles payments and receipts with bank statements?",
      options: [
        "A.Payables",
        "B.Receivables",
        "C.Cash Management",
        "D.Fixed Assets"
      ],
      answer: "C.Cash Management",
    },
    {
      id: 56,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "(Scenario) A controller wants to shorten the time needed to close monthly financial books Which KPI should be monitored?",
      options: [
        "A.Close Cycle Time",
        "B.Average Days Delinquent",
        "C.Schedule Adherence",
        "D.Budget Variance"
      ],
      answer: "A.Close Cycle Time",
    },
    {
      id: 57,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "Enterprise Performance Management (EPM) primarily supports which workstream?",
      options: [
        "A.Plan-to-Budget (P2B)",
        "B.Record-to-Report (R2R)",
        "C.Invoice-to-Cash (I2C)",
        "D.Source-to-Pay (S2P)"
      ],
      answer: "A.Plan-to-Budget (P2B)",
    },
    {
      id: 58,
      topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
      question: "Actual financial results flow from General Ledger back into EPM for variance analysis",
      options: [
        "A.True",
        "B.False"
      ],
      answer: "A.True",
    },
    {
  id: 59,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "(Scenario) During financial close, mismatched subledger entries appear. Which integration process ensures they are corrected before posting to GL?",
  options: [
    "A.Subledger Accounting (SLA)",
    "B.Cash Management",
    "C.Invoice Validation",
    "D.Payroll Posting"
  ],
  answer: "A.Subledger Accounting (SLA)",
},
{
  id: 60,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "Which KPI tracks customer payment efficiency?",
  options: [
    "A.ADD (Average Days Delinquent)",
    "B.DPO (Days Payable Outstanding)",
    "C.DSO (Days Sales Outstanding)",
    "D.Budget Variance"
  ],
  answer: "C.DSO (Days Sales Outstanding)",
},
{
  id: 61,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "(True/False) Dynamic Discounting benefits both buyers and suppliers.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "A.True",
},
{
  id: 62,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "(Scenario) A financial analyst needs a dashboard that combines AP, AR, and GL KPIs. Which Oracle component provides this?",
  options: [
    "A.ERP Analytics (OTBI/OAC)",
    "B.EPM Planning",
    "C.Risk Management",
    "D.Payables"
  ],
  answer: "A.ERP Analytics (OTBI/OAC)",
},
{
  id: 63,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "Which best describes Oracle Cloud Quality Standards?",
  options: [
    "A.Optional guidelines",
    "B.Required implementation standards ensuring consistent quality",
    "C.Developer code libraries",
    "D.Data-migration templates"
  ],
  answer: "B.Required implementation standards ensuring consistent quality",
},
{
  id: 64,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "(True/False) Cloud Success Navigator helps organizations plan adoption and optimize use of Oracle Cloud.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "A.True",
},
{
  id: 65,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "(Scenario) The HR department manages employee records, payroll, and absence. Which OMBP process applies?",
  options: [
    "A.Hire-to-Retire (H2R)",
    "B.Record-to-Report (R2R)",
    "C.Acquire-to-Retire (A2R)",
    "D.Source-to-Pay (S2P)"
  ],
  answer: "A.Hire-to-Retire (H2R)",
},
{
  id: 66,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "Which Oracle module tracks the entire lifecycle of capital assets?",
  options: [
    "A.Payables",
    "B.Fixed Assets",
    "C.Receivables",
    "D.Procurement"
  ],
  answer: "B.Fixed Assets",
},
{
  id: 67,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "(True/False) Project Portfolio Management (PPM) data flows into Financials for consolidated reporting.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "A.True",
},
{
  id: 68,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "What is the purpose of the Enterprise Data Management (EDM) tool?",
  options: [
    "A.Manage consistent data hierarchies across applications",
    "B.Create purchase orders",
    "C.Process payroll transactions",
    "D.Approve journal entries"
  ],
  answer: "A.Manage consistent data hierarchies across applications",
},
{
  id: 69,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "(Scenario) A finance office wants to ensure all global charts of accounts share the same structure. Which module supports this?",
  options: [
    "A.EPM",
    "B.EDM",
    "C.Risk Management",
    "D.Payables"
  ],
  answer: "B.EDM",
},
{
  id: 70,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "(True/False) Cash Management integrates directly with EPM for budget forecasting.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "B.False",
},
{
  id: 71,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "Which KPI measures the average time a company takes to pay suppliers?",
  options: [
    "A.DSO",
    "B.DPO",
    "C.ADD",
    "D.Control Effectiveness"
  ],
  answer: "B.DPO",
},
{
  id: 72,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "(Scenario) A project accountant tracks labor and material costs that need to be capitalized. Which module should they use?",
  options: [
    "A.Payables",
    "B.Receivables",
    "C.Projects (PPM)",
    "D.Cash Management"
  ],
  answer: "C.Projects (PPM)",
},
{
  id: 73,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "(True/False) General Ledger serves as the integration hub across all ERP modules.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "A.True",
},
{
  id: 74,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "Which KPI helps measure compliance responsiveness?",
  options: [
    "A.Audit Findings Closed on Time",
    "B.DPO",
    "C.Budget Variance",
    "D.Schedule Adherence"
  ],
  answer: "A.Audit Findings Closed on Time",
},
{
  id: 75,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "(Scenario) A compliance team needs alerts for unusual financial transactions. Which module supports this?",
  options: [
    "A.Risk Management (GRC)",
    "B.EPM",
    "C.Procurement",
    "D.Receivables"
  ],
  answer: "A.Risk Management (GRC)",
},
{
  id: 76,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "(True/False) Oracle OMBP focuses mainly on customization rather than standardization.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "B.False",
},
{
  id: 77,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "Which best describes Record-to-Report (R2R)?",
  options: [
    "A.Tracks hiring process",
    "B.Converts transactions into financial statements",
    "C.Manages supplier onboarding",
    "D.Handles inventory forecasting"
  ],
  answer: "B.Converts transactions into financial statements",
},
{
  id: 78,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "(Scenario) A finance manager reviews KPIs showing slower collections and longer ADD. Which action aligns with OMBP improvement principles?",
  options: [
    "A.Automate dunning plans in AR",
    "B.Delay invoice generation",
    "C.Disable alerts",
    "D.Remove collection policies"
  ],
  answer: "A.Automate dunning plans in AR",
},
{
  id: 79,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "(True/False) The purpose of Financial Close Cloud (FCC) is to plan budgets for upcoming periods.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "B.False",
},
{
  id: 80,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 1",
  question: "Which module is used for financial planning and budgeting activities?",
  options: [
    "A.FCC",
    "B.EPM Planning",
    "C.EDM",
    "D.Risk Management"
  ],
  answer: "B.EPM Planning",
},
{
  id: 80,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "Which module is used for financial planning and budgeting activities?",
  options: [
    "A.FCC",
    "B.EPM Planning",
    "C.EDM",
    "D.Risk Management"
  ],
  answer: "B.EPM Planning",
},
{
  id: 81,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(True/False) OMBP provides a prescriptive approach to configure Oracle Cloud Applications.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "A.True",
},
{
  id: 82,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "Which element of OMBP focuses on improving collaboration across departments?",
  options: [
    "A.Data Visibility",
    "B.Social Collaboration",
    "C.Predictive Analytics",
    "D.Workflow Customization"
  ],
  answer: "B.Social Collaboration",
},
{
  id: 83,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(Scenario) A finance analyst is reviewing dashboards that compare receivables performance across different regions. Which KPI would most likely be used?",
  options: [
    "A.Days Payable Outstanding (DPO)",
    "B.Days Sales Outstanding (DSO)",
    "C.Budget Variance",
    "D.Cycle Time"
  ],
  answer: "B.Days Sales Outstanding (DSO)",
},
{
  id: 84,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(True/False) The goal of OMBP is to enable every organization to develop fully custom business processes unique to them.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "B.False",
},
{
  id: 85,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "Which Financial OMBP process ensures suppliers are paid only after invoice verification?",
  options: [
    "A.Procure-to-Pay (P2P)",
    "B.Invoice-to-Cash (I2C)",
    "C.Order-to-Cash (O2C)",
    "D.Plan-to-Budget (P2B)"
  ],
  answer: "A.Procure-to-Pay (P2P)",
},
{
  id: 86,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(Scenario) A controller identifies duplicate supplier invoices. Which Oracle module includes functionality to detect and prevent this?",
  options: [
    "A.Payables",
    "B.Receivables",
    "C.Cash Management",
    "D.EPM"
  ],
  answer: "A.Payables",
},
{
  id: 87,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "Which KPI measures how quickly suppliers are paid after invoice receipt?",
  options: [
    "A.DSO",
    "B.ADD",
    "C.DPO",
    "D.Close Cycle Time"
  ],
  answer: "C.DPO",
},
{
  id: 88,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(True/False) General Ledger (GL) acts as the integration hub for all subledger transactions.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "A.True",
},
{
  id: 89,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(Scenario) A project manager wants to analyze how efficiently resources are being used across temple construction projects. Which KPI should they monitor?",
  options: [
    "A.Resource Utilization",
    "B.DPO",
    "C.Risk Exposure Index",
    "D.Close Cycle Time"
  ],
  answer: "A.Resource Utilization",
},
{
  id: 90,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "Which OMBP is most associated with capitalizing costs from project activities?",
  options: [
    "A.Financials OMBP",
    "B.Projects OMBP",
    "C.Risk Management OMBP",
    "D.Procurement OMBP"
  ],
  answer: "B.Projects OMBP",
},
{
  id: 91,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(True/False) Risk Management Cloud is part of Oracle Fusion Financials and supports controls, audits, and advanced access models.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "A.True",
},
{
  id: 92,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "What is the main benefit of automation in Risk Management OMBP?",
  options: [
    "A.Eliminates all human review",
    "B.Reduces control testing effort and increases accuracy",
    "C.Replaces financial reporting tools",
    "D.Prevents users from logging in simultaneously"
  ],
  answer: "B.Reduces control testing effort and increases accuracy",
},
{
  id: 93,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(Scenario) A compliance team is evaluating access violations detected in system logs. Which feature would help analyze user entitlements?",
  options: [
    "A.Segregation of Duties (SoD)",
    "B.Payables Validation",
    "C.Resource Management",
    "D.ERP Analytics"
  ],
  answer: "A.Segregation of Duties (SoD)",
},
{
  id: 94,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(True/False) Risk Management OMBP only applies to financial auditors and not operational teams.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "B.False",
},
{
  id: 95,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "Which OMBP helps define, plan, and track budgets, forecasts, and actuals?",
  options: [
    "A.Record-to-Report",
    "B.Plan-to-Budget",
    "C.Invoice-to-Cash",
    "D.Source-to-Pay"
  ],
  answer: "B.Plan-to-Budget",
},
{
  id: 96,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(Scenario) During month-end close, the financial team discovers that some subledger journals didn’t post to the GL. Which process ensures completeness before closing?",
  options: [
    "A.Subledger Accounting (SLA)",
    "B.Cash Forecasting",
    "C.Account Reconciliation",
    "D.Risk Assessment"
  ],
  answer: "A.Subledger Accounting (SLA)",
},
{
  id: 97,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(True/False) Account Reconciliation Cloud Service (ARCS) is part of Oracle EPM.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "A.True",
},
{
  id: 98,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "Which KPI would help measure the timeliness of closing the books?",
  options: [
    "A.DSO",
    "B.DPO",
    "C.Close Cycle Time",
    "D.Budget Variance"
  ],
  answer: "C.Close Cycle Time",
},
{
  id: 99,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(Scenario) A procurement specialist reviews supplier performance metrics such as on-time delivery and invoice accuracy. Which OMBP workstream is this?",
  options: [
    "A.Record-to-Report",
    "B.Source-to-Pay",
    "C.Hire-to-Retire",
    "D.Invoice-to-Cash"
  ],
  answer: "B.Source-to-Pay",
},
{
  id: 100,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(True/False) Cash Management module reconciles payments and receipts with bank statements automatically.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "A.True",
},
{
  id: 101,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "Which Oracle Cloud feature provides business users with analytics and KPIs directly within their application pages?",
  options: [
    "A.OTBI / Oracle Transactional BI",
    "B.Enterprise Data Management",
    "C.Risk Management",
    "D.Fusion Middleware"
  ],
  answer: "A.OTBI / Oracle Transactional BI",
},
{
  id: 102,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(Scenario) An internal audit team needs to ensure user roles comply with organizational policies. Which Risk Management feature supports this?",
  options: [
    "A.Access Certification",
    "B.Payroll Processing",
    "C.Cash Forecasting",
    "D.Resource Allocation"
  ],
  answer: "A.Access Certification",
},
{
  id: 103,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(True/False) Oracle’s Cloud Success Navigator provides self-service resources to guide implementations and upgrades.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "A.True",
},
{
  id: 104,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "Which OMBP process generates consolidated financial statements?",
  options: [
    "A.Record-to-Report",
    "B.Plan-to-Budget",
    "C.Invoice-to-Cash",
    "D.Procure-to-Pay"
  ],
  answer: "A.Record-to-Report",
},
{
  id: 105,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(Scenario) A finance leader wants to monitor control exceptions in real time. Which dashboard would they use?",
  options: [
    "A.Risk Management Cloud Dashboard",
    "B.Payables Workbench",
    "C.Project Tasks Dashboard",
    "D.Cash Position Dashboard"
  ],
  answer: "A.Risk Management Cloud Dashboard",
},
{
  id: 106,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(True/False) Enterprise Performance Management (EPM) is part of the ERP Cloud suite.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "B.False",
},
{
  id: 107,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "Which module enables integration of master data hierarchies between EPM and ERP?",
  options: [
    "A.EDM (Enterprise Data Management)",
    "B.OTBI",
    "C.Risk Management",
    "D.Payables"
  ],
  answer: "A.EDM (Enterprise Data Management)",
},
{
  id: 108,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(Scenario) A financial planning team compares budget vs. actual data across 160 countries. Which module supports this?",
  options: [
    "A.Payables",
    "B.Receivables",
    "C.EPM Planning",
    "D.Cash Management"
  ],
  answer: "C.EPM Planning",
},
{
  id: 109,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(True/False) ERP Analytics only pulls data from Payables and Receivables modules.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "B.False",
},
{
  id: 110,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "Which KPI measures how efficiently control violations are resolved?",
  options: [
    "A.Control Effectiveness",
    "B.Compliance Resolution Rate",
    "C.Audit Findings Closed on Time",
    "D.Risk Exposure Index"
  ],
  answer: "B.Compliance Resolution Rate",
},
{
  id: 111,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(Scenario) A country finance office reports longer collection cycles. Which OMBP process should be reviewed for improvement?",
  options: [
    "A.Invoice-to-Cash",
    "B.Record-to-Report",
    "C.Plan-to-Budget",
    "D.Source-to-Pay"
  ],
  answer: "A.Invoice-to-Cash",
},
{
  id: 112,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(True/False) OMBP processes are designed to be adopted “as-is” with minimal customization.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "A.True",
},
{
  id: 113,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "Which process ensures the organization’s financial records reflect complete and accurate transactions before reporting?",
  options: [
    "A.Record-to-Report",
    "B.Source-to-Pay",
    "C.Hire-to-Retire",
    "D.Plan-to-Budget"
  ],
  answer: "A.Record-to-Report",
},
{
  id: 114,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(Scenario) A department wants to analyze delayed supplier payments. Which KPI should be monitored?",
  options: [
    "A.DPO",
    "B.DSO",
    "C.ADD",
    "D.Control Effectiveness"
  ],
  answer: "A.DPO",
},
{
  id: 115,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(True/False) Oracle Cloud Quality Standards are mandatory for all Fusion implementations.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "A.True",
},
{
  id: 116,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "What is the key output of the Plan-to-Budget process?",
  options: [
    "A.Cash Forecast",
    "B.Budget Plan",
    "C.Purchase Order",
    "D.Journal Entry"
  ],
  answer: "B.Budget Plan",
},
{
  id: 117,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(Scenario) An auditor investigates how access to critical functions is being controlled in Oracle Fusion. Which component provides analytics and reports for this purpose?",
  options: [
    "A.Advanced Access Controls (AAC)",
    "B.Payables",
    "C.Cash Management",
    "D.EPM"
  ],
  answer: "A.Advanced Access Controls (AAC)",
},
{
  id: 118,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(True/False) Project Management OMBP supports capital and contract projects, but not grants.",
  options: [
    "A.True",
    "B.False"
  ],
  answer: "B.False",
},
{
  id: 119,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "Which KPI is most relevant for evaluating how long customers take to pay invoices?",
  options: [
    "A.DSO",
    "B.DPO",
    "C.ADD",
    "D.Close Cycle Time"
  ],
  answer: "A.DSO",
},
{
  id: 120,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 2",
  question: "(Scenario) A temple construction project exceeds its budget by 15%. Which OMBP process would provide corrective tracking?",
  options: [
    "A.Plan-to-Budget",
    "B.Project Management",
    "C.Risk Management",
    "D.Invoice-to-Cash"
  ],
  answer: "B.Project Management",
},
{
  id: 121,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(True/False) OMBP leverages automation, analytics, and social collaboration to enhance business performance.",
  options: ["A.True", "B.False"],
  answer: "A.True",
},
{
  id: 122,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "Which OMBP process is responsible for converting raw financial data into management reports and statements?",
  options: ["A.Plan-to-Budget", "B.Record-to-Report", "C.Source-to-Pay", "D.Invoice-to-Cash"],
  answer: "B.Record-to-Report",
},
{
  id: 123,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(Scenario) A finance team wants to reduce manual journal entries and shorten month-end close. Which Oracle Cloud capability supports this objective?",
  options: ["A.Spreadsheet uploads", "B.Journal approval workflow", "C.Subledger Accounting automation", "D.Procurement integration"],
  answer: "C.Subledger Accounting automation",
},
{
  id: 124,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(True/False) Enterprise Performance Management (EPM) includes applications for planning, consolidation, and account reconciliation.",
  options: ["A.True", "B.False"],
  answer: "A.True",
},
{
  id: 125,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "Which KPI indicates how efficiently a company collects money from customers?",
  options: ["A.DPO", "B.DSO", "C.ADD", "D.Budget Variance"],
  answer: "B.DSO",
},
{
  id: 126,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(Scenario) An auditor needs to verify that payments cannot be made to unapproved suppliers. Which module supports this validation?",
  options: ["A.Procurement", "B.Payables", "C.Receivables", "D.Cash Management"],
  answer: "B.Payables",
},
{
  id: 127,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "What is the purpose of the 'Acquire-to-Retire' process in Financials OMBP?",
  options: ["A.Manage fixed assets from acquisition to disposal", "B.Track supplier payments", "C.Process employee expenses", "D.Reconcile intercompany transactions"],
  answer: "A.Manage fixed assets from acquisition to disposal",
},
{
  id: 128,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(True/False) Average Days Delinquent (ADD) is used to evaluate supplier payment timeliness.",
  options: ["A.True", "B.False"],
  answer: "B.False",
},
{
  id: 129,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "Which OMBP process covers supplier onboarding, purchasing, and payment?",
  options: ["A.Invoice-to-Cash", "B.Record-to-Report", "C.Source-to-Pay", "D.Plan-to-Budget"],
  answer: "C.Source-to-Pay",
},
{
  id: 130,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(Scenario) A project accountant wants to monitor cost overruns and progress delays. Which KPI is most useful?",
  options: ["A.Control Effectiveness", "B.Budget Variance", "C.DPO", "D.DSO"],
  answer: "B.Budget Variance",
},
{
  id: 131,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(True/False) Risk Management Cloud can automatically identify potential conflicts in user access permissions.",
  options: ["A.True", "B.False"],
  answer: "A.True",
},
{
  id: 132,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "Which Oracle module provides automation for account certifications and reconciliations?",
  options: ["A.FCC", "B.ARCS", "C.PPM", "D.EDM"],
  answer: "B.ARCS",
},
{
  id: 133,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(Scenario) A global finance department needs a consistent chart of accounts across all business units. Which Oracle Cloud component supports this?",
  options: ["A.Payables", "B.EPM Planning", "C.EDM (Enterprise Data Management)", "D.Risk Management"],
  answer: "C.EDM (Enterprise Data Management)",
},
{
  id: 134,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(True/False) Enterprise Data Management (EDM) ensures metadata and hierarchies remain synchronized between ERP and EPM.",
  options: ["A.True", "B.False"],
  answer: "A.True",
},
{
  id: 135,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "Which KPI measures the efficiency of a company’s control remediation process?",
  options: ["A.Audit Findings Closed on Time", "B.DPO", "C.DSO", "D.Resource Utilization"],
  answer: "A.Audit Findings Closed on Time",
},
{
  id: 136,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(Scenario) A financial close process is delayed due to pending reconciliations. Which EPM product directly helps resolve this?",
  options: ["A.FCC", "B.ARCS", "C.OTBI", "D.Risk Management"],
  answer: "B.ARCS",
},
{
  id: 137,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(True/False) Oracle ERP Analytics (Fusion Data Warehouse) provides pre-built KPIs and dashboards across modules.",
  options: ["A.True", "B.False"],
  answer: "A.True",
},
{
  id: 138,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "Which OMBP workstream helps organizations design and track operating budgets?",
  options: ["A.Plan-to-Budget", "B.Record-to-Report", "C.Source-to-Pay", "D.Acquire-to-Retire"],
  answer: "A.Plan-to-Budget",
},
{
  id: 139,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(Scenario) A compliance manager reviews alerts generated from unusual transactions. Which feature generates these alerts?",
  options: ["A.Advanced Access Controls (AAC)", "B.Payables Validation", "C.Journal Entry Approval", "D.Subledger Posting Rules"],
  answer: "A.Advanced Access Controls (AAC)",
},
{
  id: 140,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(True/False) Cloud Success Navigator is a service that provides guided, structured cloud adoption and optimization tools.",
  options: ["A.True", "B.False"],
  answer: "A.True",
},
{
  id: 141,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "What is the main goal of Oracle Cloud Quality Standards?",
  options: ["A.Define audit procedures", "B.Enforce consistent implementation practices", "C.Create financial reports", "D.Set supplier payment terms"],
  answer: "B.Enforce consistent implementation practices",
},
{
  id: 142,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(Scenario) A regional finance office needs to integrate local accounting systems with the global ERP ledger. Which component ensures standard accounting rules apply?",
  options: ["A.Subledger Accounting (SLA)", "B.Payables", "C.EPM Planning", "D.OTBI"],
  answer: "A.Subledger Accounting (SLA)",
},
{
  id: 143,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(True/False) Record-to-Report focuses on operational purchasing and supplier management.",
  options: ["A.True", "B.False"],
  answer: "B.False",
},
{
  id: 144,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "Which KPI measures how long it takes to close financial periods?",
  options: ["A.Close Cycle Time", "B.DPO", "C.Resource Utilization", "D.ADD"],
  answer: "A.Close Cycle Time",
},
{
  id: 145,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(Scenario) A project team needs visibility into spending, milestones, and task completion. Which OMBP workstream applies?",
  options: ["A.Record-to-Report", "B.Project Management", "C.Plan-to-Budget", "D.Source-to-Pay"],
  answer: "B.Project Management",
},
{
  id: 146,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(True/False) In Oracle ERP Cloud, Receivables and Cash Management both contribute data to liquidity analysis.",
  options: ["A.True", "B.False"],
  answer: "A.True",
},
{
  id: 147,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "Which module tracks and depreciates assets automatically based on accounting rules?",
  options: ["A.Payables", "B.Fixed Assets", "C.PPM", "D.GL"],
  answer: "B.Fixed Assets",
},
{
  id: 148,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(Scenario) An organization wants to assess risks of unauthorized journal entries. Which OMBP and module combination applies?",
  options: ["A.Risk Management OMBP – Advanced Access Controls", "B.Projects OMBP – Resource Management", "C.Financials OMBP – Payables", "D.Integration OMBP – EDM"],
  answer: "A.Risk Management OMBP – Advanced Access Controls",
},
{
  id: 149,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(True/False) Project Management OMBP enables integration between project costing and financial reporting.",
  options: ["A.True", "B.False"],
  answer: "A.True",
},
{
  id: 150,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "Which KPI measures how quickly the organization identifies and mitigates key risks?",
  options: ["A.Risk Exposure Index", "B.Control Effectiveness", "C.Audit Findings Closed on Time", "D.DSO"],
  answer: "A.Risk Exposure Index",
},
{
  id: 151,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(Scenario) A finance team wants real-time dashboards that show KPIs like DPO, DSO, and ADD across business units. Which tool provides this?",
  options: ["A.ERP Analytics", "B.ARCS", "C.EDM", "D.FCC"],
  answer: "A.ERP Analytics",
},
{
  id: 152,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(True/False) EPM and ERP operate independently and cannot share data.",
  options: ["A.True", "B.False"],
  answer: "B.False",
},
{
  id: 153,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "Which OMBP process focuses on creating and managing supplier relationships?",
  options: ["A.Source-to-Pay", "B.Record-to-Report", "C.Invoice-to-Cash", "D.Acquire-to-Retire"],
  answer: "A.Source-to-Pay",
},
{
  id: 154,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(Scenario) A company improves its month-end close by automating journal approvals and reconciliations. Which KPI will show improvement?",
  options: ["A.Close Cycle Time", "B.DPO", "C.DSO", "D.Budget Variance"],
  answer: "A.Close Cycle Time",
},
{
  id: 155,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(True/False) Risk Management OMBP can include both manual and automated control testing.",
  options: ["A.True", "B.False"],
  answer: "A.True",
},
{
  id: 156,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "Which KPI measures how efficiently projects use assigned resources?",
  options: ["A.Resource Utilization", "B.Budget Variance", "C.Control Effectiveness", "D.ADD"],
  answer: "A.Resource Utilization",
},
{
  id: 157,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(Scenario) A Church department in Africa needs financial reporting in local language and currency. Which ERP capability ensures this?",
  options: ["A.Multi-language, multi-currency support", "B.SLA rules", "C.EPM Planning", "D.Fixed Assets"],
  answer: "A.Multi-language, multi-currency support",
},
{
  id: 158,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(True/False) Cash Management is part of the Projects OMBP.",
  options: ["A.True", "B.False"],
  answer: "B.False",
},
{
  id: 159,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "Which KPI focuses on identifying overdue receivables?",
  options: ["A.ADD", "B.DPO", "C.Resource Utilization", "D.Close Cycle Time"],
  answer: "A.ADD",
},
{
  id: 160,
  topic: "Oracle ERP Process Essentials – Practice Exam Set 3",
  question: "(Scenario) A financial controller notices delays in supplier payments and missing invoice approvals. Which process area should be reviewed?",
  options: ["A.Source-to-Pay", "B.Invoice-to-Cash", "C.Record-to-Report", "D.Acquire-to-Retire"],
  answer: "A.Source-to-Pay",
},
{
  id: 161,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "Which of the following best describes Oracle Fusion Cloud Financials?",
  options: [
    "A. A cloud-based suite that streamlines financial operations with real-time insights and automation",
    "B. A customer relationship management system",
    "C. A local accounting software for small businesses",
    "D. A manual reporting tool for Excel-based accounting"
  ],
  answer: "A. A cloud-based suite that streamlines financial operations with real-time insights and automation",
},
{
  id: 162,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "What are the main benefits of Oracle Fusion Cloud Financials?",
  options: [
    "A. Manual data entry and decentralized reporting",
    "B. Automated financial processing, management controls, and real-time visibility",
    "C. Only supports tax calculation and reporting",
    "D. Requires manual journal posting to the General Ledger"
  ],
  answer: "B. Automated financial processing, management controls, and real-time visibility",
},
{
  id: 163,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "Which module serves as the central repository for accounting data in Oracle Fusion Cloud Financials?",
  options: [
    "A. Accounts Receivable",
    "B. Accounting Hub",
    "C. Fixed Assets",
    "D. General Ledger"
  ],
  answer: "D. General Ledger",
},
{
  id: 164,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "The Accounts Payable module primarily focuses on:",
  options: [
    "A. Handling customer payments and invoices",
    "B. Managing fixed asset depreciation",
    "C. Processing supplier invoices, payments, and ensuring compliance",
    "D. Managing employee travel expenses"
  ],
  answer: "C. Processing supplier invoices, payments, and ensuring compliance",
},
{
  id: 165,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "Which module automates the collections process to enhance cash flow and reduce delinquency risks?",
  options: [
    "A. Revenue Management",
    "B. Accounts Receivable",
    "C. Cash Management",
    "D. Advanced Collections"
  ],
  answer: "D. Advanced Collections",
},
{
  id: 166,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "The Expenses module provides which of the following capabilities?",
  options: [
    "A. Managing revenue recognition rules",
    "B. Automating employee expense reports and enforcing corporate policies",
    "C. Handling supplier invoice payments",
    "D. Managing fixed asset lifecycle"
  ],
  answer: "B. Automating employee expense reports and enforcing corporate policies",
},
{
  id: 167,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "Which of the following features belong to the Cash Management module?",
  options: [
    "A. Asset depreciation and retirement tracking",
    "B. Cash forecasting, bank reconciliations, and real-time cash tracking",
    "C. Customer invoice management",
    "D. Joint venture cost allocation"
  ],
  answer: "B. Cash forecasting, bank reconciliations, and real-time cash tracking",
},
{
  id: 168,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "The Fixed Assets module supports:",
  options: [
    "A. Only cash flow management",
    "B. Managing the lifecycle of assets from acquisition to retirement",
    "C. Handling supplier invoices",
    "D. Processing customer refunds"
  ],
  answer: "B. Managing the lifecycle of assets from acquisition to retirement",
},
{
  id: 169,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "Which accounting standards are supported by the Lease Accounting module?",
  options: [
    "A. GAAP only",
    "B. FASB, IASB, IFRS 16, and ASC 842",
    "C. SOX and GLBA",
    "D. None of the above"
  ],
  answer: "B. FASB, IASB, IFRS 16, and ASC 842",
},
{
  id: 170,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "The Tax Engine in Oracle Fusion Cloud Financials:",
  options: [
    "A. Automates tax determination, calculation, and reporting",
    "B. Manages payroll and HR tax deductions",
    "C. Only calculates VAT for European transactions",
    "D. Handles supplier payment scheduling"
  ],
  answer: "A. Automates tax determination, calculation, and reporting",
},
{
  id: 171,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "Revenue Management helps organizations by:",
  options: [
    "A. Managing supplier invoices",
    "B. Automating expense approvals",
    "C. Tracking asset revaluations",
    "D. Optimizing revenue recognition and ensuring compliance with accounting standards"
  ],
  answer: "D. Optimizing revenue recognition and ensuring compliance with accounting standards",
},
{
  id: 172,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "The Joint Venture Management module supports:",
  options: [
    "A. Bank account management",
    "B. Profit sharing, cost allocation, and revenue recognition among partners",
    "C. Customer credit scoring",
    "D. Only employee reimbursements"
  ],
  answer: "B. Profit sharing, cost allocation, and revenue recognition among partners",
},
{
  id: 173,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "What is the key role of the Accounting Hub?",
  options: [
    "A. Unifying and standardizing financial data from multiple source systems",
    "B. Managing tax audits",
    "C. Processing supplier invoices",
    "D. Handling asset depreciation"
  ],
  answer: "A. Unifying and standardizing financial data from multiple source systems",
},
{
  id: 174,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "Which of the following defines Subledger Accounting (SLA)?",
  options: [
    "A. A rule-based accounting engine that generates detailed journal entries for subledger transactions",
    "B. A separate module for managing HR and payroll",
    "C. A reporting tool for external audits",
    "D. A manual posting mechanism for the General Ledger"
  ],
  answer: "A. A rule-based accounting engine that generates detailed journal entries for subledger transactions",
},
{
  id: 175,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "In the Oracle Fusion Cloud Financials architecture, which module is considered the hub, and what are the spokes?",
  options: [
    "A. General Ledger is the hub, and the subledger modules (AP, AR, etc.) are the spokes",
    "B. Accounts Payable is the hub, and General Ledger is a spoke",
    "C. Accounting Hub is the central hub, and Cash Management is the only spoke",
    "D. Tax Engine is the hub, and Revenue Management is the spoke"
  ],
  answer: "A. General Ledger is the hub, and the subledger modules (AP, AR, etc.) are the spokes",
},
{
  id: 176,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "Which program is responsible for transferring accounting data from subledgers to the General Ledger?",
  options: [
    "A. Create Journal Entries",
    "B. Transfer to Tax Engine",
    "C. Create Accounting program",
    "D. Generate Subledger Report"
  ],
  answer: "C. Create Accounting program",
},
{
  id: 177,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "The integration between Accounts Receivable and Revenue Management ensures:",
  options: [
    "A. Supplier invoice payments are automated",
    "B. Employee reimbursements are processed",
    "C. Bank reconciliations are automated",
    "D. Revenue is recognized according to compliant accounting rules"
  ],
  answer: "D. Revenue is recognized according to compliant accounting rules",
},
{
  id: 178,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "The Expenses module integrates with which other module for payment processing?",
  options: [
    "A. Cash Management",
    "B. Fixed Assets",
    "C. Accounts Receivable",
    "D. Accounts Payable"
  ],
  answer: "D. Accounts Payable",
},
{
  id: 179,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "The Fixed Assets module integrates primarily with:",
  options: [
    "A. Accounts Payable for capturing asset purchases",
    "B. Cash Management for forecasting",
    "C. Advanced Collections for scoring customers",
    "D. Revenue Management for billing"
  ],
  answer: "A. Accounts Payable for capturing asset purchases",
},
{
  id: 180,
  topic: "4 - Financials - Introduction: ERP Financial Modules",
  question: "The overall goal of Oracle Fusion Cloud Financials integration is to:",
  options: [
    "A. Ensure smooth data flow, real-time synchronization, and a single source of truth",
    "B. Allow manual data entry between modules",
    "C. Separate financial data across independent systems",
    "D. Limit access to financial insights for compliance"
  ],
  answer: "A. Ensure smooth data flow, real-time synchronization, and a single source of truth",
},
{
  id: 181,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "What is the main purpose of the Expense Report to Reimbursement OMBP?",
  options: [
    "A. To track asset acquisitions and retirements",
    "B. To ensure employees are promptly and accurately reimbursed for their out-of-pocket expenses",
    "C. To record all general ledger journal entries",
    "D. To manage supplier invoices and payments"
  ],
  answer: "B. To ensure employees are promptly and accurately reimbursed for their out-of-pocket expenses",
},
{
  id: 182,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "Which key technology helps automate expense creation in this process?",
  options: [
    "A. Blockchain validation",
    "B. Virtual machine integration",
    "C. Optical Character Recognition (OCR) and digital assistants",
    "D. Robotic warehouse automation"
  ],
  answer: "C. Optical Character Recognition (OCR) and digital assistants",
},
{
  id: 183,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "How does Oracle Fusion enhance the reimbursement stage?",
  options: [
    "A. Through touchless processing that swiftly converts approved reports into payments",
    "B. By requiring manual entry for all reimbursements",
    "C. By delaying payments until quarterly review",
    "D. By routing payments through external payroll systems only"
  ],
  answer: "A. Through touchless processing that swiftly converts approved reports into payments",
},
{
  id: 184,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "Which of the following is an example of digital convenience offered in this OMBP?",
  options: [
    "A. Only submitting expenses through manual PDF uploads",
    "B. Submitting expenses through messaging apps and OCR scanning",
    "C. Using external email systems to track approvals",
    "D. Printing all receipts for manual review"
  ],
  answer: "B. Submitting expenses through messaging apps and OCR scanning",
},
{
  id: 185,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "What is the role of the AI-based digital assistant in the expense process?",
  options: [
    "A. To generate fixed asset depreciation schedules",
    "B. To automatically submit reports for planned and unplanned expenses",
    "C. To analyze supplier invoice variances",
    "D. To schedule payroll disbursements"
  ],
  answer: "B. To automatically submit reports for planned and unplanned expenses",
},
{
  id: 186,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "Why is auditing expense reports an important step in this process?",
  options: [
    "A. It adjusts budget allocations automatically",
    "B. It increases employee reimbursement time",
    "C. It verifies validity, compliance, and helps prevent fraud",
    "D. It eliminates the need for approval workflows"
  ],
  answer: "C. It verifies validity, compliance, and helps prevent fraud",
},
{
  id: 187,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "What functionality allows employees to request funds before incurring expenses?",
  options: [
    "A. Expense Adjustment",
    "B. Cash Advance",
    "C. Credit Memo",
    "D. Journal Import"
  ],
  answer: "B. Cash Advance",
},
{
  id: 188,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "Who can be involved in the approval process of expense reports?",
  options: [
    "A. Procurement officers only",
    "B. Supervisors, finance managers, and project leads",
    "C. External auditors only",
    "D. Customers and suppliers"
  ],
  answer: "B. Supervisors, finance managers, and project leads",
},
{
  id: 189,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "Which feature ensures faster and more accurate expense entry?",
  options: [
    "A. Automation and OCR-based data capture",
    "B. Expense scanning by third-party vendors",
    "C. Handwritten approvals",
    "D. Manual spreadsheet uploads"
  ],
  answer: "A. Automation and OCR-based data capture",
},
{
  id: 190,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "How does Oracle Fusion handle direct credit card payments in this process?",
  options: [
    "A. By posting them as general ledger journals only",
    "B. By facilitating payments directly to credit card companies",
    "C. By routing all payments through payroll",
    "D. By ignoring company-issued credit cards"
  ],
  answer: "B. By facilitating payments directly to credit card companies",
},
{
  id: 191,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "What role does the expense dashboard play in this OMBP?",
  options: [
    "A. It tracks supplier invoice performance",
    "B. It monitors only payroll processing",
    "C. It provides predictive analytics for spending trends and policy adjustments",
    "D. It stores employee personal information"
  ],
  answer: "C. It provides predictive analytics for spending trends and policy adjustments",
},
{
  id: 192,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "Which of the following best describes the end goal of this business process?",
  options: [
    "A. Enhanced procurement reporting",
    "B. Automated revenue recognition",
    "C. Centralized vendor management",
    "D. Timely reimbursement while maintaining compliance and financial controls"
  ],
  answer: "D. Timely reimbursement while maintaining compliance and financial controls",
},
{
  id: 193,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "What does the system verify during the auditing stage?",
  options: [
    "A. Expense validity and adherence to policy",
    "B. Customer satisfaction ratings",
    "C. Inventory stock levels",
    "D. Asset capitalization rules"
  ],
  answer: "A. Expense validity and adherence to policy",
},
{
  id: 194,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "What is the primary outcome of using automation in the Expense Report to Reimbursement process?",
  options: [
    "A. Reduced visibility into transactions",
    "B. Reduced manual entry and faster reimbursements",
    "C. Increased manual review and longer processing times",
    "D. Delayed expense approvals"
  ],
  answer: "B. Reduced manual entry and faster reimbursements",
},
{
  id: 195,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "How does AI streamline the approval process?",
  options: [
    "A. By routing reports automatically based on organizational structure",
    "B. By performing supplier reconciliations",
    "C. By calculating tax liabilities",
    "D. By creating general ledger journals"
  ],
  answer: "A. By routing reports automatically based on organizational structure",
},
{
  id: 196,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "Which of the following is NOT part of the Expense Report to Reimbursement process?",
  options: [
    "A. Reimbursement payment",
    "B. Employee expense submission",
    "C. Submitting supplier invoices",
    "D. Expense report approval"
  ],
  answer: "C. Submitting supplier invoices",
},
{
  id: 197,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "Which Oracle Fusion capability ensures accuracy in expense reimbursements?",
  options: [
    "A. Paper-based tracking",
    "B. Integrated and automated expense management system",
    "C. Independent external spreadsheets",
    "D. Manual review by every department"
  ],
  answer: "B. Integrated and automated expense management system",
},
{
  id: 198,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "Why is the cash advance feature important?",
  options: [
    "A. It records customer refunds",
    "B. It allows employees quick access to funds for upcoming expenses",
    "C. It issues payroll adjustments",
    "D. It tracks fixed asset purchases"
  ],
  answer: "B. It allows employees quick access to funds for upcoming expenses",
},
{
  id: 199,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "Which step ensures compliance and approval alignment with company hierarchy?",
  options: [
    "A. Multi-level approval workflow",
    "B. Expense deletion process",
    "C. Cash advance disbursement",
    "D. Expense audit bypass"
  ],
  answer: "A. Multi-level approval workflow",
},
{
  id: 200,
  topic: "5 - Intro: OMBP: Expense Report to Reimbursement",
  question: "What is one overall advantage of Oracle Fusion’s approach to expense management?",
  options: [
    "A. Delayed report submission and approval",
    "B. Seamless user experience combining automation, compliance, and analytics",
    "C. Separate tools for submission and reimbursement",
    "D. Manual reconciliation of receipts"
  ],
  answer: "B. Seamless user experience combining automation, compliance, and analytics",
},
{
  id: 201,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "What is the main purpose of key design considerations in the Expense Report to Reimbursement OMBP?",
  options: [
    "A. To determine the best approach aligned with business objectives and operational requirements",
    "B. To track supplier invoices and payments",
    "C. To configure payroll and tax deductions",
    "D. To manage asset capitalization"
  ],
  answer: "A. To determine the best approach aligned with business objectives and operational requirements",
},
{
  id: 202,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "Which option best describes Oracle’s approach to expense capture methods?",
  options: [
    "A. Only manual entry is supported",
    "B. Offers fully automated, semi-automated, and manual options",
    "C. Requires third-party systems for all expense capture",
    "D. Only supports mobile expense entry"
  ],
  answer: "B. Offers fully automated, semi-automated, and manual options",
},
{
  id: 203,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "What is one innovative method mentioned for capturing expenses in Oracle Cloud?",
  options: [
    "A. Browser-based Digital Assistant",
    "B. Paper submission via fax",
    "C. Manual Excel spreadsheet uploads",
    "D. Email forwarding to managers"
  ],
  answer: "A. Browser-based Digital Assistant",
},
{
  id: 204,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "How does the Digital Assistant enhance the expense capture experience?",
  options: [
    "A. By enforcing manual approval for each expense line",
    "B. By offering pre-configured automation for cash or credit card expenses",
    "C. By disabling mobile capture options",
    "D. By integrating only with payroll systems"
  ],
  answer: "B. By offering pre-configured automation for cash or credit card expenses",
},
{
  id: 205,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "Which communication tools can integrate with Oracle’s expense module for capturing expenses?",
  options: [
    "A. Microsoft Teams and Slack",
    "B. Telegram and WhatsApp only",
    "C. Gmail and Outlook",
    "D. Zoom and Webex"
  ],
  answer: "A. Microsoft Teams and Slack",
},
{
  id: 206,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "Integration with travel agencies in Oracle Fusion allows what functionality?",
  options: [
    "A. Capturing expenses directly from trip itineraries",
    "B. Scheduling employee training sessions",
    "C. Calculating payroll deductions automatically",
    "D. Assigning travel budgets to departments"
  ],
  answer: "A. Capturing expenses directly from trip itineraries",
},
{
  id: 207,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "What is the purpose of approval policies in Oracle Fusion Expenses?",
  options: [
    "A. To maintain control and ensure compliance",
    "B. To eliminate supervisory reviews",
    "C. To bypass regulatory checks",
    "D. To delay reimbursements for verification"
  ],
  answer: "A. To maintain control and ensure compliance",
},
{
  id: 208,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "Which approval workflows can be configured in Oracle Fusion?",
  options: [
    "A. Serial and parallel workflows",
    "B. Randomized approvals",
    "C. Circular reviews",
    "D. Manual-only approvals"
  ],
  answer: "A. Serial and parallel workflows",
},
{
  id: 209,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "Which of the following is NOT an available method to define approvers in Oracle Fusion?",
  options: [
    "A. Supervisory",
    "B. Job level",
    "C. Department hierarchy",
    "D. Approval groups"
  ],
  answer: "C. Department hierarchy",
},
{
  id: 210,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "Why is flexibility important when defining capture and approval methods?",
  options: [
    "A. It ensures efficiency, compliance, and streamlined management",
    "B. It increases manual intervention",
    "C. It standardizes all organizations to one process",
    "D. It disables automation for smaller teams"
  ],
  answer: "A. It ensures efficiency, compliance, and streamlined management",
},
{
  id: 211,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "What is the main goal of determining auditing requirements in Oracle Fusion Expenses?",
  options: [
    "A. To ensure compliance with policies and financial controls",
    "B. To eliminate all expense approvals",
    "C. To skip verification for small expenses",
    "D. To speed up reimbursements by ignoring thresholds"
  ],
  answer: "A. To ensure compliance with policies and financial controls",
},
{
  id: 212,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "How does Oracle Fusion help automate the selection process of expense reports for audit?",
  options: [
    "A. Through rule-based configuration using checkboxes",
    "B. By manual sampling of expense data",
    "C. By exporting data to Excel for review",
    "D. By using only fixed audit percentages"
  ],
  answer: "A. Through rule-based configuration using checkboxes",
},
{
  id: 213,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "What do receipt and notification rules ensure in the audit process?",
  options: [
    "A. That all required receipts are submitted and validated",
    "B. That all receipts are stored offline",
    "C. That employee records are updated automatically",
    "D. That expense reports are skipped if incomplete"
  ],
  answer: "A. That all required receipts are submitted and validated",
},
{
  id: 214,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "Which reports should be prioritized for auditing in Oracle Fusion Expenses?",
  options: [
    "A. Low-value, approved reports only",
    "B. Reports that exceed thresholds or violate policies",
    "C. Reports with no receipts attached",
    "D. Randomly selected reports only"
  ],
  answer: "B. Reports that exceed thresholds or violate policies",
},
{
  id: 215,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "What is the benefit of defining an audit framework for expenses?",
  options: [
    "A. Helps prevent fraud and maintain accountability",
    "B. Reduces compliance monitoring",
    "C. Eliminates the need for receipts",
    "D. Allows bypassing approval levels"
  ],
  answer: "A. Helps prevent fraud and maintain accountability",
},
{
  id: 216,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "Which Oracle Fusion feature ensures automated rule creation for audit selection?",
  options: [
    "A. Expense Audit Configuration Panel",
    "B. Business Process Management setup",
    "C. Audit Rules Engine",
    "D. Expense Receipt Workflow"
  ],
  answer: "C. Audit Rules Engine",
},
{
  id: 217,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "How does Oracle Fusion handle high-value expense reports?",
  options: [
    "A. Flags them for mandatory audit and review",
    "B. Automatically approves them without checks",
    "C. Cancels them after submission",
    "D. Routes them only to project managers"
  ],
  answer: "A. Flags them for mandatory audit and review",
},
{
  id: 218,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "What does Oracle recommend for a seamless implementation of this process?",
  options: [
    "A. Referring to Oracle implementation courses for guidance",
    "B. Conducting manual testing only",
    "C. Avoiding automation in workflows",
    "D. Outsourcing expense approvals"
  ],
  answer: "A. Referring to Oracle implementation courses for guidance",
},
{
  id: 219,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "Which factor ensures successful alignment between expense policies and organizational structure?",
  options: [
    "A. Using supervisory and job-level approval definitions",
    "B. Removing multi-level approvals",
    "C. Setting identical limits for all departments",
    "D. Bypassing regulatory validation"
  ],
  answer: "A. Using supervisory and job-level approval definitions",
},
{
  id: 220,
  topic: "5 - Key Design Considerations: Expense Report to Reimbursement",
  question: "What is the overall goal of applying design considerations to the Expense Report to Reimbursement OMBP?",
  options: [
    "A. To create an efficient, compliant, and well-controlled expense management process",
    "B. To simplify auditing by removing validation rules",
    "C. To increase the number of manual checks",
    "D. To standardize all processes globally"
  ],
  answer: "A. To create an efficient, compliant, and well-controlled expense management process",
},
{
  id: 221,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "What is the primary purpose of using key metrics in the Expense Report to Reimbursement OMBP?",
  options: [
    "A. To evaluate, monitor, and improve business process performance",
    "B. To replace manual reimbursement workflows",
    "C. To automate supplier invoicing",
    "D. To create static financial statements"
  ],
  answer: "A. To evaluate, monitor, and improve business process performance",
},
{
  id: 222,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "Where can organizations access predefined dashboards and reports for expense metrics in Oracle Fusion?",
  options: [
    "A. Oracle Analytics page",
    "B. Oracle Procurement Portal",
    "C. Fusion Setup and Maintenance",
    "D. Oracle Service Cloud"
  ],
  answer: "A. Oracle Analytics page",
},
{
  id: 223,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "Which Oracle tool supports the creation of interactive KPI dashboards for expense management?",
  options: [
    "A. Oracle Transactional Business Intelligence (OTBI)",
    "B. Oracle General Ledger",
    "C. Oracle Integration Cloud (OIC)",
    "D. Oracle EPM Cloud"
  ],
  answer: "A. Oracle Transactional Business Intelligence (OTBI)",
},
{
  id: 224,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "What does the 'expense cost by category' metric measure?",
  options: [
    "A. The total amount spent per category during a defined period",
    "B. The number of employee reimbursements per region",
    "C. The total supplier invoice amount per vendor",
    "D. The frequency of payment rejections"
  ],
  answer: "A. The total amount spent per category during a defined period",
},
{
  id: 225,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "Which expense category was identified as having the highest total expenses in the example?",
  options: [
    "A. Miscellaneous",
    "B. Travel",
    "C. Meals and Entertainment",
    "D. Office Supplies"
  ],
  answer: "A. Miscellaneous",
},
{
  id: 226,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "What does the policy violation metric help organizations monitor?",
  options: [
    "A. Adherence to organizational rules and identification of non-compliance trends",
    "B. The number of employees trained in Oracle Fusion",
    "C. Supplier invoice aging reports",
    "D. Cash flow reconciliation errors"
  ],
  answer: "A. Adherence to organizational rules and identification of non-compliance trends",
},
{
  id: 227,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "Who was identified as the leading policy violator in the example dashboard?",
  options: [
    "A. Jenson, Gary",
    "B. Maria, Lopez",
    "C. Daniels, Chris",
    "D. Smith, Andrew"
  ],
  answer: "A. Jenson, Gary",
},
{
  id: 228,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "What is the main benefit of tracking policy violations in expense reporting?",
  options: [
    "A. Enables corrective actions and supports policy enforcement",
    "B. Increases manual processing effort",
    "C. Eliminates audit requirements",
    "D. Simplifies employee termination"
  ],
  answer: "A. Enables corrective actions and supports policy enforcement",
},
{
  id: 229,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "What does the 'total expense by cost center' metric measure?",
  options: [
    "A. Total spending attributed to specific departments or units",
    "B. Total payments made to external suppliers",
    "C. Total number of employee travel bookings",
    "D. Total cost of payroll disbursements"
  ],
  answer: "A. Total spending attributed to specific departments or units",
},
{
  id: 230,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "Which cost center was shown as having the highest expenses in the example?",
  options: [
    "A. Cost Center 420",
    "B. Cost Center 310",
    "C. Cost Center 440",
    "D. Cost Center 120"
  ],
  answer: "A. Cost Center 420",
},
{
  id: 231,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "How do cost center metrics support decision-making?",
  options: [
    "A. By identifying spending trends and resource allocation opportunities",
    "B. By automating supplier payment runs",
    "C. By tracking only overdue reimbursements",
    "D. By monitoring employee satisfaction surveys"
  ],
  answer: "A. By identifying spending trends and resource allocation opportunities",
},
{
  id: 232,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "What feature in Oracle Fusion helps identify spending trends through real-time insights?",
  options: [
    "A. Oracle OTBI reports",
    "B. Oracle Project Portfolio Management",
    "C. Oracle Inventory Dashboard",
    "D. Oracle HCM Self-Service"
  ],
  answer: "A. Oracle OTBI reports",
},
{
  id: 233,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "How does the AI-based Digital Assistant improve expense capture?",
  options: [
    "A. Validates expenses against company policies in real time",
    "B. Replaces all manual audit reviews",
    "C. Generates supplier invoices automatically",
    "D. Calculates payroll taxes"
  ],
  answer: "A. Validates expenses against company policies in real time",
},
{
  id: 234,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "Which Oracle module integrates with Expenses to automate reimbursements to employees?",
  options: [
    "A. Accounts Payable",
    "B. General Ledger",
    "C. Revenue Management",
    "D. Cash Management"
  ],
  answer: "A. Accounts Payable",
},
{
  id: 235,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "Which process helps reconcile employee and credit card payments with bank statements?",
  options: [
    "A. Bank Transaction to Cash Position",
    "B. Invoice to Cash",
    "C. Expense to Ledger Mapping",
    "D. Reimbursement to Payroll"
  ],
  answer: "A. Bank Transaction to Cash Position",
},
{
  id: 236,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "Which Oracle Modern Best Practice integrates with Expense Report to Reimbursement for automating reimbursements?",
  options: [
    "A. Supplier Invoice to Payment",
    "B. Source to Pay",
    "C. Hire to Retire",
    "D. Budget to Forecast"
  ],
  answer: "A. Supplier Invoice to Payment",
},
{
  id: 237,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "What is one major benefit of integrating Expenses with Accounts Payable?",
  options: [
    "A. Streamlines payment workflow and automates reimbursements",
    "B. Eliminates the need for approval hierarchies",
    "C. Reduces compliance monitoring",
    "D. Requires manual reconciliation of payments"
  ],
  answer: "A. Streamlines payment workflow and automates reimbursements",
},
{
  id: 238,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "What overall benefit does Oracle’s integrated expense management system deliver?",
  options: [
    "A. Accuracy, efficiency, and employee satisfaction",
    "B. Increased manual data entry",
    "C. Longer reimbursement cycles",
    "D. Reduced visibility into spending"
  ],
  answer: "A. Accuracy, efficiency, and employee satisfaction",
},
{
  id: 239,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "How does integrating metrics and dashboards improve process management?",
  options: [
    "A. Provides transparency and supports continuous improvement",
    "B. Adds complexity to expense workflows",
    "C. Increases approval bottlenecks",
    "D. Requires external auditing tools"
  ],
  answer: "A. Provides transparency and supports continuous improvement",
},
{
  id: 240,
  topic: "5 - Key Metrics and Takeaways: Expense Report to Reimbursement",
  question: "What is the final takeaway from the Expense Report to Reimbursement OMBP?",
  options: [
    "A. It provides a transparent, efficient, and integrated process from expense capture to payment",
    "B. It focuses solely on manual reimbursement tracking",
    "C. It limits automation and reduces compliance features",
    "D. It replaces the need for other Oracle modules"
  ],
  answer: "A.fdfd It provides a transparent, efficient, and integrated process from expense capture to payment",
},



  ]);

  // 2️⃣ Extrair tópicos únicos
  const topics = [...new Set(flashcards.map(card => card.topic))];

  // 3️⃣ Estado do tópico selecionado
  const [selectedTopic, setSelectedTopic] = useState(null);

  // 4️⃣ Filtra os flashcards pelo tópico selecionado
  const filteredCards = selectedTopic
    ? flashcards.filter(card => card.topic === selectedTopic)
    : [];

  return (
    <div className="app">
      {/* <h1>Flashcard Study App</h1> */}

      {/* 5️⃣ Lista de tópicos */}
      <div className="topics">
        {topics.map(topic => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={`topic-button ${selectedTopic === topic ? "active" : ""}`}
          >
            {topic}
          </button>
        ))}

        {/* Botão para voltar à lista de tópicos */}
        {selectedTopic && (
          <button
            onClick={() => setSelectedTopic(null)}
            className="topic-button back-button"
          >
            Back
          </button>
        )}
      </div>

      {/* 6️⃣ Flashcards do tópico selecionado */}
      {selectedTopic && (
        <div>
          <h2>{selectedTopic} Flashcards</h2>
          <FlashcardList flashcards={filteredCards} />
        </div>
      )}
    </div>
  );
}