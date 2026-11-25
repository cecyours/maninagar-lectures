
import pandas as pd
from sklearn.tree import DecisionTreeClassifier, plot_tree, export_text
from sklearn.ensemble import RandomForestClassifier

import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Create dataset
data = pd.DataFrame({
    'Age': [25, 30, 35, 40, 45, 20, 50, 23],
    'Income': [30000, 40000, 50000, 60000,
               80000, 20000, 90000, 25000],
    'Student': [0, 1, 0, 1, 0, 1, 0, 1],
    'Buy_Computer': [0, 1, 1, 1, 1, 0, 1, 0]
})
print(data)
# Separate features and target
X = data[['Age', 'Income', 'Student']]
y = data['Buy_Computer']

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

# Create model
model = RandomForestClassifier(max_depth=3, random_state=42)

# Train model
model.fit(X_train, y_train)

# Prediction
pred = model.predict(X_test)

print("Actual values:", y_test.values)
print("Predicted values:", pred)

# Accuracy
print("Accuracy:", accuracy_score(y_test, pred))
