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
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "What is the Securities and Exchange Commission (SEC)?",
  options: [
    "A.The international body based in London that is responsible for establishing international accounting standards",
    "B.The U.S. government agency charged with interpreting and enforcing income tax rules and regulations",
    "C.The U.S. government agency charged with regulating financial markets and ensuring the availability of reliable financial information",
    "D.The national association of accounting professionals in the United States"
  ],
  answer: "The U.S. government agency charged with regulating financial markets and ensuring the availability of reliable financial information",
},
   
{
  id: 27,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "Which resource or tool is used to identify unique companies in the SEC’s 10-K filing database?",
  options: [
    "A.Central Index Key (CIK)",
    "B.Securities Exchange Act",
    "C.Code of Federal Regulations",
    "D.EDGAR"
  ],
  answer: "A.Central Index Key (CIK)",
},
{
  id: 28,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "How often is the Form 10-Q filed?",
  options: [
    "A.Monthly",
    "B.Annually",
    "C.Quarterly",
    "D.Weekly"
  ],
  answer: "C.Quarterly",
},
{
  id: 29,
  topic: "Lesson 7: How to Locate Financial Statements",
  question: "How often is the Form 10-K filed?",
  options: [
    "A.Quarterly",
    "B.Weekly",
    "C.Annually",
    "D.Monthly"
  ],
  answer: "C.Annually",
},
{
  id: 30,
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
  id: 31,
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
  id: 32,
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
  id: 33,
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
  id: 34,
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
  id: 35,
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
  id: 36,
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
  id: 37,
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
  id: 38,
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
  id: 39,
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
  id: 40,
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
  id: 41,
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
  id: 42,
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
  id: 43,
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
  id: 44,
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
  id: 45,
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
  id: 46,
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
  id: 47,
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
  id: 48,
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
  id: 49,
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
  id: 50,
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
  id: 51,
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
  id: 52,
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
  id: 53,
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
  id: 54,
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
      id: 55,
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
      id: 56,
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
      id: 57,
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
  id: 57,
  topic: "Lesson 9: The Income Statement",
  question: "What is the main difference between a balance sheet and an income statement?",
  options: [
    "A.The balance sheet covers a period of time, while the income statement is at a point in time",
    "B.The balance sheet is at a point in time, while the income statement covers a period of time",
    "C.Both statements cover only a single point in time",
    "D.Both statements cover exactly the same period of time"
  ],
  answer: "B.The balance sheet is at a point in time, while the income statement covers a period of time",
},
{
  id: 58,
  topic: "Lesson 9: The Income Statement",
  question: "What basic question does the income statement answer?",
  options: [
    "A.What does the company own right now?",
    "B.What does the company owe right now?",
    "C.How much did the company make during a period of time?",
    "D.How much cash does the company have in the bank?"
  ],
  answer: "C.How much did the company make during a period of time?",
},
{
  id: 59,
  topic: "Lesson 9: The Income Statement",
  question: "Which of the following is the basic equation of the income statement?",
  options: [
    "A.Assets = Liabilities + Owners' Equity",
    "B.Revenues - Expenses = Net Income",
    "C.Cash = Assets - Liabilities",
    "D.Revenues + Expenses = Net Income"
  ],
  answer: "B.Revenues - Expenses = Net Income",
},
{
  id: 60,
  topic: "Lesson 9: The Income Statement",
  question: "What does an income statement report?",
  options: [
    "A.A company's financial position at one specific date",
    "B.A company's operating results for a period of time",
    "C.Only the company's cash balance",
    "D.Only the company's liabilities"
  ],
  answer: "B.A company's operating results for a period of time",
},
{
  id: 61,
  topic: "Lesson 9: The Income Statement",
  question: "Which of the following can be a period covered by an income statement?",
  options: [
    "A.A month",
    "B.A quarter",
    "C.A year",
    "D.All of the above"
  ],
  answer: "D.All of the above",
},
{
  id: 62,
  topic: "Lesson 9: The Income Statement",
  question: "What is the primary purpose of an income statement?",
  options: [
    "A.To assess a company's profitability",
    "B.To determine the company's physical location",
    "C.To list all company employees",
    "D.To determine the market price of inventory"
  ],
  answer: "A.To assess a company's profitability",
},
{
  id: 63,
  topic: "Lesson 9: The Income Statement",
  question: "Why might a lender be interested in a company's income statement?",
  options: [
    "A.To determine how many employees the company has",
    "B.To assess whether the company is profitable enough to repay a loan",
    "C.To determine the company's current stock price",
    "D.To calculate the company's total assets"
  ],
  answer: "B.To assess whether the company is profitable enough to repay a loan",
},
{
  id: 64,
  topic: "Lesson 9: The Income Statement",
  question: "What is revenue?",
  options: [
    "A.The amount of assets consumed in doing business",
    "B.The amount of assets created through the sale of goods and services",
    "C.The amount of money borrowed from a bank",
    "D.The amount of liabilities paid during a period"
  ],
  answer: "B.The amount of assets created through the sale of goods and services",
},
{
  id: 65,
  topic: "Lesson 9: The Income Statement",
  question: "How do manufacturing and merchandising companies generally generate revenue?",
  options: [
    "A.By selling merchandise",
    "B.By borrowing money",
    "C.By issuing liabilities",
    "D.By paying employee salaries"
  ],
  answer: "A.By selling merchandise",
},
{
  id: 66,
  topic: "Lesson 9: The Income Statement",
  question: "How does a service company generally generate revenue?",
  options: [
    "A.By selling inventory",
    "B.By charging fees for services performed",
    "C.By borrowing money from customers",
    "D.By purchasing equipment"
  ],
  answer: "B.By charging fees for services performed",
},
{
  id: 67,
  topic: "Lesson 9: The Income Statement",
  question: "When goods are sold or services are performed, the resulting revenue may be received in the form of:",
  options: [
    "A.Only cash",
    "B.Only accounts payable",
    "C.Cash or accounts receivable",
    "D.Only long-term debt"
  ],
  answer: "C.Cash or accounts receivable",
},
{
  id: 68,
  topic: "Lesson 9: The Income Statement",
  question: "Why does revenue generally represent an increase in owners' equity?",
  options: [
    "A.Revenue creates assets that are not tied to a liability obligation",
    "B.Revenue always creates a new liability",
    "C.Revenue decreases total assets",
    "D.Revenue represents money borrowed from creditors"
  ],
  answer: "A.Revenue creates assets that are not tied to a liability obligation",
},
{
  id: 69,
  topic: "Lesson 9: The Income Statement",
  question: "What are expenses?",
  options: [
    "A.The amount of assets created through business operations",
    "B.The amount of assets consumed in doing business",
    "C.The amount of owners' investment in a company",
    "D.The amount of cash received from customers"
  ],
  answer: "B.The amount of assets consumed in doing business",
},
{
  id: 70,
  topic: "Lesson 9: The Income Statement",
  question: "Which of the following is an example of an expense?",
  options: [
    "A.Employee salaries",
    "B.Cash received from a bank loan",
    "C.Owner investment",
    "D.Accounts receivable collected from customers"
  ],
  answer: "A.Employee salaries",
},
{
  id: 71,
  topic: "Lesson 9: The Income Statement",
  question: "According to the lecture, expenses can also represent:",
  options: [
    "A.The amount of liabilities created through doing business",
    "B.The amount of assets purchased by owners",
    "C.The amount of revenue collected from customers",
    "D.The market value of a company"
  ],
  answer: "A.The amount of liabilities created through doing business",
},
{
  id: 72,
  topic: "Lesson 9: The Income Statement",
  question: "Which of the following is an example of an expense that can involve the creation of a liability?",
  options: [
    "A.A pension obligation created through employee service",
    "B.An owner's investment",
    "C.A bank loan received by the company",
    "D.Cash collected from customers"
  ],
  answer: "A.A pension obligation created through employee service",
},
{
  id: 73,
  topic: "Lesson 9: The Income Statement",
  question: "What is net income?",
  options: [
    "A.Revenues plus expenses",
    "B.The difference between revenues and expenses",
    "C.Total assets minus total liabilities",
    "D.Total cash received during a period"
  ],
  answer: "B.The difference between revenues and expenses",
},
{
  id: 74,
  topic: "Lesson 9: The Income Statement",
  question: "What happens when revenues exceed expenses?",
  options: [
    "A.The company reports a net loss",
    "B.The company reports net income",
    "C.The company reports a liability",
    "D.The company reports no change in owners' equity"
  ],
  answer: "B.The company reports net income",
},
{
  id: 75,
  topic: "Lesson 9: The Income Statement",
  question: "What happens when expenses exceed revenues?",
  options: [
    "A.The company reports net income",
    "B.The company reports a net loss",
    "C.The company reports additional revenue",
    "D.The company reports additional paid-in capital"
  ],
  answer: "B.The company reports a net loss",
},
{
  id: 76,
  topic: "Lesson 9: The Income Statement",
  question: "What is the effect of net income on owners' equity?",
  options: [
    "A.Net income decreases owners' equity",
    "B.Net income has no effect on owners' equity",
    "C.Net income increases owners' equity",
    "D.Net income converts equity into liabilities"
  ],
  answer: "C.Net income increases owners' equity",
},
{
  id: 77,
  topic: "Lesson 9: The Income Statement",
  question: "What is the effect of a net loss on owners' equity?",
  options: [
    "A.It increases owners' equity",
    "B.It decreases owners' equity",
    "C.It has no effect on owners' equity",
    "D.It converts liabilities into equity"
  ],
  answer: "B.It decreases owners' equity",
},
{
  id: 78,
  topic: "Lesson 9: The Income Statement",
  question: "Which statement correctly describes the relationship between revenue and assets?",
  options: [
    "A.Revenue is the only possible source of assets",
    "B.Revenue-generating activities result in assets, but assets can also result from other activities",
    "C.Assets can never result from borrowing",
    "D.Revenue and assets are exactly the same concept"
  ],
  answer: "B.Revenue-generating activities result in assets, but assets can also result from other activities",
},
{
  id: 79,
  topic: "Lesson 9: The Income Statement",
  question: "Why is borrowing money from a bank not considered revenue?",
  options: [
    "A.Because borrowing creates an increase in a liability",
    "B.Because borrowing decreases assets",
    "C.Because borrowing creates an expense",
    "D.Because borrowing decreases owners' equity"
  ],
  answer: "A.Because borrowing creates an increase in a liability",
},
{
  id: 80,
  topic: "Lesson 9: The Income Statement",
  question: "A company receives cash from a bank loan. How should this transaction be classified?",
  options: [
    "A.As revenue",
    "B.As an expense",
    "C.As an increase in a liability and an asset",
    "D.As a decrease in owners' equity"
  ],
  answer: "C.As an increase in a liability and an asset",
},
{
  id: 81,
  topic: "Lesson 9: The Income Statement",
  question: "A company pays cash to purchase supplies. According to the lesson, why is this not necessarily an expense?",
  options: [
    "A.It is an exchange of one asset for another asset",
    "B.It always creates revenue",
    "C.It creates a liability",
    "D.It increases owners' equity"
  ],
  answer: "A.It is an exchange of one asset for another asset",
},
{
  id: 82,
  topic: "Lesson 9: The Income Statement",
  question: "Which statement best describes the difference between revenue and net income?",
  options: [
    "A.Revenue is a net concept, while net income is a gross concept",
    "B.Revenue represents total resource increases, while net income is revenue minus expenses",
    "C.Revenue and net income always have the same amount",
    "D.Net income is calculated before considering revenue"
  ],
  answer: "B.Revenue represents total resource increases, while net income is revenue minus expenses",
},
{
  id: 83,
  topic: "Lesson 9: The Income Statement",
  question: "In the income statement, revenues are generally listed:",
  options: [
    "A.After net income",
    "B.Before expenses",
    "C.After liabilities",
    "D.Only after taxes"
  ],
  answer: "B.Before expenses",
},
{
  id: 84,
  topic: "Lesson 9: The Income Statement",
  question: "Which of the following is a typical operating expense?",
  options: [
    "A.Employee salaries",
    "B.Owner investment",
    "C.Bank borrowing",
    "D.Common stock issuance"
  ],
  answer: "A.Employee salaries",
},
{
  id: 85,
  topic: "Lesson 9: The Income Statement",
  question: "For a retail company such as Walmart, what is typically the largest expense?",
  options: [
    "A.Income taxes",
    "B.Interest expense",
    "C.Cost of goods sold",
    "D.Advertising expense"
  ],
  answer: "C.Cost of goods sold",
},
{
  id: 86,
  topic: "Lesson 9: The Income Statement",
  question: "What is gross profit (gross margin)?",
  options: [
    "A.Sales minus cost of goods sold",
    "B.Sales minus income taxes",
    "C.Net income minus interest expense",
    "D.Assets minus liabilities"
  ],
  answer: "A.Sales minus cost of goods sold",
},
{
  id: 87,
  topic: "Lesson 9: The Income Statement",
  question: "Why is the gross margin percentage important to businesses?",
  options: [
    "A.It measures the company's total liabilities",
    "B.It is one of the important numbers businesses track and is often associated with higher stock price multiples",
    "C.It measures the number of employees",
    "D.It determines the company's cash balance"
  ],
  answer: "B.It is one of the important numbers businesses track and is often associated with higher stock price multiples",
},
{
  id: 88,
  topic: "Lesson 9: The Income Statement",
  question: "How is operating income calculated?",
  options: [
    "A.Sales minus cost of goods sold minus operating expenses",
    "B.Sales plus operating expenses",
    "C.Net income plus taxes",
    "D.Assets minus liabilities"
  ],
  answer: "A.Sales minus cost of goods sold minus operating expenses",
},
{
  id: 89,
  topic: "Lesson 9: The Income Statement",
  question: "What does operating income primarily report?",
  options: [
    "A.The results of a company's daily operations",
    "B.Only the company's financing activities",
    "C.Only the company's tax obligations",
    "D.The market value of the company"
  ],
  answer: "A.The results of a company's daily operations",
},
{
  id: 90,
  topic: "Lesson 9: The Income Statement",
  question: "What is the difference between operating income and net income?",
  options: [
    "A.Operating income includes all taxes and interest, while net income does not",
    "B.Net income includes operating results plus other important items such as interest and taxes",
    "C.Operating income is always greater than revenue",
    "D.Net income only includes daily operating activities"
  ],
  answer: "B.Net income includes operating results plus other important items such as interest and taxes",
},
{
  id: 91,
  topic: "Lesson 9: The Income Statement",
  question: "Which of the following are primary non-operating expenses mentioned in the lesson?",
  options: [
    "A.Employee salaries and advertising",
    "B.Interest and income taxes",
    "C.Inventory and equipment",
    "D.Cost of goods sold and inventory"
  ],
  answer: "B.Interest and income taxes",
},
{
  id: 92,
  topic: "Lesson 9: The Income Statement",
  question: "Why are interest and income taxes classified as non-operating expenses?",
  options: [
    "A.They are unrelated to the specific nature of the company's daily operations",
    "B.They are never paid in cash",
    "C.They always increase revenue",
    "D.They are classified as assets"
  ],
  answer: "A.They are unrelated to the specific nature of the company's daily operations",
},
{
  id: 93,
  topic: "Lesson 9: The Income Statement",
  question: "What is a gain?",
  options: [
    "A.Money made from a company's normal sale of products",
    "B.Money made from activities outside the normal business of a company",
    "C.A decrease in owners' equity",
    "D.An operating expense"
  ],
  answer: "B.Money made from activities outside the normal business of a company",
},
{
  id: 94,
  topic: "Lesson 9: The Income Statement",
  question: "Walmart sells an old delivery truck for more than its carrying amount. According to the lesson, the resulting amount is generally called:",
  options: [
    "A.Revenue",
    "B.A gain",
    "C.An operating expense",
    "D.Cost of goods sold"
  ],
  answer: "B.A gain",
},
{
  id: 95,
  topic: "Lesson 9: The Income Statement",
  question: "Why would the sale of an old Walmart delivery truck not normally be classified as revenue?",
  options: [
    "A.Walmart is not normally in the business of selling delivery trucks",
    "B.Walmart cannot receive cash from selling assets",
    "C.Trucks are always liabilities",
    "D.The sale of a truck always creates an expense"
  ],
  answer: "A.Walmart is not normally in the business of selling delivery trucks",
},
{
  id: 96,
  topic: "Lesson 9: The Income Statement",
  question: "What does EPS stand for?",
  options: [
    "A.Equity Per Sale",
    "B.Earnings Per Share",
    "C.Expenses Per Share",
    "D.Earnings Per Statement"
  ],
  answer: "B.Earnings Per Share",
},
{
  id: 97,
  topic: "Lesson 9: The Income Statement",
  question: "How is basic Earnings Per Share (EPS) calculated?",
  options: [
    "A.Revenue divided by total assets",
    "B.Net income divided by the average number of shares outstanding during the period",
    "C.Total assets divided by liabilities",
    "D.Operating income divided by expenses"
  ],
  answer: "B.Net income divided by the average number of shares outstanding during the period",
},
{
  id: 98,
  topic: "Lesson 9: The Income Statement",
  question: "What does EPS tell the owner of a single share of stock?",
  options: [
    "A.How much of the company's total assets belong to the shareholder",
    "B.How much of the net income for the year belongs to that share",
    "C.How much debt the company has",
    "D.How much cash the company has available"
  ],
  answer: "B.How much of the net income for the year belongs to that share",
},
{
  id: 99,
  topic: "Lesson 9: The Income Statement",
  question: "What is diluted EPS designed to estimate?",
  options: [
    "A.What EPS would be if certain stock transactions had occurred",
    "B.What revenue would be without expenses",
    "C.What assets would be without liabilities",
    "D.What operating income would be without sales"
  ],
  answer: "A.What EPS would be if certain stock transactions had occurred",
},
{
  id: 100,
  topic: "Lesson 9: The Income Statement",
  question: "Why does an income statement often present comparative results for two or more periods?",
  options: [
    "A.To allow investors and creditors to evaluate profitability over time",
    "B.To eliminate the need for a balance sheet",
    "C.To show only the company's current cash balance",
    "D.To calculate the company's market value"
  ],
  answer: "A.To allow investors and creditors to evaluate profitability over time",
},
{
  id: 101,
  topic: "Lesson 9: The Income Statement",
  question: "Which statement correctly compares the income statement and balance sheet?",
  options: [
    "A.The income statement is 'as of' a particular date, while the balance sheet is 'for the year ended'",
    "B.The income statement covers a period of time, while the balance sheet reports a position at a particular date",
    "C.Both statements report only information at a particular date",
    "D.Both statements report only information for a period of time"
  ],
  answer: "B.The income statement covers a period of time, while the balance sheet reports a position at a particular date",
},
{
  id: 102,
  topic: "Lesson 9: The Income Statement",
  question: "Which of the following best summarizes the relationship among revenues, expenses, and net income?",
  options: [
    "A.Revenues are subtracted from expenses to calculate net income",
    "B.Expenses are added to revenues to calculate net income",
    "C.Expenses are subtracted from revenues to calculate net income",
    "D.Net income is unrelated to revenues and expenses"
  ],
  answer: "C.Expenses are subtracted from revenues to calculate net income",
},
{
  id: 103,
  topic: "Lesson 9: The Income Statement",
  question: "Which statement best describes expenses and their effect on a company?",
  options: [
    "A.Expenses generally increase assets and owners' equity",
    "B.Expenses generally decrease assets and owners' equity",
    "C.Expenses always increase liabilities without affecting equity",
    "D.Expenses are always equal to revenue"
  ],
  answer: "B.Expenses generally decrease assets and owners' equity",
},
{
  id: 104,
  topic: "Lesson 9: The Income Statement",
  question: "Which statement best describes revenue and expenses as concepts?",
  options: [
    "A.Revenue is a gross concept, while net income is a net concept after expenses",
    "B.Revenue and net income are always identical",
    "C.Expenses are a gross concept, while revenue is a net concept",
    "D.Revenue is always equal to assets"
  ],
  answer: "A.Revenue is a gross concept, while net income is a net concept after expenses",
},
{
  id: 105,
  topic: "Lesson 9: The Income Statement",
  question: "What is net income?",
  options: [
    "A.The total amount of assets reported in the balance sheet",
    "B.The amount of cash on hand at the end of the year",
    "C.The amount of assets consumed through business operations",
    "D.The amount by which revenues exceed expenses"
  ],
  answer: "D.The amount by which revenues exceed expenses",
},
{
  id: 106,
  topic: "Lesson 9: The Income Statement",
  question: "What is a gain?",
  options: [
    "A.Making money from an excess of total revenues over total expenses",
    "B.Making money from an activity outside the normal activities of a business",
    "C.Making money from an excess of sales over cost of goods sold",
    "D.Making money from an activity that is part of the normal activities of a business"
  ],
  answer: "B.Making money from an activity outside the normal activities of a business",
},
{
  id: 107,
  topic: "Lesson 9: The Income Statement",
  question: "What is an income statement?",
  options: [
    "A.A report of the assets, liabilities, and equity of a company as of a point in time",
    "B.A report of the total of the balances of all of a company’s bank accounts",
    "C.A report of the revenues and expenses of a company during a period",
    "D.A report of the operating, investing, and financing cash flows of a company during a period"
  ],
  answer: "C.A report of the revenues and expenses of a company during a period",
},


