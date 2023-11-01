from django.db import models

# Create your models here.
class Type(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Flowers(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    description = models.TextField()
    image = models.ImageField(upload_to='flower/')
    SIZE = [
    (1,'X'),
    (2, 'S'),
    (3, 'M'),
    (4, 'L'),
]
    size = models.CharField(choices=SIZE,max_length=2)
    type = models.ForeignKey(Type, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Flowers"
        verbose_name = "Flower"
    