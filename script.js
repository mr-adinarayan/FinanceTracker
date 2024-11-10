// Initialize storage if it doesn't exist
if (!localStorage.getItem('transactions')) {
    localStorage.setItem('transactions', JSON.stringify([]));
}

// DOM elements
const form = document.getElementById('transaction-form');
const transactionList = document.getElementById('transaction-list');
const chartElement = document.getElementById('transaction-chart');

// Add transaction to localStorage and render
function addTransaction(amount, category, type) {
    const transactions = JSON.parse(localStorage.getItem('transactions'));

    const transaction = {
        amount: parseFloat(amount),
        category: category,
        type: type,
        date: new Date().toLocaleDateString(),
    };

    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    
    renderTransactions();
    updateChart();
}

// Render the transaction list from localStorage
function renderTransactions() {
    const transactions = JSON.parse(localStorage.getItem('transactions'));
    transactionList.innerHTML = '';

    transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.classList.add('bg-gray-800', 'text-gray-200', 'p-4', 'rounded-md', 'shadow-md');

        if (transaction.type === 'income') {
            li.classList.add('bg-teal-700', 'text-teal-200');
        } else {
            li.classList.add('bg-orange-700', 'text-orange-200');
        }

        li.innerHTML = `
            <div class="flex justify-between">
                <span class="font-medium">${transaction.category}</span>
                <span class="${transaction.type === 'expense' ? 'text-red-400' : 'text-green-400'}">
                    ${transaction.type === 'expense' ? '-' : '+'} $${transaction.amount}
                </span>
                <span class="text-gray-500 text-sm">${transaction.date}</span>
            </div>
        `;
        transactionList.appendChild(li);
    });
}

// Data manipulation for charting
function updateChart() {
    const transactions = JSON.parse(localStorage.getItem('transactions'));
    let income = 0;
    let expense = 0;

    transactions.forEach(transaction => {
        if (transaction.type === 'income') income += transaction.amount;
        else expense += transaction.amount;
    });

    // Update the chart
    const chart = new Chart(chartElement, {
        type: 'bar',
        data: {
            labels: ['Income', 'Expense'],
            datasets: [{
                label: 'Amount ($)',
                data: [income, expense],
                backgroundColor: ['#4CAF50', '#F44336'],
                borderColor: ['#388E3C', '#D32F2F'],
                borderWidth: 1,
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}

// Handle form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const type = document.getElementById('type').value;

    if (amount && category && type) {
        addTransaction(amount, category, type);
        form.reset();
    }
});

// Initial render
renderTransactions();
updateChart();
