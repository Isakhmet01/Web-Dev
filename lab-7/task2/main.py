from models import Animal, Dog, Cat


dog1 = Dog("Rex", 3, "brown", "Shepherd")
cat1 = Cat("Murka", 2, "white", True)


animals = [dog1, cat1]


for animal in animals:
    print(animal)
    print(animal.eat())
    print(animal.speak())
    print()


print(dog1.guard())
print(cat1.climb())