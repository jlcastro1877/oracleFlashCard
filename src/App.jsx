import { useState } from "react";
import FlashcardList from "./FlashcardList";
import "./App.css";

export default function App() {
  const [flashcards] = useState([
  {
  id: 161,
  topic:"Get Certified: Oracle Fusion Cloud Applications ERP Process Essentials",
  subtopic: "4 - Financials - Introduction: ERP Financial Modules",
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
  subtopic: "4 - Financials - Introduction: ERP Financial Modules",
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

  const topics = [...new Set(flashcards.map(card => card.topic))];
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);

  // Extrair subtopics do topic selecionado
  const subtopics = selectedTopic
    ? [...new Set(flashcards.filter(card => card.topic === selectedTopic).map(card => card.subtopic))]
    : [];

  // Filtrar flashcards do subtopic selecionado
  const filteredCards = selectedSubtopic
    ? flashcards.filter(
        card => card.topic === selectedTopic && card.subtopic === selectedSubtopic
      )
    : [];

  return (
    <div className="app">
      {/* 1️⃣ Mostrar Topics */}
      {!selectedTopic && (
        <>
          <h1>Choose a Topic</h1>
          <div className="topic-cards">
            {topics.map(topic => (
              <div
                key={topic}
                className="topic-card"
                onClick={() => setSelectedTopic(topic)}
              >
                <h2>{topic}</h2>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 2️⃣ Mostrar Subtopics */}
      {selectedTopic && !selectedSubtopic && (
        <>
          <button
            onClick={() => setSelectedTopic(null)}
            className="topic-button back-button"
          >
            ← Back
          </button>
          <h2>{selectedTopic}</h2>
          <div className="topic-cards">
            {subtopics.map(sub => (
              <div
                key={sub}
                className="topic-card"
                onClick={() => setSelectedSubtopic(sub)}
              >
                <h3>{sub}</h3>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 3️⃣ Mostrar Flashcards */}
      {selectedSubtopic && (
        <>
          <button
            onClick={() => setSelectedSubtopic(null)}
            className="topic-button back-button"
          >
            ← Back
          </button>
          <h2>{selectedSubtopic} Flashcards</h2>
          <FlashcardList flashcards={filteredCards} />
        </>
      )}
    </div>
  );
}
