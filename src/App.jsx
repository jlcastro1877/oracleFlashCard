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