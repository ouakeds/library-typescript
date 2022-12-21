# Typescript Utils Library

This library is composed of differents utils functions that can be usefull in typescript.

It was done for code reusability purpose and is actually composed of few functions, and will be updated with new ones depending on the differents needs.

Only the standard library is used and should be used to avoid code dependancies.


## Playground

The index is used to play around with the functions.
To use it, you should install the modules with command bellow.

### Requirement

Require:
- Yarn
- Node

Install the typescript module:
```bash
$ yarn install
```

## Features availables

**Filtering**:
- filterArrayByValue *(permit to search in an array elements that contain the value in all property)*

**Mapping**:
- arrayMapper *(map an array from a specific format to a next one with callback)*

**Occurences**:
- occurencesInArray *(return a map of occurences of each value in array)*

**Random**:
- randomNumberBeetween *(return a number in a range)*
- randomString *(Generate a string with a lenght n with random char)*
- generateRandomNumber *(Generate a random number of n digit)*

**Sort**:
- sortArrayByKey *(Sort an array basing on a property)*

**Time**:
- addDays  *(Add days to a date)*
- formatDate *(Format a date to a specific format)*
- getDaysBeetweenDates *(Return the number of days beetween dates)*
- isInPeriod *(Check if a date is beetween a starting and ending date)*
- isWeekend *(Check if a date is a saturday or sunday)*
