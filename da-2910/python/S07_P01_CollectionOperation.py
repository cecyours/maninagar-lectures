from clrprint import clrprint
data = [
    {'name': 'Rohan', 'marks': 50, 'subject': 'Math', 'school': 'ABC High School'},
    {'name': 'Sohan', 'marks': 60, 'subject': 'Science', 'school': 'XYZ Academy'},
    {'name': 'Mohan', 'marks': 30, 'subject': 'English', 'school': 'ABC High School'},
    {'name': 'Gohan', 'marks': 70, 'subject': 'History', 'school': 'PQR Public School'},
    {'name': 'Karan', 'marks': 80, 'subject': 'Geography', 'school': 'XYZ Academy'},
    {'name': 'Taran', 'marks': 90, 'subject': 'Physics', 'school': 'PQR Public School'},
    {'name': 'Arjun', 'marks': 85, 'subject': 'Math', 'school': 'ABC High School'},
    {'name': 'Varun', 'marks': 55, 'subject': 'Chemistry', 'school': 'LMN International'},
    {'name': 'Ramesh', 'marks': 65, 'subject': 'Math', 'school': 'XYZ Academy'},
    {'name': 'Suresh', 'marks': 40, 'subject': 'Science', 'school': 'LMN International'},
    {'name': 'Mahesh', 'marks': 75, 'subject': 'English', 'school': 'PQR Public School'},
    {'name': 'Dinesh', 'marks': 50, 'subject': 'Physics', 'school': 'ABC High School'},
    {'name': 'Lokesh', 'marks': 95, 'subject': 'History', 'school': 'XYZ Academy'},
    {'name': 'Naresh', 'marks': 60, 'subject': 'Geography', 'school': 'LMN International'},
    {'name': 'Jignesh', 'marks': 85, 'subject': 'Math', 'school': 'PQR Public School'},
    {'name': 'Harish', 'marks': 70, 'subject': 'Chemistry', 'school': 'XYZ Academy'},
    {'name': 'Yash', 'marks': 90, 'subject': 'Science', 'school': 'LMN International'},
    {'name': 'Hitesh', 'marks': 55, 'subject': 'Physics', 'school': 'ABC High School'},
    {'name': 'Ankit', 'marks': 65, 'subject': 'English', 'school': 'XYZ Academy'},
    {'name': 'Raj', 'marks': 80, 'subject': 'History', 'school': 'PQR Public School'},
    {'name': 'Vikas', 'marks': 45, 'subject': 'Math', 'school': 'LMN International'},
    {'name': 'Saket', 'marks': 75, 'subject': 'Science', 'school': 'XYZ Academy'},
    {'name': 'Umesh', 'marks': 60, 'subject': 'Geography', 'school': 'PQR Public School'},
    {'name': 'Nilesh', 'marks': 85, 'subject': 'Physics', 'school': 'ABC High School'},
    {'name': 'Prakash', 'marks': 95, 'subject': 'English', 'school': 'LMN International'},
    {'name': 'Keshav', 'marks': 70, 'subject': 'Chemistry', 'school': 'XYZ Academy'},
    {'name': 'Tarun', 'marks': 50, 'subject': 'Science', 'school': 'ABC High School'},
    {'name': 'Vivek', 'marks': 55, 'subject': 'History', 'school': 'PQR Public School'},
    {'name': 'Aditya', 'marks': 90, 'subject': 'Math', 'school': 'XYZ Academy'},
    {'name': 'Rahul', 'marks': 65, 'subject': 'Physics', 'school': 'LMN International'}
]

def get_grade(marks):
    if 90 <= marks <= 100:
        return 'A+'
    elif 80 <= marks < 90:
        return 'A'
    elif 70 <= marks < 80:
        return 'B'
    elif 60 <= marks < 70:
        return 'C'
    elif 50 <= marks < 60:
        return 'D'
    else:
        return 'F'
# for  i in data:
#     print(i["name"],i["marks"])
    

# m = int(input("Enter the marks : "))

# for i in data:
#     if i['marks']>m:
#         print(i['name'])

for i in range(len(data)):
    data[i]['grade']=get_grade(data[i]['marks']);
    # print(data[i])
    
clrprint("+ {:^20} + {:^20} + {:^5} + {:^5} + {:^20} +".format('--------------------','--------------------','-----','-----','--------------------'),clr='red')

clrprint("| {:^20} | {:^20} | {:^5} | {:^5} | {:^20} |".format('name','subject','marks','grade','school'),clr='red')
clrprint("+ {:^20} + {:^20} + {:^5} + {:^5} + {:^20} +".format('--------------------','--------------------','-----','-----','--------------------'),clr='red')

for student in data:
    clrprint("| {:^20} | {:^20} | {:^5} | {:^5} | {:^20} |".format(student['name'],student['subject'],student['marks'],student['grade'],student['school']))

clrprint("+ {:^20} + {:^20} + {:^5} + {:^5} + {:^20} +".format('--------------------','--------------------','-----','-----','--------------------'))
