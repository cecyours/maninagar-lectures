
movies = [
    "Inception",
    "The Dark Knight",
    "Interstellar",
    "The Shawshank Redemption",
    "Forrest Gump",
    "Pulp Fiction",
    "The Godfather",
    "The Matrix",
    "Fight Club",
    "The Lord of the Rings: The Return of the King",
    "The Avengers",
    "Gladiator",
    "Titanic",
    "Saving Private Ryan",
    "The Silence of the Lambs",
    "Jurassic Park",
    "The Lion King",
    "Avatar",
    "The Departed",
    "Back to the Future"
]


m = input("Enter movie name to search : ")

if m in movies:
    print(f"{m} is avaialble")
else:
    print(f"{m} is missing")
    