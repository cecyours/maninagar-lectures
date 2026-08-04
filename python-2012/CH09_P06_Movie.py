

class Movie:

    def __init__(self,name,rating,director,cast):
        self.name = name
        self.rating = rating
        self.director = director
        self.cast = cast

    def info(self):
        print(f"Name : {self.name}")
        print(f"Rating : {self.rating}")
        print(f"Director : {self.director}")
        print(f"Cast : {self.cast}")
        for c in self.cast:
            print(c)

avenger = Movie("The Avengers",7.8,"Thomas",["Iron man","Thor","Hulk"])

avenger.info()