def big_sentence(name, surname, age, academy, role):
    sentence = "Hello, my name is {}, my surname is {}. I am {} years old. I study at {}, my role is {}.".format(name, surname, age, academy, role)
    return sentence


result = big_sentence("Ana", "Smith", 20, "Tech Academy", "student")


print(result)