{
  id: 108,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "What is the primary purpose of the statement of retained earnings?",
  options: [
    "A.To report a company's cash flows during a period",
    "B.To show the earnings that have been retained in the business",
    "C.To report a company's total assets",
    "D.To calculate the company's market value"
  ],
  answer: "B.To show the earnings that have been retained in the business",
},
{
  id: 109,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "What are earnings that are not retained in the business called?",
  options: [
    "A.Assets",
    "B.Liabilities",
    "C.Dividends",
    "D.Revenues"
  ],
  answer: "C.Dividends",
},
{
  id: 110,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "What are dividends?",
  options: [
    "A.Payments made to owners as a return on their investment",
    "B.Payments made to suppliers",
    "C.Expenses paid to employees",
    "D.Loans received from banks"
  ],
  answer: "A.Payments made to owners as a return on their investment",
},
{
  id: 111,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "What does the difference between earnings and dividends for a period represent?",
  options: [
    "A.The total amount of assets",
    "B.The increase or decrease in retained earnings for the period",
    "C.The total amount of liabilities",
    "D.The company's gross profit"
  ],
  answer: "B.The increase or decrease in retained earnings for the period",
},
{
  id: 112,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "Is the statement of retained earnings one of the three primary financial statements?",
  options: [
    "A.Yes, it is the first primary financial statement",
    "B.Yes, it replaces the balance sheet",
    "C.No, it is not one of the three primary financial statements",
    "D.No, because it is part of the income statement"
  ],
  answer: "C.No, it is not one of the three primary financial statements",
},
{
  id: 113,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "Which two financial statements does the statement of retained earnings link together?",
  options: [
    "A.The balance sheet and statement of cash flows",
    "B.The income statement and balance sheet",
    "C.The income statement and statement of cash flows",
    "D.The balance sheet and tax return"
  ],
  answer: "B.The income statement and balance sheet",
},
{
  id: 114,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "What does the statement of retained earnings identify?",
  options: [
    "A.Only the company's cash balance",
    "B.Changes in accumulated investments by owners and earnings or profits since day one",
    "C.Only the company's liabilities",
    "D.Changes in inventory during the period"
  ],
  answer: "B.Changes in accumulated investments by owners and earnings or profits since day one",
},
{
  id: 115,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "What does the statement of retained earnings display from one accounting period to the next?",
  options: [
    "A.Changes in retained earnings",
    "B.Changes in total assets only",
    "C.Changes in cash only",
    "D.Changes in accounts payable only"
  ],
  answer: "A.Changes in retained earnings",
},
{
  id: 116,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "Which of the following is typically included in a statement of retained earnings?",
  options: [
    "A.Beginning retained earnings",
    "B.Net income for the period",
    "C.Dividends paid",
    "D.All of the above"
  ],
  answer: "D.All of the above",
},
{
  id: 117,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "How is ending retained earnings calculated?",
  options: [
    "A.Beginning retained earnings + net income - dividends",
    "B.Beginning retained earnings - net income + dividends",
    "C.Net income + dividends - liabilities",
    "D.Assets - liabilities - net income"
  ],
  answer: "A.Beginning retained earnings + net income - dividends",
},
{
  id: 118,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "What happens to retained earnings when a company earns net income?",
  options: [
    "A.Retained earnings decrease",
    "B.Retained earnings increase",
    "C.Retained earnings remain unchanged",
    "D.Retained earnings become a liability"
  ],
  answer: "B.Retained earnings increase",
},
{
  id: 119,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "What happens to retained earnings when dividends are paid?",
  options: [
    "A.Retained earnings increase",
    "B.Retained earnings decrease",
    "C.Retained earnings become revenue",
    "D.Retained earnings become an asset"
  ],
  answer: "B.Retained earnings decrease",
},
{
  id: 120,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "How does net income affect the accounting equation?",
  options: [
    "A.It decreases net assets and owners' equity",
    "B.It increases net assets and retained earnings",
    "C.It increases liabilities and decreases assets",
    "D.It has no effect on the accounting equation"
  ],
  answer: "B.It increases net assets and retained earnings",
},
{
  id: 121,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "Why does an increase in retained earnings increase owners' equity?",
  options: [
    "A.Retained earnings are part of owners' equity",
    "B.Retained earnings are classified as liabilities",
    "C.Retained earnings are classified as expenses",
    "D.Retained earnings are part of revenue"
  ],
  answer: "A.Retained earnings are part of owners' equity",
},
{
  id: 122,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "What happens to earnings that are retained in the business?",
  options: [
    "A.They are always paid to owners as dividends",
    "B.They are reinvested back into the business",
    "C.They are always kept as cash",
    "D.They become accounts payable"
  ],
  answer: "B.They are reinvested back into the business",
},
{
  id: 123,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "Which of the following is an example of how retained earnings may be reinvested in a business?",
  options: [
    "A.Purchasing inventory",
    "B.Purchasing equipment",
    "C.Paying down debt",
    "D.All of the above"
  ],
  answer: "D.All of the above",
},
{
  id: 124,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "Where would you look to determine what assets may have been acquired using retained earnings?",
  options: [
    "A.The income statement",
    "B.The balance sheet",
    "C.Only the statement of cash flows",
    "D.The company's stock price"
  ],
  answer: "B.The balance sheet",
},
{
  id: 125,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "Which statement about retained earnings is correct?",
  options: [
    "A.Retained earnings are the same thing as cash",
    "B.Retained earnings represent earnings that have been kept in the business",
    "C.Retained earnings represent only inventory",
    "D.Retained earnings represent amounts owed to creditors"
  ],
  answer: "B.Retained earnings represent earnings that have been kept in the business",
},
{
  id: 126,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "Are retained earnings the same as cash?",
  options: [
    "A.Yes, retained earnings always represent cash",
    "B.Yes, because all profits are kept in cash",
    "C.No, retained earnings are not the same as cash",
    "D.No, because retained earnings are liabilities"
  ],
  answer: "C.No, retained earnings are not the same as cash",
},
{
  id: 127,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "If a company has retained earnings, what can you conclude about its cash balance?",
  options: [
    "A.The company must have the same amount of cash as retained earnings",
    "B.The company must have no cash",
    "C.Nothing specific can be concluded about the company's cash balance from retained earnings alone",
    "D.The company must have more cash than retained earnings"
  ],
  answer: "C.Nothing specific can be concluded about the company's cash balance from retained earnings alone",
},
{
  id: 128,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "Where should you look to determine how much cash a company has?",
  options: [
    "A.The retained earnings account",
    "B.The cash account on the balance sheet",
    "C.The dividends account",
    "D.The paid-in capital account"
  ],
  answer: "B.The cash account on the balance sheet",
},
{
  id: 129,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "Why might retained earnings not remain in the form of cash?",
  options: [
    "A.The cash may have been used to purchase other assets or pay off liabilities",
    "B.Retained earnings are always converted into dividends",
    "C.Retained earnings are always transferred to creditors",
    "D.Cash cannot be used by a business"
  ],
  answer: "A.The cash may have been used to purchase other assets or pay off liabilities",
},
{
  id: 130,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "What is the relationship between dividends and retained earnings?",
  options: [
    "A.Dividing earnings between dividends and retained earnings determines the change in retained earnings",
    "B.Dividends increase retained earnings",
    "C.Retained earnings are always equal to dividends",
    "D.Dividends are classified as assets"
  ],
  answer: "A.Dividing earnings between dividends and retained earnings determines the change in retained earnings",
},
{
  id: 131,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "What would happen to retained earnings if net income increases while dividends remain unchanged?",
  options: [
    "A.Retained earnings would increase",
    "B.Retained earnings would decrease",
    "C.Retained earnings would become zero",
    "D.Retained earnings would become a liability"
  ],
  answer: "A.Retained earnings would increase",
},
{
  id: 132,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "What would happen to retained earnings if dividends increase while net income remains unchanged?",
  options: [
    "A.Retained earnings would increase",
    "B.Retained earnings would decrease",
    "C.Retained earnings would remain unchanged",
    "D.Retained earnings would become revenue"
  ],
  answer: "B.Retained earnings would decrease",
},
{
  id: 133,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "A company begins the year with $100,000 in retained earnings, earns $30,000 in net income, and pays $10,000 in dividends. What is the ending retained earnings balance?",
  options: [
    "A.$80,000",
    "B.$100,000",
    "C.$120,000",
    "D.$140,000"
  ],
  answer: "C.$120,000",
},
{
  id: 134,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "A company begins the year with $50,000 in retained earnings and has a net loss of $10,000. If it pays no dividends, what is its ending retained earnings?",
  options: [
    "A.$40,000",
    "B.$50,000",
    "C.$60,000",
    "D.$10,000"
  ],
  answer: "A.$40,000",
},
{
  id: 135,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "Which statement best explains why the statement of retained earnings is important?",
  options: [
    "A.It shows how the financial statements are connected",
    "B.It replaces the income statement",
    "C.It reports only cash transactions",
    "D.It determines the market price of the company's stock"
  ],
  answer: "A.It shows how the financial statements are connected",
},
{
  id: 136,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "Which financial statement may corporations prepare instead of a statement of retained earnings?",
  options: [
    "A.Statement of Cash Flows",
    "B.Statement of Stockholders' Equity",
    "C.Statement of Financial Position",
    "D.Statement of Operating Activities"
  ],
  answer: "B.Statement of Stockholders' Equity",
},
{
  id: 137,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "How is the statement of stockholders' equity different from the statement of retained earnings?",
  options: [
    "A.It is more detailed and includes changes in capital stock as well as retained earnings",
    "B.It reports only cash transactions",
    "C.It reports only liabilities",
    "D.It excludes retained earnings"
  ],
  answer: "A.It is more detailed and includes changes in capital stock as well as retained earnings",
},
{
  id: 138,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "Which of the following best describes retained earnings?",
  options: [
    "A.Total earnings that have been retained in the company",
    "B.Total cash owned by the company",
    "C.Total liabilities owed by the company",
    "D.Total revenue earned during the current year"
  ],
  answer: "A.Total earnings that have been retained in the company",
},
{
  id: 139,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "How do retained earnings accumulate over time?",
  options: [
    "A.They accumulate from beginning retained earnings plus net income minus dividends each period",
    "B.They are reset to zero at the end of every year",
    "C.They accumulate only through owner investments",
    "D.They increase only when the company borrows money"
  ],
  answer: "A.They accumulate from beginning retained earnings plus net income minus dividends each period",
},
{
  id: 140,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "Which statement correctly describes dividends in relation to retained earnings?",
  options: [
    "A.Dividends are earnings distributed to owners rather than retained in the business",
    "B.Dividends are always reinvested in the company",
    "C.Dividends increase retained earnings",
    "D.Dividends are classified as company assets"
  ],
  answer: "A.Dividends are earnings distributed to owners rather than retained in the business",
},
{
  id: 141,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "If a company retains all of its earnings and pays no dividends, what happens to retained earnings?",
  options: [
    "A.Retained earnings increase by the amount of earnings",
    "B.Retained earnings decrease by the amount of earnings",
    "C.Retained earnings remain unchanged",
    "D.Retained earnings become a liability"
  ],
  answer: "A.Retained earnings increase by the amount of earnings",
},
{
  id: 142,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "If a company has a net loss during a period and pays no dividends, what is the general effect on retained earnings?",
  options: [
    "A.Retained earnings increase",
    "B.Retained earnings decrease",
    "C.Retained earnings become cash",
    "D.Retained earnings are unaffected"
  ],
  answer: "B.Retained earnings decrease",
},
{
  id: 143,
  topic: "Lesson 10: The Statement of Retained Earnings",
  question: "Which equation represents the basic calculation of retained earnings presented in the lesson?",
  options: [
    "A.Beginning retained earnings + net income - dividends = ending retained earnings",
    "B.Beginning retained earnings + dividends - net income = ending retained earnings",
    "C.Net income + liabilities - assets = ending retained earnings",
    "D.Assets + dividends - liabilities = ending retained earnings"
  ],
  answer: "A.Beginning retained earnings + net income - dividends = ending retained earnings",
},

