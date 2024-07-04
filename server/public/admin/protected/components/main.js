
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
const wrapper = document.querySelector(".wrapper")

let element = document.createElement("div")
element.innerHTML = `
    <!-- Sidebar -->
      <div class="sidebar" data-background-color="dark">
        <div class="sidebar-logo">
          <!-- Logo Header -->
          <div class="logo-header" data-background-color="dark">
            <a href="../index.html" class="logo" style="color: #fff;">
              <h2>Traveler</h2>
            </a>
            <div class="nav-toggle">
              <button class="btn btn-toggle toggle-sidebar">
                <i class="gg-menu-right"></i>
              </button>
              <button class="btn btn-toggle sidenav-toggler">
                <i class="gg-menu-left"></i>
              </button>
            </div>
            <button class="topbar-toggler more">
              <i class="gg-more-vertical-alt"></i>
            </button>
          </div>
          <!-- End Logo Header -->
        </div>

        <div class="sidebar-wrapper scrollbar scrollbar-inner">
          <div class="sidebar-content">
            <ul class="nav nav-secondary">
              <li class="nav-item">
                <a data-bs-toggle="collapse" href="#sidebarLayouts">
                  <i class="fas fa-th-list"></i>
                  <p>Trips Management</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="sidebarLayouts">
                  <ul class="nav nav-collapse">
                    <li>
                      <a href="./createTrips.html">
                        <span class="sub-item">Create Trips</span>
                      </a>
                    </li>
                    <li>
                      <a href="./listsTrips.html">
                        <span class="sub-item">List Trips</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a data-bs-toggle="collapse" href="#forms">
                  <i class="fas fa-pen-square"></i>
                  <p>Hotel Management</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="forms">
                  <ul class="nav nav-collapse">
                    <li>
                      <a href="./createHotels.html">
                        <span class="sub-item">Create Hotels</span>
                      </a>
                    </li>
                    <li>
                      <a href="./listHotels.html">
                        <span class="sub-item">List Hotels</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a data-bs-toggle="collapse" href="#tables">
                  <i class="fas fa-table"></i>
                  <p>Transport Management</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="tables">
                  <ul class="nav nav-collapse">
                    <li>
                      <a href="./createTransport.html">
                        <span class="sub-item">Create Transport</span>
                      </a>
                    </li>
                    <li>
                      <a href="./listTranport.html">
                        <span class="sub-item">List Transport</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a data-bs-toggle="collapse" href="#maps">
                  <i class="fas fa-map-marker-alt"></i>
                  <p>Event Management</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="maps">
                  <ul class="nav nav-collapse">
                    <li>
                      <a href="./createEvent.html">
                        <span class="sub-item">Create Events</span>
                      </a>
                    </li>
                    <li>
                      <a href="./listEvent.html">
                        <span class="sub-item">List Events</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a data-bs-toggle="collapse" href="#charts">
                  <i class="far fa-chart-bar"></i>
                  <p>Users Management</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="charts">
                  <ul class="nav nav-collapse">
                    <li>
                      <a href="./listUser.html">
                        <span class="sub-item">List Users</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a href="widgets.html">
                  <i class="fas fa-desktop"></i>
                  <p>Payment Management</p>
                  <span class="badge badge-success">4</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- End Sidebar -->
`
wrapper.prepend(element)

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