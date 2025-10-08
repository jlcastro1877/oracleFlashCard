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
}

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