{
  id: 144,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "What is the primary purpose of the statement of cash flows?",
  options: [
    "A.To report a company's revenues and expenses",
    "B.To report a company's assets, liabilities, and owners' equity",
    "C.To report the cash inflows and outflows of a company during a period",
    "D.To calculate a company's market value"
  ],
  answer: "C.To report the cash inflows and outflows of a company during a period",
},
{
  id: 145,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Why do investors and creditors want to know how much cash a company's operations generate?",
  options: [
    "A.Because bills must ultimately be paid with cash",
    "B.Because cash is the same as net income",
    "C.Because cash is always more important than assets",
    "D.Because cash determines the company's stock price"
  ],
  answer: "A.Because bills must ultimately be paid with cash",
},
{
  id: 146,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is a common cash inflow for a business?",
  options: [
    "A.Paying employee wages",
    "B.Purchasing inventory",
    "C.Receiving cash from customers",
    "D.Paying dividends"
  ],
  answer: "C.Receiving cash from customers",
},
{
  id: 147,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is a common source of cash inflow for a company?",
  options: [
    "A.Borrowing money from a bank",
    "B.Paying suppliers",
    "C.Paying interest",
    "D.Purchasing equipment"
  ],
  answer: "A.Borrowing money from a bank",
},
{
  id: 148,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which activity can generate cash when a company sells an old machine or building?",
  options: [
    "A.Operating activity",
    "B.Investing activity",
    "C.Financing activity",
    "D.Dividend activity"
  ],
  answer: "B.Investing activity",
},
{
  id: 149,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is a common cash outflow?",
  options: [
    "A.Receiving an owner's investment",
    "B.Collecting cash from customers",
    "C.Paying wages to employees",
    "D.Borrowing money from a bank"
  ],
  answer: "C.Paying wages to employees",
},
{
  id: 150,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "How many main categories are used to organize cash flows on the statement of cash flows?",
  options: [
    "A.Two",
    "B.Three",
    "C.Four",
    "D.Five"
  ],
  answer: "B.Three",
},
{
  id: 151,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "What are the three categories of cash flows?",
  options: [
    "A.Revenue, expenses, and income",
    "B.Assets, liabilities, and equity",
    "C.Operating, investing, and financing",
    "D.Current, long-term, and equity"
  ],
  answer: "C.Operating, investing, and financing",
},
{
  id: 152,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "What do operating activities generally represent?",
  options: [
    "A.Activities related to the day-to-day business of a company",
    "B.Activities involving only long-term debt",
    "C.Activities involving only the purchase of buildings",
    "D.Activities involving only owners' investments"
  ],
  answer: "A.Activities related to the day-to-day business of a company",
},
{
  id: 153,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is an operating cash inflow?",
  options: [
    "A.Selling goods to customers",
    "B.Borrowing money from a bank",
    "C.Selling a building",
    "D.Receiving cash from owners' investments"
  ],
  answer: "A.Selling goods to customers",
},
{
  id: 154,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is an operating cash outflow?",
  options: [
    "A.Purchasing land",
    "B.Paying employee wages",
    "C.Receiving a bank loan",
    "D.Issuing stock to owners"
  ],
  answer: "B.Paying employee wages",
},
{
  id: 155,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is generally classified as an operating activity?",
  options: [
    "A.Purchasing inventory",
    "B.Purchasing a building",
    "C.Repaying a loan principal",
    "D.Receiving an owner's investment"
  ],
  answer: "A.Purchasing inventory",
},
{
  id: 156,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is generally an operating cash outflow?",
  options: [
    "A.Paying utilities",
    "B.Buying land",
    "C.Borrowing from a bank",
    "D.Issuing stock"
  ],
  answer: "A.Paying utilities",
},
{
  id: 157,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "What do investing activities generally involve?",
  options: [
    "A.Buying and selling long-term assets",
    "B.Paying employee salaries",
    "C.Collecting cash from customers",
    "D.Paying dividends to owners"
  ],
  answer: "A.Buying and selling long-term assets",
},
{
  id: 158,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is an investing activity?",
  options: [
    "A.Paying wages",
    "B.Buying a building",
    "C.Selling goods",
    "D.Paying taxes"
  ],
  answer: "B.Buying a building",
},
{
  id: 159,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is an example of an investing cash outflow?",
  options: [
    "A.Purchasing equipment",
    "B.Paying employees",
    "C.Paying interest",
    "D.Paying dividends"
  ],
  answer: "A.Purchasing equipment",
},
{
  id: 160,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which activity would include the sale of land?",
  options: [
    "A.Operating",
    "B.Investing",
    "C.Financing",
    "D.Revenue"
  ],
  answer: "B.Investing",
},
{
  id: 161,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "What do financing activities generally involve?",
  options: [
    "A.Cash obtained from or repaid to owners and creditors",
    "B.Only the purchase of inventory",
    "C.Only the sale of goods",
    "D.Only the purchase of equipment"
  ],
  answer: "A.Cash obtained from or repaid to owners and creditors",
},
{
  id: 162,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is a financing activity?",
  options: [
    "A.Receiving cash from an owner's investment",
    "B.Selling merchandise to customers",
    "C.Purchasing inventory",
    "D.Purchasing equipment"
  ],
  answer: "A.Receiving cash from an owner's investment",
},
{
  id: 163,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is a financing cash inflow?",
  options: [
    "A.Cash received from a loan",
    "B.Cash received from customers",
    "C.Cash received from selling inventory",
    "D.Cash received from selling equipment"
  ],
  answer: "A.Cash received from a loan",
},
{
  id: 164,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is a financing cash outflow?",
  options: [
    "A.Paying suppliers",
    "B.Repaying a loan",
    "C.Purchasing inventory",
    "D.Purchasing land"
  ],
  answer: "B.Repaying a loan",
},
{
  id: 165,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is classified as a financing activity according to the lesson?",
  options: [
    "A.Paying dividends to owners",
    "B.Paying wages to employees",
    "C.Buying inventory",
    "D.Selling goods"
  ],
  answer: "A.Paying dividends to owners",
},
{
  id: 166,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "A company receives cash from investors who invest in the company. How should this cash flow be classified?",
  options: [
    "A.Operating activity",
    "B.Investing activity",
    "C.Financing activity",
    "D.Non-cash activity"
  ],
  answer: "C.Financing activity",
},
{
  id: 167,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "A company sells products to customers and receives cash. How should this cash flow be classified?",
  options: [
    "A.Operating activity",
    "B.Investing activity",
    "C.Financing activity",
    "D.Long-term activity"
  ],
  answer: "A.Operating activity",
},
{
  id: 168,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "A company purchases a new building for cash. How should this cash flow be classified?",
  options: [
    "A.Operating activity",
    "B.Investing activity",
    "C.Financing activity",
    "D.Revenue activity"
  ],
  answer: "B.Investing activity",
},
{
  id: 169,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "A company repays the principal on a bank loan. How should this cash flow be classified?",
  options: [
    "A.Operating activity",
    "B.Investing activity",
    "C.Financing activity",
    "D.Operating expense"
  ],
  answer: "C.Financing activity",
},
{
  id: 170,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Why would simply listing all cash inflows and outflows be less useful?",
  options: [
    "A.Because cash flows cannot be measured",
    "B.Because the cash flows need to be organized into meaningful categories",
    "C.Because companies do not have cash inflows",
    "D.Because only financing activities matter"
  ],
  answer: "B.Because the cash flows need to be organized into meaningful categories",
},
{
  id: 171,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "What do the three sections of the statement of cash flows collectively explain?",
  options: [
    "A.The change in cash during the period",
    "B.The change in inventory only",
    "C.The change in retained earnings only",
    "D.The company's market value"
  ],
  answer: "A.The change in cash during the period",
},
{
  id: 172,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "The statement of cash flows, like the income statement, covers what type of time frame?",
  options: [
    "A.A single point in time",
    "B.A period of time",
    "C.Only the beginning of a fiscal year",
    "D.Only the end of a fiscal year"
  ],
  answer: "B.A period of time",
},
{
  id: 173,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "According to the Walmart example, how much cash did Walmart generate from operations during the year ended January 31, 2019?",
  options: [
    "A.$7.4 billion",
    "B.$16 billion",
    "C.$24 billion",
    "D.$27.8 billion"
  ],
  answer: "D.$27.8 billion",
},
{
  id: 174,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "In the Walmart example, what was one major use of cash in investing activities?",
  options: [
    "A.Paying employee wages",
    "B.Purchasing property, plant, and equipment",
    "C.Paying dividends",
    "D.Repaying long-term debt"
  ],
  answer: "B.Purchasing property, plant, and equipment",
},
{
  id: 175,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "What other investing activity did Walmart undertake in the example?",
  options: [
    "A.Buying other businesses",
    "B.Paying employee salaries",
    "C.Collecting customer receivables",
    "D.Issuing dividends"
  ],
  answer: "A.Buying other businesses",
},
{
  id: 176,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "According to the Walmart example, approximately how much did Walmart spend on investing activities?",
  options: [
    "A.$3 billion",
    "B.$7.4 billion",
    "C.$24 billion",
    "D.$28 billion"
  ],
  answer: "C.$24 billion",
},
{
  id: 177,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following was included in Walmart's financing activities in the example?",
  options: [
    "A.Buying other businesses",
    "B.Purchasing property, plant, and equipment",
    "C.Borrowing and repaying long-term debt",
    "D.Selling merchandise"
  ],
  answer: "C.Borrowing and repaying long-term debt",
},
{
  id: 178,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "In the Walmart example, how much stock did Walmart spend to buy back approximately?",
  options: [
    "A.$3 billion",
    "B.$7.4 billion",
    "C.$16 billion",
    "D.$24 billion"
  ],
  answer: "B.$7.4 billion",
},
{
  id: 179,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "What was the net effect on Walmart's cash during the period discussed in the lesson?",
  options: [
    "A.Cash decreased by $742 million",
    "B.Cash increased by $742 million",
    "C.Cash increased by $7.4 billion",
    "D.Cash remained unchanged"
  ],
  answer: "B.Cash increased by $742 million",
},
{
  id: 180,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "What is meant by the articulation of financial statements?",
  options: [
    "A.The financial statements are unrelated to one another",
    "B.The financial statements are connected and explain changes between periods",
    "C.The financial statements are prepared only once",
    "D.The financial statements contain identical information"
  ],
  answer: "B.The financial statements are connected and explain changes between periods",
},
{
  id: 181,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which financial statement explains the change in the cash balance from one period to another?",
  options: [
    "A.Income statement",
    "B.Statement of retained earnings",
    "C.Statement of cash flows",
    "D.Statement of stockholders' equity"
  ],
  answer: "C.Statement of cash flows",
},
{
  id: 182,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which financial statement helps explain the change in retained earnings?",
  options: [
    "A.Statement of cash flows",
    "B.Income statement through the statement of retained earnings",
    "C.Only the balance sheet",
    "D.Only the statement of stockholders' equity"
  ],
  answer: "B.Income statement through the statement of retained earnings",
},
{
  id: 183,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "How does the income statement connect to the statement of retained earnings?",
  options: [
    "A.Net income from the income statement is a key component in explaining the change in retained earnings",
    "B.The income statement replaces the statement of retained earnings",
    "C.The income statement reports only cash",
    "D.The income statement determines the company's cash balance"
  ],
  answer: "A.Net income from the income statement is a key component in explaining the change in retained earnings",
},
{
  id: 184,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "How does the statement of cash flows connect to the balance sheet?",
  options: [
    "A.It explains the change in the cash balance",
    "B.It explains the change in inventory only",
    "C.It explains the change in retained earnings only",
    "D.It explains the change in owners' investments only"
  ],
  answer: "A.It explains the change in the cash balance",
},
{
  id: 185,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "If cash on the balance sheet changes from $277 million at the beginning of the year to $382 million at the end of the year, which statement explains this change?",
  options: [
    "A.Income statement",
    "B.Statement of retained earnings",
    "C.Statement of cash flows",
    "D.Statement of stockholders' equity"
  ],
  answer: "C.Statement of cash flows",
},
{
  id: 186,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which statement correctly describes operating activities?",
  options: [
    "A.They involve the company's day-to-day business activities",
    "B.They involve only long-term asset purchases",
    "C.They involve only loans and owners' investments",
    "D.They involve only dividends"
  ],
  answer: "A.They involve the company's day-to-day business activities",
},
{
  id: 187,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which statement correctly describes investing activities?",
  options: [
    "A.They involve buying and selling long-term assets",
    "B.They involve paying employees",
    "C.They involve collecting cash from customers",
    "D.They involve borrowing money"
  ],
  answer: "A.They involve buying and selling long-term assets",
},
{
  id: 188,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which statement correctly describes financing activities?",
  options: [
    "A.They involve acquiring or repaying capital from owners and creditors",
    "B.They involve selling products to customers",
    "C.They involve purchasing inventory",
    "D.They involve paying utilities"
  ],
  answer: "A.They involve acquiring or repaying capital from owners and creditors",
},
{
  id: 189,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following would NOT normally be classified as an operating activity?",
  options: [
    "A.Collecting cash from customers",
    "B.Paying employees",
    "C.Purchasing inventory",
    "D.Purchasing a building"
  ],
  answer: "D.Purchasing a building",
},
{
  id: 190,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following would NOT normally be classified as an investing activity?",
  options: [
    "A.Purchasing land",
    "B.Selling equipment",
    "C.Purchasing a building",
    "D.Paying employee wages"
  ],
  answer: "D.Paying employee wages",
},
{
  id: 191,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following would NOT normally be classified as a financing activity?",
  options: [
    "A.Receiving cash from owners",
    "B.Receiving proceeds from a loan",
    "C.Repaying a loan",
    "D.Selling goods to customers"
  ],
  answer: "D.Selling goods to customers",
},
{
  id: 192,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following combinations correctly matches the activity with the cash flow?",
  options: [
    "A.Operating—paying employees",
    "B.Investing—paying wages",
    "C.Financing—purchasing inventory",
    "D.Operating—purchasing land"
  ],
  answer: "A.Operating—paying employees",
},
{
  id: 193,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following combinations correctly matches the activity with the cash flow?",
  options: [
    "A.Operating—borrowing money",
    "B.Investing—purchasing equipment",
    "C.Financing—selling goods",
    "D.Investing—paying wages"
  ],
  answer: "B.Investing—purchasing equipment",
},
{
  id: 194,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following combinations correctly matches the activity with the cash flow?",
  options: [
    "A.Financing—repaying a loan",
    "B.Operating—purchasing land",
    "C.Investing—paying employee wages",
    "D.Operating—receiving an owner's investment"
  ],
  answer: "A.Financing—repaying a loan",
},
{
  id: 195,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "What does the statement of cash flows report?",
  options: [
    "A.Only cash inflows",
    "B.Only cash outflows",
    "C.Cash inflows and outflows categorized into operating, investing, and financing activities",
    "D.Only changes in retained earnings"
  ],
  answer: "C.Cash inflows and outflows categorized into operating, investing, and financing activities",
},
{
  id: 196,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "How are several years of cash-flow data usually presented?",
  options: [
    "A.Separately without comparison",
    "B.Side by side for comparison",
    "C.Only for the current year",
    "D.Only as percentages"
  ],
  answer: "B.Side by side for comparison",
},
{
  id: 197,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which financial statement is considered the third primary financial statement?",
  options: [
    "A.Statement of retained earnings",
    "B.Statement of stockholders' equity",
    "C.Statement of cash flows",
    "D.Statement of changes in assets"
  ],
  answer: "C.Statement of cash flows",
},
{
  id: 198,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "A company pays cash for rent during the period. Which category would this cash outflow generally belong to?",
  options: [
    "A.Operating activities",
    "B.Investing activities",
    "C.Financing activities",
    "D.Stockholders' equity activities"
  ],
  answer: "A.Operating activities",
},
{
  id: 199,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "A company receives cash from selling an old piece of equipment. Which category would this cash inflow generally belong to?",
  options: [
    "A.Operating activities",
    "B.Investing activities",
    "C.Financing activities",
    "D.Revenue activities"
  ],
  answer: "B.Investing activities",
},
{
  id: 200,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "A company pays cash dividends to its shareholders. Which category would this cash outflow generally belong to according to the lesson?",
  options: [
    "A.Operating activities",
    "B.Investing activities",
    "C.Financing activities",
    "D.Income activities"
  ],
  answer: "C.Financing activities",
},
{
  id: 201,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which statement best summarizes how the three primary financial statements articulate?",
  options: [
    "A.The income statement explains retained earnings, while the statement of cash flows explains cash",
    "B.The balance sheet explains revenue, while the income statement explains cash",
    "C.The statement of cash flows explains revenue, while the balance sheet explains dividends",
    "D.The three statements are independent and do not affect one another"
  ],
  answer: "A.The income statement explains retained earnings, while the statement of cash flows explains cash",
},
{
  id: 202,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is an example of a cash inflow from financing activities?",
  options: [
    "A.Cash received from customers",
    "B.Cash received from selling equipment",
    "C.Cash received from a loan",
    "D.Cash received from selling inventory"
  ],
  answer: "C.Cash received from a loan",
},
{
  id: 203,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is an example of a cash inflow from investing activities?",
  options: [
    "A.Cash received from selling a building",
    "B.Cash received from customers",
    "C.Cash received from owners",
    "D.Cash received from a bank loan"
  ],
  answer: "A.Cash received from selling a building",
},
{
  id: 204,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is an example of a cash inflow from operating activities?",
  options: [
    "A.Cash received from selling land",
    "B.Cash received from customers for goods or services",
    "C.Cash received from issuing stock",
    "D.Cash received from borrowing money"
  ],
  answer: "B.Cash received from customers for goods or services",
},
{
  id: 205,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is an example of a financing cash outflow?",
  options: [
    "A.Paying suppliers for inventory",
    "B.Purchasing equipment",
    "C.Repaying the principal on a loan",
    "D.Paying utility expenses"
  ],
  answer: "C.Repaying the principal on a loan",
},
{
  id: 206,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is an example of an operating cash outflow?",
  options: [
    "A.Purchasing land",
    "B.Paying taxes",
    "C.Repaying a long-term loan",
    "D.Paying a dividend"
  ],
  answer: "B.Paying taxes",
},
{
  id: 207,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following is an example of an investing cash outflow?",
  options: [
    "A.Paying rent",
    "B.Paying employee wages",
    "C.Purchasing a truck",
    "D.Paying dividends"
  ],
  answer: "C.Purchasing a truck",
},
{
  id: 208,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "If operating activities generate $100,000 of cash, investing activities use $60,000, and financing activities use $20,000, what is the net increase in cash?",
  options: [
    "A.$20,000",
    "B.$40,000",
    "C.$80,000",
    "D.$180,000"
  ],
  answer: "A.$20,000",
},
{
  id: 209,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "A company generates $50,000 from operating activities, spends $70,000 on investing activities, and receives $30,000 from financing activities. What is the net change in cash?",
  options: [
    "A.$10,000 increase",
    "B.$10,000 decrease",
    "C.$50,000 increase",
    "D.$150,000 increase"
  ],
  answer: "A.$10,000 increase",
},
{
  id: 210,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Why is the statement of cash flows useful to creditors?",
  options: [
    "A.It helps them evaluate the company's ability to generate and use cash",
    "B.It tells them the exact market value of the company",
    "C.It eliminates the need to review the balance sheet",
    "D.It reports only the company's profits"
  ],
  answer: "A.It helps them evaluate the company's ability to generate and use cash",
},
{
  id: 211,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which statement best distinguishes net income from cash flow information?",
  options: [
    "A.Net income measures economic performance, while the statement of cash flows focuses on actual cash inflows and outflows",
    "B.Net income and cash flow are always exactly the same",
    "C.Cash flow measures only profitability",
    "D.Net income measures only financing activities"
  ],
  answer: "A.Net income measures economic performance, while the statement of cash flows focuses on actual cash inflows and outflows",
},
{
  id: 212,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which statement best describes the relationship between cash flows and the balance sheet?",
  options: [
    "A.The cash flow statement explains why the cash balance changed from one period to the next",
    "B.The cash flow statement replaces the cash account",
    "C.The balance sheet explains all individual cash transactions",
    "D.Cash flows do not affect the balance sheet"
  ],
  answer: "A.The cash flow statement explains why the cash balance changed from one period to the next",
},
{
  id: 213,
  topic: "Lesson 11: The Statement of Cash Flows",
  question: "Which of the following represents the correct sequence of the three cash flow categories?",
  options: [
    "A.Financing, operating, investing",
    "B.Investing, operating, financing",
    "C.Operating, investing, financing",
    "D.Operating, financing, investing"
  ],
  answer: "C.Operating, investing, financing",
},
{
    id: 214,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "Why are the notes to the financial statements important?",
    options: [
      "A.They replace the three primary financial statements",
      "B.They provide additional information needed to properly interpret the financial statements",
      "C.They only report a company's cash balance",
      "D.They are used only by the SEC"
    ],
    answer: "B.They provide additional information needed to properly interpret the financial statements",
  },
  {
    id: 215,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "What type of information is commonly included in the notes to the financial statements?",
    options: [
      "A.Only information about employee salaries",
      "B.Assumptions and methods used in preparing the financial statements",
      "C.Only the company's stock price",
      "D.Only information about cash transactions"
    ],
    answer: "B.Assumptions and methods used in preparing the financial statements",
  },
  {
    id: 216,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "How long can the notes to the financial statements be in a typical annual report?",
    options: [
      "A.Usually less than one page",
      "B.Usually three pages or fewer",
      "C.Often 30 pages or more",
      "D.Exactly 10 pages"
    ],
    answer: "C.Often 30 pages or more",
  },
  {
    id: 217,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "How many general categories do financial statement notes fall into?",
    options: [
      "A.Two",
      "B.Three",
      "C.Four",
      "D.Five"
    ],
    answer: "C.Four",
  },
  {
    id: 218,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "Which of the following is one of the four general categories of financial statement notes?",
    options: [
      "A.Summary of significant accounting policies",
      "B.Summary of employee benefits",
      "C.Summary of stock market prices",
      "D.Summary of customer complaints"
    ],
    answer: "A.Summary of significant accounting policies",
  },
  {
    id: 219,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "Which category provides additional details about summary totals found in the financial statements?",
    options: [
      "A.Summary of significant accounting policies",
      "B.Additional information about summary totals",
      "C.Disclosure of employee information",
      "D.Management forecasts"
    ],
    answer: "B.Additional information about summary totals",
  },
  {
    id: 220,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "Which category involves important information that is not recognized in the financial statements?",
    options: [
      "A.Disclosure of important information that is not recognized in the financial statements",
      "B.Summary of significant accounting policies",
      "C.Additional information about summary totals",
      "D.Operating activities"
    ],
    answer: "A.Disclosure of important information that is not recognized in the financial statements",
  },
  {
    id: 221,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "Which organizations may require supplementary information to be reported in the financial statement notes?",
    options: [
      "A.Walmart and Amazon",
      "B.The IRS and Department of Labor",
      "C.The FASB and SEC",
      "D.The Federal Reserve and Treasury Department"
    ],
    answer: "C.The FASB and SEC",
  },
  {
    id: 222,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "Why do users need information about a company's accounting policies and practices?",
    options: [
      "A.Because accounting involves assumptions, estimates, and judgments",
      "B.Because all companies use exactly the same accounting methods",
      "C.Because accounting does not involve any estimates",
      "D.Because the SEC prepares the company's financial statements"
    ],
    answer: "A.Because accounting involves assumptions, estimates, and judgments",
  },
  {
    id: 223,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "Why might more than one acceptable accounting method exist for certain items?",
    options: [
      "A.Because companies can ignore accounting standards",
      "B.Because certain accounting items require assumptions and estimates",
      "C.Because financial statements are optional",
      "D.Because the SEC does not regulate accounting"
    ],
    answer: "B.Because certain accounting items require assumptions and estimates",
  },
  {
    id: 224,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "Why is information about depreciation methods included in the notes?",
    options: [
      "A.Because there are different acceptable ways to estimate depreciation",
      "B.Because depreciation is always equal to cash paid",
      "C.Because depreciation is not related to accounting",
      "D.Because depreciation only applies to inventory"
    ],
    answer: "A.Because there are different acceptable ways to estimate depreciation",
  },
  {
    id: 225,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "Why do the notes provide additional information about summary totals?",
    options: [
      "A.Because summary totals are always incorrect",
      "B.Because one summary number may represent thousands of individual items",
      "C.Because summary totals are not included in financial statements",
      "D.Because companies are not allowed to report details"
    ],
    answer: "B.Because one summary number may represent thousands of individual items",
  },
  {
    id: 226,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "What did Walmart's long-term debt and debentures balance represent in the example?",
    options: [
      "A.Only one bank loan",
      "B.Only mortgages",
      "C.Loans composed of many different types of borrowing",
      "D.Only unsecured senior notes"
    ],
    answer: "C.Loans composed of many different types of borrowing",
  },
  {
    id: 227,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "Where would users find the details behind a summary number such as long-term debt?",
    options: [
      "A.Only on the balance sheet",
      "B.In the notes to the financial statements",
      "C.Only in the income statement",
      "D.Only in the statement of cash flows"
    ],
    answer: "B.In the notes to the financial statements",
  },
  {
    id: 228,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "What is the accounting term for including estimates and judgments directly in the financial statements?",
    options: [
      "A.Disclosure",
      "B.Recognition",
      "C.Classification",
      "D.Articulation"
    ],
    answer: "B.Recognition",
  },
  {
    id: 229,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "What is disclosure in the context of financial statement notes?",
    options: [
      "A.Including all uncertain information directly in the financial statements",
      "B.Explaining estimates and judgments in the notes instead of recognizing them in the financial statements",
      "C.Removing uncertain information from the financial statements and notes",
      "D.Reporting only cash transactions"
    ],
    answer: "B.Explaining estimates and judgments in the notes instead of recognizing them in the financial statements",
  },
  {
    id: 230,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "When is disclosure an accepted way to convey information to users?",
    options: [
      "A.When the information is too uncertain to be recognized",
      "B.When the information is completely certain",
      "C.Only when the information involves cash",
      "D.Only when required by shareholders"
    ],
    answer: "A.When the information is too uncertain to be recognized",
  },
  {
    id: 231,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "Which type of supplementary information does the FASB require to be disclosed?",
    options: [
      "A.Quarterly financial information and business segment information",
      "B.Employee vacation schedules",
      "C.Daily stock prices",
      "D.Individual customer transactions"
    ],
    answer: "A.Quarterly financial information and business segment information",
  },
  {
    id: 232,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "Which statement best describes the purpose of the notes to the financial statements?",
    options: [
      "A.They provide additional context, details, accounting policies, and disclosures needed to understand the financial statements",
      "B.They replace the income statement and balance sheet",
      "C.They only provide information about company stock prices",
      "D.They are used exclusively to calculate taxes"
    ],
    answer: "A.They provide additional context, details, accounting policies, and disclosures needed to understand the financial statements",
  },
  {
    id: 233,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "Which of the following is NOT one of the four general categories of financial statement notes?",
    options: [
      "A.Summary of significant accounting policies",
      "B.Additional information about summary totals",
      "C.Disclosure of important information that is not recognized",
      "D.Daily operating performance of employees"
    ],
    answer: "D.Daily operating performance of employees",
  },
   {
    id: 234,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "What is the purpose of a classified balance sheet?",
    options: [
      "A.A classified balance sheet separates liabilities from equities rather than reporting them together.",
      "B.A classified balance sheet distinguishes between current and long-term assets.",
      "C.A classified balance sheet represents a period of time instead of a point in time.",
      "D.A classified balance sheet is a statement of a company’s financial position for internal use only."
    ],
    answer: "B.A classified balance sheet distinguishes between current and long-term assets",
  },
  {
    id: 235,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "Which item would be classified in the owners’ equity section of the balance sheet?",
    options: [
      "A.Inventory",
      "B.Accounts receivable",
      "C.Accounts payable",
      "D.Retained earnings"
    ],
    answer: "D.Retained earnings",
  },
  {
    id: 236,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "Kamila Company has provided the following data: Cost of Goods Sold = 600, Cash = 70, Sales = 1,500, Operating Expenses = 250, Inventory = 300, Interest Expense = 50, Accounts Payable = 100, and Income Tax Expense = 200. Using the data above, how would Kamila calculate gross profit?",
    options: [
      "A.Sales − cost of goods sold",
      "B.Cash − accounts payable",
      "C.Cash − inventory",
      "D.Sales − operating expenses"
    ],
    answer: "A.Sales − cost of goods sold",
  },
  {
    id: 237,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "Using the data provided for Kamila Company, how would Kamila calculate operating income?",
    options: [
      "A.Sales − cost of goods sold − operating expenses",
      "B.Cash − accounts payable",
      "C.Sales − operating expenses − accounts payable",
      "D.Cash − inventory"
    ],
    answer: "A.Sales − cost of goods sold − operating expenses",
  },
  {
    id: 238,
    topic: "Lesson 12: Notes to the Financial Statements",
    question: "What is the purpose of the notes to the financial statements?",
    options: [
      "A.The notes present the results of operations of a company over a period of time.",
      "B.The notes present the financial condition of a company at a point in time.",
      "C.The notes present the total operating cash flows of a company over a period of time.",
      "D.The notes present the assumptions needed to help explain financial statements."
    ],
    answer: "D.The notes present the assumptions needed to help explain financial statements",
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