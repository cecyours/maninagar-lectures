import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer

emails = pd.DataFrame({
    "message": [
        "Congratulations! You won a free iPhone. Claim now!",
        "Hi, how are you doing today?",
        "Get 50% discount on your next purchase!",
        "Your meeting is scheduled for tomorrow.",
        "You have won a lottery. Click here to claim!",
        "Please send me the project report.",
        "Earn money online from home. Apply now!",
        "Happy birthday! Have a wonderful day.",
        "Congratulations! You are selected for a cash prize.",
        "Can we meet for lunch today?",
        "Free gift waiting for you. Click the link now!",
        "Your order has been shipped successfully.",
        "Limited time offer! Buy now and save money.",
        "Thank you for attending the meeting.",
        "You won $1000! Claim your reward immediately!"
    ],
    "label": [
        1, 0, 1, 0, 1,
        0, 1, 0, 1, 0,
        1, 0, 1, 0, 1
    ]
})

# 1 = Spam
# 0 = Not Spam

info = ["Not Spam", "Spam"]

# Convert text into numerical features
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(emails["message"])

y = emails["label"]

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, shuffle=True, random_state=42
)

# Train model
model = LogisticRegression()
model.fit(X_train, y_train)

# Prediction
pred = model.predict(X_test)

# Actual vs Predicted
for i in range(len(X_test.toarray())):
    print(f"Actual: {info[y_test.iloc[i]]} | Predicted: {info[pred[i]]}")

# Accuracy
print("Accuracy:", accuracy_score(y_test, pred))

# Confusion Matrix
print("Confusion Matrix:")
print(confusion_matrix(y_test, pred))