#Practice-Project-Budget-Calculator
Add a form to the web page with 3 fields, one that accepts a description, one that accepts a number and a drop down that accepts only the + or - symbol.
Listen to the form submissions. Forms are naturally submitted when a user presses the enter/return key in any of the form fields.
The number that is submitted should only accept positive values. You don't need to post an error message if someone submits a negative value, I would simply ignore the form submission entirely.
The description that is submitted must not be empty. Again, same requirement, if someone attempts to submit the form with a negative value for the description, I would ignore it.
If the form submission is successful create a new line in either the income - in the case that the (+) symbol is used, or in the expense - in the case that the (-) symbol is used.
Clear the form and be prepared for more submissions.
Obviously to do this, you will need to create some HTML including a form, some fields, and a few other containers in which to place the income and expenses. This would be a good time to start adding some very light CSS as well.

All the values in each of the 2 containers (income and expenses) should be added together and displayed at the top of the screen, but separately - total expenses on one line and total income on the next line.
You should be able to remove an individual expense or individual income item from the income or from the expense line. Your totals should adjust after removing these.
Each expense item should show it's percentage relative to the total income.
