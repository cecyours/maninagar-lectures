
import turtle

t = turtle.Turtle();

t.right(90)
t.backward(100)

# t.penup()
t.left(70)
t.forward(100)

# t.pendown()
t.forward(100)

t.pencolor("red")
t.right(90)
t.forward(200)

t.penup()
t.right(80)

t.pendown();

t.color("red","#ccc")
t.begin_fill()
for i in range(4):
    t.backward(100)
    t.right(90)
t.end_fill()
turtle.done()