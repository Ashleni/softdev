'''
Team Keyboard: Eric Sohel, Shreya Roy
SoftDev
K07 -- teardown
2022-10-03
time spent: .3
'''


from flask import Flask

app = Flask(__name__) # Q0: Where have you seen similar syntax in other langs?

@app.route("/") # Q1: What points of reference do you have for meaning of '/'?
def hello_world():
    print(__name__) # Q2: Where will this print to? Q3: What will it print?
    words = "<h1><b>We are BWANG!</b></h1>" + '\n' + "i love computer science. i breathe and eat it"
    return words  # Q4: Will this appear anywhere? How u know?

app.run()  # Q5: Where have you seen similar constructs in other languages?


'''
DISCO:
$pip install flask
installs flask on your home computer
QCC:
0. Similar syntax seen from Java constructors.
1. / usually indicates a directory, as it's the divider for different directories.
   Probably means "app" is being directed to your home directory.
2. Probably a separate file specified in whatever directory you routed "app" to.
   Or maybe the terminal?
3. It'll print whatever we will input for name. 
4. No, as the string is being returned but hello_world() is never run.
5. When you run a method in Java.
...
INVESTIGATIVE APPROACH:
We used context clues alongside our prior knowledge to decipher what this code
snippet might do when ran.
'''