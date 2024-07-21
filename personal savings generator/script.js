document.getElementById('other-checkbox').addEventListener('change', function() {
    document.getElementById('others').disabled = !this.checked;
});

function generatePlan() {
    const currency = document.getElementById('currency').value;
    const income = parseFloat(document.getElementById('income').value) || 0;
    const grocery = parseFloat(document.getElementById('grocery').value) || 0;
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const water = parseFloat(document.getElementById('water').value) || 0;
    const rent = parseFloat(document.getElementById('rent').value) || 0;
    const cleaning = parseFloat(document.getElementById('cleaning').value) || 0;
    const emi = parseFloat(document.getElementById('emi').value) || 0;
    const others = document.getElementById('other-checkbox').checked ? (parseFloat(document.getElementById('others').value) || 0) : 0;

    const totalExpenses = grocery + electricity + water + rent + cleaning + emi + others;
    const resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = ''; // Clear previous results

    if (totalExpenses > income) {
        const excessAmount = totalExpenses - income;
        const savingsIdeas = `
            <h2 class="excess-plan">Expenditure Analysis:</h2>
            <div class="treasure-box">
                <p>Your expenses exceed your income by ${formatCurrency(excessAmount, currency)}.</p>
                <p>Consider the following savings ideas to reduce your expenditure:</p>
                <ul>
                    <li>Review and cut down on grocery expenses. Potential savings: ${formatCurrency(grocery * 0.1, currency)}</li>
                    <li>Reduce household bills by conserving energy. Potential savings: ${formatCurrency(electricity * 0.2, currency)}</li>
                    <li>Consider cheaper alternatives for rent or cleaning services. Potential savings: ${formatCurrency(rent * 0.1, currency)}</li>
                    <li>Review EMI amounts and negotiate better terms. Potential savings: ${formatCurrency(emi * 0.1, currency)}</li>
                </ul>
                <p>General savings ideas:</p>
                <ul>
                    <li>Cancel or reduce unnecessary subscriptions.</li>
                    <li>Use coupons and look for discounts.</li>
                    <li>Set up an emergency fund.</li>
                </ul>
            </div>
        `;
        resultDiv.innerHTML = savingsIdeas;
    } else {
        const savingsAmount = income - totalExpenses;
        const savingsIdeas = `
            <h2 class="savings-plan">Savings Plan:</h2>
            <div class="treasure-box">
                <p>You have ${formatCurrency(savingsAmount, currency)} remaining after your expenses.</p>
                <p>Consider the following savings options:</p>
                <ul>
                    <li>Set up automatic transfers to a savings account. Suggested amount: ${formatCurrency(savingsAmount * 0.2, currency)}</li>
                    <li>Invest in mutual funds or other low-risk investments. Suggested amount: ${formatCurrency(savingsAmount * 0.3, currency)}</li>
                    <li>Save for travel or future goals. Suggested amount: ${formatCurrency(savingsAmount * 0.2, currency)}</li>
                    <li>Use cashback credit cards and rewards programs. Suggested amount: ${formatCurrency(savingsAmount * 0.1, currency)}</li>
                </ul>
                <p>General savings ideas:</p>
                <ul>
                    <li>Use a budgeting app to track and manage expenses.</li>
                    <li>Plan your grocery shopping and stick to a list.</li>
                    <li>Prepare meals in advance to save on dining out.</li>
                </ul>
            </div>
        `;
        resultDiv.innerHTML = savingsIdeas;
    }
}

function formatCurrency(amount, currency) {
    if (currency === 'USD') {
        return `$${amount.toFixed(2)}`;
    } else {
        return `₹${amount.toFixed(2)}`;
    }
}
