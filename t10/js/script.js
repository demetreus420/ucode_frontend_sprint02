'use strict'

let animal = prompt('What animal is the superhero most similar to?');
let gender = prompt('Is the superhero male or female? Leave blank if unknown or other.');
let age = prompt('How old is the superhero?');

alert('The superhero name is: ' + generateHeroName(animal, gender, age) + '!');

function generateHeroName(animal, gender, age) {
    let name;
    let description;
    //Здесь и в иных случаях будет проверка на наличие аргумента
    if (animal == undefined) {
        alert('First input is undefined');
    } else if (animal == ''
        || animal.match(/\w/ig) == null
        || animal.match(/\d/g) != null
        || animal.split(' ').length != 1
        || animal.length > 20) {
        alert('Wrong first input');
        return;
    }

    if (gender == undefined) {
        alert('Second input is undefined');
    } else if (gender.toLowerCase() != 'male' 
        && gender.toLowerCase() != 'female'
        && gender != '') {
        alert('Wrong second input');
        return;
    }

    if (age == undefined) {
        alert('Third input is undefined');
    } else if (age.match(/\d/g) == null
        || age.match(/\D/ig) != null
        || age.split(' ').length != 1
        || age.length > 5
        || age[0] == '0'
        || Number(age) <= 0) {
        alert('Wrong Third input');
        return;
    }

    (gender == 'male' && Number(age) >= 18) ? description = 'man'
        :
        (gender == 'male' && Number(age) >= 0) ? description = 'boy'
            :
            (gender == 'female' && Number(age) >= 18) ? description = 'woman'
                :
                (gender == 'female' && Number(age) >= 0) ? description = 'girl'
                    :
                    description = 'hero';

    name = animal + '-' + description;
    return name;
}