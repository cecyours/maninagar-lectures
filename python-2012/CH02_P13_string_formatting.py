book_title = "Lord of the rings"
book_price = 100.99
book_date = '30/06/2026'
book_id = 10

# f-string
print(f"Book({book_id}) : {book_title}, Price : {book_price}, date : {book_date}")

# .format
print("Book({}) : {}, Price : {}, date : {}".format(book_id,book_title,book_price,book_date))

# %
print("Book(%d) : %s, Price : %.2f, date : %s"%(book_id,book_title,book_price,book_date))
