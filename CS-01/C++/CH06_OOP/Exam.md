### TASK: 1 Simple Calculator (Abstraction)
- Create a class Calculator with methods for addition, subtraction, multiplication, and division using abstraction

```cpp
#include <iostream>
using namespace std;

class Calculator {
public:
    int add(int a, int b) { return a + b; }
    int sub(int a, int b) { return a - b; }
    int mul(int a, int b) { return a * b; }
    float div(float a, float b) { return a / b; }
};

int main() {
    Calculator c;
    cout << "Addition: " << c.add(5, 3) << endl;
    cout << "Subtraction: " << c.sub(5, 3) << endl;
    cout << "Multiplication: " << c.mul(5, 3) << endl;
    cout << "Division: " << c.div(10, 2) << endl;
    return 0;
}
```

### Output:
```
Addition: 8
Subtraction: 2
Multiplication: 15
Division: 5
```
### TASK: 2 
