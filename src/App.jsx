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
    topic: "6 - Supplier Invoice to Payment",
    question: "Which feature ensures faster and more accurate expense entry?",
    options: [
      "A. Automation and OCR-based data capture",
      "B. Expense scanning by third-party vendors",
      "C. Handwritten approvals",
      "D. Manual spreadsheet uploads"
    ],
    answer: "A. Automation and OCR-based data capture"
  },
  {
    id: 202,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which Oracle Fusion feature automates the extraction and classification of invoice data from PDFs or images?",
    options: [
      "A. Intelligent Document Recognition (IDR)",
      "B. Manual spreadsheet uploads",
      "C. Invoice auditing rules",
      "D. AI Dynamic Discounting"
    ],
    answer: "A. Intelligent Document Recognition (IDR)"
  },
  {
    id: 203,
    topic: "6 - Supplier Invoice to Payment",
    question: "What happens when discrepancies are identified during invoice auditing?",
    options: [
      "A. Discrepancies are flagged as disputes for resolution",
      "B. Payments are automatically processed",
      "C. Invoices are deleted from the system",
      "D. Suppliers are immediately penalized"
    ],
    answer: "A. Discrepancies are flagged as disputes for resolution"
  },
  {
    id: 204,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which feature optimizes early payment discounts using AI and machine learning?",
    options: [
      "A. Invoice auditing",
      "B. Payment file generation",
      "C. AI Dynamic Discounting",
      "D. Prepayment tracking"
    ],
    answer: "C. AI Dynamic Discounting"
  },
  {
    id: 205,
    topic: "6 - Supplier Invoice to Payment",
    question: "How does Oracle Fusion ensure secure and accurate payment processing?",
    options: [
      "A. By manually entering payment data",
      "B. By delaying payments to suppliers",
      "C. By generating payment files and updating the ledger automatically",
      "D. By using checks only"
    ],
    answer: "C. By generating payment files and updating the ledger automatically"
  },
  {
    id: 206,
    topic: "6 - Supplier Invoice to Payment",
    question: "What is the purpose of the 'review daily activity' step in this OMBP?",
    options: [
      "A. To monitor daily transactions and ensure accuracy and compliance",
      "B. To manually approve every invoice",
      "C. To generate discounts automatically",
      "D. To close the general ledger directly"
    ],
    answer: "A. To monitor daily transactions and ensure accuracy and compliance"
  },
  {
    id: 207,
    topic: "6 - Supplier Invoice to Payment",
    question: "Why is the 'schedule payables close' step important?",
    options: [
      "A. It ensures outstanding transactions are identified and accounted for before period end close",
      "B. It schedules supplier meetings for payments",
      "C. It generates supplier portals for invoice submission",
      "D. It automates invoice data extraction"
    ],
    answer: "A. It ensures outstanding transactions are identified and accounted for before period end close"
  },
  {
    id: 208,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which method is supported by Oracle Fusion for capturing supplier invoices in addition to automation?",
    options: [
      "A. Manual entry and bulk spreadsheet uploads",
      "B. Handwritten mail submissions",
      "C. Fax only",
      "D. Phone call submissions"
    ],
    answer: "A. Manual entry and bulk spreadsheet uploads"
  },
  {
    id: 209,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which data points does Intelligent Document Recognition (IDR) extract from invoices?",
    options: [
      "A. Employee names and payroll information",
      "B. Purchase order shipment dates only",
      "C. Bank account passwords",
      "D. Invoice numbers, supplier details, line items, and amounts"
    ],
    answer: "D. Invoice numbers, supplier details, line items, and amounts"
  },
  {
    id: 210,
    topic: "6 - Supplier Invoice to Payment",
    question: "How are disputes resolved once discrepancies are identified?",
    options: [
      "A. By deleting the invoice",
      "B. Through supplier collaboration and internal adjustments or credit notes",
      "C. By automatically rejecting payment without resolution",
      "D. By postponing all invoices until month-end"
    ],
    answer: "B. Through supplier collaboration and internal adjustments or credit notes"
  },
  {
    id: 211,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which process ensures advance payments are tracked and applied to future invoices?",
    options: [
      "A. Daily activity review",
      "B. Payment file generation",
      "C. Prepayment management",
      "D. Invoice auditing"
    ],
    answer: "C. Prepayment management"
  },
  {
    id: 212,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which payment methods are supported by Oracle Fusion?",
    options: [
      "A. Electronic transfers, checks, and virtual cards",
      "B. Only checks",
      "C. Cash deposits only",
      "D. Manual ledger entries without bank integration"
    ],
    answer: "A. Electronic transfers, checks, and virtual cards"
  },
  {
    id: 213,
    topic: "6 - Supplier Invoice to Payment",
    question: "What is analyzed to identify discrepancies or delays in daily operations?",
    options: [
      "A. KPIs such as invoice aging, payment processing times, and exception reports",
      "B. Employee attendance logs",
      "C. Annual revenue statements only",
      "D. Supplier satisfaction surveys"
    ],
    answer: "A. KPIs such as invoice aging, payment processing times, and exception reports"
  },
  {
    id: 214,
    topic: "6 - Supplier Invoice to Payment",
    question: "What ensures that all payables activities are accurately completed before period end close?",
    options: [
      "A. Manual email follow-ups",
      "B. Automated supplier notifications",
      "C. Schedule payables close process",
      "D. Invoice OCR scanning"
    ],
    answer: "C. Schedule payables close process"
  },
  {
    id: 215,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which process step prioritizes invoices eligible for early payment discounts?",
    options: [
      "A. Settle liabilities",
      "B. Schedule payables close",
      "C. Manage prepayments and discounts",
      "D. Review daily activity"
    ],
    answer: "C. Manage prepayments and discounts"
  },
  {
    id: 216,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which of the following benefits is achieved by automating invoice processing?",
    options: [
      "A. Enhanced efficiency, accuracy, and compliance",
      "B. Increased manual data entry workload",
      "C. Slower payment cycles",
      "D. More frequent disputes with suppliers"
    ],
    answer: "A. Enhanced efficiency, accuracy, and compliance"
  },
  {
    id: 217,
    topic: "6 - Supplier Invoice to Payment",
    question: "Where are the finalized payables data transferred after period close?",
    options: [
      "A. To the general ledger for final financial reporting",
      "B. To supplier portals",
      "C. To external auditors only",
      "D. To the employee payroll system"
    ],
    answer: "A. To the general ledger for final financial reporting"
  },
  {
    id: 218,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step eliminates the need for manual invoice data entry?",
    options: [
      "A. Intelligent Document Recognition (IDR)",
      "B. Manual spreadsheet uploads",
      "C. Payment file generation",
      "D. Review daily activity"
    ],
    answer: "A. Intelligent Document Recognition (IDR)"
  },
  {
    id: 219,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step ensures accurate tracking and reconciliation of prepayments?",
    options: [
      "A. Prepayment management",
      "B. Invoice auditing",
      "C. Settle liabilities",
      "D. Schedule payables close"
    ],
    answer: "A. Prepayment management"
  },
  {
    id: 220,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which process step monitors invoice approvals, payment schedules, and reconciliation statuses?",
    options: [
      "A. Review daily activity",
      "B. Intelligent Document Recognition",
      "C. Settle liabilities",
      "D. Schedule payables close"
    ],
    answer: "A. Review daily activity"
  },
  {
    id: 221,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step ensures compliance, accurate financial records, and smooth transition to the next accounting period?",
    options: [
      "A. Schedule payables close",
      "B. Invoice auditing",
      "C. Prepayment management",
      "D. AI Dynamic Discounting"
    ],
    answer: "A. Schedule payables close"
  },
  {
    id: 222,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step tracks disputes, discrepancies, and approval deviations for accountability?",
    options: [
      "A. Manage audits, disputes, and approvals",
      "B. Review daily activity",
      "C. Settle liabilities",
      "D. Schedule payables close"
    ],
    answer: "A. Manage audits, disputes, and approvals"
  },
  {
    id: 223,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which Oracle Fusion feature identifies invoice key data such as supplier details, amounts, and line items?",
    options: [
      "A. Intelligent Document Recognition (IDR)",
      "B. AI Dynamic Discounting",
      "C. Invoice auditing",
      "D. Review daily activity"
    ],
    answer: "A. Intelligent Document Recognition (IDR)"
  },
  {
    id: 224,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which feature optimizes cash flow by automatically calculating early payment discounts?",
    options: [
      "A. AI Dynamic Discounting",
      "B. Review daily activity",
      "C. Prepayment management",
      "D. Invoice auditing"
    ],
    answer: "A. AI Dynamic Discounting"
  },
  {
    id: 225,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step ensures that all invoices are approved and correctly processed before posting to the ledger?",
    options: [
      "A. Schedule payables close",
      "B. Review daily activity",
      "C. Settle liabilities",
      "D. Prepayment management"
    ],
    answer: "A. Schedule payables close"
  },
  {
    id: 226,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step prevents duplicate payments, mismatches, and errors automatically?",
    options: [
      "A. System holds in Oracle Fusion Payables",
      "B. Review daily activity",
      "C. Prepayment management",
      "D. AI Dynamic Discounting"
    ],
    answer: "A. System holds in Oracle Fusion Payables"
  },
  {
    id: 227,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which holds are applied when only part of an invoice payment needs to be withheld?",
    options: [
      "A. Installment holds",
      "B. Invoice holds",
      "C. System holds",
      "D. Review holds"
    ],
    answer: "A. Installment holds"
  },
  {
    id: 228,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which holds prevent payments due to missing approvals or unmatched purchase orders?",
    options: [
      "A. Invoice holds",
      "B. Installment holds",
      "C. System holds",
      "D. Review daily activity"
    ],
    answer: "A. Invoice holds"
  },
  {
    id: 229,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step ensures invoices are routed efficiently to the right approvers based on predefined criteria?",
    options: [
      "A. Approval workflow automation",
      "B. Payment file generation",
      "C. Review daily activity",
      "D. Schedule payables close"
    ],
    answer: "A. Approval workflow automation"
  },
  {
    id: 230,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which workflow type allows approvals to flow simultaneously to multiple recipients?",
    options: [
      "A. Parallel approval workflow",
      "B. Serial approval workflow",
      "C. Manual approval workflow",
      "D. Conditional workflow"
    ],
    answer: "A. Parallel approval workflow"
  },
  {
    id: 231,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which workflow type routes approvals from one level to another in sequence?",
    options: [
      "A. Serial approval workflow",
      "B. Parallel approval workflow",
      "C. Manual approval workflow",
      "D. Conditional workflow"
    ],
    answer: "A. Serial approval workflow"
  },
  {
    id: 232,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which criteria can define approvers in Oracle Fusion workflows?",
    options: [
      "A. Supervisory job level, position level, or approval groups",
      "B. Random employee selection",
      "C. Suppliers themselves",
      "D. Only CEO approval"
    ],
    answer: "A. Supervisory job level, position level, or approval groups"
  },
  {
    id: 233,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step helps organizations manage payment methods, schedules, and controls?",
    options: [
      "A. Payment disbursement process",
      "B. Review daily activity",
      "C. Invoice auditing",
      "D. Prepayment management"
    ],
    answer: "A. Payment disbursement process"
  },
  {
    id: 234,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which metric measures the number of days a company takes to pay its accounts payable after receiving an invoice?",
    options: [
      "A. Days Payables Outstanding (DPO)",
      "B. Accounts Receivable Turnover",
      "C. Invoice Aging",
      "D. Payment File Generation"
    ],
    answer: "A. Days Payables Outstanding (DPO)"
  },
  {
    id: 235,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which metric evaluates how many times a company pays off its accounts payable in a year?",
    options: [
      "A. Accounts Payable Turnover",
      "B. Days Sales Outstanding",
      "C. Invoice Dispute Rate",
      "D. AI Discount Utilization"
    ],
    answer: "A. Accounts Payable Turnover"
  },
  {
    id: 236,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which Oracle Fusion feature automates assignment of accounting codes to invoices?",
    options: [
      "A. AI-powered code combination defaults",
      "B. Manual ledger entry",
      "C. Invoice auditing",
      "D. Spreadsheet uploads"
    ],
    answer: "A. AI-powered code combination defaults"
  },
  {
    id: 237,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which feature streamlines cash flow by automatically applying early payment discounts?",
    options: [
      "A. AI-enabled dynamic discounting",
      "B. Invoice auditing",
      "C. Manual payment scheduling",
      "D. Prepayment tracking"
    ],
    answer: "A. AI-enabled dynamic discounting"
  },
  {
    id: 238,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which feature allows monitoring the status of period activities for timely period close?",
    options: [
      "A. Period close monitoring",
      "B. Payment file generation",
      "C. AI Dynamic Discounting",
      "D. Manual spreadsheet upload"
    ],
    answer: "A. Period close monitoring"
  },
  {
    id: 239,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which Oracle modern best practice integrates with payables to manage assets from purchase to retirement?",
    options: [
      "A. Asset acquisition to retirement process",
      "B. Bank transaction reconciliation",
      "C. Payment file generation",
      "D. Invoice auditing"
    ],
    answer: "A. Asset acquisition to retirement process"
  },
  {
    id: 240,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which process reconciles payments made to suppliers with bank statements?",
    options: [
      "A. Bank transaction to cash position process",
      "B. AI Dynamic Discounting",
      "C. Invoice auditing",
      "D. Prepayment management"
    ],
    answer: "A. Bank transaction to cash position process"
  },
  {
    id: 241,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step ensures invoice captures, dispute management, approvals, and payments are integrated end-to-end?",
    options: [
      "A. Supplier invoice to payment business process",
      "B. Manual ledger updates",
      "C. Spreadsheet uploads",
      "D. Bank file generation"
    ],
    answer: "A. Supplier invoice to payment business process"
  },
  {
    id: 242,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step ensures disputes and discrepancies are resolved before payment?",
    options: [
      "A. Invoice holds",
      "B. Payment file generation",
      "C. Early payment discounts",
      "D. AI Dynamic Discounting"
    ],
    answer: "A. Invoice holds"
  },
  {
    id: 243,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step applies payment holds for budgetary or installment reasons?",
    options: [
      "A. Installment holds",
      "B. System holds",
      "C. Invoice auditing",
      "D. Review daily activity"
    ],
    answer: "A. Installment holds"
  },
  {
    id: 244,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which process ensures payment schedules align with cash flow priorities?",
    options: [
      "A. Payment disbursement process",
      "B. Review daily activity",
      "C. Invoice auditing",
      "D. AI Dynamic Discounting"
    ],
    answer: "A. Payment disbursement process"
  },
  {
    id: 245,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which workflow type routes approvals in sequence, from one level to the next?",
    options: [
      "A. Serial workflow",
      "B. Parallel workflow",
      "C. Conditional workflow",
      "D. Manual workflow"
    ],
    answer: "A. Serial workflow"
  },
  {
    id: 246,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which workflow type allows multiple approvers to act simultaneously?",
    options: [
      "A. Parallel workflow",
      "B. Serial workflow",
      "C. Conditional workflow",
      "D. Manual workflow"
    ],
    answer: "A. Parallel workflow"
  },
  {
    id: 247,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which approver assignment methods are supported in Oracle Fusion?",
    options: [
      "A. Job level, position level, and approval groups",
      "B. Random employee selection",
      "C. Supplier self-approval",
      "D. CEO only"
    ],
    answer: "A. Job level, position level, and approval groups"
  },
  {
    id: 248,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which metric reflects the efficiency of a company’s payment processes and cash flow?",
    options: [
      "A. Days Payables Outstanding (DPO)",
      "B. Accounts Receivable Aging",
      "C. Inventory Turnover",
      "D. Employee Payroll"
    ],
    answer: "A. Days Payables Outstanding (DPO)"
  },
  {
    id: 249,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which metric shows how often a company clears its payables within a year?",
    options: [
      "A. Accounts Payable Turnover",
      "B. Invoice Dispute Rate",
      "C. Cash Position Ratio",
      "D. Purchase Order Cycle Time"
    ],
    answer: "A. Accounts Payable Turnover"
  },
  {
    id: 250,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which feature ensures faster approvals and accurate coding by automating accounting assignments?",
    options: [
      "A. AI-powered code combination defaults",
      "B. Manual ledger entries",
      "C. Spreadsheet uploads",
      "D. Review daily activity"
    ],
    answer: "A. AI-powered code combination defaults"
  },
  {
    id: 251,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step minimizes manual effort by automatically routing invoices to the correct approvers?",
    options: [
      "A. Approval workflow automation",
      "B. Payment file generation",
      "C. Invoice auditing",
      "D. Review daily activity"
    ],
    answer: "A. Approval workflow automation"
  },
  {
    id: 252,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which holds are triggered automatically by the system for duplicate invoices or missing data?",
    options: [
      "A. System holds",
      "B. Installment holds",
      "C. Invoice holds",
      "D. Payment holds"
    ],
    answer: "A. System holds"
  },
  {
    id: 253,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which process step helps track cash flow priorities while scheduling payments?",
    options: [
      "A. Payment disbursement process",
      "B. Review daily activity",
      "C. Invoice auditing",
      "D. AI Dynamic Discounting"
    ],
    answer: "A. Payment disbursement process"
  },
  {
    id: 254,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which metric helps evaluate supplier relationship by measuring payment promptness?",
    options: [
      "A. Days Payables Outstanding (DPO)",
      "B. Accounts Receivable Turnover",
      "C. Inventory Turnover",
      "D. Expense Ratio"
    ],
    answer: "A. Days Payables Outstanding (DPO)"
  },
  {
    id: 255,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which metric assesses efficiency in paying off accounts payable during a period?",
    options: [
      "A. Accounts Payable Turnover",
      "B. Days Payables Outstanding",
      "C. Invoice Dispute Rate",
      "D. Cash Position Ratio"
    ],
    answer: "A. Accounts Payable Turnover"
  },
  {
    id: 256,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which Oracle Fusion feature automates coding and reduces errors in invoice processing?",
    options: [
      "A. AI-powered code combination defaults",
      "B. Manual ledger entry",
      "C. Prepayment management",
      "D. Payment file generation"
    ],
    answer: "A. AI-powered code combination defaults"
  },
  {
    id: 257,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which feature automatically identifies optimal timing for early payment discounts?",
    options: [
      "A. AI-enabled dynamic discounting",
      "B. Invoice auditing",
      "C. Manual payment approval",
      "D. Prepayment tracking"
    ],
    answer: "A. AI-enabled dynamic discounting"
  },
  {
    id: 258,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which feature allows real-time visibility into period close activities for timely completion?",
    options: [
      "A. Period close monitoring",
      "B. Invoice auditing",
      "C. AI Dynamic Discounting",
      "D. Prepayment management"
    ],
    answer: "A. Period close monitoring"
  },
  {
    id: 259,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which integration helps manage assets from purchase to depreciation and retirement?",
    options: [
      "A. Asset acquisition to retirement process",
      "B. Bank transaction to cash position process",
      "C. Invoice auditing",
      "D. Payment file generation"
    ],
    answer: "A. Asset acquisition to retirement process"
  },
  {
    id: 260,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which integration reconciles supplier payments with bank statements?",
    options: [
      "A. Bank transaction to cash position process",
      "B. Asset retirement process",
      "C. Prepayment management",
      "D. AI Dynamic Discounting"
    ],
    answer: "A. Bank transaction to cash position process"
  },
  {
    id: 261,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step ensures full end-to-end management from invoice capture to payment processing?",
    options: [
      "A. Supplier invoice to payment business process",
      "B. Manual spreadsheet uploads",
      "C. Payment file generation",
      "D. Review daily activity"
    ],
    answer: "A. Supplier invoice to payment business process"
  },
  {
    id: 262,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which holds prevent payment for invoices with missing approvals or incorrect amounts?",
    options: [
      "A. Invoice holds",
      "B. Installment holds",
      "C. System holds",
      "D. Payment holds"
    ],
    answer: "A. Invoice holds"
  },
  {
    id: 263,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which holds apply when only a part of an invoice’s payment is withheld?",
    options: [
      "A. Installment holds",
      "B. Invoice holds",
      "C. System holds",
      "D. Payment holds"
    ],
    answer: "A. Installment holds"
  },
  {
    id: 264,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which workflow type routes approvals to multiple recipients simultaneously?",
    options: [
      "A. Parallel workflow",
      "B. Serial workflow",
      "C. Manual workflow",
      "D. Conditional workflow"
    ],
    answer: "A. Parallel workflow"
  },
  {
    id: 265,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which workflow type routes approvals sequentially from one level to the next?",
    options: [
      "A. Serial workflow",
      "B. Parallel workflow",
      "C. Manual workflow",
      "D. Conditional workflow"
    ],
    answer: "A. Serial workflow"
  },
  {
    id: 266,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which methods can be used to assign approvers in Oracle Fusion?",
    options: [
      "A. Job level, position level, or approval groups",
      "B. Random employee selection",
      "C. CEO approval only",
      "D. Supplier self-approval"
    ],
    answer: "A. Job level, position level, or approval groups"
  },
  {
    id: 267,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which process step ensures accurate payment schedules based on due dates and cash flow?",
    options: [
      "A. Payment disbursement process",
      "B. Review daily activity",
      "C. Invoice auditing",
      "D. AI Dynamic Discounting"
    ],
    answer: "A. Payment disbursement process"
  },
  {
    id: 268,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which metric measures how efficiently a company uses supplier credit to manage cash?",
    options: [
      "A. Days Payables Outstanding (DPO)",
      "B. Accounts Receivable Turnover",
      "C. Cash Position Ratio",
      "D. Invoice Dispute Rate"
    ],
    answer: "A. Days Payables Outstanding (DPO)"
  },
  {
    id: 269,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which metric shows the frequency a company pays its accounts payable within a year?",
    options: [
      "A. Accounts Payable Turnover",
      "B. Days Payables Outstanding",
      "C. Invoice Aging",
      "D. Payment Cycle Duration"
    ],
    answer: "A. Accounts Payable Turnover"
  },
  {
    id: 270,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which feature reduces coding errors by automating accounting assignments for invoices?",
    options: [
      "A. AI-powered code combination defaults",
      "B. Manual ledger entry",
      "C. Payment file generation",
      "D. Spreadsheet uploads"
    ],
    answer: "A. AI-powered code combination defaults"
  },
  {
    id: 271,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which feature optimizes early payment discounts while balancing liquidity?",
    options: [
      "A. AI-enabled dynamic discounting",
      "B. Invoice auditing",
      "C. Prepayment management",
      "D. Manual approvals"
    ],
    answer: "A. AI-enabled dynamic discounting"
  },
  {
    id: 272,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step provides real-time visibility of period close progress and milestones?",
    options: [
      "A. Period close monitoring",
      "B. Review daily activity",
      "C. AI Dynamic Discounting",
      "D. Spreadsheet uploads"
    ],
    answer: "A. Period close monitoring"
  },
  {
    id: 273,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which integration manages asset lifecycle from purchase to retirement?",
    options: [
      "A. Asset acquisition to retirement process",
      "B. Bank reconciliation process",
      "C. Payment disbursement",
      "D. Invoice auditing"
    ],
    answer: "A. Asset acquisition to retirement process"
  },
  {
    id: 274,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which integration reconciles supplier payments with the bank’s cash position?",
    options: [
      "A. Bank transaction to cash position process",
      "B. Asset acquisition process",
      "C. Review daily activity",
      "D. AI Dynamic Discounting"
    ],
    answer: "A. Bank transaction to cash position process"
  },
  {
    id: 275,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which process ensures end-to-end management from invoice capture to payment?",
    options: [
      "A. Supplier invoice to payment business process",
      "B. Spreadsheet uploads",
      "C. Manual approvals",
      "D. Payment file generation"
    ],
    answer: "A. Supplier invoice to payment business process"
  },
  {
    id: 276,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which holds prevent payment for invoices with missing approvals or discrepancies?",
    options: [
      "A. Invoice holds",
      "B. Installment holds",
      "C. System holds",
      "D. Payment holds"
    ],
    answer: "A. Invoice holds"
  },
  {
    id: 277,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which holds apply when only specific installments of an invoice are withheld?",
    options: [
      "A. Installment holds",
      "B. Invoice holds",
      "C. System holds",
      "D. Payment holds"
    ],
    answer: "A. Installment holds"
  },
  {
    id: 278,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which workflow type sends approvals to multiple recipients simultaneously?",
    options: [
      "A. Parallel workflow",
      "B. Serial workflow",
      "C. Conditional workflow",
      "D. Manual workflow"
    ],
    answer: "A. Parallel workflow"
  },
  {
    id: 279,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which workflow type routes approvals sequentially from one approver to the next?",
    options: [
      "A. Serial workflow",
      "B. Parallel workflow",
      "C. Conditional workflow",
      "D. Manual workflow"
    ],
    answer: "A. Serial workflow"
  },
  {
    id: 280,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which methods can be used to assign approvers in Oracle Fusion?",
    options: [
      "A. Job level, position level, or approval groups",
      "B. Random employee selection",
      "C. CEO approval only",
      "D. Supplier self-approval"
    ],
    answer: "A. Job level, position level, or approval groups"
  },
  {
    id: 281,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step ensures timely and accurate supplier payment scheduling?",
    options: [
      "A. Payment disbursement process",
      "B. Review daily activity",
      "C. Invoice auditing",
      "D. AI Dynamic Discounting"
    ],
    answer: "A. Payment disbursement process"
  },
  {
    id: 282,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which metric indicates how effectively a company manages supplier credit and cash flow?",
    options: [
      "A. Days Payables Outstanding (DPO)",
      "B. Accounts Receivable Turnover",
      "C. Cash Position Ratio",
      "D. Invoice Dispute Rate"
    ],
    answer: "A. Days Payables Outstanding (DPO)"
  },
  {
    id: 283,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which metric measures how often a company pays off its accounts payable annually?",
    options: [
      "A. Accounts Payable Turnover",
      "B. Days Payables Outstanding",
      "C. Invoice Aging",
      "D. Payment Cycle Duration"
    ],
    answer: "A. Accounts Payable Turnover"
  },
  {
    id: 284,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which feature reduces coding errors by automating accounting assignments for invoices?",
    options: [
      "A. AI-powered code combination defaults",
      "B. Manual ledger entry",
      "C. Payment file generation",
      "D. Spreadsheet uploads"
    ],
    answer: "A. AI-powered code combination defaults"
  },
  {
    id: 285,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which feature optimizes early payment discounts while balancing liquidity?",
    options: [
      "A. AI-enabled dynamic discounting",
      "B. Invoice auditing",
      "C. Prepayment management",
      "D. Manual approvals"
    ],
    answer: "A. AI-enabled dynamic discounting"
  },
  {
    id: 286,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step provides real-time visibility of period close progress and milestones?",
    options: [
      "A. Period close monitoring",
      "B. Review daily activity",
      "C. AI Dynamic Discounting",
      "D. Spreadsheet uploads"
    ],
    answer: "A. Period close monitoring"
  },
  {
    id: 287,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which integration manages asset lifecycle from purchase to retirement?",
    options: [
      "A. Asset acquisition to retirement process",
      "B. Bank reconciliation process",
      "C. Payment disbursement",
      "D. Invoice auditing"
    ],
    answer: "A. Asset acquisition to retirement process"
  },
  {
    id: 288,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which integration reconciles supplier payments with the bank’s cash position?",
    options: [
      "A. Bank transaction to cash position process",
      "B. Asset acquisition process",
      "C. Review daily activity",
      "D. AI Dynamic Discounting"
    ],
    answer: "A. Bank transaction to cash position process"
  },
  {
    id: 289,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which process ensures end-to-end management from invoice capture to payment?",
    options: [
      "A. Supplier invoice to payment business process",
      "B. Spreadsheet uploads",
      "C. Manual approvals",
      "D. Payment file generation"
    ],
    answer: "A. Supplier invoice to payment business process"
  },
  {
    id: 290,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which holds prevent payment for invoices with missing approvals or discrepancies?",
    options: [
      "A. Invoice holds",
      "B. Installment holds",
      "C. System holds",
      "D. Payment holds"
    ],
    answer: "A. Invoice holds"
  },
  {
    id: 291,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which holds apply when only specific installments of an invoice are withheld?",
    options: [
      "A. Installment holds",
      "B. Invoice holds",
      "C. System holds",
      "D. Payment holds"
    ],
    answer: "A. Installment holds"
  },
  {
    id: 292,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which workflow type sends approvals to multiple recipients simultaneously?",
    options: [
      "A. Parallel workflow",
      "B. Serial workflow",
      "C. Conditional workflow",
      "D. Manual workflow"
    ],
    answer: "A. Parallel workflow"
  },
  {
    id: 293,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which workflow type routes approvals sequentially from one approver to the next?",
    options: [
      "A. Serial workflow",
      "B. Parallel workflow",
      "C. Conditional workflow",
      "D. Manual workflow"
    ],
    answer: "A. Serial workflow"
  },
  {
    id: 294,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which methods can be used to assign approvers in Oracle Fusion?",
    options: [
      "A. Job level, position level, or approval groups",
      "B. Random employee selection",
      "C. CEO approval only",
      "D. Supplier self-approval"
    ],
    answer: "A. Job level, position level, or approval groups"
  },
  {
    id: 295,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step ensures timely and accurate supplier payment scheduling?",
    options: [
      "A. Payment disbursement process",
      "B. Review daily activity",
      "C. Invoice auditing",
      "D. AI Dynamic Discounting"
    ],
    answer: "A. Payment disbursement process"
  },
  {
    id: 296,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which metric indicates how effectively a company manages supplier credit and cash flow?",
    options: [
      "A. Days Payables Outstanding (DPO)",
      "B. Accounts Receivable Turnover",
      "C. Cash Position Ratio",
      "D. Invoice Dispute Rate"
    ],
    answer: "A. Days Payables Outstanding (DPO)"
  },
  {
    id: 297,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which metric shows the frequency a company pays off its accounts payable annually?",
    options: [
      "A. Accounts Payable Turnover",
      "B. Days Payables Outstanding",
      "C. Invoice Aging",
      "D. Payment Cycle Duration"
    ],
    answer: "A. Accounts Payable Turnover"
  },
  {
    id: 298,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which feature reduces coding errors by automating accounting assignments for invoices?",
    options: [
      "A. AI-powered code combination defaults",
      "B. Manual ledger entry",
      "C. Payment file generation",
      "D. Spreadsheet uploads"
    ],
    answer: "A. AI-powered code combination defaults"
  },
  {
    id: 299,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which feature optimizes early payment discounts while balancing liquidity?",
    options: [
      "A. AI-enabled dynamic discounting",
      "B. Invoice auditing",
      "C. Prepayment management",
      "D. Manual approvals"
    ],
    answer: "A. AI-enabled dynamic discounting"
  },
  {
    id: 300,
    topic: "6 - Supplier Invoice to Payment",
    question: "Which step provides real-time visibility of period close progress and milestones?",
    options: [
      "A. Period close monitoring",
      "B. Review daily activity",
      "C. AI Dynamic Discounting",
      "D. Spreadsheet uploads"
    ],
    answer: "A. Period close monitoring"
  },
  {
    id: 301,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which module in Oracle Fusion manages the entire asset life cycle from acquisition to disposal?",
    options: [
      "A. Fixed Assets",
      "B. Payables",
      "C. Procurement",
      "D. Projects"
    ],
    answer: "A. Fixed Assets"
  },
  {
    id: 302,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step captures and records new assets for accurate tracking throughout their life cycle?",
    options: [
      "A. Asset acquisition",
      "B. Asset depreciation",
      "C. Asset disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Asset acquisition"
  },
  {
    id: 303,
    topic: "7 - Asset Acquisition to Retirement",
    question: "What are some methods through which assets can be acquired in Oracle Fusion?",
    options: [
      "A. Purchases, internal construction, lease agreements, transfers",
      "B. Manual ledger entry only",
      "C. System holds",
      "D. Spreadsheet downloads only"
    ],
    answer: "A. Purchases, internal construction, lease agreements, transfers"
  },
  {
    id: 304,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step involves identifying and recording assets in asset books for proper management?",
    options: [
      "A. Recognize and register assets",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Recognize and register assets"
  },
  {
    id: 305,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step capitalizes an asset, making it ready for depreciation and financial tracking?",
    options: [
      "A. Recognize and register assets",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Asset acquisition"
    ],
    answer: "A. Recognize and register assets"
  },
  {
    id: 306,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step calculates depreciation expenses automatically based on predefined methods and useful life?",
    options: [
      "A. Depreciate assets",
      "B. Recognize and register assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Depreciate assets"
  },
  {
    id: 307,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which predefined depreciation methods are supported by Oracle Fusion?",
    options: [
      "A. STL, 200DB, MACRS 100BH",
      "B. DPO, AP Turnover",
      "C. Invoice auditing, IDR",
      "D. Parallel and Serial workflow"
    ],
    answer: "A. STL, 200DB, MACRS 100BH"
  },
  {
    id: 308,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step involves identifying an asset for sale, transfer, or abandonment?",
    options: [
      "A. Derecognition and disposal",
      "B. Asset acquisition",
      "C. Depreciate assets",
      "D. Manage asset insight"
    ],
    answer: "A. Derecognition and disposal"
  },
  {
    id: 309,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step calculates gains or losses based on asset net book value during disposal?",
    options: [
      "A. Derecognition and disposal",
      "B. Depreciate assets",
      "C. Recognize and register assets",
      "D. Manage asset insight"
    ],
    answer: "A. Derecognition and disposal"
  },
  {
    id: 310,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step provides comprehensive visibility into asset performance, utilization, and financial metrics?",
    options: [
      "A. Manage asset insight",
      "B. Asset acquisition",
      "C. Depreciate assets",
      "D. Derecognition and disposal"
    ],
    answer: "A. Manage asset insight"
  },
  {
    id: 311,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step consolidates data from multiple modules for real-time insights into asset portfolios?",
    options: [
      "A. Manage asset insight",
      "B. Asset acquisition",
      "C. Depreciate assets",
      "D. Derecognition and disposal"
    ],
    answer: "A. Manage asset insight"
  },
  {
    id: 312,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step ensures that all accounting entries, including depreciation adjustments, are automatically posted to the general ledger?",
    options: [
      "A. Depreciate assets",
      "B. Recognize and register assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Depreciate assets"
  },
  {
    id: 313,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step optimizes asset utilization and enhances financial reporting throughout the asset lifecycle?",
    options: [
      "A. Asset acquisition to retirement process",
      "B. Manage asset insight",
      "C. Depreciate assets",
      "D. Derecognition and disposal"
    ],
    answer: "A. Asset acquisition to retirement process"
  },
  {
    id: 314,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step allows creation and registration of assets manually, entering details such as acquisition cost, location, and useful life?",
    options: [
      "A. Recognize and register assets",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Recognize and register assets"
  },
  {
    id: 315,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which Oracle Fusion capability allows seamless integration with payables, procurement, and projects for asset tracking?",
    options: [
      "A. Automated asset tracking",
      "B. Manual spreadsheet upload only",
      "C. Invoice auditing",
      "D. Payment disbursement"
    ],
    answer: "A. Automated asset tracking"
  },
  {
    id: 316,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step ensures accurate depreciation reporting and compliance with accounting standards?",
    options: [
      "A. Depreciate assets",
      "B. Recognize and register assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Depreciate assets"
  },
  {
    id: 317,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step supports manual entry or bulk uploads through spreadsheets for exceptional cases?",
    options: [
      "A. Asset acquisition",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Asset acquisition"
  },
  {
    id: 318,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step flags transactions as asset-related based on predefined rules or categories?",
    options: [
      "A. Recognize and register assets",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Recognize and register assets"
  },
  {
    id: 319,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step calculates adjustments such as reevaluations or changes in asset life?",
    options: [
      "A. Depreciate assets",
      "B. Recognize and register assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Depreciate assets"
  },
  {
    id: 320,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step identifies an asset for disposal and selects an appropriate reason such as sale, abandonment, or transfer?",
    options: [
      "A. Derecognition and disposal",
      "B. Asset acquisition",
      "C. Depreciate assets",
      "D. Manage asset insight"
    ],
    answer: "A. Derecognition and disposal"
  },
  {
    id: 321,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step ensures accounting entries for gains/losses on disposal are posted to the general ledger automatically?",
    options: [
      "A. Derecognition and disposal",
      "B. Depreciate assets",
      "C. Recognize and register assets",
      "D. Manage asset insight"
    ],
    answer: "A. Derecognition and disposal"
  },
  {
    id: 322,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step provides real-time dashboards and configurable reports for asset monitoring?",
    options: [
      "A. Manage asset insight",
      "B. Asset acquisition",
      "C. Depreciate assets",
      "D. Derecognition and disposal"
    ],
    answer: "A. Manage asset insight"
  },
  {
    id: 323,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step provides insights into net book value, depreciation trends, and return on investment?",
    options: [
      "A. Manage asset insight",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Recognize and register assets"
    ],
    answer: "A. Manage asset insight"
  },
  {
    id: 324,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step ensures accurate tracking and accounting throughout the life cycle of assets?",
    options: [
      "A. Asset acquisition",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Asset acquisition"
  },
  {
    id: 325,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step automatically transfers asset details from payables or projects to the fixed assets module?",
    options: [
      "A. Asset acquisition",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Asset acquisition"
  },
  {
    id: 326,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step allows manual creation of assets including acquisition cost, category, and useful life?",
    options: [
      "A. Recognize and register assets",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Recognize and register assets"
  },
  {
    id: 327,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step ensures assets are capitalized and ready for depreciation?",
    options: [
      "A. Recognize and register assets",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Recognize and register assets"
  },
  {
    id: 328,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step automatically calculates and posts depreciation entries to the general ledger?",
    options: [
      "A. Depreciate assets",
      "B. Recognize and register assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Depreciate assets"
  },
  {
    id: 329,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step includes adjustment calculations such as asset reevaluation or changes in useful life?",
    options: [
      "A. Depreciate assets",
      "B. Recognize and register assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Depreciate assets"
  },
  {
    id: 330,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step identifies assets for sale, transfer, or abandonment and calculates gains or losses?",
    options: [
      "A. Derecognition and disposal",
      "B. Depreciate assets",
      "C. Recognize and register assets",
      "D. Manage asset insight"
    ],
    answer: "A. Derecognition and disposal"
  },
  {
    id: 331,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step ensures that all accounting entries for disposal are posted automatically to the general ledger?",
    options: [
      "A. Derecognition and disposal",
      "B. Depreciate assets",
      "C. Recognize and register assets",
      "D. Manage asset insight"
    ],
    answer: "A. Derecognition and disposal"
  },
  {
    id: 332,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step provides real-time insights into asset utilization, financial metrics, and performance?",
    options: [
      "A. Manage asset insight",
      "B. Asset acquisition",
      "C. Depreciate assets",
      "D. Derecognition and disposal"
    ],
    answer: "A. Manage asset insight"
  },
  {
    id: 333,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step consolidates asset data from multiple modules for comprehensive reporting?",
    options: [
      "A. Manage asset insight",
      "B. Asset acquisition",
      "C. Depreciate assets",
      "D. Derecognition and disposal"
    ],
    answer: "A. Manage asset insight"
  },
  {
    id: 334,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step optimizes asset life cycle management, from acquisition to final retirement?",
    options: [
      "A. Asset acquisition to retirement process",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Asset acquisition to retirement process"
  },
  {
    id: 335,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step uses dashboards and reports to monitor asset life cycle, maintenance costs, and ROI?",
    options: [
      "A. Manage asset insight",
      "B. Asset acquisition",
      "C. Depreciate assets",
      "D. Derecognition and disposal"
    ],
    answer: "A. Manage asset insight"
  },
  {
    id: 336,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step ensures compliance with accounting standards and accurate financial reporting?",
    options: [
      "A. Depreciate assets",
      "B. Recognize and register assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Depreciate assets"
  },
  {
    id: 337,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step allows bulk upload of asset data through spreadsheets for exceptional scenarios?",
    options: [
      "A. Asset acquisition",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Asset acquisition"
  },
  {
    id: 338,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step automatically flags transactions as asset-related based on predefined categories?",
    options: [
      "A. Recognize and register assets",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Recognize and register assets"
  },
  {
    id: 339,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step ensures depreciation is executed periodically, typically monthly?",
    options: [
      "A. Depreciate assets",
      "B. Recognize and register assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Depreciate assets"
  },
  {
    id: 340,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step integrates asset data with other modules like payables, procurement, and projects?",
    options: [
      "A. Asset acquisition",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Asset acquisition"
  },
  {
    id: 341,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step provides actionable insights for optimizing asset allocation and utilization?",
    options: [
      "A. Manage asset insight",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Recognize and register assets"
    ],
    answer: "A. Manage asset insight"
  },
  {
    id: 342,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step calculates gains or losses during asset disposal based on net book value?",
    options: [
      "A. Derecognition and disposal",
      "B. Depreciate assets",
      "C. Recognize and register assets",
      "D. Manage asset insight"
    ],
    answer: "A. Derecognition and disposal"
  },
  {
    id: 343,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step enhances financial reporting accuracy by integrating adjustments and depreciation?",
    options: [
      "A. Depreciate assets",
      "B. Recognize and register assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Depreciate assets"
  },
  {
    id: 344,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step allows organizations to track the full asset lifecycle including acquisition, depreciation, and disposal?",
    options: [
      "A. Asset acquisition to retirement process",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Asset acquisition to retirement process"
  },
  {
    id: 345,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step supports compliance by automatically posting accounting entries for depreciation and disposal?",
    options: [
      "A. Depreciate assets",
      "B. Recognize and register assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Depreciate assets"
  },
  {
    id: 346,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step provides dashboards to assess asset maintenance costs and identify optimization opportunities?",
    options: [
      "A. Manage asset insight",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Recognize and register assets"
    ],
    answer: "A. Manage asset insight"
  },
  {
    id: 347,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step ensures assets are accurately recorded upon acquisition including cost, description, and category?",
    options: [
      "A. Recognize and register assets",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Recognize and register assets"
  },
  {
    id: 348,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step allows for tracking and reporting on asset ROI and net book value?",
    options: [
      "A. Manage asset insight",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Recognize and register assets"
    ],
    answer: "A. Manage asset insight"
  },
  {
    id: 349,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step automates the posting of depreciation entries to ensure accurate financial statements?",
    options: [
      "A. Depreciate assets",
      "B. Recognize and register assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Depreciate assets"
  },
  {
    id: 350,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step ensures end-to-end management of the asset lifecycle, including acquisition, depreciation, and retirement?",
    options: [
      "A. Asset acquisition to retirement process",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Asset acquisition to retirement process"
  },
  {
    id: 373,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which panel in Oracle Fusion is used to initiate actions like Inquire Assets, Transfer Assets, and Retire Assets?",
    options: [
      "A. Task panel",
      "B. Asset dashboard",
      "C. Depreciation infotile",
      "D. Additions infotile"
    ],
    answer: "A. Task panel"
  },
  {
    id: 374,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which option allows transferring multiple assets at once using spreadsheet data?",
    options: [
      "A. Spreadsheet option in Transfer Assets",
      "B. Depreciation calculation",
      "C. Manage asset insight",
      "D. Derecognition process"
    ],
    answer: "A. Spreadsheet option in Transfer Assets"
  },
  {
    id: 375,
    topic: "7 - Asset Acquisition to Retirement",
    question: "When transferring an asset to a new location, what field must be updated for the previous location?",
    options: [
      "A. Number of units to 0",
      "B. Depreciation method",
      "C. Asset category",
      "D. Useful life"
    ],
    answer: "A. Number of units to 0"
  },
  {
    id: 376,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step allows calculating depreciation expenses in a single click across all assets?",
    options: [
      "A. Depreciate assets",
      "B. Transfer assets",
      "C. Retire assets",
      "D. Acquire assets"
    ],
    answer: "A. Depreciate assets"
  },
  {
    id: 377,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which dashboard provides real-time asset analysis and allows generating custom reports?",
    options: [
      "A. Asset Dashboard infotile",
      "B. Additions infotile",
      "C. Task panel",
      "D. Depreciation infotile"
    ],
    answer: "A. Asset Dashboard infotile"
  },
  {
    id: 378,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step allows retiring assets by entering the proceed of sales value?",
    options: [
      "A. Derecognition and disposal",
      "B. Depreciate assets",
      "C. Transfer assets",
      "D. Manage asset insight"
    ],
    answer: "A. Derecognition and disposal"
  },
  {
    id: 379,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process allows mass asset retirements using spreadsheet uploads?",
    options: [
      "A. Derecognition and disposal",
      "B. Transfer assets",
      "C. Depreciate assets",
      "D. Acquire assets"
    ],
    answer: "A. Derecognition and disposal"
  },
  {
    id: 380,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step allows generating accounting entries for retired assets?",
    options: [
      "A. Create Accounting",
      "B. Depreciate assets",
      "C. Recognize and register assets",
      "D. Transfer assets"
    ],
    answer: "A. Create Accounting"
  },
  {
    id: 381,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step allows reviewing the accounting entries of completed retirements?",
    options: [
      "A. View Accounting from Depreciation infotile",
      "B. Transfer assets",
      "C. Manage asset insight",
      "D. Acquire assets"
    ],
    answer: "A. View Accounting from Depreciation infotile"
  },
  {
    id: 382,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step highlights discrepancies across different asset books for resolution?",
    options: [
      "A. Manage asset insight",
      "B. Depreciate assets",
      "C. Transfer assets",
      "D. Derecognition and disposal"
    ],
    answer: "A. Manage asset insight"
  },
  {
    id: 383,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step ensures accurate data when closing the asset period and creating month-end reports?",
    options: [
      "A. Manage asset insight",
      "B. Depreciate assets",
      "C. Recognize and register assets",
      "D. Derecognition and disposal"
    ],
    answer: "A. Manage asset insight"
  },
  {
    id: 384,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step confirms asset depreciation submission during the period close process?",
    options: [
      "A. Manage asset insight",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Acquire assets"
    ],
    answer: "A. Manage asset insight"
  },
   {
    id: 360,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Who has privileges to acquire assets and monitor asset infotiles in the demonstration?",
    options: [
      "A. Assad",
      "B. Any user",
      "C. System administrator",
      "D. Procurement manager"
    ],
    answer: "A. Assad"
  },
  {
    id: 361,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which infotile provides key information about recently purchased equipment and asset additions?",
    options: [
      "A. Additions infotile",
      "B. Depreciation infotile",
      "C. Asset dashboard",
      "D. Task panel"
    ],
    answer: "A. Additions infotile"
  },
  {
    id: 362,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step allows users to view payables invoices linked to newly created assets?",
    options: [
      "A. Acquire assets",
      "B. Recognize and register assets",
      "C. Depreciate assets",
      "D. Derecognition and disposal"
    ],
    answer: "A. Acquire assets"
  },
  {
    id: 363,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step involves posting the asset to the asset book after verifying its details?",
    options: [
      "A. Recognize and register assets",
      "B. Transfer assets",
      "C. Depreciate assets",
      "D. Manage asset insight"
    ],
    answer: "A. Recognize and register assets"
  },
  {
    id: 364,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process allows changing asset details like value, category, location, and depreciation account?",
    options: [
      "A. Recognize and register assets",
      "B. Acquire assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Recognize and register assets"
  },
  {
    id: 365,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step allows transferring one or multiple assets to a new location using spreadsheets?",
    options: [
      "A. Transfer assets",
      "B. Acquire assets",
      "C. Recognize and register assets",
      "D. Depreciate assets"
    ],
    answer: "A. Transfer assets"
  },
  {
    id: 366,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step automatically calculates depreciation for all assets based on type, useful life, and method?",
    options: [
      "A. Depreciate assets",
      "B. Recognize and register assets",
      "C. Acquire assets",
      "D. Derecognition and disposal"
    ],
    answer: "A. Depreciate assets"
  },
  {
    id: 367,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step allows retiring assets by sale, disposal, or transfer and generates accounting entries?",
    options: [
      "A. Derecognition and disposal",
      "B. Acquire assets",
      "C. Depreciate assets",
      "D. Transfer assets"
    ],
    answer: "A. Derecognition and disposal"
  },
  {
    id: 368,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step allows generating accounting entries for retired assets after entering sales proceeds?",
    options: [
      "A. Derecognition and disposal",
      "B. Depreciate assets",
      "C. Acquire assets",
      "D. Recognize and register assets"
    ],
    answer: "A. Derecognition and disposal"
  },
  {
    id: 369,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step allows reviewing completed retirements and viewing their accounting entries?",
    options: [
      "A. Depreciation infotile",
      "B. Asset dashboard",
      "C. Task panel",
      "D. Additions infotile"
    ],
    answer: "A. Depreciation infotile"
  },
  {
    id: 370,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step provides the privileges to manage asset insights and review pending activities before period close?",
    options: [
      "A. Manage asset insight",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Transfer assets"
    ],
    answer: "A. Manage asset insight"
  },
  {
    id: 371,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step allows comparing data across different asset books to identify discrepancies?",
    options: [
      "A. Manage asset insight",
      "B. Depreciate assets",
      "C. Recognize and register assets",
      "D. Derecognition and disposal"
    ],
    answer: "A. Manage asset insight"
  },
  {
    id: 372,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step completes the asset period close after reviewing pending activities and discrepancies?",
    options: [
      "A. Manage asset insight",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Acquire assets"
    ],
    answer: "A. Manage asset insight"
  },
  {
    id: 350,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step ensures end-to-end management of the asset lifecycle, including acquisition, depreciation, and retirement?",
    options: [
      "A. Asset acquisition to retirement process",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Manage asset insight"
    ],
    answer: "A. Asset acquisition to retirement process"
  },
  {
    id: 351,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step allows users with appropriate privileges to acquire new assets in Oracle Fusion?",
    options: [
      "A. Acquire assets",
      "B. Recognize and register assets",
      "C. Depreciate assets",
      "D. Derecognition and disposal"
    ],
    answer: "A. Acquire assets"
  },
  {
    id: 352,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which feature in Oracle Fusion helps monitor newly added assets and exceptions using infotiles?",
    options: [
      "A. Assets infotile",
      "B. Asset dashboard",
      "C. Depreciation infotile",
      "D. Task panel"
    ],
    answer: "A. Assets infotile"
  },
  {
    id: 353,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step posts newly acquired assets to the asset book?",
    options: [
      "A. Recognize and register assets",
      "B. Acquire assets",
      "C. Depreciate assets",
      "D. Derecognition and disposal"
    ],
    answer: "A. Recognize and register assets"
  },
  {
    id: 354,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step allows updating asset details such as value, category, location, and depreciation account before posting?",
    options: [
      "A. Recognize and register assets",
      "B. Acquire assets",
      "C. Depreciate assets",
      "D. Manage asset insight"
    ],
    answer: "A. Recognize and register assets"
  },
  {
    id: 355,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which process step allows transferring an asset from one location to another within the same asset book?",
    options: [
      "A. Transfer assets",
      "B. Acquire assets",
      "C. Depreciate assets",
      "D. Derecognition and disposal"
    ],
    answer: "A. Transfer assets"
  },
  {
    id: 356,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step calculates asset depreciation automatically considering asset type, useful life, and depreciation method?",
    options: [
      "A. Depreciate assets",
      "B. Recognize and register assets",
      "C. Acquire assets",
      "D. Derecognition and disposal"
    ],
    answer: "A. Depreciate assets"
  },
  {
    id: 357,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step retires an asset, calculates gains or losses, and posts accounting entries to the general ledger?",
    options: [
      "A. Derecognition and disposal",
      "B. Acquire assets",
      "C. Depreciate assets",
      "D. Manage asset insight"
    ],
    answer: "A. Derecognition and disposal"
  },
  {
    id: 358,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which step provides organizations with comprehensive visibility into their asset portfolio through analytics and reporting?",
    options: [
      "A. Manage asset insight",
      "B. Depreciate assets",
      "C. Derecognition and disposal",
      "D. Acquire assets"
    ],
    answer: "A. Manage asset insight"
  },
  {
    id: 359,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which tool allows comparing data across different asset books and highlights discrepancies before period close?",
    options: [
      "A. Oracle Assets",
      "B. Depreciation infotile",
      "C. Assets infotile",
      "D. Task panel"
    ],
    answer: "A. Oracle Assets"
  },
  {
    id: 385,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Why are key design considerations important when implementing the asset acquisition to retirement OMBP?",
    options: [
      "A. To ensure alignment with organizational requirements, accurate asset tracking, and seamless integration",
      "B. To create random workflows",
      "C. To avoid asset capitalization",
      "D. To remove compliance requirements"
    ],
    answer: "A. To ensure alignment with organizational requirements, accurate asset tracking, and seamless integration"
  },
  {
    id: 386,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which method of acquiring assets determines how costs are capitalized and depreciated in Oracle Fusion?",
    options: [
      "A. Purchase, lease, internal construction, or transfer",
      "B. Only purchase",
      "C. Only internal construction",
      "D. Only transfer"
    ],
    answer: "A. Purchase, lease, internal construction, or transfer"
  },
  {
    id: 387,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which module automatically transfers supplier invoices flagged as asset purchases to fixed assets?",
    options: [
      "A. Oracle Fusion payables and projects integration with assets module",
      "B. Procurement module only",
      "C. Inventory module",
      "D. General ledger module"
    ],
    answer: "A. Oracle Fusion payables and projects integration with assets module"
  },
  {
    id: 388,
    topic: "7 - Asset Acquisition to Retirement",
    question: "What does CIP assets stand for in Oracle Fusion?",
    options: [
      "A. Assets under construction or development",
      "B. Completed Investment Projects",
      "C. Capitalized Internal Products",
      "D. Current Inventory Products"
    ],
    answer: "A. Assets under construction or development"
  },
  {
    id: 389,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which tool is used to track costs for assets under construction before transferring them to fixed assets?",
    options: [
      "A. Project costing module",
      "B. Payables module",
      "C. Procurement module",
      "D. Inventory module"
    ],
    answer: "A. Project costing module"
  },
  {
    id: 390,
    topic: "7 - Asset Acquisition to Retirement",
    question: "How many segments can Oracle Fusion define for an asset category key flexfield?",
    options: [
      "A. Up to seven segments",
      "B. Only one segment",
      "C. Up to three segments",
      "D. Unlimited segments"
    ],
    answer: "A. Up to seven segments"
  },
  {
    id: 391,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which feature helps track the physical location of an asset in Oracle Fusion?",
    options: [
      "A. Asset location flexfield",
      "B. Asset key flexfield",
      "C. Depreciation method",
      "D. Asset category"
    ],
    answer: "A. Asset location flexfield"
  },
  {
    id: 392,
    topic: "7 - Asset Acquisition to Retirement",
    question: "What is the purpose of an asset key in Oracle Fusion?",
    options: [
      "A. To uniquely identify each asset and improve financial reporting accuracy",
      "B. To define asset location only",
      "C. To determine depreciation method",
      "D. To track project costs"
    ],
    answer: "A. To uniquely identify each asset and improve financial reporting accuracy"
  },
  {
    id: 393,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which feature in Oracle Fusion enables bulk asset updates and reduces manual labor?",
    options: [
      "A. Excel integration",
      "B. Manual entry only",
      "C. Depreciation schedule",
      "D. Asset key flexfield"
    ],
    answer: "A. Excel integration"
  },
  {
    id: 394,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Why is selecting an appropriate depreciation method critical?",
    options: [
      "A. It affects asset value over time, financial statements, taxes, and cash flow",
      "B. It only affects physical location",
      "C. It determines asset category",
      "D. It prevents asset registration"
    ],
    answer: "A. It affects asset value over time, financial statements, taxes, and cash flow"
  },
  {
    id: 395,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which depreciation method spreads an asset's cost evenly over its useful life?",
    options: [
      "A. Straight-line method",
      "B. Double declining balance",
      "C. MACRS",
      "D. Custom method only"
    ],
    answer: "A. Straight-line method"
  },
  {
    id: 396,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which metric evaluates how effectively a company utilizes its assets to generate revenue?",
    options: [
      "A. Assets turnover ratio",
      "B. DPO",
      "C. Capex ratio",
      "D. AP turnover"
    ],
    answer: "A. Assets turnover ratio"
  },
  {
    id: 397,
    topic: "7 - Asset Acquisition to Retirement",
    question: "What does a low assets turnover ratio indicate?",
    options: [
      "A. Underutilized assets or overinvestment in assets",
      "B. Efficient asset use",
      "C. Faster depreciation",
      "D. High Capex"
    ],
    answer: "A. Underutilized assets or overinvestment in assets"
  },
  {
    id: 398,
    topic: "7 - Asset Acquisition to Retirement",
    question: "Which metric measures the proportion of revenue reinvested in capital expenditures?",
    options: [
      "A. Capex ratio",
      "B. Assets turnover",
      "C. DPO",
      "D. AP turnover"
    ],
    answer: "A. Capex ratio"
  },
  {
    id: 399,
    topic: "7 - Asset Acquisition to Retirement",
    question: "How does automated asset depreciation calculation benefit the organization?",
    options: [
      "A. Streamlines period close, ensures accuracy, reduces errors, and saves time",
      "B. Only tracks asset location",
      "C. Only creates spreadsheets",
      "D. Prevents asset acquisition"
    ],
    answer: "A. Streamlines period close, ensures accuracy, reduces errors, and saves time"
  },
  {
    id: 400,
    topic: "7 - Asset Acquisition to Retirement",
    question: "How does Oracle Fusion ensure seamless integration of asset data across modules?",
    options: [
      "A. Automatically transfers asset-related invoices from payables and project costs from projects",
      "B. Requires manual updates for every module",
      "C. Ignores project costs",
      "D. Only updates general ledger"
    ],
    answer: "A. Automatically transfers asset-related invoices from payables and project costs from projects"
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