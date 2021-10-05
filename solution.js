const oppoStatus = [
  {
    "K_OPPO_STATUS": 1,
    "STATUS": "1. Initial Contact",
    "SUCCESS": 0
  },
  {
    "K_OPPO_STATUS": 2,
    "STATUS": "2. Demonstration",
    "SUCCESS": 25
  },
  {
    "K_OPPO_STATUS": 3,
    "STATUS": "3. Proposal",
    "SUCCESS": 50
  },
  {
    "K_OPPO_STATUS": 4,
    "STATUS": "4. Negotiation",
    "SUCCESS": 75
  },
  {
    "K_OPPO_STATUS": 5,
    "STATUS": "5. Order",
    "SUCCESS": 100
  }
];

const Module = class {
  constructor() {

  }
  start() {
  	const div = document.createElement('div');
    const form = document.querySelector('form');
    form.appendChild(document.createElement('p'));
    form.appendChild(div);
    const submitOld= document.querySelector('button');
    form.removeChild(submitOld);
    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.text = 'Submit2';
    div.appendChild(submit);
    
    
	  const select= document.querySelector('select');
     select.onchange =  function() {
      setInputValue(select.options[select.selectedIndex].success);
    };
    
    
    submit.onclick = function() {
      outputValuesJson();
    };
    
     function outputValuesJson() {
      const select= document.querySelector('select');
      const output= document.querySelector('.output');
      
      output.innerText = JSON.stringify(
      	{
            status: select.options[select.selectedIndex].text,
           success: select.options[select.selectedIndex].success
        }
      );
    } 
    
    
    function setInputValue(value) {
       const input = document.querySelector('input');
       input.value = value;
    }
    for(let i=0; i<oppoStatus.length ;i++){
    	let option = document.createElement("option");
    	option.text = oppoStatus[i].STATUS;
      option.success = oppoStatus[i].SUCCESS;
      select.add(option);
    }
  }
}

const main = new Module();
main.start();
