user_password = input("გთხოვთ შეიტანოთ პაროლი: ")

while user_password != "12345678":
    print("პაროლი არასწორია, გთხოვთ სცადოთ ისევ.")
    user_password = input("გთხოვთ შეიტანოთ პაროლი: ")

print("პაროლი სწორია!")