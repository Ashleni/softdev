'''
Team We: Aahan Mehta, Shreya Roy
SoftDev
K05 -- bitsream
2022-09-29
time spent: 0.7
DISCO:
-read also reads in newline characters
-Split works well if you have a pattern in a str you want to sort
-to make something a tuple, you can either do it literally using parens,
or you can cast it using tuple(<object>)
QCC:
We learned about the use of using .close() because it protects you from
potential corruption.
OPS SUMMARY:
    make_dict(filename): reads the file, splitting into unformatted devos
    into a dictionary. Then a for loop splits each period into its own key
    if it doesn't exist already, and appends tuples of devo and ducky
    to that period, and returns the dictionary.
    
    get_rand_krewe(nums):
    1. Check if dictionary is empty
    2. Pick a random key after making a list of the keys in dictionary
    3. Checks if there aren't any elements in key
    4. Pick random element from dictionary in subsection key, using random.choice()
    5. Returns a list with both krewe member and period
'''
import random

def make_dict(filename):
    dict = {} #makes dict to return
    file = open(filename)
    file_str = file.read()
    file.close()
    file_str = file_str.replace("\n","") #deals with newlines from texeditor
    #print(file_str)
    devo_info_str = file_str.split("@@@") #gives unformatted str of each devo
    #print(devo_info_str)
    for devo in devo_info_str:
        infos = devo.split("$$$") #devos info separated
        #print(infos)
        key = int(infos[0]) #just the period
        if key not in dict:
            dict[key] = [] #make new key if pd isn't alr in dictionary
        dict[key].append(tuple(infos[1:])) #appends tuple of dvo+ducky 
    return dict

def get_rand_krewe(nums):
    if len(nums) == 0: #edge case dict empty
        return ["empty dict"]
    key = random.choice(list(nums.keys()))
    if len(nums[key]) == 0:
        return ["empty key"]
    return [random.choice(nums[key]), key]

print(get_rand_krewe(make_dict("krewes.txt")))