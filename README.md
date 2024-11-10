# Personal Finance Tracker

A simple web application to help you track your income and expenses, visualize your financial data, and manage your personal budget. Built using HTML, TailwindCSS, and JavaScript, with Chart.js for data visualization.

## Features
- Track Income & Expenses: Add and categorize your financial transactions.
- Data Visualization: Visualize your income and expenses over time using Chart.js.
- Responsive Design: The app is fully responsive and adapts to various screen sizes using TailwindCSS.
- Data Persistence: Transactions are saved locally in your browser using localStorage, so they persist even when you close and reopen the app.

## Technologies Used
- Frontend: HTML, JavaScript, TailwindCSS
- Charting: Chart.js for creating interactive financial charts
- Data Storage: localStorage for saving user transactions

### Screenshots
![Screenshot 2024-11-10 083235](https://github.com/user-attachments/assets/035e0718-808e-43f9-b53d-ecc443b02d85)
![Screenshot 2024-11-10 083251](https://github.com/user-attachments/assets/8b0db564-7050-4bad-9d36-54ef988b1c5e)

## Getting Started

### Prerequisites
No special prerequisites are required to run this project. It is a static web app that works directly in the browser.

### Installation
1. Clone the repository:
    ```gitbash or Command line
    git clone https://github.com/yourusername/personal-finance-tracker.git
    ```
2. Navigate to the project folder:
    ```bash
    cd personal-finance-tracker
    ```
3. Open the `index.html` file in your browser:
    ```bash
    open index.html
    ```

### Usage
1. Open the app in your browser.
2. Add a transaction by entering the amount, category, and type (Income or Expense).
3. Submit the transaction. It will appear in the transaction list, and the chart will update accordingly.
4. View the pie chart displaying your income vs. expense breakdown.

Example of the app's user interface showing transaction list and chart.

## Future Enhancements
- User authentication to store data across devices
- Monthly budget tracker and expense reminders
- Advanced financial analysis tools

## Acknowledgments
- Thanks to TailwindCSS for the easy-to-use utility-first CSS framework.
- Chart.js for providing a simple way to create interactive data visualizations.
