import turtle  
import random
canvas = turtle.Turtle()

# canvas.backward(300)
# canvas.right(90)
# canvas.backward(200)
# canvas.left(190)
# canvas.backward(100)

for i in range(1000):
    canvas.right(random.choice([60,90]))
    canvas.forward(120)

turtle.done()