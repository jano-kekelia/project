def find_character_index(input_string, character):
    index = input_string.find(character)
    return index

string = "Hello, world!"
char = "o"
index = find_character_index(string, char)
if index != -1:
    print(f"The character '{char}' is found at index: {index}")
else:
    print(f"The character '{char}' was not found in the string.")