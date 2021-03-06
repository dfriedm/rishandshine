//SECTION 1: TICKTOCK
//EXERCISE 2: SOUND THE ALARM
//Let's get interactive!

/*EDUCATIONAL TEXT
So now our clock simulator can store 2 values: the current time and an alarm time ... But a clock isn't just a storage device! It can also modify that data and perform actions based on that data.

Let's consider our first variable: currentTime. What does a clock do with the data stored in this variable?

It displays it! Displaying is an action, so our simulator should have a function that mimics this. The code window has the beginnings of a function called displayCurrentTime. Complete the body of the function so that it prints the value of the variable currentTime to the console.

Having written the function to display one of the variables, we should consider whether our other variables could use a similar function. Does a clock also need to display the alarm time? Definitely! Write a method called displayAlarmTime that performs the same function as displayCurrentTime but uses the alarmTime variable instead of the currentTime variable.

While a clock has the ability to display both the current time and the alarm time, when and how it does it is very different. The current time is always displayed, whereas someone has to tell the clock to display the alarm time

Think about how An alarm clock should take its input directly from a user, so we might be tempted to test our object and it's methods by prompting the user. But caution! User input is always tricky... as you grow as a developer, you'll learn quickly that your users are not to be trusted. Can you think of some problems that our current clock might have?

Once you've written the code to complete this lesson, test it by setting a value for alarmTime in your code. When variables are given a value within the code it's called 'hard-coding'. It's not too fun, but its very helpful when you start a project because it helps you avoid the problem of users...don't worry... we'll get to that in the next exercise.

To make it easy for ourselves lets use the value 830 to represent 8:30am. In the next exercise, we'll modify our clock to take normal looking time values via user input ... it's way more complicated that you might think!

If you're interested, once you've completed this exercise and tested with a hard-coded value try inputting a bunch of different values and see what your clock prints to the console. Good ones to try could be "8:30am", "Now"..

*/

/*EXERCISE INSTRUCTIONS
Create a variable called myAlarm and set it to 830
Then use your clock's setAlarm method to set the alarm
Finally, print the clock's alarmTime property to the console
*/

/*EXERCISE HINT
Recall the syntax to access the value of an object's property:
var myObject = {property: value};
console.log(myObject.property) will print 'value'

Remember to give the setAlarm function the correct parameters!
*/

//INCLUDED CODE
var myClock = {alarmTime: 0};
myClock.setAlarm = function(time) {
    this.alarmTime = time;
};
//Create a variable called myAlarm and hardcode it to 830

//Now using your function, set your clock's alarm

//Log the value of your clock's alarmTime property to the console