
def show(name):
    if len(name)==0: #base condition
        return
    print(name)
    show(name[:-1]) # recursive case

show("Programming")