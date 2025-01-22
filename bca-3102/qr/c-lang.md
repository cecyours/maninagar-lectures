

# C Programming: Hello World with `getch()` and `clrscr()`

## Description

This program demonstrates the use of `getch()` and `clrscr()` in Turbo C, along with a basic "Hello, World!" output. The `clrscr()` function clears the console screen before displaying the message, and `getch()` ensures that the program waits for the user to press a key before exiting.

## Code Example

```c
#include <stdio.h>
#include <conio.h>  // for getch() and clrscr()

void main() {
    clrscr();  // Clears the screen

    printf("Hello, World!\n");

    getch();  // Waits for a key press before closing
}


