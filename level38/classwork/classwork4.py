def element_remover(user_list, index_to_remove):
   
    if 0 <= index_to_remove < len(user_list):
        del user_list[index_to_remove]
    else:
        print("ინდექსი არასწორია")
    peinr( user_list)


list1 = [1, 2, 3, 4, 5]
result1 = element_remover(list1, 2)  
print(result1)


list2 = ['apple', 'banana', 'cherry']
result2 = element_remover(list2, 1)  
print(result2)


list3 = [10, 20, 30, 40]
result3 = element_remover(list3, 0)  