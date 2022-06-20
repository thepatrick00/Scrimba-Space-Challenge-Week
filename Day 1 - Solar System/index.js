const solarSystem = document.getElementById("solarSystem")
console.log(solarSystem)
const planets = [
    {
    "name": "Mercury",
    "diameter": 4879,
    "color": "grey"
    },
    {
    "name": "Venus",
    "diameter": 12104,
    "color": "yellow"
    },
    {
    "name": "Earth",
    "diameter": 12742,
    "color": "green"
    },
    {
    "name": "Mars",
    "diameter": 6779,
    "color": "pink"
    },
    {
    "name": "Jupiter",
    "diameter": 139822,
    "color": "yellow"
    },
    {
    "name": "Saturn",
    "diameter": 116464,
    "color": "orange"
    },
    {
    "name": "Uranus",
    "diameter": 50724,
    "color": "grey"
    },
    {
    "name": "Neptune",
    "diameter": 49244,
    "color": "blue"
    }
]

function render(planetsArr) {
    //create a div with 1:1 aspect ratio and 1000px border radius
    planetsArr.map(planet => {
        const wrapper = document.createElement('div');
        const newPlanet = document.createElement('figure');
        const toolTip = document.createElement('figcaption');
        newPlanet.classList.add('planet');
        toolTip.classList.add('tooltip');
        wrapper.classList.add('wrapper');
        
        toolTip.textContent = planet.name;
        
        newPlanet.style.width = planet.diameter/1000 + 'px';
        newPlanet.style.backgroundImage = `conic-gradient(
            hsl(0deg 0% 10%) 50%, ${planet.color} 50% )`;
            
        wrapper.addEventListener('mouseenter', (e) => {
            toolTip.style.display = 'block'
        })
        wrapper.addEventListener('mouseleave', (e) => {
            toolTip.style.display = 'none'
        })
        
        newPlanet.appendChild(toolTip);
        wrapper.appendChild(newPlanet);
        solarSystem.appendChild(wrapper);
    })
}

render(planets)
// Task:
// Write a function to render 
// the planets from the planets array using JavaScript.
 
// Stretch goals:
// - 1. Show planet facts on hover
// - 2. Make one side of the planets dark (you can do this with one CSS property!)