def list_join(user_list, str_to_join):
    print(str_to_join.join(user_list))

print(list_join(["h1", "h2", "h3"], ", "))  

print(list_join(["g1", "g2", "g3"], " "))  

print(list_join(["j1", "j2", "j3"], "-"))  