let firstName = document.querySelector('.firstName');
let lastName = document.querySelector('.lastName');
let UserName = document.querySelector('.userName div');
let City = document.querySelector('.City');
let State = document.querySelector('.State');
let Zip = document.querySelector('.Zip');
let checkBox = document.querySelector('.checkBox');
let i = 0 ;
function inputText(parentelement, Regex, queryforinput) {

    parentelement.addEventListener('change', () => {
        let temptest1 =null;
        let temptest0 =null;

        let input = document.querySelector(queryforinput);
        temptest1 = parentelement.querySelector('#True');
        temptest0 = parentelement.querySelector('#Bad');
        console.log(temptest1,parentelement);
        if(parentelement === checkBox){

            parentelement.classList.add('is-valid')


        }else{
        if (Regex.test(input.value))
        {

            let temp1 = document.createElement("div");
            temp1.innerText = "looks ok";
            temp1.classList.add('valid-feedback');
            temp1.id='True';
            if (parentelement.contains(temptest0)) {
                parentelement.replaceChild(temp1, temptest0);
                input.classList.replace('is-invalid', 'is-valid');
            }
            else if ( !(parentelement.contains(temptest1)) ) {
                parentelement.appendChild(temp1);
                input.classList.add('is-valid');
            }
        }
        else {
            let temp2 = document.createElement("div");
            temp2.innerText = "veryBad";
            temp2.classList.add('invalid-feedback');
            temp2.id='Bad';

            if (parentelement.contains(temptest1)) {
                parentelement.replaceChild(temp2, temptest1);
                input.classList.replace('is-valid', 'is-invalid');
            }
            else if (!(parentelement.contains(temptest0))) {
                parentelement.appendChild(temp2);
                input.classList.add('is-invalid');
            }


        }

        }
    });

}

inputText(firstName, /^.*$/, '.firstName input');
inputText(lastName, /^.*$/, '.lastName input');
inputText(UserName, /^.*$/, '.userName div input');
inputText(City, /^.*$/, '.City input');
inputText(State, /^.*$/, '.State input');
inputText(Zip, /^.*$/, '.Zip input');
