const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    } 
}

showMenu('nav-toggle','nav-menu')

const navlink = document.querySelectorAll('.nav__link')

function linkAction(){
    //Active link
    navlink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navlink.forEach(n => n.addEventListener('click', linkAction))

var itemTemplate = '<tr><td class="store"><strong>{{storename}}</strong></td><td class="price">Rs. {{price}}</td><td class="uri"><a target="_blank" href="{{uri}}">Go to Store</a></td></tr>';
var collection = '';

function OnSuccess(data) {
    // do something with the data
    var element = '';
    for (i = 0; i < data.count ; i++) {
    element = itemTemplate.replace(/{{storename}}/g, data.data[i].Seller_Name);
    element = element.replace(/{{price}}/g, data.data[i].Best_Price);
    element = element.replace(/{{uri}}/g, data.data[i].Uri);
    collection += element;    
    }
    $('#price-list').html(collection);
    
}
$.ajax({
    type: "GET",
    url: "http://www.pricetree.com/dev/api.ashx?pricetreeId=4334&apikey=7770AD31-382F-4D32-8C36-3743C0271699&v=1",
    dataType: "json",
    success: OnSuccess
});