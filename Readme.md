# Monday, October 19th

## Review Wednesday's Assessment
- Share answers
- Go over trouble spots

## Review Grocery.js
- Current progress
- Work in class with partner?
- Review solutions

## .click vs .on('click')
`.on()` can use less memory and work for dynamically added elements
WHY?

Using `.click()`, a separate handler gets created for every single element matching the selector.
- Many matching elements would create many identical handlers and thus increase the memory used.
- Dynamically added elements won't have the handler unless it is rebound to the new element.
```javascript
$('button.showDesc').click(function(){
  $('.desc').slideToggle("slow");
});
```
If we use `.on()` instead it combines old jQuery feature `.bind()` and `.live()` and creates a single handler for all elements matching the selector, including dynamically created ones.
```javascript
//parent element of selector is targeted first
$('#list').on('click', 'button.showDesc', function(){
  $('.desc').slideToggle("slow");
});
```

## JSON
JavaScript Object Notation (JSON), is a data-interchange format that is both easy for humans to read and write, and machines to parse and generate.
```json
{
  "data": [
      {
          "name": "Vermont",
          "capital": "Montpelier",
          "population": 625000,
          "enteredUnion": 1791,
          "symbols": [
            {
              "bird": "Hermit Thrush",
              "tree": "Sugar Maple",
              "flower": "Red Clover"
            },
            {
              "flag": "http://www.netstate.com/states/symb/flags/images/vt_fi.gif"
            }
          ]

      }

  ]
}
```

## Getting JSON data via $.ajax

```javascript
$.ajax({
  url: 'https://exampleurl.com',
  type: 'GET',
  data: {
    format: 'json'
  },
  error: function(){
    alert('An error has occurred');
  },
  success: function(results){
    console.log(results);
  }
});
```

## In class exercise
Using an ajax call to the provided url, create a US State fact page for the provided states including the image an other information. Get creative, you have free range over the HTML and CSS.
