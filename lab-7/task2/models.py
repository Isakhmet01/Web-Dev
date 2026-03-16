class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def eat(self):
        return f"{self.name} is eating"

    def speak(self):
        return f"{self.name} makes a sound"

    def __str__(self):
        return f"Name: {self.name}, Age: {self.age}, Color: {self.color}"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return f"{self.name} says Woof!"

    def guard(self):
        return f"{self.name} is guarding the house"

    def __str__(self):
        return f"Dog -> Name: {self.name}, Age: {self.age}, Color: {self.color}, Breed: {self.breed}"


class Cat(Animal):
    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor

    def speak(self):
        return f"{self.name} says Meow!"

    def climb(self):
        return f"{self.name} is climbing"

    def __str__(self):
        return f"Cat -> Name: {self.name}, Age: {self.age}, Color: {self.color}, Indoor: {self.indoor}"