# Parent Class
class Bird:
    def __init__(self, name):
        self.name = name

    def sound(self):
        print(f"{self.name} makes a sound.")

    def fly(self):
        print(f"{self.name} can fly.")

    def eat(self):
        print(f"{self.name} eats food.")


# Child Class 1
class Sparrow(Bird):
    def sound(self):
        print(f"{self.name} chirps: Chirp Chirp!")

    def nest(self):
        print(f"{self.name} builds a small nest.")


# Child Class 2
class Crow(Bird):
    def sound(self):
        print(f"{self.name} caws: Caw Caw!")

    def collect(self):
        print(f"{self.name} collects shiny objects.")


# Child Class 3
class Parrot(Bird):
    def sound(self):
        print(f"{self.name} says: Hello!")

    def speak(self):
        print(f"{self.name} can imitate human speech.")


# Child Class 4
class Eagle(Bird):
    def sound(self):
        print(f"{self.name} screams loudly.")

    def hunt(self):
        print(f"{self.name} hunts small animals.")


# Objects
sparrow = Sparrow("Little Sparrow")
crow = Crow("Black Crow")
parrot = Parrot("Green Parrot")
eagle = Eagle("Golden Eagle")

# List of Birds
birds = [sparrow, crow, parrot, eagle]

# Runtime Polymorphism
for bird in birds:
    print("\n----------------------")
    bird.sound()      # Overridden Method
    bird.fly()        # Parent Method
    bird.eat()        # Parent Method

    if isinstance(bird, Sparrow):
        bird.nest()

    elif isinstance(bird, Crow):
        bird.collect()

    elif isinstance(bird, Parrot):
        bird.speak()

    elif isinstance(bird, Eagle):
        bird.hunt()