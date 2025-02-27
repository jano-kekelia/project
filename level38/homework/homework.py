input_string = "hello"

if input_string.islower():
    print("The string is all lowercase.")
else:
    print("The string is not all lowercase.")

def is_lowercase(input_string):
    return input_string.islower()

input_string = "hello"
print(is_lowercase(input_string))  

input_string = "Hello"
print(is_lowercase(input_string))  

user_input = input("Enter a string: ")

if user_input.islower():
    print("The string contains only lowercase letters.")
else:
    print("The string does not contain only lowercase letters.")
