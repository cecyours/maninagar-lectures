from transformers import pipeline, AutoTokenizer, AutoModelForCausalLM

# Load model and tokenizer
model_name = "microsoft/DialoGPT-medium"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

# Create a text-generation pipeline
chatbot = pipeline("text-generation", model=model, tokenizer=tokenizer, max_length=1000)

# Conversation loop
chat_history = ""

print("Welcome to the DialoGPT Chatbot! Type 'quit' to exit.")
while True:
    user_input = input("You: ")
    if user_input.lower() in ["quit", "exit"]:
        break
    
    # Append user message to history
    chat_history += f"User: {user_input}\nBot:"
    
    # Generate response
    response = chatbot(chat_history, pad_token_id=tokenizer.eos_token_id)[0]['generated_text']
    
    # Extract only the new bot reply
    bot_reply = response[len(chat_history):].strip()
    
    print("Bot:", bot_reply)
    
    # Append bot reply to history
    chat_history += f" {bot_reply}\n"
