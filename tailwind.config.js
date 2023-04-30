/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/ExpenseForm.js" , "./src/MainPage.js" , "./src/Chart/ChartBar.js" , "./src/Expenses.js"],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  
}

