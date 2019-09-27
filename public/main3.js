//Vacation class : Represents a vacation
class vacation{
    constructor(city,state,country){
        this.city = city;
        this.state = state;
        this.country = country;
    }
}
//UI Class: Handle UI Tasks
class UI{
    static displayVacation(){
        const vacations = Store.getVacation();
       
        vacations.forEach((vacation) => UI.addVacationToList(vacation));
    }
    static addVacationToList(vacation){
        const list = document.querySelector('#vacation-list');

        const row = document.createElement('tr');
        
        row.innerHTML = `
        <td> &nbsp &nbsp${vacation.city} </td>
        <td> &nbsp &nbsp${vacation.state} </td>
        <td> &nbsp &nbsp${vacation.country} </td>
        <td><a href="#" class="delete"</a>DELETE</td>
        `;

        list.appendChild(row);
    }
    static deleteVac(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
    static clearFields(){
        document.querySelector('#city1').value = '';
        document.querySelector('#state1').value = '';
       // country = document.querySelector('#country1');
    }
}

//Store Class: Handles Storage
class Store{
    static getVacation(){
        let vacations;
        if(localStorage.getItem('vacations')===null){
            vacations = [];
        }
        else{
            vacations = JSON.parse(localStorage.getItem('vacations'));
        }
        return vacations;
    }
    static addVacation(vacation){
        const vacations = Store.getVacation();
        vacations.push(vacation);
        localStorage.setItem('vacations', JSON.stringify(vacations));

    }
    static removeVacation(s){
        const vacations = Store.getVacation();
       
        vacations.forEach((vacation,index)=>{
           // console.log(vacation.state + ' and '+ s);
            let comp = s.trim();
            let comp2 = vacation.city.trim();
            if( comp === comp2){
                vacations.splice(index,1);
            }
            
        });
        localStorage.setItem('vacations',JSON.stringify(vacations));
    }
}

//Event: Display vacation
document.addEventListener('DOMContentLoaded', UI.displayVacation);
//Event: Add a vacation

document.querySelector('#vacation-form').addEventListener('submit',(e)=>{
    //prevent actual submit
    e.preventDefault();

    const city = document.querySelector('#city1').value;
    const state = document.querySelector('#state1').value;
    const country = document.querySelector('#country1').value;
    
    //validate
    if(city ==='' || state ==='' || country===''){
        alert('please fill in all fields');
    }else{

         //Instansiate a vacation object
        const vac = new vacation(city,state,country);

        //Aadd vacation to list

        UI.addVacationToList(vac);
    
        //console.log(Store.getVacation);
        // add book to store
        Store.addVacation(vac);
        //clear fields

        UI.clearFields();
    }

   
});

//Event: Remove a vacation

document.querySelector('#vacation-list').addEventListener('click',(e)=>{
    //Remove vacation from UI
    UI.deleteVac(e.target);

    Store.removeVacation(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
   // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
});