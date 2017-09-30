

function updateSortBy () { // function updating queryEventbrite based on sortby
    var newSort = "&sort_by=" + sortby;
    queryEventbrite = queryEventbrite + newSort;
    getEvents();
};

function hideEventPages() { // function hiding eventPages
    for (k=0; k < allSearchResults.length; k++){
        $("#event" + k).hide(); // WHY USING "K" --> Will using the index work , shoudl just use +1?
        $(".dropdowns").show();
        $("#searchResults").show();
    };
};
   
var token = "DNOQE2ODIDZCCHZJTBUS"; // setting token value
// variable defining default query
var defaultQuery = "https://www.eventbriteapi.com/v3/events/search/?token=" + token + "&categories=" + categories + "&location.address=" + address + "&location.within=" + locationWithin + "&sort_by=" + sortby + "&expand=venue";

var queryEventbrite = defaultQuery; // setting query url

// defining function to perform AJAX call

function getEvents () {
$("#eventPage").empty(); // empties eventPage to avoid duplicating data after each search
$("#searchResults").empty(); // empties searchResults to avoid duplicating data after each search
allSearchResults = []; // empties array to avoid duplicating data after each search









    var pageLocation = $("#displayLocation").text();
    pageLocation = $("#displayLocation").empty(); //clearing the value - prevent bug
    pageLocation = venueAddress;
    $("#displayLocation").append(pageLocation)

    var pageDate = $("#displayDate").html();
    pageDate = = $("#displayDate").empty();
    pageDate = moment().format("MM DD YY");