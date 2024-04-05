const form = document.querySelector(".real-form");
const temperature = document.querySelector(".temperature");
const places = document.querySelector(".places");
const icons = document.querySelector('.icons');
const load = document.querySelector('.load')
let place = "";
form.addEventListener('submit', async (e)=>{
    //Prevents refreshing of the page
    e.preventDefault();

    //Just to check whether the form has been submitted or not
    console.log("Submitted!");

    //This gives all the attributes of that elements
    console.dir(form);

    //Since we need the value of the input, we used this below
    console.log(form.elements.city.value);

    place = form.elements.city.value;

    //From here we make api calls using axios.
        const config = { headers: {'X-RapidAPI-Key' : 'c01845fc41msh1a9aedc88f9ecbdp1e1056jsn416d98c2bf09', 'X-RapidAPI-Host' : 'weatherapi-com.p.rapidapi.com'}, params : { 'q' : `${place}`} }
        const res = await axios.get("https://weatherapi-com.p.rapidapi.com/current.json",config)
        console.log(res.data)
        console.log(res.data.current.temp_c)
        let temp = res.data.current.temp_c;
        let pl = res.data.location.name
        let src = res.data.current.condition.icon

    form.elements.city.value = '';

    //Here we will append the temperature to the form
    if(pl)
    {
        temperature.innerText = temp+"℃"
        places.innerText = pl
        if(src)
        {
            icons.src = src
            icons.style.display = 'block'
            load.style.display = 'none'
        }
        else
        {
            icons.alt = "Not available"
        }
    }
    else
    {
        places.innerText = "Such place does not exist. Please type correct name!"
        icons.alt = "Not Available"
    }
})