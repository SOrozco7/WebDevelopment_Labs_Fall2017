function PropertyObject(myTitle, 
                        myStatus,
                        myPrice,
                        myAddress,
                        myCity,
                        myState,
                        myCountry,
                        myZipCode,
                        myRooms,
                        myBathrooms,
                        myPropertyType,
                        myYearBuilt,
                        myArea,
                        myPhotoUrl,
                        myDescription) {
    
    this.title = myTitle;
    this.status = myStatus;
    this.price = myPrice;
    this.address = myAddress;
    this.city = myCity;
    this.state = myState;
    this.country = myCountry;
    this.zipcode = myZipCode;
    this.rooms = myRooms;
    this.bathrooms = myBathrooms;
    this.propertyType = myPropertyType;
    this.yearBuilt = myYearBuilt;
    this.area = myArea;
    this.description = myDescription;
    this.photourl = myPhotoUrl;
    this.token = sessionStorage.token;

    this.toJsonString = function () { return JSON.stringify(this); };
};

function addProperty()
{
	try
    {
        alert("token : " + sessionStorage.token);

        var myData = new PropertyObject($("#title").val(),
                                        $("#status").val(),
                                        $("#price").val(),
                                        $("#address").val(),
                                        $("#city").val(),
                                        $("#state").val(),
                                        $("#country").val(),
                                        $("#zipcode").val(),
                                        $("#rooms").val(),
                                        $("#bathrooms").val(),
                                        $("#propertyType").val(),
                                        $("#yearBuilt").val(),
                                        $("#area").val(),
                                        $("#description").val(),
                                        $("#photourl").val());
        
        alert(myData.toJsonString());

        jQuery.ajax({

            type: "POST",
            // url: "https://MI_DOMINIO/_ah/api/property_api/v1/property/insert //Use this when the website is live
            url: "http://localhost:8080/_ah/api/property_api/v1/property/insert",
            data: myData.toJsonString(),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                    // do something
                    alert (response.code + " " + response.message);
            },
        
            error: function (error) {            
                    // error handler
                    alert("error :" + error.message)
            }
        });
    }
    catch(error)
    {
        alert(error);
    }
}

function TokenObject() {
    
    this.tokenint = sessionStorage.token;
    this.toJsonString = function () { return JSON.stringify(this); };
};

function getPropertyList()
{
    try
    {
        //alert("token : " + sessionStorage.token);
        var myData = new TokenObject();
        alert(myData.toJsonString());

        jQuery.ajax({
            type: "POST",
            url: "http://localhost:8080/_ah/api/property_api/v1/property/list",
            data: myData.toJsonString(),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                // do something
                alert (response.data);
            },
       
            error: function (error) {            
                // error handler
                alert("error :" + error.message)
            }
        });
   }
   catch(error)
   {
        alert(error);
   }

}