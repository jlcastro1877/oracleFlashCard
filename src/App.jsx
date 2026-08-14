// src/App.jsx
import { useState } from "react";
import FlashcardList from "./FlashcardList";
import "./App.css";

export default function App() {
  // 1️⃣ Flashcards com tópicos e múltipla escolha
  const [flashcards] = useState([
   {
  id: 1,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "Which companies are required to file financial statements with the SEC?",
  options: [
    "A.All privately held companies",
    "B.Publicly traded companies",
    "C.Only small businesses",
    "D.Only banks"
  ],
  answer: "B.Publicly traded companies",
},
{
  id: 2,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "What are the three primary financial statements?",
  options: [
    "A.Balance sheet, income statement, and statement of cash flows",
    "B.Balance sheet, tax return, and statement of retained earnings",
    "C.Income statement, annual report, and tax return",
    "D.Statement of cash flows, budget report, and audit report"
  ],
  answer: "A.Balance sheet, income statement, and statement of cash flows",
},
{
  id: 3,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "What does the balance sheet report?",
  options: [
    "A.Only a company's cash",
    "B.A company's revenues and expenses",
    "C.A company's assets, liabilities, and owners' equity",
    "D.Only a company's debts"
  ],
  answer: "C.A company's assets, liabilities, and owners' equity",
},
{
  id: 4,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "Another name for the balance sheet is:",
  options: [
    "A.Statement of earnings",
    "B.Statement of financial position",
    "C.Statement of cash flows",
    "D.Statement of retained earnings"
  ],
  answer: "B.Statement of financial position",
},
{
  id: 5,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "What does the income statement primarily report?",
  options: [
    "A.The amount of net income earned during a period",
    "B.The total cash owned by the company",
    "C.The company's assets and liabilities",
    "D.The company's stock price"
  ],
  answer: "A.The amount of net income earned during a period",
},
{
  id: 6,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "Another name for the income statement is:",
  options: [
    "A.Statement of financial position",
    "B.Statement of earnings",
    "C.Statement of assets",
    "D.Statement of investments"
  ],
  answer: "B.Statement of earnings",
},
{
  id: 7,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "What does the statement of cash flows report?",
  options: [
    "A.Only cash received from customers",
    "B.The company's assets and liabilities",
    "C.Cash collected and paid out through operating, investing, and financing activities",
    "D.Only the company's profits"
  ],
  answer: "C.Cash collected and paid out through operating, investing, and financing activities",
},
{
  id: 8,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "The statement of retained earnings shows:",
  options: [
    "A.The company's current stock price",
    "B.Accumulated profits or losses since the business started",
    "C.Only the company's liabilities",
    "D.The amount of taxes paid during the year"
  ],
  answer: "B.Accumulated profits or losses since the business started",
},
{
  id: 9,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "Why is the statement of retained earnings important?",
  options: [
    "A.It replaces the balance sheet",
    "B.It is required only for private companies",
    "C.It links the income statement and balance sheet together",
    "D.It shows only financing activities"
  ],
  answer: "C.It links the income statement and balance sheet together",
},
{
  id: 10,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "What is the SEC?",
  options: [
    "A.A private accounting company",
    "B.A U.S. government agency that regulates financial markets",
    "C.A stock exchange",
    "D.A private investment bank"
  ],
  answer: "B.A U.S. government agency that regulates financial markets",
},
{
  id: 11,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "What is one responsibility of the SEC?",
  options: [
    "A.Setting the prices of company stocks",
    "B.Preparing financial statements for companies",
    "C.Ensuring that financial information from publicly traded companies follows certain rules",
    "D.Lending money to publicly traded companies"
  ],
  answer: "C.Ensuring that financial information from publicly traded companies follows certain rules",
},
{
  id: 12,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "What is Form 10-K?",
  options: [
    "A.A quarterly financial report",
    "B.A company's annual report filed with the SEC",
    "C.A tax return",
    "D.A report used only by private companies"
  ],
  answer: "B.A company's annual report filed with the SEC",
},
{
  id: 13,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "What form do publicly traded companies file at the end of the first three quarters of their fiscal year?",
  options: [
    "A.Form 10-K",
    "B.Form W-2",
    "C.Form 10-Q",
    "D.Form 8-A"
  ],
  answer: "C.Form 10-Q",
},
{
  id: 14,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "When is Form 10-K filed?",
  options: [
    "A.At the end of every month",
    "B.At the end of the first three quarters",
    "C.For the year, at the end of the fourth quarter",
    "D.Every two years"
  ],
  answer: "C.For the year, at the end of the fourth quarter",
},
{
  id: 15,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "Which of the following is included in a Form 10-K?",
  options: [
    "A.The company's financial statements",
    "B.Employees' personal bank accounts",
    "C.Customers' credit card information",
    "D.Employees' medical records"
  ],
  answer: "A.The company's financial statements",
},
{
  id: 16,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "Which information about risk may appear in a Form 10-K?",
  options: [
    "A.Exposure to changes in interest rates",
    "B.Employees' vacation plans",
    "C.Customer passwords",
    "D.The CEO's personal shopping habits"
  ],
  answer: "A.Exposure to changes in interest rates",
},
{
  id: 17,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "How soon after the end of its fiscal year must a company file its 10-K?",
  options: [
    "A.Within 10 days",
    "B.Within 30 days",
    "C.Within 60 days",
    "D.Within 120 days"
  ],
  answer: "C.Within 60 days",
},
{
  id: 18,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "A company with a calendar fiscal year ending in December would generally file its 10-K by:",
  options: [
    "A.The first of January",
    "B.The first of March",
    "C.The first of June",
    "D.The end of December"
  ],
  answer: "B.The first of March",
},
{
  id: 19,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "What does EDGAR stand for?",
  options: [
    "A.Electronic Data Gathering, Analysis, and Retrieval system",
    "B.Economic Data Gathering and Reporting",
    "C.Electronic Documents and Government Accounting Records",
    "D.Economic Database for General Accounting Reports"
  ],
  answer: "A.Electronic Data Gathering, Analysis, and Retrieval system",
},
{
  id: 20,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "What is EDGAR used for?",
  options: [
    "A.Calculating company taxes",
    "B.Searching SEC company filings",
    "C.Buying and selling stocks",
    "D.Creating company websites"
  ],
  answer: "B.Searching SEC company filings",
},
{
  id: 21,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "What is a CIK?",
  options: [
    "A.A company's stock price",
    "B.A unique number assigned to a company",
    "C.A type of financial statement",
    "D.A type of quarterly report"
  ],
  answer: "B.A unique number assigned to a company",
},
{
  id: 22,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "In the Microsoft example, which filing type should you search for to find the annual report?",
  options: [
    "A.10-Q",
    "B.W-2",
    "C.10-K",
    "D.CIK"
  ],
  answer: "C.10-K",
},
{
  id: 23,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "If you want to see all the information in a Form 10-K, including risks and management discussion, which option should you select?",
  options: [
    "A.Documents",
    "B.Interactive Data",
    "C.Company Name",
    "D.View Excel Document"
  ],
  answer: "A.Documents",
},
{
  id: 24,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "What is an advantage of selecting 'Interactive Data'?",
  options: [
    "A.It allows you to change the company's financial statements",
    "B.It allows you to see financial statements in table format and download them into Excel",
    "C.It allows you to buy company stock",
    "D.It shows employees' salaries"
  ],
  answer: "B.It allows you to see financial statements in table format and download them into Excel",
},
{
  id: 25,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "Why are financial statements useful to potential lenders and investors?",
  options: [
    "A.They guarantee that a company will be profitable",
    "B.They provide a reliable basis for evaluating past performance and future prospects",
    "C.They predict the exact future stock price",
    "D.They eliminate all investment risk"
  ],
  answer: "B.They provide a reliable basis for evaluating past performance and future prospects",
},
    {
  id: 26,
  topic: "Lesson 8: The Balance Sheet",
  question: "What is the fundamental accounting equation underlying the balance sheet?",
  options: [
    "A.Assets = Revenue + Expenses",
    "B.Assets = Liabilities + Owners' Equity",
    "C.Liabilities = Assets + Owners' Equity",
    "D.Assets = Cash + Revenue"
  ],
  answer: "B.Assets = Liabilities + Owners' Equity",
},
{
  id: 27,
  topic: "Lesson 8: The Balance Sheet",
  question: "What does a balance sheet summarize?",
  options: [
    "A.A company's financial position at a particular date",
    "B.A company's sales over several years",
    "C.A company's cash receipts only",
    "D.A company's employee expenses"
  ],
  answer: "A.A company's financial position at a particular date",
},
{
  id: 28,
  topic: "Lesson 8: The Balance Sheet",
  question: "What are the three main categories of a balance sheet?",
  options: [
    "A.Revenues, expenses, and net income",
    "B.Cash, inventory, and debt",
    "C.Assets, liabilities, and owners' equity",
    "D.Operating, investing, and financing activities"
  ],
  answer: "C.Assets, liabilities, and owners' equity",
},
{
  id: 29,
  topic: "Lesson 8: The Balance Sheet",
  question: "What is an asset?",
  options: [
    "A.An obligation owed to another party",
    "B.An economic resource owned or controlled by a company",
    "C.An amount distributed to shareholders",
    "D.A company's annual revenue"
  ],
  answer: "B.An economic resource owned or controlled by a company",
},
{
  id: 30,
  topic: "Lesson 8: The Balance Sheet",
  question: "According to the lecture, an asset is expected to provide:",
  options: [
    "A.A guaranteed future profit",
    "B.A probable future benefit",
    "C.An immediate tax deduction",
    "D.A certain increase in stock price"
  ],
  answer: "B.A probable future benefit",
},
{
  id: 31,
  topic: "Lesson 8: The Balance Sheet",
  question: "Which of the following is an example of an asset?",
  options: [
    "A.Accounts Payable",
    "B.Taxes Payable",
    "C.Inventory",
    "D.Unearned Revenue"
  ],
  answer: "C.Inventory",
},
{
  id: 32,
  topic: "Lesson 8: The Balance Sheet",
  question: "What are accounts receivable?",
  options: [
    "A.Amounts a company owes to suppliers",
    "B.Amounts owed to a company by customers who purchased on credit",
    "C.Amounts invested by owners",
    "D.Amounts owed to employees"
  ],
  answer: "B.Amounts owed to a company by customers who purchased on credit",
},
{
  id: 33,
  topic: "Lesson 8: The Balance Sheet",
  question: "Why is inventory considered an asset?",
  options: [
    "A.It represents money owed to suppliers",
    "B.It can be sold to customers to generate future economic benefits",
    "C.It always increases in market value",
    "D.It represents money invested by owners"
  ],
  answer: "B.It can be sold to customers to generate future economic benefits",
},
{
  id: 34,
  topic: "Lesson 8: The Balance Sheet",
  question: "What is a liability?",
  options: [
    "A.A resource owned by a company",
    "B.An obligation that may require transferring assets or providing services",
    "C.The amount originally invested by owners",
    "D.The market value of a company"
  ],
  answer: "B.An obligation that may require transferring assets or providing services",
},
{
  id: 35,
  topic: "Lesson 8: The Balance Sheet",
  question: "Which of the following is an example of a liability?",
  options: [
    "A.Inventory",
    "B.Cash",
    "C.Accounts Payable",
    "D.Buildings"
  ],
  answer: "C.Accounts Payable",
},
{
  id: 36,
  topic: "Lesson 8: The Balance Sheet",
  question: "What does Accounts Payable represent?",
  options: [
    "A.Amounts customers owe to the company",
    "B.Amounts owed for goods or services purchased on credit",
    "C.Amounts invested by shareholders",
    "D.Profits retained in the company"
  ],
  answer: "B.Amounts owed for goods or services purchased on credit",
},
{
  id: 37,
  topic: "Lesson 8: The Balance Sheet",
  question: "What is unearned revenue?",
  options: [
    "A.Revenue earned but not yet collected",
    "B.An obligation to provide goods or services to a customer who paid in advance",
    "C.A long-term asset",
    "D.Profit distributed to shareholders"
  ],
  answer: "B.An obligation to provide goods or services to a customer who paid in advance",
},
{
  id: 38,
  topic: "Lesson 8: The Balance Sheet",
  question: "What does owners' equity represent?",
  options: [
    "A.The total amount owed to creditors",
    "B.The remaining claim against assets after liabilities are deducted",
    "C.The company's total annual sales",
    "D.The amount of cash in the bank"
  ],
  answer: "B.The remaining claim against assets after liabilities are deducted",
},
{
  id: 39,
  topic: "Lesson 8: The Balance Sheet",
  question: "How can owners' equity be calculated using the accounting equation?",
  options: [
    "A.Assets + Liabilities",
    "B.Liabilities - Assets",
    "C.Assets - Liabilities",
    "D.Assets + Revenue"
  ],
  answer: "C.Assets - Liabilities",
},
{
  id: 40,
  topic: "Lesson 8: The Balance Sheet",
  question: "What are the two main components of owners' equity discussed in the lesson?",
  options: [
    "A.Cash and inventory",
    "B.Accounts payable and long-term debt",
    "C.Paid-in capital and retained earnings",
    "D.Revenue and expenses"
  ],
  answer: "C.Paid-in capital and retained earnings",
},
{
  id: 41,
  topic: "Lesson 8: The Balance Sheet",
  question: "What does paid-in capital represent?",
  options: [
    "A.The amount originally invested in the business by its owners",
    "B.The amount borrowed from banks",
    "C.The amount owed to suppliers",
    "D.The profit distributed as dividends"
  ],
  answer: "A.The amount originally invested in the business by its owners",
},
{
  id: 42,
  topic: "Lesson 8: The Balance Sheet",
  question: "What are retained earnings?",
  options: [
    "A.Cash held in a company's bank account",
    "B.Accumulated earnings retained and reinvested in the business",
    "C.Money borrowed from creditors",
    "D.Amounts owed by customers"
  ],
  answer: "B.Accumulated earnings retained and reinvested in the business",
},
{
  id: 43,
  topic: "Lesson 8: The Balance Sheet",
  question: "Which statement about retained earnings and cash is correct?",
  options: [
    "A.Retained earnings and cash are always the same",
    "B.Retained earnings represent only cash held by the company",
    "C.Retained earnings may be reinvested in assets such as inventory, buildings, land, or cash",
    "D.Cash is a component of owners' equity"
  ],
  answer: "C.Retained earnings may be reinvested in assets such as inventory, buildings, land, or cash",
},
{
  id: 44,
  topic: "Lesson 8: The Balance Sheet",
  question: "What is the main idea behind double-entry accounting?",
  options: [
    "A.Record only the company's assets",
    "B.Record assets and also record where the financing for those assets came from",
    "C.Record every transaction twice as revenue",
    "D.Record only cash transactions"
  ],
  answer: "B.Record assets and also record where the financing for those assets came from",
},
{
  id: 45,
  topic: "Lesson 8: The Balance Sheet",
  question: "Who was the first person mentioned in the lecture to write a book describing double-entry accounting?",
  options: [
    "A.Leonardo da Vinci",
    "B.Adam Smith",
    "C.Luca Pacioli",
    "D.Isaac Newton"
  ],
  answer: "C.Luca Pacioli",
},
{
  id: 46,
  topic: "Lesson 8: The Balance Sheet",
  question: "What is a current asset?",
  options: [
    "A.An asset expected to be used up or converted to cash within one year or the operating cycle, whichever is longer",
    "B.An asset that can never be sold",
    "C.An asset that must remain in the company for more than ten years",
    "D.An asset owned by the company's shareholders personally"
  ],
  answer: "A.An asset expected to be used up or converted to cash within one year or the operating cycle, whichever is longer",
},
{
  id: 47,
  topic: "Lesson 8: The Balance Sheet",
  question: "Which of the following would normally be classified as a long-term asset?",
  options: [
    "A.Cash",
    "B.Accounts Receivable",
    "C.Inventory",
    "D.Buildings"
  ],
  answer: "D.Buildings",
},
{
  id: 48,
  topic: "Lesson 8: The Balance Sheet",
  question: "What is a current liability?",
  options: [
    "A.An obligation expected to be satisfied within one year",
    "B.An obligation that will never be paid",
    "C.An asset expected to be sold within one year",
    "D.An owner's investment in the company"
  ],
  answer: "A.An obligation expected to be satisfied within one year",
},
{
  id: 49,
  topic: "Lesson 8: The Balance Sheet",
  question: "What is a classified balance sheet?",
  options: [
    "A.A balance sheet available only to management",
    "B.A balance sheet that separates assets and liabilities into current and long-term categories",
    "C.A balance sheet that reports only assets",
    "D.A balance sheet that shows market values only"
  ],
  answer: "B.A balance sheet that separates assets and liabilities into current and long-term categories",
},
{
  id: 50,
  topic: "Lesson 8: The Balance Sheet",
  question: "Which of the following is an important limitation of the balance sheet?",
  options: [
    "A.All assets are reported at their current market value",
    "B.The balance sheet includes every economic asset a company has",
    "C.Many assets are reported at historical cost, and some valuable intangible assets are not reported",
    "D.The balance sheet cannot report liabilities"
  ],
  answer: "C.Many assets are reported at historical cost, and some valuable intangible assets are not reported",
},
    {
      id: 51,
  topic: "Lesson 8: The Balance Sheet",
  question: "Why does the balance sheet not reflect the current value or worth of a company?",
  options: [
    "A.The amount of cash is not reported in the balance sheet.",
    "B.SEC regulations do not require most publicly traded companies to use the accounting equation.",
    "C.SEC regulations require recorded balance sheet values to be greater than the current value or worth of a company.",
    "D.Many assets are recorded at cost, and some economic assets are not recorded at all."
  ],
  answer: "D.Many assets are recorded at cost, and some economic assets are not recorded at all.",
    },
     {
      id: 52,
      topic: "Lesson 8: The Balance Sheet",
      question: "Which statement best characterizes the elements and purposes of a balance sheet?",
      options: [
        "A.A balance sheet portrays the financial condition of a company at a point in time",
        "B.A balance sheet portrays the results of the operations of a company over a period of time.",
        "C.A balance sheet portrays the results of operations of a company at a point in time.",
        "D.A balance sheet portrays the financial condition of a company over a period of time."
      ],
      answer: "A.A balance sheet portrays the financial condition of a company at a point in time",
    },
    {
      id: 53,
      topic: "Lesson 8: The Balance Sheet",
      question: "What is owners’ equity?",
      options: [
        "A.An obligation to pay cash, transfer other assets, or provide services to another party",
        "B.The sum of operating, investing, and financing cash flows generated by another party",
        "C.An economic resource that is owned or controlled by another party",
        "D.The residual amount representing the net assets available to another party after all obligations have been satisﬁed"
      ],
      answer: "D.The residual amount representing the net assets available to another party after all obligations have been satisﬁed",
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
  },
  {
  id: 403,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "What is the main purpose of Oracle Fusion Cloud Applications?",
  options: [
    "A. To provide standalone tools for individual departments",
    "B. To connect and automate business processes across front and back office operations",
    "C. To replace all on-premise Oracle E-Business Suite modules",
    "D. To support only small and medium-sized enterprises"
  ],
  answer: "B. To connect and automate business processes across front and back office operations"
},
{
  id: 404,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "Which two main pillars form the foundation of Oracle’s cloud application strategy?",
  options: [
    "A. Complete Solutions and Complete Choice",
    "B. Flexibility and Cost Efficiency",
    "C. Performance and Scalability",
    "D. Integration and Security"
  ],
  answer: "A. Complete Solutions and Complete Choice"
},
{
  id: 405,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "How does Oracle Fusion Cloud help organizations improve decision-making?",
  options: [
    "A. By offering embedded business intelligence and role-based dashboards",
    "B. By requiring manual report consolidation",
    "C. By limiting access to financial data",
    "D. By using only third-party analytics tools"
  ],
  answer: "A. By offering embedded business intelligence and role-based dashboards"
},
{
  id: 406,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "Which of the following best describes the Oracle Financials strategy?",
  options: [
    "A. A partial solution designed for regional compliance only",
    "B. A complete and integrated financial management solution supporting governance and growth",
    "C. A limited module focused on payables and receivables only",
    "D. A toolset focused on customer relationship management"
  ],
  answer: "B. A complete and integrated financial management solution supporting governance and growth"
},
{
  id: 407,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "What does the ERP Cloud enable organizations to do?",
  options: [
    "A. Increase operational silos and reduce automation",
    "B. Adapt business models quickly, reduce costs, and innovate more",
    "C. Limit scalability to small business environments",
    "D. Replace the need for Gen 2 Cloud Infrastructure"
  ],
  answer: "B. Adapt business models quickly, reduce costs, and innovate more"
},
{
  id: 408,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "What feature helps users find additional Oracle documentation and resources?",
  options: [
    "A. Oracle Help Center",
    "B. Oracle Cloud Infrastructure Console",
    "C. Oracle Developer Studio",
    "D. Oracle BI Publisher"
  ],
  answer: "A. Oracle Help Center"
},
{
  id: 409,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "What is Oracle Visual Builder primarily used for?",
  options: [
    "A. Designing financial reports",
    "B. Configuring and extending cloud applications",
    "C. Creating batch jobs for GL",
    "D. Performing database tuning"
  ],
  answer: "B. Configuring and extending cloud applications"
},
{
  id: 410,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "What is the purpose of Oracle Guided Learning?",
  options: [
    "A. To provide in-application, step-by-step training to users",
    "B. To configure integrations between Oracle and non-Oracle systems",
    "C. To design dashboards and analytics",
    "D. To perform system diagnostics and troubleshooting"
  ],
  answer: "A. To provide in-application, step-by-step training to users"
},
{
  id: 411,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "Which factors affect decisions about implementing Oracle Cloud applications?",
  options: [
    "A. Industry type, business unit autonomy, accounting policies, and facility locations",
    "B. Only the organization’s IT infrastructure",
    "C. The size of the finance department",
    "D. The number of end users in the HR system"
  ],
  answer: "A. Industry type, business unit autonomy, accounting policies, and facility locations"
},
{
  id: 412,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "How do Oracle Fusion Cloud Applications support a global enterprise?",
  options: [
    "A. By sharing common setup data across applications and ensuring compliance with local requirements",
    "B. By creating isolated data silos for each region",
    "C. By requiring separate instances per country",
    "D. By limiting configuration to a single legal entity"
  ],
  answer: "A. By sharing common setup data across applications and ensuring compliance with local requirements"
},
{
  id: 413,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "What kind of architecture is Oracle Cloud Applications built on?",
  options: [
    "A. Service-oriented architecture and standards-based platform",
    "B. Monolithic architecture with static data models",
    "C. Open-source microservices architecture only",
    "D. Legacy client-server architecture"
  ],
  answer: "A. Service-oriented architecture and standards-based platform"
},
{
  id: 414,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "What advantage does the modular design of Oracle Cloud Applications provide?",
  options: [
    "A. It allows organizations to implement functionality incrementally based on their needs",
    "B. It requires full suite deployment before go-live",
    "C. It restricts integration between modules",
    "D. It prevents customization through extensions"
  ],
  answer: "A. It allows organizations to implement functionality incrementally based on their needs"
},
{
  id: 415,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "Which areas of the world does Oracle Cloud provide strong functional support for?",
  options: [
    "A. North America, Western Europe, Asia-Pacific, and Latin America",
    "B. Only North America and Europe",
    "C. Africa and the Middle East exclusively",
    "D. North America and Eastern Europe only"
  ],
  answer: "A. North America, Western Europe, Asia-Pacific, and Latin America"
},
{
  id: 416,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "What is one key benefit of role-based dashboards in Oracle Fusion Applications?",
  options: [
    "A. They increase productivity and support better decision making",
    "B. They restrict data visibility to system administrators only",
    "C. They replace reporting tools like BI Publisher",
    "D. They eliminate the need for embedded analytics"
  ],
  answer: "A. They increase productivity and support better decision making"
},
{
  id: 417,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "What infrastructure does the Oracle ERP Cloud run on?",
  options: [
    "A. Oracle Gen 2 Cloud Infrastructure",
    "B. Third-party hybrid cloud services",
    "C. On-premise E-Business Suite servers",
    "D. Legacy Oracle Database 10g systems"
  ],
  answer: "A. Oracle Gen 2 Cloud Infrastructure"
},
{
  id: 418,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "What is the primary goal of the Oracle Financials Cloud solution?",
  options: [
    "A. To provide consistent governance and financial growth through integrated management",
    "B. To manage HR functions and payroll only",
    "C. To centralize only inventory and logistics",
    "D. To replace BI and analytics capabilities"
  ],
  answer: "A. To provide consistent governance and financial growth through integrated management"
},
{
  id: 419,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "Which Oracle tool allows developers to extend SaaS applications without coding directly in the core product?",
  options: [
    "A. Oracle Visual Builder",
    "B. Oracle Data Integrator",
    "C. Oracle SQL Developer",
    "D. Oracle Workflow Builder"
  ],
  answer: "A. Oracle Visual Builder"
},
{
  id: 420,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "How do Oracle Fusion Applications support business agility?",
  options: [
    "A. By enabling faster reaction to change and improving customer engagement",
    "B. By focusing on manual workflows",
    "C. By requiring long release cycles for updates",
    "D. By isolating customer data from other modules"
  ],
  answer: "A. By enabling faster reaction to change and improving customer engagement"
},
{
  id: 421,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "What is the main purpose of the Oracle Help Center?",
  options: [
    "A. To provide official documentation and resources for all Oracle Cloud applications",
    "B. To display user-generated community posts",
    "C. To store system logs and audit trails",
    "D. To manage customer support tickets"
  ],
  answer: "A. To provide official documentation and resources for all Oracle Cloud applications"
},
{
  id: 422,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "Which type of content can users find in the Oracle Help Center?",
  options: [
    "A. Implementation guides, user manuals, and release updates",
    "B. Internal company policies",
    "C. Developer certifications only",
    "D. Payroll and employee data"
  ],
  answer: "A. Implementation guides, user manuals, and release updates"
},
{
  id: 423,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "How often is the Oracle Help Center updated?",
  options: [
    "A. With every Oracle Cloud release cycle",
    "B. Only once per year",
    "C. Every two years",
    "D. Never, it's static content"
  ],
  answer: "A. With every Oracle Cloud release cycle"
},
{
  id: 424,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "What is the benefit of Oracle Guided Learning for users?",
  options: [
    "A. It provides step-by-step interactive tutorials directly inside the application",
    "B. It replaces the Oracle Help Center",
    "C. It is used only by developers to deploy code",
    "D. It only applies to on-premise applications"
  ],
  answer: "A. It provides step-by-step interactive tutorials directly inside the application"
},
{
  id: 425,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "What is a key advantage of Oracle Guided Learning compared to traditional documentation?",
  options: [
    "A. It allows users to learn by doing within the live application interface",
    "B. It requires users to read PDFs outside the application",
    "C. It provides video content only",
    "D. It is only available to system administrators"
  ],
  answer: "A. It allows users to learn by doing within the live application interface"
},
{
  id: 426,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "What is Oracle Visual Builder used for in Oracle Cloud?",
  options: [
    "A. To create extensions and custom user interfaces for Oracle Cloud applications",
    "B. To manage financial consolidation and close processes",
    "C. To monitor database performance",
    "D. To generate audit reports automatically"
  ],
  answer: "A. To create extensions and custom user interfaces for Oracle Cloud applications"
},
{
  id: 427,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "What type of tool is Oracle Visual Builder?",
  options: [
    "A. A low-code development platform",
    "B. A full-stack ERP system",
    "C. A database management console",
    "D. A BI reporting engine"
  ],
  answer: "A. A low-code development platform"
},
{
  id: 428,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "How does Visual Builder extend Oracle SaaS applications?",
  options: [
    "A. By allowing creation of custom pages, workflows, and UI components",
    "B. By changing the core application code",
    "C. By disabling security features",
    "D. By generating test data only"
  ],
  answer: "A. By allowing creation of custom pages, workflows, and UI components"
},
{
  id: 429,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "Which benefit does Visual Builder offer for extending Oracle Fusion Applications?",
  options: [
    "A. It allows configuration without impacting the core product’s upgrade path",
    "B. It requires modifying source code directly",
    "C. It disables cloud updates",
    "D. It is limited to reporting features"
  ],
  answer: "A. It allows configuration without impacting the core product’s upgrade path"
},
{
  id: 430,
  topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
  question: "What is the relationship between Oracle Help Center, Guided Learning, and Visual Builder?",
  options: [
    "A. Help Center provides documentation, Guided Learning offers in-app training, and Visual Builder enables extensions",
    "B. All three are used only by system administrators",
    "C. Visual Builder replaces Guided Learning",
    "D. Help Center is used to deploy Visual Builder applications"
  ],
  answer: "A. Help Center provides documentation, Guided Learning offers in-app training, and Visual Builder enables extensions"
},
{
    id: 431,
    topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
    question: "What is the main purpose of Visual Builder Studio in Oracle Cloud applications?",
    options: [
      "A. To generate financial reports and analytics",
      "B. To customize and extend Oracle Cloud applications for specific business needs",
      "C. To manage database performance and queries",
      "D. To create and manage workflow approvals"
    ],
    answer: "B. To customize and extend Oracle Cloud applications for specific business needs"
  },
{
    id: 432,
    topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
    question: "In which Oracle product family can Visual Builder Studio be used to extend functionality, according to the transcript?",
    options: [
      "A. Financials – to extend Joint Venture Management",
      "B. Procurement – to customize purchase orders",
      "C. Inventory – to manage item attributes",
      "D. Payables – to configure invoice validation"
    ],
    answer: "A. Financials – to extend Joint Venture Management"
  },
  {
    id: 433,
    topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
    question: "What can you do with Visual Builder Studio in the digital sales application example?",
    options: [
      "A. Create custom fields and layouts visible only to certain roles like managers",
      "B. Modify database schemas directly in Oracle Cloud",
      "C. Rebuild Oracle Cloud apps from scratch",
      "D. Change the security policies for users"
    ],
    answer: "A. Create custom fields and layouts visible only to certain roles like managers"
  },
  {
    id: 434,
    topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
    question: "What is an action chain in the context of Visual Builder Studio?",
    options: [
      "A. A sequence of automated backend database operations",
      "B. A chain of events triggered by a user action, such as clicking a button",
      "C. A series of scheduled batch jobs",
      "D. A tool for chaining BI reports together"
    ],
    answer: "B. A chain of events triggered by a user action, such as clicking a button"
  },
  {
    id: 435,
    topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
    question: "Which tool would you use to modify reports and analytics in Oracle Cloud?",
    options: [
      "A. Page Composer",
      "B. Business Intelligence toolkit (Analytics Publisher, OTBI, Smart View)",
      "C. Guided Learning",
      "D. Visual Builder Studio"
    ],
    answer: "B. Business Intelligence toolkit (Analytics Publisher, OTBI, Smart View)"
  },
  {
    id: 436,
    topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
    question: "What tool allows you to add or track additional information not originally available on a page?",
    options: [
      "A. Descriptive or Extensible Flexfields",
      "B. Visual Builder Studio",
      "C. Guided Learning",
      "D. Smart View"
    ],
    answer: "A. Descriptive or Extensible Flexfields"
  },
  {
    id: 437,
    topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
    question: "What is the correct combination for modifying UI, reports, and branding?",
    options: [
      "A. Page Composer for UI, Business Intelligence toolkit for reports, Appearance work area for branding",
      "B. Visual Builder Studio for UI, Smart View for branding, Application Composer for reports",
      "C. Application Composer for all three functions",
      "D. Guided Learning for UI, reports, and branding"
    ],
    answer: "A. Page Composer for UI, Business Intelligence toolkit for reports, Appearance work area for branding"
  },
  {
    id: 438,
    topic: "8 - Become a Certified Financials - Receivables and Collections Implementer",
    question: "Which tool is used to create in-app training and interactive user guides?",
    options: [
      "A. Guided Learning",
      "B. Visual Builder Studio",
      "C. Application Composer",
      "D. Page Composer"
    ],
    answer: "A. Guided Learning"
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