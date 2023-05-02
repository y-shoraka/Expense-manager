/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/ExpenseForm.js" , "./src/MainPage.js" , "./src/Chart/ChartBar.js" , "./src/Expenses.js" , "./src/Category/Category.js" , "./src/Category/CategoryBar.js"],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  
}

