
book = {
    "id":"1001",
    "name":"Harry potter", 
    "edition":"2003",
    "price":2999
}

print(book)

print(book['name'])
# print(book['author']) # get the value or Error
print(book.get("author")) # get the value or None
print(book.get("name"))

book['author'] = "Mohan" # adding new data
print(book.get("author"))

print("---------------")
book['name'] = 'God of War'
book.update({"edition":"2004"})

print(book)

p = book.pop("price")
print(book)

c = book.clear()
print(book)

