
const form = document.getElementById("form")
const tripName = document.getElementById("tripName")
const tripPrice = document.getElementById("tripPrice")
const tripLocation = document.getElementById("tripLocation")
const tripOverview = document.getElementById("tripOverview")
const tripDetails = document.getElementById("tripDetails")
const tripCosts = document.getElementById("tripCosts")
const tripCon = document.getElementById("tripCon")
const singleFile = document.getElementById("singleFile")
const multipleFile = document.getElementById("multipleFile")

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    let tripNameValue = tripName.value.trim()
    let tripPriceValue = tripPrice.value.trim()
    let tripLocationValue = tripLocation.value.trim()
    let tripOverviewValue = tripOverview.value.trim()
    let tripDetailsValue = tripDetails.value.trim()
    let tripCostsValue = tripCosts.value.trim()
    let tripConValue = tripCon.value
    let singleFileValue = singleFile.files[0]
    let multipleFileValue = multipleFile.files

    if(!tripNameValue || !tripPriceValue || !tripLocationValue || !tripOverviewValue || !tripDetailsValue || !tripCostsValue || !singleFileValue || !multipleFileValue){
        alert("*** All Field must contain data ")
        return
    }

    const formData = new FormData();

    formData.append('tripName', tripNameValue);
    formData.append('tripPrice', tripPriceValue);
    formData.append('tripLocation', tripLocationValue);
    formData.append('tripOverview', tripOverviewValue);
    formData.append('tripDetails', tripDetailsValue);
    formData.append('tripCosts', tripCostsValue);
    formData.append('tripCon', tripConValue);
    formData.append('singleFile', singleFileValue);
    for (let file of multipleFileValue) {
        formData.append('multipleFile', file);
    }


    try {
        fetch("http://localhost:4567/admin/trip/create-trips", {
            method: "POST",
            body: formData
        })

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Success:', data);

    } catch (error) {
        console.log(error);
    }

})