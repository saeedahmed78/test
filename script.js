let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let d = new Date();
function initialize(){
        // let d = new Date();
        $.ajax({
            url: "https://techkaro-test.herokuapp.com/api/v1/getdata?lang=en",
            success: function(data){
            console.log(data);
        document.querySelector(".main-content").innerHTML = `
       
          <div class="left">
            <div class="button-tech">
            <button class="button-tag">What's new Techkaro?</button>
            </div>
            <div class="text-left">
                <div class="bg-img" style="background-image: url(${data.imageURL})"></div>
                <span class="date">${months[d.getMonth()]}${d.getDate()},${d.getFullYear()} - ${d.getHours()} ${d.getMinutes()}</span>
                <span class="by">by Techkaro Community</span>
                <hr>
                <h2>${data.info.heading}</h2>
                <p>${data.info.description}</p>
            </div>    
        </div>

        <div class="right">
            <div class="button-tech">
                <button class="button-tag">New to techkaro</button>
            </div>

            <div class="text-right">
                <h2>${data.sale.heading}</h2>
                <p>${data.sale.description}</p>
            </div>

        </div>
           `;
}
})
}
initialize();

function changeLanguage(languageCode){
    $.ajax({
        url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=${languageCode}`,
        success: function(data){
        console.log(data);
        document.querySelector(".items").innerHTML = `
        <a class="nav-item items-child">${data.menuOptions[0]}</a>
        <a class="nav-item items-child">${data.menuOptions[1]}</a>
        <a class="nav-item items-child">${data.menuOptions[2]}</a>
        <a class="nav-item items-child">${data.menuOptions[3]}</a>
        `
    document.querySelector(".main-content").innerHTML = `
    
      <div class="left">
        <div class="button-tech">
        <button class="button-tag">What's new Techkaro?</button>
        </div>
        <div class="text-left">
            <div class="bg-img" style="background-image: url(${data.imageURL})"></div>
            <span class="date">${months[d.getMonth()]}${d.getDate()},${d.getFullYear()} - ${d.getHours()} ${d.getMinutes()}</span>
            <span class="by">by Techkaro Community</span>
            <hr>
            <h2>${data.info.heading}</h2>
            <p>${data.info.description}</p>
        </div>    
    </div>

    <div class="right">
        <div class="button-tech">
            <button class="button-tag">New to techkaro</button>
        </div>

        <div class="text-right">
            <h2>${data.sale.heading}</h2>
            <p>${data.sale.description}</p>
        </div>

    </div>
       `;
}
})
}