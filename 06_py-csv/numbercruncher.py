'''
Team We: Aahan Mehta, Shreya Roy
SoftDev
K06 -- numbercruncher
2022-09-29
time spent: .9
DISCO:
- random.choices() can be used to weight choices
- 
-
QCC:
- 
OPS SUMMARY:
make_dict(filename): reads the file, splitting into unformatted strings 
of each occupation and it's weight. Then a for loop splits each occupation
    into its own key if it doesn't exist already, and sets the value to the
    respective occupation's weight, and returns the dictionary.
get_rand_weighted_krewe(nums): Checks if dictionary is empty.
    If not, it picks one random occupation by choosing from the list of keys
    and a list of their respective weights.
'''

import random



def make_dict(filename):
    dict = {} #makes dict to return
    file = open(filename)
    file_str = file.read()
    file.close()
    #print(file_str)
    devo_info_str = file_str.split("\n") #gives unformatted str of each devo
    # print(devo_info_str)
    devo_info_str = devo_info_str[1:-1]
    for devo in devo_info_str:
        if (devo[0:1] == '"'):
            infos = devo.rsplit(",",1)
        else:
            infos = devo.split(",") #devos info separated
        # print(infos)
        key = infos[0]
        if key not in dict:
            dict[key] = None #make new key if pd isn't alr in dictionary
        dict[key] = float(infos[1]) #pairs percent with job (key)
    print(list(dict.keys()))
    return dict

def get_rand_weighted_krewe(nums):
    if(len(nums) == 0):
        return ["empty dict"]
    occupation = random.choices(list(nums.keys()), weights=list(nums.values()), k=1)
    return occupation


def get_rand_krewe(nums):
    if len(nums) == 0: #edge case dict empty
        return ["empty dict"]
    key = random.choice(list(nums.keys()))
    if len(nums[key]) == 0:
        return ["empty key"]
    return [random.choice(nums[key]), key]


#print(make_dict("occupations.csv"))
print(get_rand_weighted_krewe(make_dict("occupations.csv")))