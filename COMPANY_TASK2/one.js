function add(){
    let rows = " "
fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json")
    .then((response)=>{
        console.log(response)
        this.cafes.name
        this.cafes.location_id
     })
     .catch((error)=>{
         console.log(error)
     })
fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json")
    .then((response)=>{
            console.log(response)
            this.places.locality
            this.places.postal_code
            this.places.lat
            this.places.long
    })
     .catch((error)=>{
         console.log(error)
     })
document.getElementById("id").innerHTML = rows
}